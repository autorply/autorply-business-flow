
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const assistantId = Deno.env.get('ASSISTANT_ID');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    console.log('Received message:', message);
    console.log('Using OpenAI API Key:', openAIApiKey ? 'Set' : 'Not set');
    console.log('Using Assistant ID:', assistantId ? assistantId : 'Not set');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // If we have an assistant ID, use the Assistants API
    if (assistantId) {
      try {
        console.log('Using Assistants API...');
        
        // Create a thread
        const threadResponse = await fetch('https://api.openai.com/v1/threads', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2'
          },
          body: JSON.stringify({})
        });

        if (!threadResponse.ok) {
          const errorData = await threadResponse.json();
          console.error('Thread creation failed:', errorData);
          throw new Error('Failed to create thread');
        }

        const thread = await threadResponse.json();
        console.log('Thread created:', thread.id);

        // Add message to thread
        const messageResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2'
          },
          body: JSON.stringify({
            role: 'user',
            content: message
          })
        });

        if (!messageResponse.ok) {
          const errorData = await messageResponse.json();
          console.error('Message addition failed:', errorData);
          throw new Error('Failed to add message to thread');
        }

        console.log('Message added to thread');

        // Run the assistant
        const runResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2'
          },
          body: JSON.stringify({
            assistant_id: assistantId
          })
        });

        if (!runResponse.ok) {
          const errorData = await runResponse.json();
          console.error('Run creation failed:', errorData);
          throw new Error('Failed to run assistant');
        }

        const run = await runResponse.json();
        console.log('Run started:', run.id);

        // Poll for completion with timeout
        let runStatus = run;
        let attempts = 0;
        const maxAttempts = 30; // 30 seconds timeout
        
        while (runStatus.status !== 'completed' && runStatus.status !== 'failed' && attempts < maxAttempts) {
          console.log(`Polling attempt ${attempts + 1}, status: ${runStatus.status}`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const statusResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
            headers: {
              'Authorization': `Bearer ${openAIApiKey}`,
              'OpenAI-Beta': 'assistants=v2'
            }
          });
          
          if (!statusResponse.ok) {
            const errorData = await statusResponse.json();
            console.error('Status check failed:', errorData);
            throw new Error('Failed to check run status');
          }
          
          runStatus = await statusResponse.json();
          attempts++;
        }

        if (runStatus.status === 'failed') {
          console.error('Assistant run failed:', runStatus);
          throw new Error('Assistant run failed');
        }

        if (attempts >= maxAttempts) {
          console.error('Assistant run timed out');
          throw new Error('Assistant run timed out');
        }

        console.log('Run completed successfully');

        // Get messages
        const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });

        if (!messagesResponse.ok) {
          const errorData = await messagesResponse.json();
          console.error('Messages retrieval failed:', errorData);
          throw new Error('Failed to get messages');
        }

        const messagesData = await messagesResponse.json();
        const lastMessage = messagesData.data[0];
        
        console.log('Response received:', lastMessage.content[0].text.value);
        
        return new Response(JSON.stringify({ 
          reply: lastMessage.content[0].text.value 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Assistants API error:', error);
        // Fall back to regular chat completion
      }
    }

    // Use regular chat completion (fallback or when no assistant ID)
    console.log('Using chat completion fallback...');
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: 'أنت مساعد ذكي لخدمة العملاء في شركة اوتوربلاي التي تقدم خدمات WhatsApp API. أجب بالعربية بطريقة مهنية ومفيدة.' 
          },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Chat completion failed:', errorData);
      throw new Error('OpenAI API request failed');
    }

    const data = await response.json();
    console.log('Fallback response received:', data.choices[0].message.content);
    
    return new Response(JSON.stringify({ 
      reply: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-openai function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      reply: 'عذراً، حدث خطأ في النظام. يرجى المحاولة مرة أخرى.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});


import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OpenAI key');
const assistantId = Deno.env.get('Assistant ID');

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

    // Use Assistant API if Assistant ID is provided, otherwise use regular chat completion
    let response;
    
    if (assistantId) {
      // Create thread
      const threadResponse = await fetch('https://api.openai.com/v1/threads', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2'
        },
        body: JSON.stringify({})
      });

      const thread = await threadResponse.json();
      console.log('Created thread:', thread.id);

      // Add message to thread
      await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
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

      // Run assistant
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

      const run = await runResponse.json();
      console.log('Started run:', run.id);

      // Poll for completion
      let runStatus = run;
      while (runStatus.status === 'queued' || runStatus.status === 'in_progress') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const statusResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/runs/${run.id}`, {
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });
        
        runStatus = await statusResponse.json();
        console.log('Run status:', runStatus.status);
      }

      if (runStatus.status === 'completed') {
        // Get messages
        const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${thread.id}/messages`, {
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'OpenAI-Beta': 'assistants=v2'
          }
        });

        const messages = await messagesResponse.json();
        const assistantMessage = messages.data.find((msg: any) => msg.role === 'assistant');
        
        if (assistantMessage && assistantMessage.content[0]) {
          response = { reply: assistantMessage.content[0].text.value };
        } else {
          throw new Error('No assistant response found');
        }
      } else {
        throw new Error(`Assistant run failed with status: ${runStatus.status}`);
      }
    } else {
      // Use regular chat completion
      response = await fetch('https://api.openai.com/v1/chat/completions', {
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

      const data = await response.json();
      console.log('OpenAI response:', data);

      if (data.error) {
        throw new Error(data.error.message);
      }

      response = { reply: data.choices[0].message.content };
    }

    return new Response(JSON.stringify(response), {
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

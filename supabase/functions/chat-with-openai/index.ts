
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
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

    // Use regular chat completion with streaming
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
        temperature: 0.7,
        stream: true
      }),
    });

    console.log('OpenAI streaming response initiated');

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(errorData.error?.message || 'OpenAI API error');
    }

    // Return streaming response
    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
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

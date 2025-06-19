
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OpenAI key');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Generating multi-channel interface image...');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-image-1',
        prompt: `Create a modern customer service dashboard interface showing multiple messaging channels in Arabic. The interface should include:

1. Desktop view (left side): A clean chat management interface with Arabic text showing:
   - Title "المحادثات" (Chats) at the top
   - Sidebar with navigation icons
   - Chat list showing customer conversations with Arabic names like "أحمد", "فاطمة", "خالد", "نورا", "محمد"
   - Each chat showing preview of Arabic messages like "مرحباً، هل هذا المنتج متوفر؟", "متى سيتم التوصيل؟", "أريد تعديل طلبي"
   - Status indicators (online/offline) next to each chat
   - Clean, professional design with blue accent colors

2. Mobile view (right side): An iPhone showing the same interface optimized for mobile with:
   - Header showing "أوتوربلاي" or "SaleSmartly" 
   - Tabs for "غير مخصص" (Unassigned) and "روبوت" (Robot)
   - List of customer chats with Arabic names
   - Platform icons showing WhatsApp, Facebook Messenger, Instagram, Telegram
   - Modern iOS interface design
   - Arabic RTL text alignment

The overall design should be clean, modern, and professional, showing a unified multi-channel customer service platform. Use blue and white color scheme. Make it look like a real software interface screenshot.`,
        n: 1,
        size: "1536x1024",
        quality: "high",
        output_format: "png"
      }),
    });

    const data = await response.json();
    console.log('Image generation response:', data);

    if (data.error) {
      throw new Error(data.error.message);
    }

    // gpt-image-1 returns base64 data directly
    const imageData = data.data[0].b64_json;

    return new Response(JSON.stringify({ 
      success: true, 
      imageData: `data:image/png;base64,${imageData}` 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

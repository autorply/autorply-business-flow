
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const AUTORPLY_API_URL = "https://live.autorply.com/api/v1/whatsapp/send";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, phone_number } = await req.json();

    if (!message || !phone_number) {
      return new Response(JSON.stringify({ error: "Message and phone_number are required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    const apiKey = Deno.env.get("AUTORPLY_API_KEY");
    const phoneNumberId = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID");

    if (!apiKey || !phoneNumberId) {
      return new Response(JSON.stringify({ error: "API key or Phone Number ID not configured" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      });
    }

    const formData = new URLSearchParams();
    formData.append("apiToken", apiKey);
    formData.append("phone_number_id", phoneNumberId);
    formData.append("message", message);
    formData.append("phone_number", phone_number);

    const response = await fetch(AUTORPLY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const responseData = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify(responseData), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      console.error("Autorply API error:", responseData);
      return new Response(JSON.stringify({ error: responseData.message || "Failed to send message" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: response.status,
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  timestamp?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("🚀🚀🚀 USING FIXED V2 FUNCTION - CACHE SOLVED! 🚀🚀🚀");

  if (req.method === "OPTIONS") {
    return new Response("ok", {
      status: 200,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("📥 formData:", formData);

    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "الرجاء ملء جميع الحقول المطلوبة" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();

    const emailContent = `رسالة جديدة من موقع Autorply

تفاصيل المرسل:
الاسم: ${cleanName}
البريد الإلكتروني: ${cleanEmail}
رقم الهاتف: ${phone || "غير محدد"}
الموضوع: ${subject || "غير محدد"}

الرسالة:
${cleanMessage}

---
تم إرسال هذه الرسالة من موقع Autorply
وقت الإرسال: ${new Date().toLocaleString("ar-SA")}
`;

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@autorply.sa",
      subject: `رسالة جديدة من ${cleanName}`,
      text: emailContent,
    });

    console.log("✅ Resend API Response:", emailResponse);

    if (emailResponse.error) {
      throw new Error(emailResponse.error.message || "Unknown error from Resend");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
        emailId: emailResponse.data?.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("❌ Error:", error.message);

    return new Response(
      JSON.stringify({
        error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

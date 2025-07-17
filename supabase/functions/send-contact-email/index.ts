import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form data:", formData);

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

    console.log("Cleaned form data:", { name: cleanName, email: cleanEmail, phone, subject });

    const emailContent = [
      "رسالة جديدة من نموذج التواصل",
      "",
      "تفاصيل المرسل:",
      `الاسم: ${cleanName}`,
      `البريد الإلكتروني: ${cleanEmail}`,
      phone ? `رقم الهاتف: ${phone}` : "",
      subject ? `الموضوع: ${subject}` : "",
      "",
      "الرسالة:",
      cleanMessage,
      "",
      "---",
      "تم إرسال هذه الرسالة من موقع Autorply",
      `وقت الإرسال: ${new Date().toLocaleString('ar-SA')}`
    ].filter(line => line !== "").join("\n");

    const emailData = {
      from: "Autorply Contact <info@autorply.com>",
      to: "info@autorply.sa",
      subject: "رسالة جديدة من نموذج التواصل",
      text: emailContent,
    };

    console.log("Email data being sent to Resend:", JSON.stringify(emailData, null, 2));

    const emailResponse = await resend.emails.send(emailData);

    console.log("Resend API Response:", JSON.stringify(emailResponse, null, 2));
    
    if (emailResponse.error) {
      console.error("Resend API Error Details:", JSON.stringify(emailResponse.error, null, 2));
      throw new Error(`Resend API Error: ${emailResponse.error.message || 'Unknown error'}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

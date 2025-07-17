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
  console.log("=== بداية معالجة طلب إرسال البريد الإلكتروني ===");
  
  if (req.method === "OPTIONS") {
    console.log("طلب OPTIONS - إرجاع CORS headers");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log("طريقة غير مسموحة:", req.method);
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    console.log("قراءة بيانات الطلب...");
    const formData: ContactFormData = await req.json();
    console.log("البيانات المستلمة:", JSON.stringify(formData, null, 2));

    const { name, email, phone, subject, message } = formData;

    // التحقق من البيانات المطلوبة
    if (!name || !email || !message) {
      console.log("بيانات مفقودة - الاسم أو الإيميل أو الرسالة");
      return new Response(
        JSON.stringify({ error: "الرجاء ملء جميع الحقول المطلوبة" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // تنظيف البيانات
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message.trim();
    console.log("البيانات بعد التنظيف:", { 
      name: cleanName, 
      email: cleanEmail, 
      phone: phone || "غير محدد", 
      subject: subject || "غير محدد" 
    });

    // إنشاء محتوى البريد المبسط
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
وقت الإرسال: ${new Date().toLocaleString('ar-SA')}`;

    // بيانات البريد المبسطة - استخدام البريد الافتراضي من Resend
    const emailData = {
      from: "onboarding@resend.dev", // البريد الافتراضي المُفعّل من Resend
      to: "info@autorply.sa",
      subject: `رسالة جديدة من ${cleanName}`,
      text: emailContent,
    };

    console.log("بيانات البريد التي سيتم إرسالها:", JSON.stringify(emailData, null, 2));
    console.log("محاولة إرسال البريد عبر Resend...");

    const emailResponse = await resend.emails.send(emailData);

    console.log("استجابة Resend API:", JSON.stringify(emailResponse, null, 2));
    
    if (emailResponse.error) {
      console.error("خطأ في Resend API:", JSON.stringify(emailResponse.error, null, 2));
      throw new Error(`Resend API Error: ${emailResponse.error.message || 'خطأ غير معروف'}`);
    }

    console.log("تم إرسال البريد بنجاح! معرف البريد:", emailResponse.data?.id);

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
    console.error("=== خطأ في دالة إرسال البريد ===");
    console.error("تفاصيل الخطأ:", error);
    console.error("رسالة الخطأ:", error.message);
    console.error("نوع الخطأ:", error.name);
    
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
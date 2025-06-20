
interface WhatsAppFormData {
  name: string;
  email: string;
  phone: string;
  rating?: number;
}

export const sendWhatsAppMessage = async (formData: WhatsAppFormData): Promise<boolean> => {
  try {
    // Get environment variables
    const apiKey = process.env.AUTORPLY_API_KEY;
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    
    if (!apiKey || !phoneNumberId) {
      console.error('Missing environment variables');
      return false;
    }

    const message = `📋 استبيان جديد:
    
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
${formData.rating ? `التقييم: ${formData.rating}/5 ⭐` : ''}

تم الإرسال عبر Autorply`;

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('apiToken', apiKey);
    formDataToSend.append('phone_number_id', phoneNumberId);
    formDataToSend.append('message', message);
    formDataToSend.append('phone_number', formData.phone);

    const response = await fetch('https://live.autorply.com/api/v1/whatsapp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataToSend.toString(),
    });

    const responseData = await response.json();
    console.log('WhatsApp API Response:', responseData);

    return response.ok;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return false;
  }
};

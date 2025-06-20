
import { useState } from 'react';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

interface FormData {
  name: string;
  email: string;
  phone: string;
  rating: number;
}

export const useWhatsAppForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    rating: 5
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await sendWhatsAppMessage(formData);
      
      if (success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', rating: 5 });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    isSuccess,
    handleInputChange,
    handleSubmit
  };
};

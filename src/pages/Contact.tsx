
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://thyzkqqfkgxudynxfpay.supabase.co/functions/v1/send-contact-email-v2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeXprcXFma2d4dWR5bnhmcGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTc4NjMsImV4cCI6MjA2NTU5Mzg2M30.l1CmnxnEVu4CkMQNQUhhkiyb2kCVXXVSFuIe99FAoFk`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'فشل في إرسال الرسالة');
      }
      
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: result.message || "شكراً لك! سنتواصل معك قريباً.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        variant: "destructive",
        title: "خطأ في الإرسال",
        description: error.message || "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              تواصل معنا
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نحن هنا لمساعدتك في تحقيق أهدافك وتطوير أعمالك
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">أرسل لنا رسالة</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الجوال (اختياري)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="أدخل رقم جوالك"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      الموضوع *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="موضوع رسالتك"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        أرسل الآن
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">معلومات التواصل</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">البريد الإلكتروني</h3>
                        <p className="text-gray-600">info@autorply.sa</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">واتساب</h3>
                        <p className="text-gray-600">+966594959443</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">الموقع</h3>
                        <p className="text-gray-600">المملكة العربية السعودية</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Note */}
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">انضم إلى فريقنا</h3>
                  <p className="text-gray-600 leading-relaxed">
                    هل ترغب بالانضمام إلى فريق AutoRply؟ أرسل لنا بياناتك وسيرتك الذاتية وسنتواصل معك عند توفر فرصة مناسبة.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

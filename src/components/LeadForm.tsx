
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم الإرسال بنجاح!",
        description: "سيتواصل معك أحد خبرائنا قريباً",
      });
      setFormData({ name: '', phone: '', product: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700">هل أنت مهتم؟</h2>
          <p className="text-gray-600 mt-2">شاركنا بياناتك وسيتواصل معك أحد خبرائنا قريباً لشرح التفاصيل ومساعدتك في الانطلاق.</p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="الاسم بالكامل" 
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="رقم الهاتف" 
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <select 
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">اختر المنتج</option>
            <option value="whatsapp-api">WhatsApp API</option>
            <option value="campaigns">باقة الحملات</option>
            <option value="integration">التكامل مع موقع</option>
          </select>
          <motion.button 
            type="submit" 
            className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-full px-6 py-2 flex items-center justify-center disabled:opacity-50"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'جاري الإرسال...' : 'ابدأ الآن ←'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;

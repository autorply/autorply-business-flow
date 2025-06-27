
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Send } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'عن أوتوربلاي',
      links: ['من نحن', 'رؤيتنا', 'قصة النجاح']
    },
    {
      title: 'خدماتنا',
      links: ['WhatsApp API', 'الشات بوت', 'الحملات التسويقية']
    },
    {
      title: 'الدعم الفني',
      links: ['مركز المساعدة', 'دليل المستخدم', 'الدعم المباشر']
    },
    {
      title: 'التكاملات',
      links: ['Shopify', 'WooCommerce', 'Salesforce']
    },
    {
      title: 'الأسئلة الشائعة',
      links: ['الأسئلة العامة', 'التقنية', 'الفوترة']
    },
    {
      title: 'الأسعار والباقات',
      links: ['الباقة المجانية', 'الباقة المتقدمة', 'الباقة المؤسسية']
    },
    {
      title: 'سياسات الاستخدام',
      links: ['شروط الخدمة', 'سياسة الاستخدام', 'القواعد العامة']
    },
    {
      title: 'الخصوصية والأمان',
      links: ['سياسة الخصوصية', 'الأمان', 'حماية البيانات']
    },
    {
      title: 'شركاؤنا',
      links: ['Meta Partner', 'شركاء التقنية', 'شركاء الأعمال']
    },
    {
      title: 'فرص العمل',
      links: ['الوظائف المتاحة', 'التدريب', 'بيئة العمل']
    },
    {
      title: 'المستندات API',
      links: ['دليل المطور', 'أمثلة الكود', 'مراجع API']
    },
    {
      title: 'التواصل معنا',
      links: ['الاتصال بنا', 'فروعنا', 'خدمة العملاء']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-32">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Email - Moved to top and made more prominent */}
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-blue-400 mb-2">info@autorply.sa</p>
          <p className="text-gray-400">تواصل معنا للحصول على استشارة مجانية</p>
        </div>

        {/* Social Media Icons - Modern 2025 style */}
        <div className="flex justify-center gap-8 mb-12">
          <motion.a
            href="#"
            className="bg-gray-800 p-4 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="#"
            className="bg-gray-800 p-4 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <Facebook className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="#"
            className="bg-gray-800 p-4 rounded-2xl hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <Instagram className="w-7 h-7" />
          </motion.a>
          <motion.a
            href="#"
            className="bg-gray-800 p-4 rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
          >
            <Send className="w-7 h-7" />
          </motion.a>
        </div>

        {/* Partner Logos - Only images, no buttons */}
        <div className="bg-gray-800 py-8 rounded-lg mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" alt="Meta Partner" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src="/uploads/14caefca-39ff-4152-9289-55b52c714582.png" alt="منشآت" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/uploads/ebef3426-c087-41c9-9726-3423f1b8d47f.png" alt="STC" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4 text-blue-400">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright with random logo */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة لاوتوربلاي</p>
            <span className="text-gray-400">By</span>
            <img 
              src="/uploads/328ed69d-c8c4-40cb-883a-6752c3aacffa.png" 
              alt="Partner Logo" 
              className="h-6 w-auto opacity-70"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

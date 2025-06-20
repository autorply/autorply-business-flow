
import { motion } from 'framer-motion';

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
      {/* Email Section */}
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg font-semibold">للتواصل: info@autorply.sa</p>
        </div>
      </div>

      {/* Partner Badges */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" alt="Meta Partner" className="h-12 w-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img src="/lovable-uploads/14caefca-39ff-4152-9289-55b52c714582.png" alt="منشآت" className="h-12 w-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/lovable-uploads/328ed69d-c8c4-40cb-883a-6752c3aacffa.png" alt="رؤية 2030" className="h-12 w-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold text-center">
                WhatsApp Business<br />Solution Provider
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold text-center">
                Solutions by STC
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
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
        
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة لاوتوربلاي</p>
            <span className="text-gray-900">By</span>
            <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
              Solutions by STC
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

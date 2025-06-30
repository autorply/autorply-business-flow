
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Send } from 'lucide-react';

const footerSections = [
  {
    title: 'عن اوتوربلاي',
    links: [
      { label: 'من نحن', href: '/about-us' },
      { label: 'رؤيتنا', href: '/vision' },
      { label: 'قصة النجاح', href: '/success-story' }
    ]
  },
  {
    title: 'خدماتنا',
    links: [
      { label: 'الخدمات', href: '/services' },
      { label: 'الشات بوت', href: '/services' },
      { label: 'الحملات التسويقية', href: '/campaign' }
    ]
  },
  {
    title: 'الدعم الفني',
    links: [
      { label: 'مركز المساعدة', href: 'https://help.autorply.sa/' },
      { label: 'دليل المستخدم', href: 'https://help.autorply.sa/' },
      { label: 'الدعم المباشر', href: 'https://wa.me/966594959443?text=مركز%20المساعدة' }
    ]
  },
  {
    title: 'التكاملات',
    links: [
      { label: 'Shopify', href: '/tech-partners' },
      { label: 'WooCommerce', href: '/tech-partners' },
      { label: 'Salesforce', href: '/tech-partners' }
    ]
  },
  {
    title: 'الأسئلة الشائعة',
    links: [
      { label: 'الأسئلة العامة', href: '/faq' },
      { label: 'التقنية', href: '/technology' },
      { label: 'الفوترة', href: '/billing' }
    ]
  },
  {
    title: 'الأسعار والباقات',
    links: [
      { label: 'الباقة المجانية', href: '/pricing' },
      { label: 'الباقة المتقدمة', href: '/pricing' },
      { label: 'الباقة الإحترافية', href: '/pricing' }
    ]
  },
  {
    title: 'سياسات الاستخدام',
    links: [
      { label: 'شروط الخدمة', href: '/terms-of-service' },
      { label: 'سياسة الاستخدام', href: '/terms-of-service' },
      { label: 'القواعد العامة', href: '/terms-of-service' }
    ]
  },
  {
    title: 'الخصوصية والأمان',
    links: [
      { label: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'الأمان', href: '/technology' },
      { label: 'حماية البيانات', href: '/privacy-policy' }
    ]
  },
  {
    title: 'شركاؤنا',
    links: [
      { label: 'Meta Partner', href: 'https://www.facebook.com/business/partner-directory/search?solution_type=messaging', external: true },
      { label: 'شركاء التقنية', href: '/tech-partners' },
      { label: 'شركاء الأعمال', href: '/business-partners' }
    ]
  },
  {
    title: 'فرص العمل',
    links: [
      { label: 'الوظائف المتاحة', href: '/contact' },
      { label: 'التدريب', href: '/contact' },
      { label: 'بيئة العمل', href: '/contact' }
    ]
  },
  {
    title: 'المستندات API',
    links: [
      { label: 'دليل المطور', href: 'https://live.autorply.com/api/developer/console' },
      { label: 'أمثلة الكود', href: '/technology' },
      { label: 'مراجع API', href: 'https://live.autorply.com/api/developer/console' }
    ]
  },
  {
    title: 'التواصل معنا',
    links: [
      { label: 'الاتصال بنا', href: '/contact' },
      { label: 'خدمة العملاء', href: 'https://wa.me/966594959443?text=خدمة%20العملاء' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold text-blue-400 mb-2">info@autorply.sa</p>
          <p className="text-gray-400">تواصل معنا للحصول على استشارة مجانية</p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {[MessageCircle, Facebook, Instagram, Send].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="bg-gray-800 p-4 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <Icon className="w-7 h-7" />
            </motion.a>
          ))}
        </div>

        <div className="bg-gray-800 py-8 rounded-lg mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {["/uploads/Meta_Business_Partners_inline_lockup_negative_primary_RGB.svg", "/uploads/m_Logo.png", "/uploads/2030.svg"].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={src} alt="partner logo" className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

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
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} className="hover:text-blue-400 transition-colors">
                        {link.label}
                      </a>
                    )}
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
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة لـ اوتوربلاي</p>
            <img 
              src="/uploads/solutions_stc.svg" 
              alt="أوتوربلاي" 
              className="h-6 w-auto opacity-70"
            />
            <span className="text-[#181c24]">By</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

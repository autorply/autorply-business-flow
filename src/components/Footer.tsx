
import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'عن اوتوربلاي',
    links: [
      { label: 'من نحن', href: '/about-us' },
      { label: 'رؤيتنا', href: '/vision' },
      { label: 'قصة النجاح', href: '/success-story' },
      { label: 'فريق العمل', href: '/about-us' }
    ]
  },
  {
    title: 'خدماتنا الرئيسية',
    links: [
      { label: 'واتساب الأعمال', href: '/services' },
      { label: 'الردود الآلية', href: '/services' },
      { label: 'الحملات التسويقية', href: '/campaign' },
      { label: 'خدمة العملاء', href: '/services' }
    ]
  },
  {
    title: 'الدعم والمساعدة',
    links: [
      { label: 'مركز المساعدة', href: 'https://help.autorply.sa/' },
      { label: 'الأسئلة الشائعة', href: '/faq' },
      { label: 'دليل المستخدم', href: 'https://help.autorply.sa/' },
      { label: 'الدعم المباشر', href: 'https://wa.me/966594959443?text=مركز%20المساعدة' }
    ]
  },
  {
    title: 'التكاملات والتقنية',
    links: [
      { label: 'التقنيات المستخدمة', href: '/technology' },
      { label: 'شركاء التقنية', href: '/tech-partners' },
      { label: 'API للمطورين', href: 'https://live.autorply.com/api/developer/console' },
      { label: 'التكاملات المتاحة', href: '/tech-partners' }
    ]
  },
  {
    title: 'الأسعار والباقات',
    links: [
      { label: 'جميع الباقات', href: 'https://mahally.com/stores/1625912801/', external: true },
      { label: 'الباقة المجانية', href: '/pricing' },
      { label: 'الباقة المتقدمة', href: '/pricing' },
      { label: 'الباقة الإحترافية', href: '/pricing' }
    ]
  },
  {
    title: 'الفوترة والدفع',
    links: [
      { label: 'نظام الفوترة', href: '/billing' },
      { label: 'طرق الدفع', href: '/billing' },
      { label: 'الفواتير والتقارير', href: '/billing' },
      { label: 'تسعيرات واتساب', href: 'https://business.whatsapp.com/products/platform-pricing?country=Saudi%20Arabia&currency=Dollars%20(USD)&category=Marketing', external: true }
    ]
  },
  {
    title: 'الشروط والسياسات',
    links: [
      { label: 'الشروط والأحكام', href: '/terms-of-service' },
      { label: 'سياسة الخصوصية', href: '/privacy-policy' },
      { label: 'حماية البيانات', href: '/privacy-policy' },
      { label: 'اتفاقية الخدمة', href: '/terms-of-service' }
    ]
  },
  {
    title: 'شركاؤنا ومواردنا',
    links: [
      { label: 'شريك Meta المعتمد', href: 'https://www.facebook.com/business/partner-directory/search?solution_type=messaging', external: true },
      { label: 'شركاء الأعمال', href: '/business-partners' },
      { label: 'المدونة والمقالات', href: 'https://autorply.sa/blogs', external: true },
      { label: 'خريطة الموقع', href: '/sitemap' }
    ]
  },
  {
    title: 'التواصل والوظائف',
    links: [
      { label: 'تواصل معنا', href: '/contact' },
      { label: 'خدمة العملاء', href: 'https://wa.me/966594959443?text=خدمة%20العملاء' },
      { label: 'الوظائف المتاحة', href: '/contact' },
      { label: 'بيئة العمل', href: '/about-us' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section with Contact */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <img 
              src="https://autorply.sa/assets/img/logo_64.svg" 
              alt="اوتوربلاي - الصفحة الرئيسية" 
              className="w-16 h-16"
            />
          </Link>
          <p className="text-2xl font-semibold text-blue-400 mb-2">
            <a href="mailto:info@autorply.sa" className="hover:text-blue-300 transition-colors">
              info@autorply.sa
            </a>
          </p>
          <p className="text-gray-400">
            <a 
              href="https://business.whatsapp.com/products/platform-pricing?country=Saudi%20Arabia&currency=Dollars%20(USD)&category=Marketing"
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
            >
              تسعيرات واتساب الرسمية
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-8 mb-12">
          {[
            { icon: MessageCircle, href: 'https://wa.me/966594959443?text=مرحبا%20بكم', label: 'واتساب' },
            { icon: Facebook, href: '#', label: 'فيسبوك' },
            { icon: Instagram, href: '#', label: 'انستغرام' },
            { icon: Send, href: '#', label: 'تليجرام' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-gray-800 p-4 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              aria-label={social.label}
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </div>

        {/* Partners Section */}
        <div className="bg-gray-800 py-8 rounded-lg mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-blue-400 mb-2">شركاؤنا المعتمدون</h3>
            <Link to="/tech-partners" className="text-gray-400 hover:text-blue-400 transition-colors">
              تعرف على جميع شركائنا
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {[
              { src: "/uploads/Meta_Business_Partners_inline_lockup_negative_primary_RGB.svg", alt: "شريك Meta المعتمد", href: "/tech-partners" },
              { src: "/uploads/m_Logo.png", alt: "شعار الشريك", href: "/business-partners" },
              { src: "/uploads/2030.svg", alt: "رؤية 2030", href: "/vision" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={partner.href}>
                  <img 
                    src={partner.src} 
                    alt={partner.alt}
                    className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
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
                        className="hover:text-blue-400 transition-colors block py-1"
                      >
                        {link.label}
                      </a>
                    ) : link.href.startsWith('http') ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors block py-1"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="hover:text-blue-400 transition-colors block py-1"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Internal Links for SEO */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h4 className="text-lg font-bold text-blue-400 mb-4 text-center">روابط مهمة</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'الصفحة الرئيسية', href: '/' },
              { name: 'خدمات واتساب', href: '/services' },
              { name: 'باقات الأسعار', href: '/pricing' },
              { name: 'الحملات التسويقية', href: '/campaign' },
              { name: 'من نحن', href: '/about-us' },
              { name: 'تواصل معنا', href: '/contact' },
              { name: 'الأسئلة الشائعة', href: '/faq' },
              { name: 'التقنيات', href: '/technology' },
              { name: 'قصص النجاح', href: '/success-story' },
              { name: 'رؤيتنا', href: '/vision' },
              { name: 'الشركاء', href: '/tech-partners' },
              { name: 'خريطة الموقع', href: '/sitemap' }
            ].map((quickLink, index) => (
              <Link
                key={index}
                to={quickLink.href}
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-blue-400"
              >
                {quickLink.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm">
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة لـ 
              <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors"> اوتوربلاي</Link>
            </p>
            <Link to="/">
              <img 
                src="/uploads/solutions_stc.svg" 
                alt="اوتوربلاي - العودة للرئيسية" 
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>
            <span className="text-[#181c24]">By</span>
          </div>
        </motion.div>
        
        {/* Hidden iframe to trigger visit to public Meta Partner Directory profile */}
        <iframe 
          src="https://www.facebook.com/business/partner-directory/search?solution_type=messaging&ref=pd_home_hero_cta&id=8019759771417166&section=overview" 
          width="0" 
          height="0" 
          style={{border: 0, visibility: 'hidden'}} 
          loading="lazy">
        </iframe>
      </div>
    </footer>
  );
};

export default Footer;

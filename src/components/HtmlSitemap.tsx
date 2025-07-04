
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, Users, DollarSign, MessageSquare, Phone, HelpCircle, Target, Trophy, Cog, CreditCard, Building, Shield, Scale } from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: Array<{
    title: string;
    href: string;
    description?: string;
    isExternal?: boolean;
  }>;
}

const sitemapSections: SitemapSection[] = [
  {
    title: 'الصفحات الرئيسية',
    icon: <FileText className="w-5 h-5" />,
    links: [
      { title: 'الصفحة الرئيسية', href: '/', description: 'منصة واتساب الأعمال الرائدة' },
      { title: 'الخدمات', href: '/services', description: 'خدمات واتساب الأعمال المتكاملة' },
      { title: 'الأسعار والباقات', href: '/pricing', description: 'باقات تناسب جميع احتياجاتك' },
      { title: 'الحملات التسويقية', href: '/campaign', description: 'حملات ذكية وفعالة' }
    ]
  },
  {
    title: 'معلومات الشركة',
    icon: <Users className="w-5 h-5" />,
    links: [
      { title: 'من نحن', href: '/about-us', description: 'قصتنا وفريق العمل' },
      { title: 'رؤيتنا ومهمتنا', href: '/vision', description: 'رؤية اوتوربلاي للمستقبل' },
      { title: 'قصص النجاح', href: '/success-story', description: 'نجاحات عملائنا المميزة' },
      { title: 'الشركاء التقنيون', href: '/tech-partners', description: 'شركاؤنا في التقنية' },
      { title: 'شركاء الأعمال', href: '/business-partners', description: 'شراكاتنا التجارية' }
    ]
  },
  {
    title: 'الدعم والمساعدة',
    icon: <HelpCircle className="w-5 h-5" />,
    links: [
      { title: 'الأسئلة الشائعة', href: '/faq', description: 'إجابات على أهم الأسئلة' },
      { title: 'التقنيات المستخدمة', href: '/technology', description: 'تقنياتنا المتقدمة' },
      { title: 'تواصل معنا', href: '/contact', description: 'نحن هنا لمساعدتك' },
      { title: 'مركز المساعدة', href: 'https://help.autorply.sa/', description: 'دليل المستخدم والدعم', isExternal: true }
    ]
  },
  {
    title: 'الفوترة والدفع',
    icon: <CreditCard className="w-5 h-5" />,
    links: [
      { title: 'نظام الفوترة', href: '/billing', description: 'معلومات الفوترة والدفع' },
      { title: 'طرق الدفع', href: '/pricing', description: 'طرق الدفع المتاحة' }
    ]
  },
  {
    title: 'الشروط والسياسات',
    icon: <Shield className="w-5 h-5" />,
    links: [
      { title: 'سياسة الخصوصية', href: '/privacy-policy', description: 'حماية بياناتك أولويتنا' },
      { title: 'الشروط والأحكام', href: '/terms-of-service', description: 'شروط استخدام الخدمة' }
    ]
  },
  {
    title: 'الموارد الخارجية',
    icon: <Building className="w-5 h-5" />,
    links: [
      { title: 'المدونة', href: 'https://autorply.sa/blogs', description: 'مقالات ونصائح مفيدة', isExternal: true },
      { title: 'مطور API', href: 'https://live.autorply.com/api/developer/console', description: 'وثائق المطورين', isExternal: true },
      { title: 'الدعم المباشر', href: 'https://wa.me/966594959443?text=مرحبا', description: 'تحدث معنا مباشرة', isExternal: true }
    ]
  }
];

const HtmlSitemap = () => {
  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">خريطة الموقع</h1>
          <p className="text-xl text-gray-600 mb-8">جميع صفحات وأقسام موقع اوتوربلاي</p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>

              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <div className="font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                          {link.title}
                        </div>
                        {link.description && (
                          <div className="text-sm text-gray-600 mt-1">{link.description}</div>
                        )}
                      </a>
                    ) : (
                      <Link to={link.href} className="block group">
                        <div className="font-medium text-blue-600 group-hover:text-blue-800 transition-colors">
                          {link.title}
                        </div>
                        {link.description && (
                          <div className="text-sm text-gray-600 mt-1">{link.description}</div>
                        )}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional SEO Links */}
        <motion.div
          className="mt-16 bg-blue-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">روابط سريعة</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'واتساب الأعمال', href: '/services' },
              { name: 'الردود الآلية', href: '/services' },
              { name: 'الحملات التسويقية', href: '/campaign' },
              { name: 'شريك Meta', href: '/tech-partners' },
              { name: 'API المطورين', href: 'https://live.autorply.com/api/developer/console' },
              { name: 'استشارة مجانية', href: '/contact' }
            ].map((quickLink, index) => (
              <div key={index} className="text-center">
                {quickLink.href.startsWith('http') ? (
                  <a
                    href={quickLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {quickLink.name}
                  </a>
                ) : (
                  <Link
                    to={quickLink.href}
                    className="inline-block bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {quickLink.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HtmlSitemap;

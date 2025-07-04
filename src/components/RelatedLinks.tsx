
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
}

const getRelatedLinks = (pathname: string): RelatedLink[] => {
  const relatedLinksMap: Record<string, RelatedLink[]> = {
    '/services': [
      { title: 'الأسعار والباقات', description: 'اكتشف باقاتنا المتنوعة وأسعارنا التنافسية', href: '/pricing' },
      { title: 'الحملات التسويقية', description: 'تعرف على حلول التسويق عبر واتساب', href: '/campaign' },
      { title: 'الأسئلة الشائعة', description: 'إجابات على أهم الأسئلة حول خدماتنا', href: '/faq' },
      { title: 'التقنيات المستخدمة', description: 'اكتشف التقنيات المتقدمة في منصتنا', href: '/technology' }
    ],
    '/pricing': [
      { title: 'الخدمات', description: 'تعرف على جميع خدماتنا المتاحة', href: '/services' },
      { title: 'تواصل معنا', description: 'احصل على استشارة مجانية حول الباقة المناسبة', href: '/contact' },
      { title: 'الفوترة', description: 'معلومات مفصلة حول نظام الفوترة', href: '/billing' },
      { title: 'الشركاء التقنيون', description: 'تعرف على شركائنا وتكاملاتنا', href: '/tech-partners' }
    ],
    '/about-us': [
      { title: 'رؤيتنا', description: 'تعرف على رؤية ومهمة اوتوربلاي', href: '/vision' },
      { title: 'قصص النجاح', description: 'اقرأ قصص نجاح عملائنا المميزة', href: '/success-story' },
      { title: 'الخدمات', description: 'اكتشف كيف يمكننا مساعدتك', href: '/services' },
      { title: 'تواصل معنا', description: 'تحدث مع فريقنا المتخصص', href: '/contact' }
    ],
    '/campaign': [
      { title: 'الخدمات', description: 'تعرف على جميع خدماتنا التسويقية', href: '/services' },
      { title: 'الأسعار', description: 'باقات الحملات التسويقية وأسعارها', href: '/pricing' },
      { title: 'قصص النجاح', description: 'شاهد نتائج حملاتنا الناجحة', href: '/success-story' },
      { title: 'الأسئلة الشائعة', description: 'أسئلة شائعة حول الحملات التسويقية', href: '/faq' }
    ],
    '/contact': [
      { title: 'الأسعار', description: 'تعرف على باقاتنا قبل التواصل', href: '/pricing' },
      { title: 'الأسئلة الشائعة', description: 'ربما تجد إجابتك هنا', href: '/faq' },
      { title: 'من نحن', description: 'تعرف على فريقنا وخبراتنا', href: '/about-us' },
      { title: 'الخدمات', description: 'اكتشف خدماتنا المتنوعة', href: '/services' }
    ],
    '/faq': [
      { title: 'الخدمات', description: 'تفاصيل شاملة عن خدماتنا', href: '/services' },
      { title: 'التقنية', description: 'معلومات تقنية متقدمة', href: '/technology' },
      { title: 'تواصل معنا', description: 'اتصل بنا للحصول على مساعدة إضافية', href: '/contact' },
      { title: 'مركز المساعدة', description: 'دليل المستخدم والدعم الفني', href: 'https://help.autorply.sa/', isExternal: true }
    ]
  };

  return relatedLinksMap[pathname] || [
    { title: 'الصفحة الرئيسية', description: 'العودة إلى الصفحة الرئيسية', href: '/' },
    { title: 'الخدمات', description: 'تعرف على خدماتنا المتنوعة', href: '/services' },
    { title: 'الأسعار', description: 'باقاتنا وأسعارنا التنافسية', href: '/pricing' },
    { title: 'تواصل معنا', description: 'نحن هنا لمساعدتك', href: '/contact' }
  ];
};

const RelatedLinks = () => {
  const location = useLocation();
  const relatedLinks = getRelatedLinks(location.pathname);

  if (location.pathname === '/') {
    return null; // Don't show on homepage
  }

  return (
    <section className="py-16 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">شاهد أيضاً</h2>
          <p className="text-gray-600 text-center mb-8">مواضيع ذات صلة قد تهمك</p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedLinks.map((link, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {link.isExternal ? (
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                        <span>اقرأ المزيد</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <Link to={link.href} className="block">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                      <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional internal links for SEO */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
              الصفحة الرئيسية
            </Link>
            <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
              خدماتنا
            </Link>
            <Link to="/pricing" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
              الأسعار
            </Link>
            <Link to="/about-us" className="text-blue-600 hover:text-blue-800 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors">
              من نحن
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedLinks;

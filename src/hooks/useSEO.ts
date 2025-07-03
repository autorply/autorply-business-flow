
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  type: string;
}

export const useSEO = (): SEOData => {
  const location = useLocation();
  const currentPath = location.pathname;

  const seoData = useMemo(() => {
    const baseUrl = 'https://autorply.sa';
    const fullUrl = `${baseUrl}${currentPath}`;

    switch (currentPath) {
      case '/':
        return {
          title: 'اوتوربلاي - WhatsApp API | منصة واتساب الأعمال الرائدة في السعودية',
          description: 'منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات التسويقية. شريك Meta المعتمد.',
          keywords: 'واتساب أعمال, WhatsApp API, الردود الآلية, واتساب تجاري, شات بوت, التسويق الرقمي, خدمة العملاء, السعودية, Meta Partner',
          url: fullUrl,
          type: 'website'
        };

      case '/services':
        return {
          title: 'خدماتنا - اوتوربلاي | حلول واتساب الأعمال المتكاملة',
          description: 'اكتشف خدماتنا المتنوعة لواتساب الأعمال: الردود الآلية، الحملات التسويقية، خدمة العملاء، والتكاملات المتقدمة.',
          keywords: 'خدمات واتساب, الردود الآلية, حملات واتساب, خدمة العملاء, تكاملات واتساب, واتساب API',
          url: fullUrl,
          type: 'website'
        };

      case '/pricing':
        return {
          title: 'الأسعار والباقات - اوتوربلاي | باقات واتساب الأعمال',
          description: 'اختر الباقة المناسبة لك من باقاتنا المتنوعة لواتساب الأعمال. أسعار تنافسية وخدمات متميزة تناسب جميع الأعمال.',
          keywords: 'أسعار واتساب, باقات واتساب, تكلفة واتساب الأعمال, اشتراك واتساب API, أسعار تنافسية',
          url: fullUrl,
          type: 'website'
        };

      case '/about-us':
        return {
          title: 'من نحن - اوتوربلاي | قصتنا ورؤيتنا',
          description: 'تعرف على قصة اوتوربلاي وفريقنا المتخصص في تقديم أفضل حلول واتساب الأعمال. شريك Meta المعتمد في المنطقة.',
          keywords: 'عن اوتوربلاي, فريق العمل, قصة الشركة, رؤية اوتوربلاي, Meta Partner, واتساب السعودية',
          url: fullUrl,
          type: 'website'
        };

      case '/contact':
        return {
          title: 'تواصل معنا - اوتوربلاي | خدمة عملاء متميزة',
          description: 'تواصل مع فريق اوتوربلاي للحصول على استشارة مجانية حول واتساب الأعمال. نحن هنا لمساعدتك في تطوير أعمالك.',
          keywords: 'تواصل معنا, خدمة العملاء, استشارة مجانية, دعم فني, واتساب الأعمال السعودية',
          url: fullUrl,
          type: 'website'
        };

      case '/faq':
        return {
          title: 'الأسئلة الشائعة - اوتوربلاي | إجابات شاملة',
          description: 'إجابات شاملة على أهم الأسئلة حول خدمات واتساب الأعمال، التفعيل، الأسعار، والدعم الفني.',
          keywords: 'أسئلة شائعة, مساعدة واتساب, دليل المستخدم, حلول المشاكل, دعم واتساب الأعمال',
          url: fullUrl,
          type: 'website'
        };

      default:
        return {
          title: 'اوتوربلاي - WhatsApp API',
          description: 'منصة متكاملة لواتساب الأعمال مع الردود الآلية والحملات التسويقية',
          keywords: 'واتساب, WhatsApp API, الردود الآلية, التسويق الرقمي',
          url: fullUrl,
          type: 'website'
        };
    }
  }, [currentPath]);

  return seoData;
};


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

      case '/campaign':
        return {
          title: 'الحملات التسويقية - اوتوربلاي | حملات واتساب الذكية',
          description: 'قم بإنشاء حملات تسويقية فعالة عبر واتساب مع أدوات التحليل والاستهداف المتقدمة لزيادة المبيعات.',
          keywords: 'حملات واتساب, التسويق عبر واتساب, حملات جماعية, استهداف العملاء, زيادة المبيعات',
          url: fullUrl,
          type: 'website'
        };

      case '/vision':
        return {
          title: 'رؤيتنا - اوتوربلاي | نحو مستقبل أفضل للتواصل التجاري',
          description: 'اكتشف رؤية اوتوربلاي لمستقبل التواصل التجاري وكيف نسعى لتطوير تجربة العملاء في العالم العربي.',
          keywords: 'رؤية اوتوربلاي, مستقبل التواصل, التطوير التقني, العالم العربي, تجربة العملاء',
          url: fullUrl,
          type: 'website'
        };

      case '/success-story':
        return {
          title: 'قصص النجاح - اوتوربلاي | تجارب عملائنا الناجحة',
          description: 'اكتشف قصص نجاح عملائنا وكيف ساعدتهم منصة اوتوربلاي في تطوير أعمالهم وزيادة أرباحهم.',
          keywords: 'قصص نجاح, تجارب العملاء, نجاح الأعمال, واتساب الأعمال النجح, دراسات حالة',
          url: fullUrl,
          type: 'website'
        };

      case '/technology':
        return {
          title: 'التقنية - اوتوربلاي | أحدث التقنيات في واتساب الأعمال',
          description: 'تعرف على التقنيات المتقدمة والابتكارات التي نستخدمها في منصة اوتوربلاي لتقديم أفضل خدمة.',
          keywords: 'تقنيات واتساب, الذكاء الاصطناعي, أتمتة المحادثات, تقنيات متقدمة, ابتكار تقني',
          url: fullUrl,
          type: 'website'
        };

      case '/billing':
        return {
          title: 'الفوترة - اوتوربلاي | نظام فوترة شفاف ومرن',
          description: 'تعرف على نظام الفوترة المرن في اوتوربلاي مع خيارات دفع متعددة وشفافية كاملة في التسعير.',
          keywords: 'فوترة واتساب, نظام الدفع, خيارات الدفع, تسعير شفاف, فواتير شهرية',
          url: fullUrl,
          type: 'website'
        };

      case '/tech-partners':
        return {
          title: 'الشركاء التقنيون - اوتوربلاي | شراكات استراتيجية',
          description: 'تعرف على شركائنا التقنيين من كبرى الشركات العالمية مثل Meta وكيف تعزز هذه الشراكات خدماتنا.',
          keywords: 'شركاء تقنيين, Meta Partner, شراكات استراتيجية, تكامل تقني, شركاء الأعمال',
          url: fullUrl,
          type: 'website'
        };

      case '/business-partners':
        return {
          title: 'شركاء الأعمال - اوتوربلاي | شبكة واسعة من الشركاء',
          description: 'انضم إلى شبكة شركاء الأعمال مع اوتوربلاي واستفد من فرص التعاون والنمو المشترك.',
          keywords: 'شركاء الأعمال, فرص الشراكة, التعاون التجاري, شبكة الشركاء, النمو المشترك',
          url: fullUrl,
          type: 'website'
        };

      case '/privacy-policy':
        return {
          title: 'سياسة الخصوصية - اوتوربلاي | حماية بياناتك أولويتنا',
          description: 'اطلع على سياسة الخصوصية الخاصة بنا وكيف نحمي بياناتك الشخصية ونضمن أمانها التام.',
          keywords: 'سياسة الخصوصية, حماية البيانات, أمان المعلومات, خصوصية العملاء, GDPR',
          url: fullUrl,
          type: 'website'
        };

      case '/terms-of-service':
        return {
          title: 'الشروط والأحكام - اوتوربلاي | قواعد الاستخدام',
          description: 'اطلع على شروط وأحكام استخدام منصة اوتوربلاي وحقوقك وواجباتك كمستخدم للمنصة.',
          keywords: 'شروط الاستخدام, أحكام الخدمة, قواعد المنصة, حقوق المستخدم, التزامات الخدمة',
          url: fullUrl,
          type: 'website'
        };

      case '/sitemap':
        return {
          title: 'خريطة الموقع - اوتوربلاي | جميع صفحات الموقع',
          description: 'خريطة شاملة لجميع صفحات وأقسام موقع اوتوربلاي. اكتشف خدماتنا، أسعارنا، ومواردنا بسهولة.',
          keywords: 'خريطة الموقع, صفحات اوتوربلاي, فهرس الموقع, واتساب الأعمال, خدماتنا',
          url: fullUrl,
          type: 'website'
        };

      case '/whatsapp-api':
        return {
          title: 'WhatsApp Business API في السعودية - دليل شامل | اوتوربلاي',
          description: 'دليلك الشامل لـ WhatsApp Business API في السعودية. تعرف على الفرق بين واتساب العادي و API، متطلبات التفعيل، وكيفية الاستفادة منه لتطوير أعمالك.',
          keywords: 'WhatsApp API, واتساب API, WhatsApp Business API السعودية, تفعيل واتساب API, واتساب للأعمال, WhatsApp Cloud API',
          url: fullUrl,
          type: 'website'
        };

      case '/resources':
        return {
          title: 'الموارد التعليمية | اوتوربلاي - مقالات وشروحات واتساب API',
          description: 'اكتشف مجموعة شاملة من المقالات والشروحات والمقارنات حول واتساب API والأتمتة التجارية لتطوير أعمالك.',
          keywords: 'موارد واتساب, شروحات واتساب API, مقالات تقنية, دليل الأعمال, أتمتة المحادثات',
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

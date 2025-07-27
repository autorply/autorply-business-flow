
import PageLayout from '../components/layout/PageLayout';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, BarChart3, Settings, Users, Clock, Shield, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'واتساب الأعمال API',
    description: 'اتصال مباشر وآمن مع WhatsApp Business API للتواصل المهني مع عملائك',
    features: ['إرسال رسائل جماعية', 'تأكيدات الاستلام', 'رسائل الوسائط المتعددة', 'رسائل القوالب المعتمدة']
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'الردود الآلية الذكية',
    description: 'نظام ردود آلي متطور يتفاعل مع عملائك على مدار الساعة بذكاء اصطناعي',
    features: ['ردود فورية', 'تعلم آلي', 'تخصيص الردود', 'تحويل للفريق البشري']
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'التقارير والتحليلات',
    description: 'تقارير مفصلة ومؤشرات أداء شاملة لقياس نجاح حملاتك التسويقية',
    features: ['إحصائيات مفصلة', 'تتبع المحادثات', 'معدلات الاستجابة', 'تحليل العملاء']
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'التكاملات المتقدمة',
    description: 'ربط سلس مع أنظمة CRM وأدوات الأعمال المختلفة لتجربة متكاملة',
    features: ['تكامل CRM', 'ربط المتاجر الإلكترونية', 'أنظمة الدفع', 'إدارة المواعيد']
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'إدارة فرق العمل',
    description: 'توزيع المحادثات على فريق العمل مع صلاحيات وإدارة متقدمة',
    features: ['توزيع المحادثات', 'صلاحيات المستخدمين', 'مراقبة الأداء', 'تقييم الموظفين']
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'جدولة الرسائل',
    description: 'إرسال رسائل مجدولة في الأوقات المناسبة لضمان أقصى تأثير',
    features: ['جدولة متقدمة', 'تحديد المناطق الزمنية', 'إرسال دوري', 'تحسين التوقيت']
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'الأمان والخصوصية',
    description: 'حماية عالية المستوى لبيانات عملائك مع التشفير الكامل',
    features: ['تشفير البيانات', 'أمان المحادثات', 'النسخ الاحتياطي', 'حماية من الاختراق']
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: 'الدعم الفني المتميز',
    description: 'فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك',
    features: ['دعم 24/7', 'استشارات مجانية', 'تدريب الفرق', 'صيانة دورية']
  }
];

const Services = () => {
  return (
    <PageLayout 
      structuredDataType="Service"
      customMetaTags={{
        title: 'خدماتنا - اوتوربلاي | حلول واتساب الأعمال المتكاملة',
        description: 'اكتشف خدماتنا المتنوعة لواتساب الأعمال: الردود الآلية، الحملات التسويقية، خدمة العملاء، والتكاملات المتقدمة.',
        keywords: 'خدمات واتساب, الردود الآلية, حملات واتساب, خدمة العملاء, تكاملات واتساب, واتساب API'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
        <Header />
        <Breadcrumbs />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                خدمات <span className="text-blue-600">واتساب الأعمال</span> المتكاملة
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                نقدم مجموعة شاملة من <Link to="/campaign" className="text-blue-600 hover:text-blue-800 font-medium">الحلول التسويقية</Link> و
                <Link to="/technology" className="text-blue-600 hover:text-blue-800 font-medium"> التقنيات المتقدمة</Link> 
                لتعزيز تواصلك مع العملاء وتطوير أعمالك
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/pricing" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  اطلع على الأسعار
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-600 transition-colors"
                >
                  احصل على استشارة مجانية
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <h2 className="text-3xl font-bold text-gray-900 mb-4">خدماتنا المتميزة</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  حلول شاملة ومتكاملة تلبي جميع احتياجاتك في التواصل مع العملاء وإدارة الأعمال
                </p>
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-6"></div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 bg-blue-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">جاهز لتجربة خدماتنا؟</h2>
                <p className="text-xl mb-8 opacity-90">
                  ابدأ رحلتك مع <Link to="/about-us" className="underline hover:no-underline">اوتوربلاي</Link> واكتشف 
                  <Link to="/success-story" className="underline hover:no-underline"> قصص النجاح</Link> التي حققها عملاؤنا
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    تحدث مع خبير
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    اختر باقتك
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <RelatedLinks />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Services;

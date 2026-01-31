
import PageLayout from '../components/layout/PageLayout';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Pricing = () => {

  const plans = [
    {
      title: "باقة أعمال",
      price: "199 ريال / شهريًا",
      link: "https://store.autorply.sa/ar/WaYGVV",
      features: [
        "شات بوت تلقائي",
        "ذكاء اصطناعي للردود",
        "حملات واتساب جماعية",
        "رسائل تفاعلية (أزرار + قوائم)",
        "نماذج واتساب",
        "رسائل البطاقات",
        "+جهات الاتصال 10000",
        "3 مستخدمين",
        "(WooCommerce / سلة / زد / شوبيفاي)",
        "تحويل المحادثات الى الموظفين",
        "تقارير وتحليلات (أساسية)",
        "تصدير المشتركين",
        "دعم فني",
        "دعم API متكامل"
      ],
      delay: 0.1,
      featured: false
    },
    {
      title: "الباقة الاحترافية",
      price: "299 ريال / شهريًا",
      link: "https://store.autorply.sa/ar/ABByBdY",
      features: [
        "شات بوت تلقائي",
        "ذكاء اصطناعي متقدم ",
        "حملات واتساب جماعية بدون قيود",
        "رسائل تفاعلية (أزرار + قوائم)",
        "رسائل البطاقات ",
        "نماذج واتساب مع ربط خارجي",
        "+جهات الاتصال 100000",
        "5 مستخدمين",
        "(WooCommerce / سلة / زد / شوبيفاي)",
        "تحويل المحادثات تلقائي الى الفريق",
        "تقارير وتحليلات ",
        "تصدير المشتركين",
        "دعم فني وسريع",
        "دعم API متكامل"
      ],
      delay: 0.2,
      featured: true
    },
    {
      title: "باقة Enterprise",
      price: "حسب الطلب",
      link: "https://wa.me/966594959443",
      features: [
        "شات بوت احترافي متقدم",
        "ذكاء اصطناعي بدون حدود",
        "حملات واتساب إعلانية وتسلسلية",
        "رسائل تفاعلية + بطاقات ",
        "نماذج واتساب مع ربط خارجي",
        "رسائل البطاقات",
        "المستخدمين - غير محدود",
        "تكامل مع المتاجر والمنصات الخارجية",
        "تحويل المحادثات تلقائي على الفريق",
        "تصدير وتحليل بيانات المشتركين",
        "تصدير المشتركين",
        "دعم فني",
        "تكامل API متقدم",
        "تخصيص شامل حسب احتياج النشاط"
      ],
      delay: 0.3
    }
  ];

  return (
    <PageLayout 
      structuredDataType="Service"
      customMetaTags={{
        title: 'الأسعار والباقات - اوتوربلاي | باقات واتساب الأعمال',
        description: 'اختر الباقة المناسبة لك من باقاتنا المتنوعة لواتساب الأعمال. أسعار تنافسية وخدمات متميزة تناسب جميع الأعمال.',
        keywords: 'أسعار واتساب, باقات واتساب, تكلفة واتساب الأعمال, اشتراك واتساب API, أسعار تنافسية',
        url: 'https://autorply.sa/pricing'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar-SA">
        <Header />
        <Breadcrumbs />
        
        <main className="pt-20">
          <section className="py-20 px-6 bg-gray-50">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <h1 className="text-5xl font-bold text-blue-700 mb-6">باقات أوتوربلاي</h1>
               <h2 className="text-2xl font-semibold text-gray-700 mb-4">أسعار تنافسية لجميع أحجام الأعمال</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اختر الباقة التي تناسب نشاطك التجاري وابدأ رحلتك في تطوير تجربة العملاء
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`border p-6 rounded-3xl shadow-sm bg-white h-fit ${plan.featured ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: plan.delay }}
                  whileHover={{ y: -10, scale: plan.featured ? 1.05 : 1.02 }}
                >
                  {plan.featured && (
                    <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                      الأكثر شعبية
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">{plan.title}</h3>
                  <p className="text-2xl font-bold mb-6 text-gray-800">{plan.price}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">تشمل:</h4>
                    <ul className="text-gray-600 space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <span className="text-green-500 ml-2 mt-0.5 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {plan.title !== "باقة Enterprise" && (
                    <p className="text-xs text-gray-500 mb-3 text-center">فوترة سنوية</p>
                  )}
                  
                  <motion.a 
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full text-center font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.title === "باقة Enterprise" ? "تواصل معنا" : "اشترك الآن"}
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">هل تحتاج مساعدة في اختيار الباقة المناسبة؟</h3>
                <p className="text-gray-600 mb-6">
                  فريقنا جاهز لمساعدتك في اختيار الباقة التي تناسب احتياجاتك وحجم نشاطك التجاري
                </p>
                <motion.a
                  href="#contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  تواصل معنا الآن
                </motion.a>
              </div>
            </motion.div>
          </section>
        </main>

        <RelatedLinks />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Pricing;

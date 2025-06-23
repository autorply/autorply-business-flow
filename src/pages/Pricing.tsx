
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  const plans = [
    {
      title: "باقة Start",
      price: "99 ريال / شهريًا",
      features: [
        "شات بوت تلقائي",
        "ذكاء اصطناعي محدود للردود (أساسي)",
        "حملات واتساب جماعية",
        "رسائل تفاعلية (أزرار + قوائم)",
        "نموذج واتساب واحد",
        "ربط متجرك (سلة / زد / شوبيفاي / ووكومرس)",
        "مستخدم واحد",
        "تصدير المشتركين",
        "دعم فني خلال أوقات العمل"
      ],
      delay: 0
    },
    {
      title: "باقة أعمال",
      price: "199 ريال / شهريًا",
      features: [
        "شات بوت تلقائي",
        "ذكاء اصطناعي للردود",
        "حملات واتساب جماعية",
        "رسائل تفاعلية (أزرار + قوائم)",
        "نماذج واتساب",
        "رسائل البطاقات (Carousel)",
        "ربط المتجر (WooCommerce / سلة / زد / شوبيفاي)",
        "3 مستخدمين",
        "تحويل المحادثات على الموظفين",
        "تقارير وتحليلات (أساسية)",
        "تصدير المشتركين",
        "دعم فني مباشر",
        "دعم API متكامل"
      ],
      delay: 0.1,
      featured: true
    },
    {
      title: "باقة احترافية",
      price: "299 ريال / شهريًا",
      features: [
        "شات بوت تلقائي",
        "ذكاء اصطناعي متقدم للردود",
        "حملات واتساب جماعية بدون قيود",
        "رسائل تفاعلية (أزرار + قوائم)",
        "نماذج واتساب مع ربط خارجي",
        "رسائل البطاقات (Carousel)",
        "ربط المتجر (WooCommerce / سلة / زد / شوبيفاي)",
        "5 مستخدمين",
        "تحويل المحادثات تلقائي على الفريق",
        "تقارير وتحليلات متقدمة",
        "تصدير المشتركين",
        "دعم فني مباشر وسريع",
        "دعم API متكامل"
      ],
      delay: 0.2
    },
    {
      title: "باقة Enterprise",
      price: "حسب الطلب",
      features: [
        "شات بوت احترافي متقدم",
        "ذكاء اصطناعي بدون حدود",
        "حملات واتساب إعلانية وتسلسلية",
        "رسائل تفاعلية + بطاقات Carousel",
        "نماذج واتساب مع ربط خارجي",
        "رسائل البطاقات (Carousel)",
        "تكامل كامل مع المتاجر والمنصات الخارجية",
        "عدد غير محدود من الم��تخدمين",
        "تحويل المحادثات تلقائي على الفريق",
        "تصدير وتحليل بيانات المشتركين",
        "تصدير المشتركين",
        "دعم فني مباشر 24/7",
        "تكامل API متقدم",
        "تخصيص شامل حسب احتياج المنشأة"
      ],
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-20 px-6 bg-gray-50">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-blue-700 mb-6">باقات أوتوربلاي</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اختر الباقة التي تناسب نشاطك التجاري وابدأ رحلتك في تطوير تجربة العملاء
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`border p-6 rounded-3xl shadow-sm bg-white h-fit ${
                  plan.featured ? 'ring-2 ring-blue-500 shadow-lg transform scale-105' : ''
                }`}
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
                
                <motion.a 
                  href="#" 
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

      <Footer />
    </div>
  );
};

export default Pricing;

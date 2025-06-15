
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      title: "الباقة الأساسية",
      price: "99 ر.س / شهريًا",
      features: [
        "ربط واتساب API",
        "عدد رسائل شهري محدود",
        "تقرير شهري بسيط"
      ],
      delay: 0
    },
    {
      title: "الباقة المتقدمة",
      price: "199 ر.س / شهريًا",
      features: [
        "عدد رسائل غير محدود",
        "تقارير متقدمة",
        "دعم فني مباشر"
      ],
      delay: 0.1,
      featured: true
    },
    {
      title: "الباقة الشاملة",
      price: "299 ر.س / شهريًا",
      features: [
        "كل الميزات",
        "لوحة تحكم كاملة",
        "ربط API مخصص"
      ],
      delay: 0.2
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-2">الباقات</h2>
        <p className="text-gray-600">اختر الباقة التي تناسب نشاطك التجاري</p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`border p-6 rounded-3xl shadow-sm bg-white ${
              plan.featured ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: plan.delay }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            {plan.featured && (
              <div className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                الأكثر شعبية
              </div>
            )}
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{plan.title}</h3>
            <p className="text-2xl font-bold mb-2 text-gray-800">{plan.price}</p>
            <ul className="text-gray-600 mb-4 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <motion.a 
              href="#" 
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اشترك الآن
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

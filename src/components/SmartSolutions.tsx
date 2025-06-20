
import { motion } from 'framer-motion';

const SmartSolutions = () => {
  const sectors = [
    {
      title: "التجارة الإلكترونية",
      features: [
        "الرد على العملاء تلقائيًا",
        "تأكيد الطلبات",
        "إرسال فواتير أو روابط الدفع"
      ]
    },
    {
      title: "القطاع الصحي",
      features: [
        "حجز مواعيد",
        "تذكير بالمراجعات",
        "الرد على الأسئلة الشائعة"
      ]
    },
    {
      title: "التعليم والتدريب",
      features: [
        "تسجيل الطلاب",
        "إرسال الجداول والروابط",
        "الردود الذكية على الأسئلة المتكررة"
      ]
    },
    {
      title: "العقارات",
      features: [
        "الرد على استفسارات العروض",
        "إرسال صور ومعلومات العقارات",
        "جدولة زيارات المعاينة"
      ]
    },
    {
      title: "الجهات الحكومية أو الشبه حكومية",
      features: [
        "استقبال طلبات",
        "تفعيل التذاكر أو الشكاوى",
        "إرسال تحديثات الحالة"
      ]
    },
    {
      title: "الخدمات اللوجستية والتوصيل",
      features: [
        "تتبع الطلبات",
        "تنبيهات السائق",
        "تأكيد الاستلام"
      ]
    },
    {
      title: "المالية والبنوك والتأمين",
      features: [
        "إرسال كشوفات أو تنبيهات",
        "التحقق من الهوية",
        "الردود المؤتمتة على الاستفسارات"
      ]
    },
    {
      title: "الصالونات والمراكز التجميلية",
      features: [
        "حجز المواعيد",
        "إرسال العروض",
        "تذكير العملاء بالمواعيد"
      ]
    },
    {
      title: "الضيافة والمطاعم",
      features: [
        "استقبال الحجوزات",
        "استعراض القائمة",
        "الرد الآلي على العملاء"
      ]
    },
    {
      title: "قطاع السيارات",
      features: [
        "حجز صيانة",
        "الرد على استفسارات العروض",
        "إرسال أسعار وصور المركبات المتاحة"
      ]
    },
    {
      title: "الصيانة",
      features: [
        "استقبال طلبات الصيانة",
        "جدولة الزيارات",
        "إرسال إشعارات متابعة أو تقارير"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">حلول ذكية لجميع القطاعات</h2>
        <p className="text-xl text-gray-600">نقدم حلول WhatsApp API المخصصة لكل قطاع بما يناسب احتياجاته</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg font-bold text-blue-600 mb-4">{sector.title}</h3>
              <ul className="space-y-2">
                {sector.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▪️</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;

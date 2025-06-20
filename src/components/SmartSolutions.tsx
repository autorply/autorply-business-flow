
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, GraduationCap, Building, MapPin, Truck, CreditCard, Scissors, Utensils, Car, Wrench } from 'lucide-react';

const SmartSolutions = () => {
  const sectors = [
    {
      title: "التجارة الإلكترونية",
      icon: ShoppingCart,
      features: [
        "الرد على العملاء تلقائيًا",
        "تأكيد الطلبات",
        "إرسال فواتير أو روابط الدفع"
      ]
    },
    {
      title: "القطاع الصحي",
      icon: Heart,
      features: [
        "حجز مواعيد",
        "تذكير بالمراجعات",
        "الرد على الأسئلة الشائعة"
      ]
    },
    {
      title: "التعليم والتدريب",
      icon: GraduationCap,
      features: [
        "تسجيل الطلاب",
        "إرسال الجداول والروابط",
        "الردود الذكية على الأسئلة المتكررة"
      ]
    },
    {
      title: "العقارات",
      icon: Building,
      features: [
        "الرد على استفسارات العروض",
        "إرسال صور ومعلومات العقارات",
        "جدولة زيارات المعاينة"
      ]
    },
    {
      title: "الجهات الحكومية أو الشبه حكومية",
      icon: MapPin,
      features: [
        "استقبال طلبات",
        "تفعيل التذاكر أو الشكاوى",
        "إرسال تحديثات الحالة"
      ]
    },
    {
      title: "الخدمات اللوجستية والتوصيل",
      icon: Truck,
      features: [
        "تتبع الطلبات",
        "تنبيهات السائق",
        "تأكيد الاستلام"
      ]
    },
    {
      title: "المالية والبنوك والتأمين",
      icon: CreditCard,
      features: [
        "إرسال كشوفات أو تنبيهات",
        "التحقق من الهوية",
        "الردود المؤتمتة على الاستفسارات"
      ]
    },
    {
      title: "الصالونات والمراكز التجميلية",
      icon: Scissors,
      features: [
        "حجز المواعيد",
        "إرسال العروض",
        "تذكير العملاء بالمواعيد"
      ]
    },
    {
      title: "الضيافة والمطاعم",
      icon: Utensils,
      features: [
        "استقبال الحجوزات",
        "استعراض القائمة",
        "الرد الآلي على العملاء"
      ]
    },
    {
      title: "قطاع السيارات",
      icon: Car,
      features: [
        "حجز صيانة",
        "الرد على استفسارات العروض",
        "إرسال أسعار وصور المركبات المتاحة"
      ]
    },
    {
      title: "الصيانة",
      icon: Wrench,
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
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <sector.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <h3 className="text-lg font-bold text-blue-600">{sector.title}</h3>
              </div>
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


import { motion } from 'framer-motion';
import { MessageCircle, Users, BarChart3, Settings } from 'lucide-react';

const OmnichannelSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "الرد من مكان واحد لكل المنصات",
      description: "إدارة جميع المحادثات من واتساب وفيسبوك وإنستغرام وتيليجرام في صندوق موحد"
    },
    {
      icon: Settings,
      title: "قوالب مخصصة حسب القناة",
      description: "إنشاء قوالب مختلفة لكل منصة تناسب طبيعة التواصل مع العملاء"
    },
    {
      icon: BarChart3,
      title: "تقارير أداء للقنوات",
      description: "مراقبة الأداء وقياس معدلات الاستجابة والتفاعل لكل قناة تواصل"
    },
    {
      icon: Users,
      title: "إدارة الفريق من الواجهة",
      description: "توزيع المحادثات على أعضاء الفريق وتتبع الأداء الفردي"
    }
  ];

  const platforms = [
    { name: 'واتساب', icon: '📱', color: 'text-gray-800' },
    { name: 'فيسبوك', icon: '📘', color: 'text-gray-800' },
    { name: 'إنستغرام', icon: '📷', color: 'text-gray-800' },
    { name: 'تيليجرام', icon: '✈️', color: 'text-gray-800' }
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
        <h2 className="text-4xl font-bold text-blue-700 mb-4">جميع وسائل التواصل في منصة واحدة</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          أوتوربلاي تجمع الرسائل من واتساب، فيسبوك، إنستغرام، وتيليجرام في صندوق موحد لتجربة تواصل سلسة ومتكاملة
        </p>
      </motion.div>

      {/* Platform Icons */}
      <motion.div 
        className="flex justify-center items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className={`text-4xl mb-2 ${platform.color}`}>
              {platform.icon}
            </div>
            <span className="text-sm text-gray-600">{platform.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;

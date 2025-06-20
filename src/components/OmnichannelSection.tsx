
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

      {/* Unified Platform Illustration */}
      <motion.div
        className="max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4">
          {/* Tablet/Dashboard Interface */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">لوحة التحكم الموحدة</h3>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Platform Channels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{platform.icon}</div>
                    <p className="text-sm font-medium text-gray-700">{platform.name}</p>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: `${Math.random() * 40 + 60}%`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Unified Inbox Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">صندوق الرسائل الموحد</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                  <span className="text-lg">📱</span>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">أحمد محمد - واتساب</p>
                    <p className="text-sm">مرحباً، أريد الاستفسار عن الخدمة</p>
                  </div>
                  <span className="text-xs text-gray-500">الآن</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <span className="text-lg">📘</span>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">سارة أحمد - فيسبوك</p>
                    <p className="text-sm">شكراً لكم على الخدمة الممتازة</p>
                  </div>
                  <span className="text-xs text-gray-500">5 دقائق</span>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                  <span className="text-lg">📷</span>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600">محمد علي - إنستغرام</p>
                    <p className="text-sm">متى يمكنني بدء الخدمة؟</p>
                  </div>
                  <span className="text-xs text-gray-500">10 دقائق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

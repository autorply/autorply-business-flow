
import { motion } from 'framer-motion';
import { MessageCircle, Users, BarChart3, Settings, Home, Phone, Instagram, Twitter, Facebook, Send, Zap, FileText, HelpCircle, Target } from 'lucide-react';

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

  const sidebarItems = [
    { icon: Home, label: 'القائمة الرئيسية', active: true },
    { icon: MessageCircle, label: 'المحادثات', count: 24 },
    { icon: Phone, label: 'قناة واتساب', status: 'online' },
    { icon: Instagram, label: 'قناة انستغرام', status: 'online' },
    { icon: Twitter, label: 'قناة تويتر', status: 'online' },
    { icon: Facebook, label: 'قناة فيسبوك', status: 'online' },
    { icon: Send, label: 'قناة تليجرام', status: 'online' },
    { icon: Target, label: 'الحملات الإعلانية' },
    { icon: Zap, label: 'الأتمتة' },
    { icon: FileText, label: 'القوالب' },
    { icon: Settings, label: 'الإعدادات' },
    { icon: HelpCircle, label: 'المساعدة' }
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
        className="max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 mx-4">
          {/* Platform Interface */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Header with Logo */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Autorply</h3>
                  <p className="text-xs text-gray-500">منصة إدارة المحادثات</p>
                </div>
              </div>
            </div>

            <div className="flex min-h-[400px]">
              {/* Sidebar */}
              <div className="w-64 bg-white border-r border-gray-200 p-4">
                <div className="space-y-2">
                  {sidebarItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${
                        item.active 
                          ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-600' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium flex-1">{item.label}</span>
                      {item.count && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                          {item.count}
                        </span>
                      )}
                      {item.status && (
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">لوحة المحادثات</h4>
                  <p className="text-gray-600">إدارة جميع المحادثات من منصة واحدة</p>
                </div>

                {/* Platform Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {platforms.map((platform, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <div className="text-center">
                        <div className="text-2xl mb-2">{platform.icon}</div>
                        <p className="text-sm font-medium text-gray-700 mb-2">{platform.name}</p>
                        <div className="text-lg font-bold text-blue-600">{Math.floor(Math.random() * 50) + 10}</div>
                        <p className="text-xs text-gray-500">رسالة جديدة</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Conversations */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">المحادثات الأخيرة</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-lg">📱</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-800">أحمد محمد</p>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">واتساب</span>
                        </div>
                        <p className="text-sm text-gray-600">مرحباً، أريد الاستفسار عن الخدمة</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">الآن</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <span className="text-lg">📘</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-800">سارة أحمد</p>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">فيسبوك</span>
                        </div>
                        <p className="text-sm text-gray-600">شكراً لكم على الخدمة الممتازة</p>
                      </div>
                      <span className="text-xs text-gray-500">5 دقائق</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <span className="text-lg">📷</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-gray-800">محمد علي</p>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">إنستغرام</span>
                        </div>
                        <p className="text-sm text-gray-600">متى يمكنني بدء الخدمة؟</p>
                      </div>
                      <span className="text-xs text-gray-500">10 دقائق</span>
                    </div>
                  </div>
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

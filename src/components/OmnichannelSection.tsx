
import { motion } from 'framer-motion';
import { MessageCircle, Users, BarChart3, Settings, Home, Smartphone, Instagram, Twitter, Facebook, Send, Zap, FileText, HelpCircle, Megaphone } from 'lucide-react';

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
    { 
      name: 'واتساب', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426"/>
        </svg>
      ), 
      color: 'text-green-600 hover:text-green-700', 
      bgColor: 'bg-green-50 hover:bg-green-100' 
    },
    { 
      name: 'فيسبوك', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      color: 'text-blue-600 hover:text-blue-700', 
      bgColor: 'bg-blue-50 hover:bg-blue-100' 
    },
    { 
      name: 'إنستغرام', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      color: 'text-pink-600 hover:text-pink-700', 
      bgColor: 'bg-pink-50 hover:bg-pink-100' 
    },
    { 
      name: 'تيليجرام', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ), 
      color: 'text-blue-500 hover:text-blue-600', 
      bgColor: 'bg-blue-50 hover:bg-blue-100' 
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
        <h2 className="text-4xl font-bold text-blue-700 mb-4">جميع وسائل التواصل في منصة واحدة</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          أوتوربلاي تجمع الرسائل من واتساب، فيسبوك، إنستغرام، وتيليجرام في صندوق موحد لتجربة تواصل سلسة ومتكاملة
        </p>
      </motion.div>

      {/* Platform Icons */}
      <motion.div 
        className="flex justify-center items-center gap-4 sm:gap-8 mb-16 flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${platform.bgColor} ${platform.color} shadow-md hover:shadow-lg`}>
              {platform.icon}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 mt-2 font-medium">{platform.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Unified Platform Illustration */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 mx-4">
          {/* Platform Interface */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Header with Logo */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center">
              <div className="flex items-center gap-3">
                <img 
                  src="https://autorply.sa/assets/img/logo_64.svg" 
                  alt="أوتوربلاي" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">أوتوربلاي</h3>
                  <p className="text-xs text-gray-500">منصة إدارة المحادثات</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row">
              {/* Sidebar */}
              <div className="w-full lg:w-64 bg-white border-r border-gray-200 p-4 min-h-[300px] lg:min-h-[500px]">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-100 text-blue-700 border-r-2 border-blue-600 cursor-pointer hover:bg-blue-200 transition-colors">
                    <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">القائمة الرئيسية</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">المحادثات</span>
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">24</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">قناة واتساب</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">قناة انستغرام</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">قناة تويتر</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">قناة فيسبوك</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-medium flex-1">قناة تليجرام</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Megaphone className="w-5 h-5" />
                    <span className="text-sm font-medium flex-1">الحملات الإعلانية</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-medium flex-1">الأتمتة</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium flex-1">القوالب</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <Settings className="w-5 h-5" />
                    <span className="text-sm font-medium flex-1">الإعدادات</span>
                  </div>
                  <div className="hidden lg:flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 cursor-pointer transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    <span className="text-sm font-medium flex-1">المساعدة</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 sm:p-6">
                <div className="mb-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">لوحة المحادثات</h4>
                  <p className="text-sm sm:text-base text-gray-600">إدارة جميع المحادثات من منصة واحدة</p>
                </div>

                {/* Platform Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {platforms.map((platform, index) => (
                    <div key={index} className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100">
                      <div className="text-center">
                        <div className={`flex justify-center items-center mb-2 ${platform.color}`}>
                          <div className="w-6 h-6 sm:w-8 sm:h-8">
                            {platform.icon}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">{platform.name}</p>
                        <div className="text-sm sm:text-lg font-bold text-blue-600">{Math.floor(Math.random() * 50) + 10}</div>
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
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium text-gray-800">أحمد محمد</p>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">واتساب</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">مرحباً، أريد الاستفسار عن الخدمة</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500">الآن</span>
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium text-gray-800">سارة أحمد</p>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">فيسبوك</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">شكراً لكم على الخدمة الممتازة</p>
                      </div>
                      <span className="text-xs text-gray-500">5 دقائق</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium text-gray-800">محمد علي</p>
                          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">إنستغرام</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">متى يمكنني بدء الخدمة؟</p>
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

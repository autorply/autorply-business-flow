
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Smartphone, Monitor, Zap, Clock } from 'lucide-react';

const LiveChatSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            خدمة المحادثة المباشرة
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            تواصل مع عملائك في الوقت الفعلي من خلال منصة محادثة ذكية قابلة للربط مع الذكاء الاصطناعي
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-blue-100 p-3 rounded-full">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  ذكاء اصطناعي متقدم
                </h3>
                <p className="text-gray-600">
                  ربط سلس مع أنظمة الذكاء الاصطناعي للرد التلقائي الذكي على استفسارات العملاء
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-green-100 p-3 rounded-full">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  تطبيق الجوال
                </h3>
                <p className="text-gray-600">
                  رد على المحادثات من أي مكان باستخدام تطبيق الجوال المخصص
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="bg-purple-100 p-3 rounded-full">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  منصة موحدة
                </h3>
                <p className="text-gray-600">
                  إدارة جميع المحادثات من منصة واحدة مع واجهة سهلة الاستخدام
                </p>
              </div>
            </div>
          </motion.div>

          {/* Live Chat Demo */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">خدمة العملاء</h4>
                    <div className="text-sm text-green-500 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-1"></div>
                      <span>متاح الآن</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <div className="text-sm text-gray-700">مرحباً! كيف يمكنني مساعدتك اليوم؟</div>
                  <div className="text-xs text-gray-500">10:30 ص</div>
                </div>
                
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs mr-auto">
                  <div className="text-sm">أريد معرفة المزيد عن خدماتكم</div>
                  <div className="text-xs text-blue-200">10:31 ص</div>
                </div>

                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <div className="text-sm text-gray-700">بالطبع! سأرسل لك تفاصيل شاملة عن خدماتنا...</div>
                  <div className="text-xs text-gray-500">10:32 ص</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <div className="text-sm text-gray-500">اكتب رسالتك...</div>
                </div>
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">استجابة فورية</h3>
            <p className="text-gray-600">
              رد تلقائي فوري على الاستفسارات الشائعة باستخدام الذكاء الاصطناعي
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 متاح</h3>
            <p className="text-gray-600">
              خدمة متاحة على مدار الساعة مع إمكانية التحويل للموظفين عند الحاجة
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">تكامل شامل</h3>
            <p className="text-gray-600">
              ربط مع جميع منصات التواصل وأنظمة إدارة علاقات العملاء
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveChatSection;

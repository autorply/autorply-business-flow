
import { motion } from 'framer-motion';

const AppointmentBooking = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">حجز المواعيد أصبح أسهل مع Autorply</h2>
        <p className="text-xl text-gray-600">نظام حجز مواعيد ذكي ومتكامل عبر واتساب لتسهيل التواصل مع عملائك</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* WhatsApp Booking Flow */}
        <motion.div
          className="grid lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Phone 1 - Initial Contact */}
          <div className="bg-black rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            {/* iPhone Status Bar */}
            <div className="flex items-center justify-between text-white text-xs px-6 py-3">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white font-medium">9:41</div>
              <div className="flex items-center gap-1">
                <div className="text-xs">📶</div>
                <div className="text-xs">🔋</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden flex flex-col" style={{ height: 'calc(100% - 32px)' }}>
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                <div className="bg-[#DCF8C6] rounded-lg p-3 mr-6 max-w-[75%] ml-auto">
                  <p className="text-sm text-right text-gray-800">مرحباً! أريد حجز موعد</p>
                  <span className="text-xs text-gray-500 mt-1 block text-left">12:15</span>
                </div>
                
                <div className="bg-white rounded-lg p-3 ml-6 max-w-[75%] shadow-sm">
                  <p className="text-sm text-right">أهلاً بك! سأساعدك في حجز موعد</p>
                  <p className="text-sm mt-2 text-right">ما نوع الخدمة المطلوبة؟</p>
                  <span className="text-xs text-gray-500 mt-1 block text-left">12:16</span>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="p-3 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-3 py-2 border">
                  <span className="text-sm text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="bg-black rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="flex items-center justify-between text-white text-xs px-6 py-3">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white font-medium">9:41</div>
              <div className="flex items-center gap-1">
                <div className="text-xs">📶</div>
                <div className="text-xs">🔋</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden flex flex-col" style={{ height: 'calc(100% - 32px)' }}>
              <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                <div className="bg-white rounded-lg p-3 ml-6 max-w-[85%] shadow-sm">
                  <p className="text-sm text-right mb-3">اختر نوع الخدمة:</p>
                  <div className="space-y-2">
                    <button className="w-full p-2 bg-[#DCF8C6] text-gray-800 rounded text-sm text-right border border-[#25D366]">
                      ✅ استشارة طبية
                    </button>
                    <button className="w-full p-2 border border-gray-200 rounded text-sm text-right bg-white hover:bg-gray-50 transition-colors">
                      كشف عام
                    </button>
                    <button className="w-full p-2 border border-gray-200 rounded text-sm text-right bg-white hover:bg-gray-50 transition-colors">
                      متابعة حالة
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 mt-2 block text-left">12:17</span>
                </div>
              </div>

              <div className="p-3 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-3 py-2 border">
                  <span className="text-sm text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="bg-black rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="flex items-center justify-between text-white text-xs px-6 py-3">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white font-medium">9:41</div>
              <div className="flex items-center gap-1">
                <div className="text-xs">📶</div>
                <div className="text-xs">🔋</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden flex flex-col" style={{ height: 'calc(100% - 32px)' }}>
              <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                <div className="bg-white rounded-lg p-3 ml-6 max-w-[85%] shadow-sm">
                  <p className="text-sm text-right mb-3">اختر التاريخ والوقت:</p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded border">
                      <p className="text-sm font-semibold text-right mb-2">التاريخ</p>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="p-2 text-sm bg-white rounded border text-center hover:bg-gray-50 transition-colors">25</button>
                        <button className="p-2 text-sm bg-[#DCF8C6] text-gray-800 rounded border-[#25D366] border text-center">26</button>
                        <button className="p-2 text-sm bg-white rounded border text-center hover:bg-gray-50 transition-colors">27</button>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border">
                      <p className="text-sm font-semibold text-right mb-2">الوقت</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="p-2 text-sm bg-[#DCF8C6] text-gray-800 rounded border-[#25D366] border text-center">10:00</button>
                        <button className="p-2 text-sm bg-white rounded border text-center hover:bg-gray-50 transition-colors">11:00</button>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 mt-2 block text-left">12:18</span>
                </div>
              </div>

              <div className="p-3 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-3 py-2 border">
                  <span className="text-sm text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="bg-black rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="flex items-center justify-between text-white text-xs px-6 py-3">
              <div className="flex items-center gap-1">
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-white font-medium">9:41</div>
              <div className="flex items-center gap-1">
                <div className="text-xs">📶</div>
                <div className="text-xs">🔋</div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden flex flex-col" style={{ height: 'calc(100% - 32px)' }}>
              <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                <div className="bg-white rounded-lg p-3 ml-6 max-w-[85%] shadow-sm">
                  <p className="text-sm mb-3 text-right">تأكيد البيانات:</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-gray-50 p-2 rounded border text-right">
                      <span className="text-gray-600">الاسم:</span>
                      <span className="font-semibold mr-2">أحمد محمد</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded border text-right">
                      <span className="text-gray-600">الجوال:</span>
                      <span className="font-semibold mr-2">966501234567</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-[#25D366] text-white p-2 rounded text-sm hover:bg-[#1da851] transition-colors">
                    تأكيد الحجز
                  </button>
                  <span className="text-xs text-gray-500 block mt-2 text-left">12:19</span>
                </div>
              </div>

              <div className="p-3 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-3 py-2 border">
                  <span className="text-sm text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📤</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmation Message - Half Phone Frame */}
        <motion.div
          className="max-w-sm mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Half Phone Frame */}
            <div className="bg-black rounded-t-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '320px', height: '280px' }}>
              <div className="bg-white rounded-t-[2.5rem] h-full overflow-hidden">
                {/* iPhone Status Bar */}
                <div className="flex items-center justify-between text-black text-xs px-6 py-3 bg-white">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 bg-black rounded-full opacity-60"></div>
                      <div className="w-1 h-1 bg-black rounded-full opacity-80"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-black font-medium">9:41</div>
                  <div className="flex items-center gap-1">
                    <div className="text-xs">📶</div>
                    <div className="text-xs">🔋</div>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Autorply</div>
                    <div className="text-sm opacity-75">نشط الآن</div>
                  </div>
                </div>

                {/* Confirmation Message */}
                <div className="p-4 bg-[#E5DDD5]">
                  <div className="bg-white border-2 border-[#25D366] rounded-2xl p-4 text-right shadow-sm">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-[#DCF8C6] rounded-full flex items-center justify-center">
                        <span className="text-[#25D366] text-2xl">✅</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#25D366] text-center mb-3">تم حجز الموعد بنجاح!</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">التاريخ:</span>
                        <span className="text-gray-900">26 ديسمبر 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">الوقت:</span>
                        <span className="text-gray-900">10:00 صباحاً</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">الخدمة:</span>
                        <span className="text-gray-900">استشارة طبية</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">الموقع:</span>
                        <span className="text-gray-900">العيادة - الرياض</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">12:20</span>
                      <span className="text-[#25D366] text-lg">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom fade effect to simulate half frame */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

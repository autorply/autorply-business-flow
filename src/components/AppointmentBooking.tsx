
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
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '200px', height: '400px' }}>
            {/* iPhone Status Bar */}
            <div className="bg-black rounded-t-[2.2rem] px-4 py-2 mb-0.5">
              <div className="flex items-center justify-between text-white text-xs">
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
            </div>

            <div className="bg-white rounded-[2.2rem] h-full overflow-hidden flex flex-col">
              {/* WhatsApp Header */}
              <div className="bg-blue-600 text-white p-2.5 flex items-center gap-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-xs">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-2 space-y-2 flex-1 overflow-y-auto bg-gray-50">
                <div className="bg-blue-100 rounded-lg p-2 mr-4 max-w-[75%] ml-auto">
                  <p className="text-xs text-right text-blue-800">مرحباً! أريد حجز موعد</p>
                  <span className="text-xs text-gray-500">12:15</span>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-2 ml-4 max-w-[75%] shadow-sm">
                  <p className="text-xs text-right">أهلاً بك! سأساعدك في حجز موعد</p>
                  <p className="text-xs mt-1 text-right">ما نوع الخدمة المطلوبة؟</p>
                  <span className="text-xs text-gray-500">12:16</span>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="p-2 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-2 py-1.5 border">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '200px', height: '400px' }}>
            <div className="bg-black rounded-t-[2.2rem] px-4 py-2 mb-0.5">
              <div className="flex items-center justify-between text-white text-xs">
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
            </div>

            <div className="bg-white rounded-[2.2rem] h-full overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white p-2.5 flex items-center gap-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-xs">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-2 space-y-2 flex-1 overflow-y-auto bg-gray-50">
                <div className="bg-white border border-gray-200 rounded-lg p-2 ml-4 max-w-[85%] shadow-sm">
                  <p className="text-xs text-right mb-2">اختر نوع الخدمة:</p>
                  <div className="space-y-1">
                    <button className="w-full p-1.5 bg-blue-100 text-blue-800 rounded text-xs text-right border border-blue-200">
                      ✅ استشارة طبية
                    </button>
                    <button className="w-full p-1.5 border border-gray-200 rounded text-xs text-right bg-white">
                      كشف عام
                    </button>
                    <button className="w-full p-1.5 border border-gray-200 rounded text-xs text-right bg-white">
                      متابعة حالة
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">12:17</span>
                </div>
              </div>

              <div className="p-2 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-2 py-1.5 border">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '200px', height: '400px' }}>
            <div className="bg-black rounded-t-[2.2rem] px-4 py-2 mb-0.5">
              <div className="flex items-center justify-between text-white text-xs">
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
            </div>

            <div className="bg-white rounded-[2.2rem] h-full overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white p-2.5 flex items-center gap-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-xs">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-2 space-y-2 flex-1 overflow-y-auto bg-gray-50">
                <div className="bg-white border border-gray-200 rounded-lg p-2 ml-4 max-w-[85%] shadow-sm">
                  <p className="text-xs text-right mb-2">اختر التاريخ والوقت:</p>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded border">
                      <p className="text-xs font-semibold text-right mb-1">التاريخ</p>
                      <div className="grid grid-cols-3 gap-1">
                        <button className="p-1 text-xs bg-white rounded border text-center">25</button>
                        <button className="p-1 text-xs bg-blue-100 text-blue-800 rounded border-blue-200 border text-center">26</button>
                        <button className="p-1 text-xs bg-white rounded border text-center">27</button>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded border">
                      <p className="text-xs font-semibold text-right mb-1">الوقت</p>
                      <div className="grid grid-cols-2 gap-1">
                        <button className="p-1 text-xs bg-blue-100 text-blue-800 rounded border-blue-200 border text-center">10:00</button>
                        <button className="p-1 text-xs bg-white rounded border text-center">11:00</button>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">12:18</span>
                </div>
              </div>

              <div className="p-2 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-2 py-1.5 border">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '200px', height: '400px' }}>
            <div className="bg-black rounded-t-[2.2rem] px-4 py-2 mb-0.5">
              <div className="flex items-center justify-between text-white text-xs">
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
            </div>

            <div className="bg-white rounded-[2.2rem] h-full overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white p-2.5 flex items-center gap-2 flex-shrink-0">
                <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-xs">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-2 space-y-2 flex-1 overflow-y-auto bg-gray-50">
                <div className="bg-white border border-gray-200 rounded-lg p-2 ml-4 max-w-[85%] shadow-sm">
                  <p className="text-xs mb-2 text-right">تأكيد البيانات:</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="bg-gray-50 p-1.5 rounded border text-right">
                      <span className="text-gray-600">الاسم:</span>
                      <span className="font-semibold mr-2">أحمد محمد</span>
                    </div>
                    <div className="bg-gray-50 p-1.5 rounded border text-right">
                      <span className="text-gray-600">الجوال:</span>
                      <span className="font-semibold mr-2">966501234567</span>
                    </div>
                  </div>
                  <button className="w-full mt-2 bg-blue-600 text-white p-1.5 rounded text-xs hover:bg-blue-700 transition-colors">
                    تأكيد الحجز
                  </button>
                  <span className="text-xs text-gray-500 block mt-1">12:19</span>
                </div>
              </div>

              <div className="p-2 bg-gray-100 flex items-center gap-2 flex-shrink-0">
                <div className="flex-1 bg-white rounded-full px-2 py-1.5 border">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmation Message - Half Phone Frame with proper spacing */}
        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Half Phone Frame */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '280px', height: '240px' }}>
              <div className="bg-white rounded-t-[2.2rem] h-full overflow-hidden">
                {/* WhatsApp Header */}
                <div className="bg-blue-600 text-white p-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Autorply</div>
                    <div className="text-xs opacity-75">نشط الآن</div>
                  </div>
                </div>

                {/* Confirmation Message */}
                <div className="p-3 bg-gray-50">
                  <div className="bg-white border-2 border-blue-200 rounded-2xl p-3 text-right shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-lg">✅</span>
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-blue-600 text-center mb-2">تم حجز الموعد بنجاح!</h3>
                    
                    <div className="space-y-1.5 text-xs">
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
                    
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">12:20</span>
                      <span className="text-blue-600 text-sm">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom fade effect to simulate half frame */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

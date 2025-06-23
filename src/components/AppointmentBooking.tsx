
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
          <div className="relative mx-auto">
            {/* iPhone Frame with 3D effect */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '280px', height: '560px' }}>
              {/* Screen reflection effect */}
              <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
              
              {/* iPhone Status Bar */}
              <div className="relative z-10 flex items-center justify-between text-white text-sm px-6 py-4">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-2">
                  <div className="text-sm">📶</div>
                  <div className="text-sm">🔋</div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 56px)' }}>
                {/* WhatsApp Header */}
                <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[#128C7E] font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-base">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#ECE5DD]">
                  <div className="bg-[#DCF8C6] rounded-2xl p-4 mr-8 max-w-[80%] ml-auto shadow-sm">
                    <p className="text-sm text-right text-gray-800">مرحباً! أريد حجز موعد</p>
                    <span className="text-xs text-gray-500 mt-2 block text-left">12:15</span>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 ml-8 max-w-[80%] shadow-sm">
                    <p className="text-sm text-right">أهلاً بك! سأساعدك في حجز موعد</p>
                    <p className="text-sm mt-2 text-right">ما نوع الخدمة المطلوبة؟</p>
                    <span className="text-xs text-gray-500 mt-2 block text-left">12:16</span>
                  </div>
                </div>

                {/* WhatsApp Input */}
                <div className="p-4 bg-[#F0F0F0] flex items-center gap-3 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-4 py-3 border border-gray-200">
                    <span className="text-sm text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-lg">📤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '280px', height: '560px' }}>
              <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-sm px-6 py-4">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-2">
                  <div className="text-sm">📶</div>
                  <div className="text-sm">🔋</div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 56px)' }}>
                <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[#128C7E] font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-base">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#ECE5DD]">
                  <div className="bg-white rounded-2xl p-4 ml-8 max-w-[90%] shadow-sm">
                    <p className="text-sm text-right mb-4">اختر نوع الخدمة:</p>
                    <div className="space-y-3">
                      <button className="w-full p-3 bg-[#DCF8C6] text-gray-800 rounded-xl text-sm text-right border-2 border-[#25D366] shadow-sm">
                        ✅ استشارة طبية
                      </button>
                      <button className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm text-right bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        كشف عام
                      </button>
                      <button className="w-full p-3 border-2 border-gray-200 rounded-xl text-sm text-right bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        متابعة حالة
                      </button>
                    </div>
                    <span className="text-xs text-gray-500 mt-3 block text-left">12:17</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F0F0F0] flex items-center gap-3 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-4 py-3 border border-gray-200">
                    <span className="text-sm text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-lg">📤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '280px', height: '560px' }}>
              <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-sm px-6 py-4">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-2">
                  <div className="text-sm">📶</div>
                  <div className="text-sm">🔋</div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 56px)' }}>
                <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[#128C7E] font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-base">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#ECE5DD]">
                  <div className="bg-white rounded-2xl p-4 ml-8 max-w-[90%] shadow-sm">
                    <p className="text-sm text-right mb-4">اختر التاريخ والوقت:</p>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-3 rounded-xl border">
                        <p className="text-sm font-semibold text-right mb-3">التاريخ</p>
                        <div className="grid grid-cols-3 gap-2">
                          <button className="p-3 text-sm bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">25</button>
                          <button className="p-3 text-sm bg-[#DCF8C6] text-gray-800 rounded-lg border-2 border-[#25D366] text-center shadow-sm">26</button>
                          <button className="p-3 text-sm bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">27</button>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-xl border">
                        <p className="text-sm font-semibold text-right mb-3">الوقت</p>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="p-3 text-sm bg-[#DCF8C6] text-gray-800 rounded-lg border-2 border-[#25D366] text-center shadow-sm">10:00</button>
                          <button className="p-3 text-sm bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">11:00</button>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-3 block text-left">12:18</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F0F0F0] flex items-center gap-3 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-4 py-3 border border-gray-200">
                    <span className="text-sm text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-lg">📤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '280px', height: '560px' }}>
              <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-sm px-6 py-4">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-2">
                  <div className="text-sm">📶</div>
                  <div className="text-sm">🔋</div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 56px)' }}>
                <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[#128C7E] font-bold text-lg">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-base">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-4 space-y-4 flex-1 overflow-y-auto bg-[#ECE5DD]">
                  <div className="bg-white rounded-2xl p-4 ml-8 max-w-[90%] shadow-sm">
                    <p className="text-sm mb-4 text-right">تأكيد البيانات:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-gray-50 p-3 rounded-lg border text-right">
                        <span className="text-gray-600">الاسم:</span>
                        <span className="font-semibold mr-2">أحمد محمد</span>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg border text-right">
                        <span className="text-gray-600">الجوال:</span>
                        <span className="font-semibold mr-2">966501234567</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-[#25D366] text-white p-3 rounded-xl text-sm hover:bg-[#1da851] transition-colors shadow-sm">
                      تأكيد الحجز
                    </button>
                    <span className="text-xs text-gray-500 block mt-3 text-left">12:19</span>
                  </div>
                </div>

                <div className="p-4 bg-[#F0F0F0] flex items-center gap-3 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-4 py-3 border border-gray-200">
                    <span className="text-sm text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-10 h-10 bg-[#128C7E] rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-lg">📤</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmation Message - Half Phone Frame */}
        <motion.div
          className="max-w-md mx-auto mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Half Phone Frame with enhanced design */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-t-[2.5rem] p-3 shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300" style={{ width: '350px', height: '320px' }}>
              {/* Screen reflection effect */}
              <div className="absolute inset-3 bg-gradient-to-br from-white/10 to-transparent rounded-t-[2rem] pointer-events-none"></div>
              
              <div className="bg-white rounded-t-[2rem] h-full overflow-hidden shadow-inner">
                {/* iPhone Status Bar */}
                <div className="relative z-10 flex items-center justify-between text-black text-sm px-6 py-4 bg-white">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-black rounded-full opacity-60"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full opacity-80"></div>
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-black font-semibold">9:41</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm">📶</div>
                    <div className="text-sm">🔋</div>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[#128C7E] font-bold text-xl">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                {/* Confirmation Message */}
                <div className="p-5 bg-[#ECE5DD]">
                  <div className="bg-white border-2 border-[#25D366] rounded-2xl p-5 text-right shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 bg-[#DCF8C6] rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-[#25D366] text-3xl">✅</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#25D366] text-center mb-4">تم حجز الموعد بنجاح!</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-1">
                        <span className="font-semibold text-gray-700">التاريخ:</span>
                        <span className="text-gray-900">26 ديسمبر 2024</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-semibold text-gray-700">الوقت:</span>
                        <span className="text-gray-900">10:00 صباحاً</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-semibold text-gray-700">الخدمة:</span>
                        <span className="text-gray-900">استشارة طبية</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="font-semibold text-gray-700">الموقع:</span>
                        <span className="text-gray-900">العيادة - الرياض</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">12:20</span>
                      <span className="text-[#25D366] text-xl">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent rounded-b-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

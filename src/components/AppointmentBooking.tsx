
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

      <div className="max-w-6xl mx-auto">
        {/* WhatsApp Booking Flow */}
        <motion.div
          className="grid lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Phone 1 - Initial Contact */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '250px', height: '480px' }}>
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              
              {/* iPhone Status Bar */}
              <div className="relative z-10 flex items-center justify-between text-white text-xs px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">📶</span>
                  <span className="text-xs">🔋</span>
                </div>
              </div>

              <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 44px)' }}>
                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img 
                      src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" 
                      alt="Autorply Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Autorply</div>
                    <div className="text-xs opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                  <div className="bg-[#DCF8C6] rounded-2xl p-3 mr-6 max-w-[75%] ml-auto shadow-sm">
                    <p className="text-xs text-right text-gray-800">مرحباً! أريد حجز موعد</p>
                    <span className="text-[10px] text-gray-500 mt-1 block text-left">12:15</span>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-3 ml-6 max-w-[75%] shadow-sm">
                    <p className="text-xs text-right">أهلاً بك! سأساعدك في حجز موعد</p>
                    <p className="text-xs mt-1 text-right">ما نوع الخدمة المطلوبة؟</p>
                    <span className="text-[10px] text-gray-500 mt-1 block text-left">12:16</span>
                  </div>
                </div>

                {/* WhatsApp Input */}
                <div className="p-3 bg-[#F0F0F0] flex items-center gap-2 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 border border-gray-200">
                    <span className="text-xs text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '250px', height: '480px' }}>
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-xs px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">📶</span>
                  <span className="text-xs">🔋</span>
                </div>
              </div>

              <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 44px)' }}>
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img 
                      src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" 
                      alt="Autorply Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Autorply</div>
                    <div className="text-xs opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                  <div className="bg-white rounded-2xl p-3 ml-6 max-w-[85%] shadow-sm">
                    <p className="text-xs text-right mb-3">اختر نوع الخدمة:</p>
                    <div className="space-y-2">
                      <button className="w-full p-2 bg-[#DCF8C6] text-gray-800 rounded-xl text-xs text-right border-2 border-[#25D366] shadow-sm">
                        ✅ استشارة طبية
                      </button>
                      <button className="w-full p-2 border-2 border-gray-200 rounded-xl text-xs text-right bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        كشف عام
                      </button>
                      <button className="w-full p-2 border-2 border-gray-200 rounded-xl text-xs text-right bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        متابعة حالة
                      </button>
                    </div>
                    <span className="text-[10px] text-gray-500 mt-2 block text-left">12:17</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F0F0F0] flex items-center gap-2 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 border border-gray-200">
                    <span className="text-xs text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '250px', height: '480px' }}>
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-xs px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">📶</span>
                  <span className="text-xs">🔋</span>
                </div>
              </div>

              <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 44px)' }}>
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img 
                      src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" 
                      alt="Autorply Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Autorply</div>
                    <div className="text-xs opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-3 flex-1 overflow-hidden bg-[#E5DDD5]">
                  <div className="bg-white rounded-2xl p-3 ml-4 shadow-sm h-full overflow-y-auto">
                    <p className="text-xs text-right mb-3">اختر التاريخ والوقت:</p>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-2 rounded-xl border">
                        <p className="text-xs font-semibold text-right mb-2">التاريخ</p>
                        <div className="grid grid-cols-3 gap-1">
                          <button className="p-2 text-xs bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">25</button>
                          <button className="p-2 text-xs bg-[#DCF8C6] text-gray-800 rounded-lg border-2 border-[#25D366] text-center shadow-sm">26</button>
                          <button className="p-2 text-xs bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">27</button>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-xl border">
                        <p className="text-xs font-semibold text-right mb-2">الوقت</p>
                        <div className="grid grid-cols-2 gap-1">
                          <button className="p-2 text-xs bg-[#DCF8C6] text-gray-800 rounded-lg border-2 border-[#25D366] text-center shadow-sm">10:00</button>
                          <button className="p-2 text-xs bg-white rounded-lg border shadow-sm text-center hover:bg-gray-50 transition-colors">11:00</button>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500 mt-2 block text-left">12:18</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F0F0F0] flex items-center gap-2 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 border border-gray-200">
                    <span className="text-xs text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="relative mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{ width: '250px', height: '480px' }}>
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[1.5rem] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-center justify-between text-white text-xs px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                    <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs">📶</span>
                  <span className="text-xs">🔋</span>
                </div>
              </div>

              <div className="bg-white rounded-[1.5rem] overflow-hidden flex flex-col shadow-inner" style={{ height: 'calc(100% - 44px)' }}>
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img 
                      src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" 
                      alt="Autorply Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Autorply</div>
                    <div className="text-xs opacity-90">نشط الآن</div>
                  </div>
                </div>

                <div className="p-3 space-y-3 flex-1 overflow-y-auto bg-[#E5DDD5]">
                  <div className="bg-white rounded-2xl p-3 ml-6 max-w-[85%] shadow-sm">
                    <p className="text-xs mb-3 text-right">تأكيد البيانات:</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-gray-50 p-2 rounded-lg border text-right">
                        <span className="text-gray-600">الاسم:</span>
                        <span className="font-semibold mr-2">أحمد محمد</span>
                      </div>
                      <div className="bg-gray-50 p-2 rounded-lg border text-right">
                        <span className="text-gray-600">الجوال:</span>
                        <span className="font-semibold mr-2">966501234567</span>
                      </div>
                    </div>
                    <button className="w-full mt-3 bg-[#25D366] text-white p-2 rounded-xl text-xs hover:bg-[#1da851] transition-colors shadow-sm">
                      تأكيد الحجز
                    </button>
                    <span className="text-[10px] text-gray-500 block mt-2 text-left">12:19</span>
                  </div>
                </div>

                <div className="p-3 bg-[#F0F0F0] flex items-center gap-2 flex-shrink-0">
                  <div className="flex-1 bg-white rounded-full px-3 py-2 border border-gray-200">
                    <span className="text-xs text-gray-500">اكتب رسالة...</span>
                  </div>
                  <div className="w-8 h-8 bg-[#075E54] rounded-full flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
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
            {/* Half Phone Frame with enhanced design */}
            <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-t-[2rem] p-2 shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300" style={{ width: '300px', height: '280px' }}>
              {/* Screen reflection effect */}
              <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-t-[1.5rem] pointer-events-none"></div>
              
              <div className="bg-white rounded-t-[1.5rem] h-full overflow-hidden shadow-inner">
                {/* iPhone Status Bar */}
                <div className="relative z-10 flex items-center justify-between text-black text-xs px-4 py-3 bg-white">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-black rounded-full opacity-60"></div>
                      <div className="w-1 h-1 bg-black rounded-full opacity-80"></div>
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-black font-semibold">9:41</div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">📶</span>
                    <span className="text-xs">🔋</span>
                  </div>
                </div>

                {/* WhatsApp Header */}
                <div className="bg-[#075E54] text-white p-3 flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                    <img 
                      src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" 
                      alt="Autorply Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-base">Autorply</div>
                    <div className="text-sm opacity-90">نشط الآن</div>
                  </div>
                </div>

                {/* Confirmation Message - Received by Client */}
                <div className="p-4 bg-[#E5DDD5]">
                  <div className="bg-white rounded-2xl p-4 text-right shadow-lg ml-8 max-w-[85%]">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-[#E8F5E8] rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-[#25D366] text-2xl">✅</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#25D366] text-center mb-3">تم حجز الموعد بنجاح!</h3>
                    
                    <div className="space-y-2 text-sm">
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
                    </div>
                    
                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">12:20</span>
                      <span className="text-[#25D366] text-lg">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent rounded-b-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

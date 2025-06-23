
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
          className="grid lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Phone 1 - Initial Contact */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            {/* iPhone Status Bar */}
            <div className="bg-black rounded-t-[2.5rem] px-6 py-2 mb-1">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="text-xs">📶</div>
                  <div className="text-xs">📶</div>
                  <div className="text-xs">🔋</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 h-80 overflow-y-auto">
                <div className="bg-green-100 rounded-lg p-2 mr-6">
                  <p className="text-xs text-right">مرحباً! أريد حجز موعد</p>
                  <span className="text-xs text-gray-500">12:15</span>
                </div>
                
                <div className="bg-white border rounded-lg p-2 ml-6">
                  <p className="text-xs">أهلاً بك! سأساعدك في حجز موعد</p>
                  <p className="text-xs mt-1">ما نوع الخدمة المطلوبة؟</p>
                  <span className="text-xs text-gray-500">12:16</span>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="p-2 bg-gray-50 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-3 py-2">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="bg-black rounded-t-[2.5rem] px-6 py-2 mb-1">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="text-xs">📶</div>
                  <div className="text-xs">📶</div>
                  <div className="text-xs">🔋</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
              <div className="bg-green-600 text-white p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 h-80 overflow-y-auto">
                <div className="bg-white border rounded-lg p-2 ml-6">
                  <p className="text-xs">اختر نوع الخدمة:</p>
                  <div className="mt-2 space-y-1">
                    <button className="w-full p-2 bg-blue-100 text-blue-800 rounded text-xs text-right">
                      ✅ استشارة طبية
                    </button>
                    <button className="w-full p-2 border rounded text-xs text-right">
                      كشف عام
                    </button>
                    <button className="w-full p-2 border rounded text-xs text-right">
                      متابعة حالة
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">12:17</span>
                </div>
              </div>

              <div className="p-2 bg-gray-50 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-3 py-2">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="bg-black rounded-t-[2.5rem] px-6 py-2 mb-1">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="text-xs">📶</div>
                  <div className="text-xs">📶</div>
                  <div className="text-xs">🔋</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
              <div className="bg-green-600 text-white p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 h-80 overflow-y-auto">
                <div className="bg-white border rounded-lg p-2 ml-6">
                  <p className="text-xs">اختر التاريخ والوقت:</p>
                  <div className="mt-2">
                    <div className="bg-gray-100 p-2 rounded mb-2">
                      <p className="text-xs font-semibold">التاريخ</p>
                      <div className="grid grid-cols-3 gap-1 mt-1">
                        <button className="p-1 text-xs bg-white rounded">25</button>
                        <button className="p-1 text-xs bg-blue-100 text-blue-800 rounded">26</button>
                        <button className="p-1 text-xs bg-white rounded">27</button>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-2 rounded">
                      <p className="text-xs font-semibold">الوقت</p>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        <button className="p-1 text-xs bg-blue-100 text-blue-800 rounded">10:00</button>
                        <button className="p-1 text-xs bg-white rounded">11:00</button>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">12:18</span>
                </div>
              </div>

              <div className="p-2 bg-gray-50 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-3 py-2">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl mx-auto" style={{ width: '240px', height: '480px' }}>
            <div className="bg-black rounded-t-[2.5rem] px-6 py-2 mb-1">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="text-white font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="text-xs">📶</div>
                  <div className="text-xs">📶</div>
                  <div className="text-xs">🔋</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
              <div className="bg-green-600 text-white p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3 space-y-3 h-80 overflow-y-auto">
                <div className="bg-white border rounded-lg p-2 ml-6">
                  <p className="text-xs mb-2">تأكيد البيانات:</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-600">الاسم:</span>
                      <span className="font-semibold mr-2">أحمد محمد</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-600">الجوال:</span>
                      <span className="font-semibold mr-2">966501234567</span>
                    </div>
                  </div>
                  <button className="w-full mt-2 bg-green-600 text-white p-2 rounded text-xs">
                    تأكيد الحجز
                  </button>
                  <span className="text-xs text-gray-500 block mt-1">12:19</span>
                </div>
              </div>

              <div className="p-2 bg-gray-50 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-3 py-2">
                  <span className="text-xs text-gray-500">اكتب رسالة...</span>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">📤</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmation Message */}
        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl" style={{ width: '300px', height: '200px' }}>
            <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
              <div className="bg-green-600 text-white p-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Autorply</div>
                  <div className="text-xs opacity-75">نشط الآن</div>
                </div>
              </div>

              <div className="p-3">
                <div className="bg-white border rounded-lg p-3 text-right">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✅</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-green-600 text-center mb-2">تم حجز الموعد بنجاح!</h3>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="font-semibold">التاريخ:</span>
                      <span>26 ديسمبر 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">الوقت:</span>
                      <span>10:00 صباحاً</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">الخدمة:</span>
                      <span>استشارة طبية</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">الموقع:</span>
                      <span>العيادة - الرياض</span>
                    </div>
                  </div>
                  
                  <span className="text-xs text-gray-500 block mt-2">12:20 ✓✓</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

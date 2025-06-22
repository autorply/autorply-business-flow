
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
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <div className="bg-gray-900 rounded-t-3xl px-4 py-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
                <div className="text-white text-sm">2:30</div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-green-600 text-white p-3 flex items-center gap-3 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Autorply</div>
                <div className="text-xs opacity-75">Business Account</div>
              </div>
            </div>

            <div className="space-y-3 px-2">
              <div className="bg-green-100 rounded-lg p-3 mr-8">
                <p className="text-sm text-right">مرحباً! أريد حجز موعد</p>
                <span className="text-xs text-gray-500">12:15</span>
              </div>
              
              <div className="bg-white border rounded-lg p-3 ml-8">
                <p className="text-sm">أهلاً بك! سأساعدك في حجز موعد</p>
                <p className="text-sm mt-1">ما نوع الخدمة المطلوبة؟</p>
                <span className="text-xs text-gray-500">12:16</span>
              </div>
            </div>

            <div className="mt-4 p-2 bg-gray-50 rounded-full flex items-center gap-2">
              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">اكتب رسالة...</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📤</span>
              </div>
            </div>
          </div>

          {/* Phone 2 - Service Selection */}
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <div className="bg-gray-900 rounded-t-3xl px-4 py-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
                <div className="text-white text-sm">2:30</div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-green-600 text-white p-3 flex items-center gap-3 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Autorply</div>
                <div className="text-xs opacity-75">Business Account</div>
              </div>
            </div>

            <div className="space-y-3 px-2">
              <div className="bg-white border rounded-lg p-3 ml-8">
                <p className="text-sm">اختر نوع الخدمة:</p>
                <div className="mt-2 space-y-2">
                  <button className="w-full p-2 bg-blue-100 text-blue-800 rounded text-sm text-right">
                    ✅ استشارة طبية
                  </button>
                  <button className="w-full p-2 border rounded text-sm text-right">
                    كشف عام
                  </button>
                  <button className="w-full p-2 border rounded text-sm text-right">
                    متابعة حالة
                  </button>
                </div>
                <span className="text-xs text-gray-500">12:17</span>
              </div>
            </div>

            <div className="mt-4 p-2 bg-gray-50 rounded-full flex items-center gap-2">
              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">اكتب رسالة...</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📤</span>
              </div>
            </div>
          </div>

          {/* Phone 3 - Date & Time Selection */}
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <div className="bg-gray-900 rounded-t-3xl px-4 py-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
                <div className="text-white text-sm">2:30</div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-green-600 text-white p-3 flex items-center gap-3 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Autorply</div>
                <div className="text-xs opacity-75">Business Account</div>
              </div>
            </div>

            <div className="space-y-3 px-2">
              <div className="bg-white border rounded-lg p-3 ml-8">
                <p className="text-sm">اختر التاريخ والوقت المناسب:</p>
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

            <div className="mt-4 p-2 bg-gray-50 rounded-full flex items-center gap-2">
              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">اكتب رسالة...</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📤</span>
              </div>
            </div>
          </div>

          {/* Phone 4 - Personal Details */}
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <div className="bg-gray-900 rounded-t-3xl px-4 py-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
                <div className="text-white text-sm">2:30</div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* WhatsApp Header */}
            <div className="bg-green-600 text-white p-3 flex items-center gap-3 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Autorply</div>
                <div className="text-xs opacity-75">Business Account</div>
              </div>
            </div>

            <div className="space-y-3 px-2">
              <div className="bg-white border rounded-lg p-3 ml-8">
                <p className="text-sm mb-2">برجاء تأكيد بياناتك:</p>
                <div className="space-y-2 text-xs">
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-gray-600">الاسم:</span>
                    <span className="font-semibold mr-2">أحمد محمد</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="text-gray-600">رقم الجوال:</span>
                    <span className="font-semibold mr-2">966501234567</span>
                  </div>
                </div>
                <button className="w-full mt-2 bg-green-600 text-white p-2 rounded text-sm">
                  تأكيد الحجز
                </button>
                <span className="text-xs text-gray-500 block mt-1">12:19</span>
              </div>
            </div>

            <div className="mt-4 p-2 bg-gray-50 rounded-full flex items-center gap-2">
              <div className="flex-1 text-right">
                <span className="text-sm text-gray-500">اكتب رسالة...</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📤</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Confirmation Message */}
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl p-6 shadow-xl border-t-4 border-green-500">
            <div className="bg-green-600 text-white p-3 flex items-center gap-3 rounded-lg mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <div className="font-semibold text-sm">Autorply</div>
                <div className="text-xs opacity-75">Business Account</div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4 text-right">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✅</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-green-600 text-center mb-3">تم حجز الموعد بنجاح!</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">التاريخ:</span>
                  <span>الثلاثاء 26 ديسمبر 2024</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">الوقت:</span>
                  <span>10:00 صباحاً</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">نوع الخدمة:</span>
                  <span>استشارة طبية</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">الموقع:</span>
                  <span>العيادة الرئيسية - الرياض</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-blue-800">
                  📱 سيتم إرسال تذكير قبل الموعد بـ 24 ساعة
                </p>
              </div>
              
              <span className="text-xs text-gray-500 block mt-2">12:20 ✓✓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentBooking;

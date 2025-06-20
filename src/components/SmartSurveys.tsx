
import { motion } from 'framer-motion';

const SmartSurveys = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">استبيانات ذكية</h2>
        <p className="text-xl text-gray-600">مقارنة بين التجربة التقليدية والحديثة في الاستبيانات</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Google Forms - Traditional */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm">✕</span>
            </div>
          </div>
          <div className="relative w-64 h-[480px] bg-gray-100 rounded-[2rem] p-1 shadow-xl mx-auto border border-gray-200">
            <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full"></div>
              <div className="pt-8 p-4 h-full">
                <div className="bg-purple-600 text-white p-2 text-center text-sm mb-4 rounded">
                  Google Forms
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-300 p-3 rounded text-sm">
                    <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                    <input type="text" className="w-full border-b border-gray-300 pb-1" />
                  </div>
                  <div className="border border-gray-300 p-3 rounded text-sm">
                    <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input type="email" className="w-full border-b border-gray-300 pb-1" />
                  </div>
                  <div className="border border-gray-300 p-3 rounded text-sm">
                    <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                    <input type="tel" className="w-full border-b border-gray-300 pb-1" />
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded text-sm">
                    إرسال
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-red-600 font-semibold">أسلوب تقليدي قديم</p>
        </motion.div>

        {/* WhatsApp Flow - Modern */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sm">✓</span>
            </div>
          </div>
          <div className="relative w-64 h-[480px] bg-gray-100 rounded-[2rem] p-1 shadow-xl mx-auto border border-gray-200">
            <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden relative">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-full"></div>
              
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white px-4 py-4 pt-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Autorply</h3>
                  <p className="text-xs opacity-75">متصل الآن</p>
                </div>
              </div>

              {/* Form Content */}
              <div className="bg-[#efeae2] p-4 flex-1 overflow-y-auto" style={{ height: 'calc(100% - 140px)' }}>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-sm font-semibold mb-3 text-center text-blue-600">استبيان سريع</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">الاسم</label>
                      <input type="text" className="w-full p-2 border border-gray-200 rounded text-sm" placeholder="أدخل اسمك" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">البريد الإلكتروني</label>
                      <input type="email" className="w-full p-2 border border-gray-200 rounded text-sm" placeholder="email@example.com" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">التقييم</label>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(star => (
                          <span key={star} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-green-500 text-white py-2 rounded text-sm font-medium">
                      إرسال
                    </button>
                  </div>
                </div>
              </div>

              {/* Autorply Badge */}
              <div className="absolute bottom-2 left-0 right-0 text-center">
                <p className="text-xs text-gray-500 bg-white/80 inline-block px-2 py-1 rounded">تديره Autorply</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-green-600 font-semibold">التجربة الحديثة والأكثر تفاعلاً</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSurveys;

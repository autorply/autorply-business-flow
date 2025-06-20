
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
          <div className="absolute -top-4 -right-4 z-10">
            <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
              ❌
            </div>
          </div>
          <div className="relative w-72 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl mx-auto">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
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
          <div className="absolute -top-4 -right-4 z-10">
            <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
              ✅
            </div>
          </div>
          <div className="relative w-72 h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl mx-auto">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white px-4 py-4 pt-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <img src="https://autorply.sa/assets/img/logo_64.svg" alt="Autorply" className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Autorply</h3>
                  <p className="text-xs opacity-75">متصل الآن</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="bg-[#efeae2] p-4 flex-1 space-y-3 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-xs">
                    <p className="text-sm">مرحباً! يرجى ملء البيانات التالية:</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d8fdd2] p-3 rounded-lg rounded-tr-none max-w-xs">
                    <p className="text-sm">أحمد محمد</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-xs">
                    <p className="text-sm">شكراً أحمد! ما هو بريدك الإلكتروني؟</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#d8fdd2] p-3 rounded-lg rounded-tr-none max-w-xs">
                    <p className="text-sm">ahmed@email.com</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 bg-white flex items-center">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <input type="text" placeholder="اكتب رسالة..." className="w-full bg-transparent outline-none text-sm text-right" />
                </div>
              </div>

              {/* Autorply Badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gray-100 text-center py-1">
                <p className="text-xs text-gray-600">تديره شركة Autorply</p>
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

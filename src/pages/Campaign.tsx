
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLayout from '../components/layout/PageLayout';

const Campaign = () => {
  return (
    <PageLayout 
      structuredDataType="Service"
      customMetaTags={{
        title: 'حملات واتساب الرسمية - اوتوربلاي | قوالب معتمدة من ميتا',
        description: 'أنشئ حملات واتساب رسمية معتمدة من Meta باستخدام قوالب رسائل تفاعلية وتقارير أداء.',
        keywords: 'حملات واتساب, قوالب واتساب, Meta, رسائل تفاعلية, تسويق واتساب, WhatsApp API',
        url: 'https://autorply.sa/campaign'
      }}
    >
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-blue-700 mb-6">إنشاء حملات واتساب الرسمية</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                أنشئ حملات واتساب احترافية ومعتمدة من ميتا لتصل إلى عملائك بطريقة فعّالة ومؤثرة
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Steps Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">خطوات إنشاء الحملة</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "كتابة قالب واتساب رسمي",
                      description: "قم بإنشاء قالب الرسالة مع العنوان والمحتوى والأزرار التفاعلية"
                    },
                    {
                      step: 2,
                      title: "إرساله للمراجعة من ميتا",
                      description: "يتم إرسال القالب تلقائياً لمراجعة فريق ميتا للتأكد من الامتثال"
                    },
                    {
                      step: 3,
                      title: "انتظار الموافقة",
                      description: "عادة ما تستغرق عملية المراجعة من 24-48 ساعة للحصول على الموافقة"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Message Example */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="max-w-sm w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">مثال على قالب الرسالة</h3>
                  
                  {/* WhatsApp Message Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-lg">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="bg-[#E8F5E8] rounded-xl p-4 text-right">
                        <h4 className="font-bold text-[#25D366] text-lg mb-1">عرض خاص لك! 🎉</h4>
                        <img 
                          src="https://autorply.sa/imgs/Autorply_offer.webp?auto=format&fit=crop&w=400&h=200" 
                          alt="عرض خاص" 
                          className="w-full h-32 object-cover rounded-lg mt-2"
                        />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="mb-4 text-right">
                      <p className="text-gray-800 leading-relaxed">
                        مرحباً محمد! 👋
                        <br /><br />
                        لديك خصم حصري بنسبة 20% على جميع منتجاتنا.
                        <br /><br />
                        العرض ساري حتى 31 ديسمبر فقط!
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mb-4 text-right">
                      <p className="text-sm text-gray-500 border-t pt-3">
                        شكراً لاختيارك متجرنا ❤️
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <button className="w-full bg-[#25D366] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#1da851] transition-colors">
                        🛒 تسوق الآن
                      </button>
                      <button className="w-full border-2 border-[#25D366] text-[#25D366] py-3 px-4 rounded-xl font-medium hover:bg-[#E8F5E8] transition-colors">
                        📞 تواصل معنا
                      </button>
                    </div>

                    {/* Message info */}
                    <div className="mt-4 text-left">
                      <span className="text-xs text-gray-400">12:30 ✓✓</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">تعليمات الحملات الإعلانية</h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  <div className="border-r-4 border-blue-500 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">📝 كتابة المحتوى</h3>
                    <p className="text-gray-700">
                      تأكد من أن المحتوى واضح ومختصر، واستخدم المتغيرات لتخصيص الرسائل حسب كل عميل.
                    </p>
                  </div>

                  <div className="border-r-4 border-green-500 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">✅ معايير الموافقة</h3>
                    <p className="text-gray-700">
                      يجب أن تتوافق الرسائل مع سياسات ميتا، وتجنب المحتوى المضلل أو المزعج.
                    </p>
                  </div>

                  <div className="border-r-4 border-yellow-500 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">⏰ أوقات الإرسال</h3>
                    <p className="text-gray-700">
                      اختر الأوقات المناسبة لجمهورك المستهدف لضمان أعلى معدلات الفتح والتفاعل.
                    </p>
                  </div>

                  <div className="border-r-4 border-purple-500 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">📊 قياس الأداء</h3>
                    <p className="text-gray-700">
                      راقب معدلات التسليم والفتح والنقر لتحسين أداء حملاتك المستقبلية.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 text-center font-medium">
                    💡 نصيحة: ابدأ بحملات تجريبية صغيرة قبل إطلاق الحملات الكبيرة لضمان أفضل النتائج
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </PageLayout>
  );
};

export default Campaign;

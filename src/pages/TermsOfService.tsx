
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl font-bold text-blue-700 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              شروط الخدمة
            </motion.h1>
            
            <motion.div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                مرحباً بكم في أوتوربلاي. باستخدامكم لخدماتنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">قبول الشروط</h2>
              <p>
                باستخدام منصة أوتوربلاي، فإنكم تؤكدون موافقتكم على جميع الشروط والأحكام المذكورة هنا.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الاستخدام المسموح</h2>
              <p>
                يجب استخدام خدماتنا بطريقة قانونية ومسؤولة، وعدم إرسال محتوى مضلل أو مسيء أو غير قانوني.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">المسؤوليات</h2>
              <p>
                أنتم مسؤولون عن المحتوى الذي ترسلونه والامتثال لقوانين واتساب ولوائح الاتصالات في المملكة.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">الفوترة والدفع</h2>
              <p>
                يتم تحصيل الرسوم وفقاً للباقة المختارة، وتستحق الدفع في المواعيد المحددة.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">إنهاء الخدمة</h2>
              <p>
                يحق لنا إيقاف الخدمة في حالة انتهاك هذه الشروط أو عدم الدفع في المواعيد المحددة.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التحديثات</h2>
              <p>
                نحتفظ بالحق في تعديل هذه الشروط مع إشعاركم بالتغييرات المهمة مسبقاً.
              </p>

              <p className="mt-8 text-sm text-gray-500">
                آخر تحديث: يناير 2025
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

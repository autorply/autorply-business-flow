
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              سياسة الخصوصية
            </motion.h1>
            
            <motion.div
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                نحن في أوتوربلاي نلتزم بحماية خصوصيتكم وبياناتكم الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتكم.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">المعلومات التي نجمعها</h2>
              <p>
                نجمع المعلومات التي تقدمونها لنا مباشرة عند التسجيل أو استخدام خدماتنا، بما في ذلك الاسم والبريد الإلكتروني ورقم الهاتف ومعلومات الشركة.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">كيفية استخدام المعلومات</h2>
              <p>
                نستخدم معلوماتكم لتقديم خدماتنا وتحسينها، والتواصل معكم، وإرسال التحديثات المهمة، وضمان أمان حساباتكم.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">حماية البيانات</h2>
              <p>
                نتخذ إجراءات أمنية متقدمة لحماية بياناتكم، بما في ذلك التشفير والمراقبة المستمرة وقيود الوصول الصارمة.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">مشاركة المعلومات</h2>
              <p>
                لا نشارك معلوماتكم الشخصية مع أطراف ثالثة إلا بموافقتكم الصريحة أو عند الضرورة القانونية.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">حقوقكم</h2>
              <p>
                لديكم الحق في الوصول إلى بياناتكم وتصحيحها أو حذفها. يمكنكم التواصل معنا في أي وقت لممارسة هذه الحقوق.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">التحديثات</h2>
              <p>
                قد نحدث هذه السياسة من حين لآخر. سنقوم بإشعاركم بأي تغييرات مهمة عبر البريد الإلكتروني أو من خلال منصتنا.
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

export default PrivacyPolicy;

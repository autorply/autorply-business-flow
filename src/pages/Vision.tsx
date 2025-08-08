
import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLayout from '../components/layout/PageLayout';

const Vision = () => {
  const visionPoints = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الرائدين في تقديم حلول التواصل الذكي التي تمكن الأعمال من تحقيق نموها وازدهارها في العصر الرقمي.'
    },
    {
      icon: Lightbulb,
      title: 'رسالتنا',
      description: 'نسعى لتبسيط التواصل بين الأعمال وعملائها من خلال تقنيات مبتكرة وحلول ذكية تعتمد على منصة واتساب.'
    },
    {
      icon: Globe,
      title: 'قيمنا',
      description: 'الابتكار، الجودة، الموثوقية، وخدمة العملاء المتميزة هي القيم الأساسية التي نؤمن بها ونطبقها في كل ما نقوم به.'
    },
    {
      icon: Users,
      title: 'التزامنا',
      description: 'نلتزم بتقديم أفضل الحلول التقنية مع الدعم المستمر لعملائنا لضمان نجاحهم وتحقيق أهدافهم التجارية.'
    }
  ];

  return (
    <PageLayout 
      structuredDataType="Article"
      includeOrganization={true}
      customMetaTags={{
        title: 'رؤيتنا للمستقبل - اوتوربلاي | مستقبل التواصل الذكي',
        description: 'تعرف على رؤية ورسالة وقيم اوتوربلاي. نؤمن بقوة التكنولوجيا في تحويل طريقة تواصل الأعمال مع العملاء لبناء مستقبل رقمي أكثر ذكاءً وفعالية.',
        keywords: 'رؤية أوتوربلاي, رسالة الشركة, قيم الشركة, رؤية السعودية 2030, التحول الرقمي, مستقبل التواصل',
        url: 'https://autorply.sa/vision'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
        <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              رؤيتنا للمستقبل
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نؤمن بقوة التكنولوجيا في تحويل طريقة تواصل الأعمال مع عملائها، ونسعى لبناء مستقبل رقمي أكثر ذكاءً وفعالية
            </motion.p>
          </div>
        </section>

        {/* Vision Points */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <point.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              أهدافنا المستقبلية
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">2030</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">رؤية المملكة</h3>
                <p className="text-gray-600">المساهمة في تحقيق أهداف رؤية السعودية 2030 من خلال التحول الرقمي</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">عملاء راضون</h3>
                <p className="text-gray-600">نسعى لخدمة أكثر من 100 ألف منشأة في المنطقة</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">AI</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الذكاء الاصطناعي</h3>
                <p className="text-gray-600">دمج تقنيات الذكاء الاصطناعي في جميع حلولنا</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Vision;


import { motion } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessStory = () => {
  const milestones = [
    {
      year: '2020',
      title: 'البداية',
      description: 'تأسيس أوتوربلاي برؤية تطوير حلول التواصل الذكي للأعمال السعودية'
    },
    {
      year: '2021',
      title: 'النمو السريع',
      description: 'وصلنا إلى أكثر من 1000 عميل وأطلقنا أول حلولنا المتقدمة'
    },
    {
      year: '2022',
      title: 'التوسع',
      description: 'توسعنا في الخدمات وأضفنا تكاملات جديدة مع أكثر من 20 منصة'
    },
    {
      year: '2023',
      title: 'الاعتماد الرسمي',
      description: 'حصلنا على اعتماد Meta كشريك رسمي لحلول واتساب الأعمال'
    },
    {
      year: '2024',
      title: 'الريادة',
      description: 'أصبحنا الرائدين في المنطقة مع خدمة أكثر من 10,000 منشأة'
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: '10,000+',
      title: 'عميل نشط',
      description: 'منشآت تثق بحلولنا'
    },
    {
      icon: TrendingUp,
      number: '500M+',
      title: 'رسالة شهرياً',
      description: 'حجم الرسائل المُرسلة'
    },
    {
      icon: Award,
      number: '99.9%',
      title: 'معدل الاستقرار',
      description: 'موثوقية الخدمة'
    },
    {
      icon: Calendar,
      number: '24/7',
      title: 'دعم مستمر',
      description: 'خدمة عملاء متواصلة'
    }
  ];

  return (
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
              قصة نجاحنا
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              رحلة استثنائية من البداية المتواضعة إلى أن أصبحنا شريك Meta الرسمي والرائدين في حلول واتساب الأعمال
            </motion.p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              محطات مهمة في رحلتنا
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-6 mb-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {milestone.year}
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              إنجازاتنا بالأرقام
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meta Partnership */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/uploads/Meta-Badge.webp" 
                alt="Meta Business Partner Badge" 
                className="h-20 w-auto mx-auto mb-6 opacity-90"
              />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">شريك Meta الرسمي</h2>
              <p className="text-xl leading-relaxed mb-8">
                فخورون بكوننا شريك Meta الرسمي المعتمد، مما يضمن حصولكم على أعلى معايير الجودة والأمان في جميع خدماتنا
              </p>
              <div className="flex justify-center gap-4">
                <img 
                  src="/uploads/Meta_Business_Partners_inline_lockup_negative_primary_RGB.svg" 
                  alt="Meta Business Partners" 
                  className="h-12 w-auto opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStory;

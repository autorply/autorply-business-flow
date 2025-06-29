
import { motion } from 'framer-motion';
import { Shield, Cloud, Zap, Code, Database, Lock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Technology = () => {
  const techFeatures = [
    {
      icon: Cloud,
      title: 'البنية السحابية',
      description: 'بنية تحتية سحابية متطورة تضمن الاستقرار والأداء العالي مع إمكانية التوسع التلقائي'
    },
    {
      icon: Shield,
      title: 'أمان البيانات',
      description: 'تشفير متقدم من طرف إلى طرف مع أعلى معايير الأمان العالمية لحماية بياناتكم'
    },
    {
      icon: Code,
      title: 'API متقدم',
      description: 'واجهات برمجية قوية ومرنة تتيح التكامل السهل مع أي نظام أو منصة أخرى'
    },
    {
      icon: Zap,
      title: 'أداء فائق',
      description: 'استجابة سريعة وأداء مُحسّن مع معالجة آلاف الرسائل في الثانية الواحدة'
    },
    {
      icon: Database,
      title: 'إدارة البيانات',
      description: 'قواعد بيانات متقدمة مع نسخ احتياطية تلقائية وإمكانيات تحليل ذكية'
    },
    {
      icon: Lock,
      title: 'الامتثال والمعايير',
      description: 'التزام كامل بمعايير GDPR وSOC 2 ومتطلبات الخصوصية السعودية'
    }
  ];

  const integrations = [
    'WhatsApp Business API',
    'Meta Business Platform',
    'Salla API',
    'Zid Integration',
    'Shopify API',
    'WooCommerce',
    'Zapier',
    'Make (Integromat)',
    'Odoo ERP',
    'Salesforce CRM'
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
              التقنية والبنية التحتية
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              تقنيات متطورة وبنية تحتية قوية تضمن أعلى مستويات الأداء والأمان
            </motion.p>
          </div>
        </section>

        {/* Tech Features */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techFeatures.map((feature, index) => (
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
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API & Webhooks */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              API و Webhooks
            </motion.h2>
            
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">RESTful API</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    واجهات برمجية حديثة ومرنة تتيح التكامل السلس مع أنظمتكم الحالية
                  </p>
                  <ul className="text-gray-600 space-y-2 text-right">
                    <li>• إرسال واستقبال الرسائل</li>
                    <li>• إدارة جهات الاتصال</li>
                    <li>• تقارير مفصلة</li>
                    <li>• إدارة الحملات</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Webhooks</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    إشعارات فورية للأحداث المهمة في النظام
                  </p>
                  <ul className="text-gray-600 space-y-2 text-right">
                    <li>• استلام الرسائل الجديدة</li>
                    <li>• تحديثات حالة التسليم</li>
                    <li>• أحداث المحادثات</li>
                    <li>• تنبيهات النظام</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              التكاملات المتاحة
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-700 font-medium text-sm">{integration}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;

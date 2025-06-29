
import { motion } from 'framer-motion';
import { Calendar, Settings, Zap, MessageSquare, Send, BarChart3, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: 'إدارة المواعيد بذكاء',
      description: 'نظام متطور لإدارة وحجز المواعيد تلقائياً عبر واتساب مع تأكيدات وتذكيرات ذكية'
    },
    {
      icon: Settings,
      title: 'الربط مع الأنظمة',
      description: 'تكامل سلس مع منصات التجارة الإلكترونية مثل Salla, Zid, Shopify, Odoo وأكثر من 50 نظام'
    },
    {
      icon: Zap,
      title: 'الأتمتة الذكية',
      description: 'نماذج ذكية، فلوات تفاعلية، وحملات تسويقية تلقائية تعمل على مدار الساعة'
    },
    {
      icon: MessageSquare,
      title: 'إدارة المحادثات متعددة القنوات',
      description: 'واجهة موحدة لإدارة جميع محادثاتك من واتساب، فيسبوك، إنستجرام في مكان واحد'
    },
    {
      icon: Send,
      title: 'الرسائل الجماعية المصرّحة',
      description: 'إرسال رسائل جماعية مصرح بها من واتساب مع معدلات وصول عالية وتقارير مفصلة'
    },
    {
      icon: BarChart3,
      title: 'تقارير وتحليلات مفصلة',
      description: 'لوحة تحكم شاملة مع إحصائيات تفاعلية وتقارير مفصلة لقياس الأداء'
    },
    {
      icon: CheckCircle,
      title: 'شريك رسمي معتمد من Meta',
      description: 'نحن شريك رسمي معتمد من Meta، مما يضمن الامتثال الكامل لمعايير واتساب الرسمية'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-blue-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              خدماتنا المتميزة
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              مجموعة شاملة من الحلول الذكية التي تساعد أعمالك على النمو والازدهار عبر منصة واتساب
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              جاهز لتجربة خدماتنا؟
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ابدأ رحلتك مع أوتوربلاي اليوم واكتشف كيف يمكن لحلولنا أن تحول أعمالك
            </motion.p>
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-blue-600 py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ مجاناً الآن
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;


import { motion } from 'framer-motion';
import { Building, Handshake, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BusinessPartners = () => {
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
              شركاء الأعمال
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              شراكات استراتيجية مع عملاء متميزين وقصص نجاح ملهمة
            </motion.p>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Handshake className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">كن شريكاً لنا</h2>
              <p className="text-xl leading-relaxed mb-8">
                ننتظر شراكتكم معنا لتحقيق النجاح المشترك وتطوير حلول مبتكرة تخدم السوق السعودي
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-blue-600 py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                ابدأ الشراكة معنا
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPartners;


import { motion } from 'framer-motion';
import { Link2, Code, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TechPartners = () => {
  const partners = [
    { name: 'Salla', category: 'التجارة الإلكترونية', logo: '/uploads/slogo.svg' },
    { name: 'Zid', category: 'التجارة الإلكترونية', logo: '/uploads/slogo.svg' },
    { name: 'Shopify', category: 'التجارة الإلكترونية', logo: '/uploads/slogo.svg' },
    { name: 'WooCommerce', category: 'التجارة الإلكترونية', logo: '/uploads/slogo.svg' },
    { name: 'Zapier', category: 'الأتمتة', logo: '/uploads/slogo.svg' },
    { name: 'Make', category: 'الأتمتة', logo: '/uploads/slogo.svg' },
    { name: 'Odoo', category: 'ERP', logo: '/uploads/slogo.svg' },
    { name: 'Salesforce', category: 'CRM', logo: '/uploads/slogo.svg' }
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
              شركاء التقنية
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              تكاملات قوية مع أهم المنصات والأنظمة التقنية لتسهيل عملكم
            </motion.p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.category}</p>
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

export default TechPartners;

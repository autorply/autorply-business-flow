
import { motion } from 'framer-motion';
import { Link2, Code, Zap, ShoppingCart, Globe, Workflow, Settings, Users, Database, CreditCard } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLayout from '../components/layout/PageLayout';

const TechPartners = () => {
  const partners = [
    { name: 'Salla', category: 'التجارة الإلكترونية', icon: ShoppingCart, color: 'text-green-600' },
    { name: 'Zid', category: 'التجارة الإلكترونية', icon: Globe, color: 'text-blue-600' },
    { name: 'Shopify', category: 'التجارة الإلكترونية', icon: ShoppingCart, color: 'text-emerald-600' },
    { name: 'WooCommerce', category: 'التجارة الإلكترونية', icon: Code, color: 'text-purple-600' },
    { name: 'Zapier', category: 'الأتمتة', icon: Zap, color: 'text-orange-600' },
    { name: 'Make', category: 'الأتمتة', icon: Workflow, color: 'text-indigo-600' },
    { name: 'Odoo', category: 'ERP', icon: Database, color: 'text-red-600' },
    { name: 'Salesforce', category: 'CRM', icon: Users, color: 'text-blue-500' }
  ];

  return (
    <PageLayout 
      structuredDataType="Service"
      includeOrganization={true}
      customMetaTags={{
        title: 'شركاء التقنية - اوتوربلاي | تكاملات مع أهم المنصات التقنية',
        description: 'تكاملات قوية مع أهم المنصات والأنظمة التقنية لتسهيل عملكم. تعرف على شركائنا التقنيين من منصات التجارة الإلكترونية والأتمتة وأنظمة إدارة العملاء.',
        keywords: 'شركاء تقنيون, تكاملات تقنية, منصات التجارة الإلكترونية, أنظمة CRM, أتمتة الأعمال, تكامل الأنظمة',
        url: 'https://autorply.sa/tech-partners'
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
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              التكاملات والمنصات المدعومة
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <partner.icon className={`w-8 h-8 ${partner.color}`} />
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
    </PageLayout>
  );
};

export default TechPartners;

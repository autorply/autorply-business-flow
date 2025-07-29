
import { motion } from 'framer-motion';
import { CreditCard, FileText, Download, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageLayout from '../components/layout/PageLayout';

const Billing = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'البطاقات الائتمانية',
      description: 'فيزا، ماستركارد، أمريكان إكسبريس'
    },
    {
      icon: Shield,
      title: 'التحويل البنكي',
      description: 'تحويل مباشر للحسابات البنكية'
    },
    {
      icon: FileText,
      title: 'فاتورة آجلة',
      description: 'للعملاء المؤسسيين والشركات الكبيرة'
    }
  ];

  return (
    <PageLayout 
      structuredDataType="Service"
      includeOrganization={true}
      customMetaTags={{
        title: 'الفوترة وطرق الدفع - اوتوربلاي | نظام فوترة شفاف ومرن',
        description: 'نظام فوترة شفاف ومرن مع طرق دفع متنوعة تناسب احتياجاتكم. فواتير متوافقة مع نظام الفوترة الإلكترونية السعودي.',
        keywords: 'فوترة, طرق دفع, فواتير إلكترونية, ضريبة القيمة المضافة, تحويل بنكي, بطاقات ائتمانية'
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
              الفوترة وطرق الدفع
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نظام فوترة شفاف ومرن مع طرق دفع متنوعة تناسب احتياجاتكم
            </motion.p>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              طرق الدفع المتاحة
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Billing Process */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-center text-gray-800 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              عملية الفوترة
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">الفوترة الشهرية</h3>
                <p className="text-gray-600 leading-relaxed">
                  يتم إصدار الفواتير في بداية كل شهر بناءً على الاستخدام الفعلي. تشمل الفاتورة تفاصيل مفصلة عن عدد الرسائل المرسلة والخدمات المستخدمة.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">تحميل الفواتير</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  يمكنكم تحميل فواتيركم بصيغة PDF من لوحة التحكم في أي وقت. الفواتير متاحة لمدة 12 شهر من تاريخ الإصدار.
                </p>
                <div className="flex items-center gap-2 text-blue-600">
                  <Download className="w-5 h-5" />
                  <span className="font-medium">تحميل فوري بصيغة PDF</span>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">الفواتير الضريبية</h3>
                <p className="text-gray-600 leading-relaxed">
                  جميع فواتيرنا متوافقة مع نظام الفوترة الإلكترونية في المملكة العربية السعودية وتشمل ضريبة القيمة المضافة 15%.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              مساعدة في الفوترة
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              فريق الدعم المالي جاهز لمساعدتكم في أي استفسار متعلق بالفوترة أو الدفع
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              تواصل مع الدعم المالي
            </motion.a>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </PageLayout>
  );
};

export default Billing;

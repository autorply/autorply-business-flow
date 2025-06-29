
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'هل نحتاج لحذف واتساب القديم؟',
      answer: 'لا، لا تحتاج لحذف واتساب الشخصي. واتساب الأعمال منفصل تماماً عن واتساب الشخصي ويمكن استخدام كلاهما على نفس الجهاز برقمين مختلفين.'
    },
    {
      question: 'لماذا نربط بحساب فيسبوك؟',
      answer: 'الربط مع فيسبوك مطلوب من Meta لضمان الأمان والموثوقية. هذا يساعد في التحقق من هوية النشاط التجاري ويمنح إمكانيات متقدمة مثل الإعلانات والتحليلات.'
    },
    {
      question: 'هل يتم حظر الرقم؟',
      answer: 'عند استخدام خدماتنا المعتمدة من Meta، لا يتم حظر الرقم. نحن نلتزم بجميع قواعد واتساب ونضمن الاستخدام الآمن والقانوني للخدمة.'
    },
    {
      question: 'ما هي تكلفة الخدمة؟',
      answer: 'لدينا باقات متنوعة تبدأ من الباقة المجانية وحتى الباقات المتقدمة. يمكنك الاطلاع على صفحة الأسعار للمزيد من التفاصيل أو التواصل معنا للحصول على عرض مخصص.'
    },
    {
      question: 'كم يستغرق تفعيل الخدمة؟',
      answer: 'عادة ما يستغرق تفعيل الخدمة من 24 إلى 48 ساعة عمل بعد تقديم المستندات المطلوبة. في بعض الحالات قد يستغرق وقتاً أطول حسب مراجعة Meta.'
    },
    {
      question: 'هل يمكن استخدام رقم موجود مسبقاً؟',
      answer: 'نعم، يمكن استخدام رقم موجود في واتساب الشخصي، لكن سيتم نقله إلى واتساب الأعمال. ننصح باستخدام رقم جديد مخصص للأعمال للحصول على أفضل تجربة.'
    },
    {
      question: 'ما هي المستندات المطلوبة؟',
      answer: 'نحتاج إلى السجل التجاري، بطاقة الهوية لصاحب النشاط، ووثائق أخرى حسب نوع النشاط. سيقوم فريقنا بإرشادك خلال العملية بالتفصيل.'
    },
    {
      question: 'هل هناك دعم فني؟',
      answer: 'نعم، نوفر دعم فني على مدار الساعة طوال أيام الأسبوع عبر واتساب والبريد الإلكتروني. كما يمكنك الوصول إلى مركز المساعدة ودليل المستخدم.'
    },
    {
      question: 'هل يمكن تجربة الخدمة مجاناً؟',
      answer: 'نعم، نوفر باقة مجانية تشمل عدد محدود من الرسائل شهرياً. كما يمكنك طلب عرض تجريبي مخصص لاختبار جميع الميزات قبل الاشتراك.'
    },
    {
      question: 'ما هي التكاملات المتاحة؟',
      answer: 'نوفر تكامل مع أكثر من 50 منصة مثل Salla, Zid, Shopify, WooCommerce, Zapier, Make، وغيرها. كما نوفر API مفتوح للتكامل مع أي نظام آخر.'
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
              الأسئلة الشائعة
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              إجابات شاملة على أهم الأسئلة حول خدماتنا
            </motion.p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-white rounded-lg shadow-md border border-gray-100"
                  >
                    <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                      <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-6 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              لم تجد إجابة لسؤالك؟
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              فريقنا جاهز للإجابة على جميع استفساراتك
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-600 py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              تواصل معنا الآن
            </motion.a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "هل يجب حذف تطبيق واتساب أعمال من جوالي لتفعيل الخدمة؟",
      answer: "لا. إذا كان رقمك الحالي على واتساب أعمال ومتفاعل (يرسل ويستقبل بشكل طبيعي)، فلا حاجة لحذفه. الربط يتم في الخلفية دون التأثير على استخدامك الحالي."
    },
    {
      question: "لماذا أحتاج إلى حساب فيسبوك أعمال وأنا فقط أريد واتساب؟",
      answer: "لأن واتساب أعمال الرسمي تابع لمنصة ميتا (فيسبوك)، وربط الرقم رسميًا يتطلب وجود حساب فيسبوك أعمال (Business Manager). لا علاقة للحساب بالتسويق أو الإعلانات."
    },
    {
      question: "هل سيتم حظر رقمي عند الإرسال؟",
      answer: "لا. طالما يتم استخدام قوالب واتساب معتمدة من ميتا، فلن يتم تقييد الرقم. فريقنا يحرص على مساعدتك باختيار القوالب الصحيحة وضمان الالتزام بالسياسات الرسمية لتجنب أي مشاكل."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-10 translate-y-36 -translate-x-36"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <span className="text-2xl">❓</span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700">الأسئلة الشائعة</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نجيب على أهم الأسئلة التي تدور في ذهنك حول خدماتنا
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/80 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-right hover:no-underline group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-lg font-semibold text-gray-800 text-right flex-1 group-hover:text-blue-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="mr-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border-r-4 border-blue-400">
                      <p className="text-gray-700 leading-relaxed text-right">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">لديك سؤال آخر؟</h3>
            <p className="text-blue-100 mb-6">فريقنا جاهز للإجابة على جميع استفساراتك</p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>تواصل معنا</span>
              <span>←</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

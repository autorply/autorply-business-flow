
import { motion } from 'framer-motion';
import WhatsAppChat from './WhatsAppChat';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-50 to-white pt-32">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div 
          className="text-center lg:text-right"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="https://autorply.sa/assets/img/logo_64.svg" 
            alt="شعار اوتوربلاي - منصة واتساب الأعمال الرائدة في السعودية مع دعم WhatsApp API وشراكة Meta المعتمدة" 
            className="w-20 mb-6 mx-auto lg:mx-0"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          />
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-blue-600 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            اوتوربلاي - منصة واتساب الأعمال الرسمية المعتمدة من Meta في السعودية
          </motion.h1>
          
          <motion.h2 
            className="mt-4 text-xl md:text-2xl font-semibold text-blue-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            WhatsApp Business API الرسمي مع حلول الذكاء الاصطناعي المتقدمة
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            منصة شاملة ومتطورة تمكّنك من ربط أعمالك مع واتساب بشكل رسمي وآمن عبر WhatsApp Business API المعتمد من Meta. 
            استمتع بالردود الآلية الذكية المدعومة بالذكاء الاصطناعي، وإدارة المحادثات المتعددة، والحملات التسويقية الموجهة، 
            والتكامل الشامل مع أنظمة CRM وإدارة علاقات العملاء. حلول مصممة خصيصاً للشركات السعودية والخليجية مع 
            دعم فني متخصص ومتاح على مدار الساعة لضمان نجاح استراتيجيتك التسويقية وتحسين تجربة عملائك.
          </motion.p>
          
          <motion.div 
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">ردود آلية ذكية</h3>
              <p className="text-sm text-gray-600">استخدام الذكاء الاصطناعي للرد التلقائي على استفسارات العملاء</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-2">حملات تسويقية</h3>
              <p className="text-sm text-gray-600">إرسال رسائل إعلانية موجهة وحملات تسويقية فعالة</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">تكامل شامل</h3>
              <p className="text-sm text-gray-600">ربط مع المتاجر الإلكترونية وأنظمة إدارة الأعمال</p>
            </div>
          </motion.div>
          
          <motion.a 
            href="https://wa.me/autorply" 
            target="_blank" 
            className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ الآن
          </motion.a>
        </motion.div>

        {/* WhatsApp Chat Demo */}
        <div className="flex justify-center lg:justify-end">
          <WhatsAppChat />
        </div>
      </div>
    </section>
  );
};

export default Hero;

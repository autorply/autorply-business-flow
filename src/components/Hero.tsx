
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
            alt="شعار اوتوربلاي" 
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
            اوتوربلاي - منصة واتساب الأعمال الرائدة في السعودية
          </motion.h1>
          
          <motion.h2 
            className="mt-4 text-xl md:text-2xl font-semibold text-blue-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ربط رسمي وآمن مع WhatsApp Business API
          </motion.h2>
          
          <motion.p 
            className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية، الحملات التسويقية، والتقارير المتقدمة. شريك Meta المعتمد للواتساب الأعمال.
          </motion.p>
          
          <motion.a 
            href="https://wa.me/966564455333" 
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

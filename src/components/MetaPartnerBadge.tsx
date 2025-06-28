
import { motion } from 'framer-motion';

const MetaPartnerBadge = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-blue-50">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/uploads/Meta-Badge.webp" 
            alt="Meta Business Partner Badge" 
            className="mx-auto h-32 w-auto rounded-lg shadow-lg"
          />
        </motion.div>
        
        <motion.p 
          className="mt-6 text-lg text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          شريك معتمد من Meta لتقديم حلول WhatsApp Business API
        </motion.p>
        
        <motion.p 
          className="mt-2 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          نحن فخورون بكوننا شركاء معتمدين من Meta لتوفير أفضل تجربة WhatsApp Business
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MetaPartnerBadge;

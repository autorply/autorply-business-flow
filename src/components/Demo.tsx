
import { motion } from 'framer-motion';

const Demo = () => {
  return (
    <section className="bg-white py-20">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-700">كيف يعمل أوتوربلاي؟</h2>
        <p className="text-gray-600 mt-2">نموذج ذكي يتفاعل مع رسائل العملاء ويبدأ المحادثة تلقائيًا حسب نية المستخدم.</p>
      </motion.div>
      
      <div className="flex justify-center items-center px-6">
        <motion.div 
          className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src="https://www.salesmartly.com/static/images/solutions/img_trigger_automation@2x.png" 
            alt="Demo" 
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;

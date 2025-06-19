
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const MultiChannelSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* النص العربي */}
          <motion.div 
            className="flex-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              ادمج جميع رسائل قنواتك المتعددة في مكان واحد
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              بع، سوّق، وقدم الدعم عبر الدردشة المباشرة، واتساب، فيسبوك ماسنجر، انستغرام، تيك توك، تيليغرام والايميل للحصول على تجربة موحدة.
            </p>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={() => window.open('#', '_blank')}
            >
              اقرأ المزيد
              <ExternalLink className="mr-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* الصورة */}
          <motion.div 
            className="flex-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="منصة متعددة القنوات" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSection;

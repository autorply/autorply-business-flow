
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "كل أدوات واتساب في منصة واحدة",
    description: "شات بوت، حملات، تقارير، دعم عملاء"
  },
  {
    id: 2,
    title: "فعل واتساب بزنس الرسمي في دقائق",
    description: "دون أوراق أو تعقيدات"
  },
  {
    id: 3,
    title: "إبدأ مجانًا، ووسع نشاطك عبر واتساب",
    description: "نمو تلقائي – تواصل احترافي"
  },
  {
    id: 4,
    title: "أوتوربلاي – شريك رسمي معتمد من Meta",
    description: "حلول موثوقة يستخدمها آلاف العملاء"
  }
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // تغيير كل 4 ثوان

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="relative h-40 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="absolute inset-0 text-center"
            >
              <motion.h2 
                className="text-4xl font-bold text-blue-700 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* مؤشرات السلايدر */}
        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoSlider;

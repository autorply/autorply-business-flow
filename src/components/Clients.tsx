
import { motion } from 'framer-motion';

const Clients = () => {
  const partners = [
    { name: 'شركة التقنية المتطورة', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'تقنية' },
    { name: 'مجموعة الأعمال الرقمية', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'رقمية' },
    { name: 'شركة الحلول الذكية', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'ذكية' },
    { name: 'مؤسسة الإبداع التجاري', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'تجارية' },
    { name: 'شركة النمو المستدام', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'استدامة' },
    { name: 'مجموعة التطوير الشامل', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'تطوير' },
    { name: 'شركة الابتكار الرقمي', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'ابتكار' },
    { name: 'مؤسسة التميز التقني', logo: '/uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'تميز' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">شركاء النجاح</h2>
        <p className="text-lg text-gray-600 mb-6">نفخر بثقة عملائنا وشراكتنا الناجحة معهم</p>
        <div className="flex justify-center items-center gap-2">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-l from-green-500 to-transparent rounded"></div>
        </div>
      </motion.div>
      
      <div className="relative">
        {/* First row - moving right */}
        <div className="flex animate-[marquee_8s_linear_infinite] hover:pause mb-8">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-6 group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-20 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>



        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-gray-50 rounded-3xl p-6 mx-4 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-2">+3000 شركة تثق بنا</h3>
          <p className="text-gray-600 text-sm">نساعد الشركات على تحقيق النجاح من خلال حلولنا التقنية المبتكرة</p>
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

//export default Clients;

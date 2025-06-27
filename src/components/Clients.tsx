
import { motion } from 'framer-motion';

const Clients = () => {
  const partners = [
    { name: 'شركة التقنية المتطورة', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop&crop=center', category: 'تقنية' },
    { name: 'مجموعة الأعمال الرقمية', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=160&h=80&fit=crop&crop=center', category: 'رقمية' },
    { name: 'شركة الحلول الذكية', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=160&h=80&fit=crop&crop=center', category: 'ذكية' },
    { name: 'مؤسسة الإبداع التجاري', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=160&h=80&fit=crop&crop=center', category: 'تجارية' },
    { name: 'شركة النمو المستدام', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=160&h=80&fit=crop&crop=center', category: 'استدامة' },
    { name: 'مجموعة التطوير الشامل', logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=160&h=80&fit=crop&crop=center', category: 'تطوير' },
    { name: 'شركة الابتكار الرقمي', logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=160&h=80&fit=crop&crop=center', category: 'ابتكار' },
    { name: 'مؤسسة التميز التقني', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=160&h=80&fit=crop&crop=center', category: 'تميز' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">شركاء النجاح</h2>
        <p className="text-lg text-gray-600 mb-6">نفخر بثقة عملائنا وشراكتنا الناجحة معهم</p>
        <div className="flex justify-center items-center gap-2">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-16 h-1 bg-gradient-to-l from-green-500 to-transparent rounded"></div>
        </div>
      </motion.div>
      
      <div className="relative">
        {/* First row - moving right */}
        <div className="flex animate-[marquee_15s_linear_infinite] hover:pause mb-8">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-6 group"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 w-48 h-28 border border-gray-100 group-hover:border-blue-200">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="h-12 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-600">{partner.category}</div>
                  </div>
                  <p className="text-xs text-gray-500 text-center font-medium">{partner.name}</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row - moving left */}
        <div className="flex animate-[marquee-reverse_20s_linear_infinite] hover:pause">
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
            <motion.div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-6 group"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 w-48 h-28 border border-gray-100 group-hover:border-green-200">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                  <div className="h-12 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-2 flex items-center justify-center">
                    <div className="text-xs font-bold text-gray-600">{partner.category}</div>
                  </div>
                  <p className="text-xs text-gray-500 text-center font-medium">{partner.name}</p>
                </div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-green-50 to-transparent pointer-events-none z-10"></div>
      </div>

      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-sm rounded-3xl p-6 mx-4 border border-white/20 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-2">+500 شركة تثق بنا</h3>
          <p className="text-gray-600 text-sm">نساعد الشركات على تحقيق النجاح من خلال حلولنا التقنية المبتكرة</p>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;

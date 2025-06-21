
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: 'شركة التقنية المتطورة', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center' },
    { name: 'مجموعة الأعمال الرقمية', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center' },
    { name: 'شركة الحلول الذكية', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&crop=center' },
    { name: 'مؤسسة الإبداع التجاري', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=120&h=60&fit=crop&crop=center' },
    { name: 'شركة النمو المستدام', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
    { name: 'مجموعة التطوير الشامل', logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=120&h=60&fit=crop&crop=center' },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-2">عملاؤنا</h2>
        <div className="w-24 h-1 mx-auto bg-green-500 rounded"></div>
      </motion.div>
      
      <div className="relative">
        <div className="flex animate-marquee-slow hover:pause">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 mx-4 min-w-[150px]"
            >
              <img 
                src={client.logo} 
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

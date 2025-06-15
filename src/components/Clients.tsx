
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: 'عميل 1', logo: 'https://via.placeholder.com/120x60?text=Client+1' },
    { name: 'عميل 2', logo: 'https://via.placeholder.com/120x60?text=Client+2' },
    { name: 'عميل 3', logo: 'https://via.placeholder.com/120x60?text=Client+3' },
    { name: 'عميل 4', logo: 'https://via.placeholder.com/120x60?text=Client+4' },
    { name: 'عميل 5', logo: 'https://via.placeholder.com/120x60?text=Client+5' },
    { name: 'عميل 6', logo: 'https://via.placeholder.com/120x60?text=Client+6' },
  ];

  return (
    <section className="py-20 bg-white">
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
      
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-12 w-fit"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.img 
              key={index}
              src={client.logo} 
              className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity"
              alt={client.name}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

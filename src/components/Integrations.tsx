
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    { name: 'Google', logo: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png' },
    { name: 'Meta', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png' },
    { name: 'Make.com', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center' },
    { name: 'n8n', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop&crop=center' },
    { name: 'Zapier', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968885.png' },
    { name: 'Zoho', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=60&h=60&fit=crop&crop=center' },
    { name: 'Microsoft', logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' },
    { name: 'Telegram', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png' },
    { name: 'Odoo', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center' },
    { name: 'ERP', logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=60&h=60&fit=crop&crop=center' },
    { name: 'Phoenix CRM', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center' },
    { name: 'Shopify', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968914.png' },
    { name: 'OpenCart', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=60&fit=crop&crop=center' },
    { name: 'Salla', logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=60&h=60&fit=crop&crop=center' },
    { name: 'Zid', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center' },
    { name: 'HubSpot', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=60&h=60&fit=crop&crop=center' },
    { name: 'Intercom', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center' },
    { name: 'Monday.com', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop&crop=center' },
    { name: 'PayPal', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968382.png' },
    { name: 'STC Pay', logo: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=60&h=60&fit=crop&crop=center' },
    { name: 'Mada', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center' },
    { name: 'Apple Pay', logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' },
    { name: 'Calendly', logo: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=60&h=60&fit=crop&crop=center' },
    { name: 'Google Calendar', logo: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png' },
    { name: 'SAP', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center' },
    { name: 'Aramex', logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=60&fit=crop&crop=center' },
    { name: 'SMSA', logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center' },
    { name: 'SPL', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=60&h=60&fit=crop&crop=center' },
    { name: 'OpenAI', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center' }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">التكامل</h2>
        <p className="text-xl text-gray-600">تكامل سلس مع أهم المنصات والأدوات التقنية العالمية</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-3">
                <img 
                  src={integration.logo} 
                  className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  alt={integration.name}
                />
              </div>
              <span className="text-xs text-gray-600 text-center font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;

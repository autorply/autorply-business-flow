
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
  { name: 'Google Sheets', logo: 'https://autorply.sa/uploads/google-sheet.png' },
  { name: 'Gmail', logo: 'https://autorply.sa/uploads/gmail.ico' },
  { name: 'Google Calendar', logo: 'https://autorply.sa/uploads/google-cal.png' },
  { name: 'Facebook', logo: 'https://autorply.sa/uploads/facebook.svg' },
  { name: 'Instagram', logo: 'https://autorply.sa/uploads/instagrm.png' },
  { name: 'WhatsApp', logo: 'https://autorply.sa/uploads/whatsapp.png' },
  { name: 'Zapier', logo: 'https://autorply.sa/uploads/zapier-logomark.png' },
  { name: 'Shopify', logo: 'https://autorply.sa/uploads/shopfy.svg' },
  { name: 'Salesforce', logo: 'https://autorply.sa/uploads/saleforce.svg' },
  { name: 'Zoom', logo: 'https://autorply.sa/uploads/zoom.svg' },
  { name: 'Telegram', logo: 'https://autorply.sa/uploads/telegram.svg' },
  { name: 'PayPal', logo: 'https://autorply.sa/uploads/pp.png' },
  { name: 'Odoo', logo: 'https://autorply.sa/uploads/odoo.svg' },
  { name: 'Meta', logo: 'https://autorply.sa/uploads/meta.png' },
  { name: 'OpenAI', logo: 'https://autorply.sa/uploads/openai.svg' },
  { name: 'Google Translate', logo: 'https://autorply.sa/uploads/google-trans.svg' },
  { name: 'Google', logo: 'https://autorply.sa/uploads/google.svg' },
  { name: 'Gemini', logo: 'https://autorply.sa/uploads/gemini.jpg' },
  { name: 'Daftara', logo: 'https://autorply.sa/uploads/daftra-logo.jpg' },
  { name: 'ClickUp', logo: 'https://autorply.sa/uploads/clickup.png' },
  { name: 'Calendly', logo: 'https://autorply.sa/uploads/calendly.png' },
  { name: 'Aramex', logo: 'https://autorply.sa/uploads/aramx.png' },
  { name: 'DHL', logo: 'https://autorply.sa/uploads/dhl.png' },
  { name: 'Salla', logo: 'https://autorply.sa/uploads/salla.png' },
  { name: 'Zid', logo: 'https://autorply.sa/uploads/zid.webp' },
  { name: 'MyFatoorah', logo: 'https://autorply.sa/uploads/myfatorah.png' },
  { name: 'SMSA', logo: 'https://autorply.sa/uploads/smsa.png' },
  { name: 'UPS', logo: 'https://autorply.sa/uploads/ups.png' },
  { name: 'Webhook', logo: 'https://autorply.sa/uploads/webhook.png' },
  { name: 'Make', logo: 'https://autorply.sa/uploads/make.svg' },
  { name: 'n8n', logo: 'https://autorply.sa/uploads/n8n.png' },
  { name: 'GPT', logo: 'https://autorply.sa/uploads/gpt.jpeg' },
  { name: 'Phenix', logo: 'https://autorply.sa/uploads/phenix.webp' },
  { name: 'iOS', logo: 'https://autorply.sa/uploads/ios.jpg' },
  { name: 'Google Forms', logo: 'https://autorply.sa/uploads/google-forms.png' }
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
        <h2 className="text-4xl font-bold text-gray-900 mb-4">التكامل</h2>
        <p className="text-xl text-gray-600 mb-8">تكامل سلس مع أهم المنصات والأدوات التقنية العالمية</p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.03
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-2xl font-bold text-gray-800">200+ تكامل متاح</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;

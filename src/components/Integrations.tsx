
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    { name: 'Twilio', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'communication' },
    { name: 'senangPay', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'Mailgun', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'email' },
    { name: 'WhatsApp Flows', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'messaging' },
    { name: 'WhatsApp Catalogue', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'messaging' },
    { name: 'PayPal', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'Instagram', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'social' },
    { name: 'Facebook', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'social' },
    { name: 'Mautic', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'marketing' },
    { name: 'WP Form', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'forms' },
    { name: 'Zapier', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'automation' },
    { name: 'Instamojo', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'YooMoney', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'Clickatell', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'sms' },
    { name: 'AWS SES', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'email' },
    { name: 'MyFatoorah', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'Paymaya', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' },
    { name: 'Nexmol', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'communication' },
    { name: 'WhatsApp', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'messaging' },
    { name: 'Google', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'productivity' },
    { name: 'Mandrill', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'email' },
    { name: 'Brevo', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'marketing' },
    { name: 'WooCommerce', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'ecommerce' },
    { name: 'Flutterwave', logo: '/lovable-uploads/c1bc3fd0-f64a-44ec-80ae-771c1e6ed006.png', category: 'payment' }
  ];

  const categoryColors = {
    communication: 'from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300',
    payment: 'from-green-100 to-green-200 hover:from-green-200 hover:to-green-300',
    email: 'from-purple-100 to-purple-200 hover:from-purple-200 hover:to-purple-300',
    messaging: 'from-emerald-100 to-emerald-200 hover:from-emerald-200 hover:to-emerald-300',
    social: 'from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300',
    marketing: 'from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300',
    forms: 'from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300',
    automation: 'from-red-100 to-red-200 hover:from-red-200 hover:to-red-300',
    sms: 'from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300',
    productivity: 'from-cyan-100 to-cyan-200 hover:from-cyan-200 hover:to-cyan-300',
    ecommerce: 'from-violet-100 to-violet-200 hover:from-violet-200 hover:to-violet-300'
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">التكامل</h2>
        <p className="text-xl text-gray-600">تكامل سلس مع أهم المنصات والأدوات التقنية العالمية</p>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-6"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              className={`relative p-4 rounded-2xl bg-gradient-to-br ${categoryColors[integration.category]} shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateX: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center justify-center h-16">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              
              <p className="text-center mt-3 text-xs font-medium text-gray-700 group-hover:text-gray-900 transition-colors truncate">
                {integration.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 mx-4 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">+200 تكامل متاح</h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              تكامل مع مئات الأدوات والمنصات العالمية لتوفير تجربة متكاملة وسلسة لإدارة أعمالك الرقمية
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;

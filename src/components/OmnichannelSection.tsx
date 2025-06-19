
import { motion } from 'framer-motion';
import { MessageCircle, Users, BarChart3, Settings } from 'lucide-react';

const OmnichannelSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'الرد من مكان واحد لكل المنصات',
      description: 'إدارة محادثات العملاء من جميع القنوات في واجهة موحدة'
    },
    {
      icon: Settings,
      title: 'قوالب مخصصة حسب القناة',
      description: 'قوالب رسائل مخصصة لكل منصة تواصل اجتماعي'
    },
    {
      icon: BarChart3,
      title: 'تقارير أداء للقنوات',
      description: 'تحليلات شاملة لأداء كل قناة تواصل'
    },
    {
      icon: Users,
      title: 'إدارة الفريق من الواجهة',
      description: 'توزيع المحادثات وإدارة الفريق بكفاءة'
    }
  ];

  const platforms = [
    { name: 'WhatsApp', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg', color: '#25D366' },
    { name: 'Facebook', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg', color: '#1877F2' },
    { name: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', color: '#E4405F' },
    { name: 'Telegram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg', color: '#0088CC' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            جميع وسائل التواصل في منصة واحدة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            أوتوربلاي تجمع الرسائل من واتساب، فيسبوك، إنستغرام، وتيليجرام في صندوق موحد لتجربة إدارة سلسة ومتكاملة
          </p>
        </motion.div>

        {/* شعارات المنصات */}
        <motion.div 
          className="flex justify-center items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: platform.color + '20' }}
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="w-8 h-8"
                  style={{ filter: `invert(1) sepia(1) saturate(5) hue-rotate(${platform.color === '#25D366' ? '120deg' : platform.color === '#1877F2' ? '220deg' : platform.color === '#E4405F' ? '340deg' : '200deg'})` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">{platform.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* المميزات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;

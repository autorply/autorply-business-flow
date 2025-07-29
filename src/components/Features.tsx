
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068643.png",
      title: "ردود تلقائية ذكية",
      description: "أجب على عملائك فوراً باستخدام الذكاء الصناعي المتقدم.",
      delay: 0.1
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068666.png",
      title: "تقارير مفصلة",
      description: "راقب أداءك اليومي مع تقارير احترافية دقيقة وسهلة.",
      delay: 0.2
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/9068/9068696.png",
      title: "دعم رسمي من Meta",
      description: "ربط مباشر وآمن مع منصة واتساب المعتمدة من Meta.",
      delay: 0.3
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-2">مميزات اوتوربلاي</h2>
        <p className="text-gray-600">أفضل أدوات الأتمتة والربط الرسمي مع واتساب API</p>
        <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-4">الحلول التقنية المتقدمة</h3>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: feature.delay }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <motion.img 
              src={feature.icon} 
              className="mx-auto mb-4 w-20 h-20" 
              alt={`أيقونة ${feature.title} - ${feature.description}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;

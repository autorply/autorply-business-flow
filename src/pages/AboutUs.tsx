
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Users, Target, Shield, Smartphone, Globe } from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      title: 'المتاجر الإلكترونية',
      description: 'حلول متكاملة لإدارة التواصل مع العملاء وزيادة المبيعات'
    },
    {
      title: 'شركات التوصيل والخدمات',
      description: 'أتمتة عمليات الطلبات والتتبع وخدمة العملاء'
    },
    {
      title: 'المؤسسات التعليمية والطبية',
      description: 'منصات آمنة للتواصل مع الطلاب والمرضى'
    },
    {
      title: 'الفرق التسويقية وخدمة العملاء',
      description: 'أدوات احترافية لإدارة الحملات والاستجابة السريعة'
    },
    {
      title: 'المشاريع الناشئة والقطاعات الحكومية',
      description: 'حلول مرنة تتناسب مع جميع أحجام الأعمال'
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'منصة معتمدة رسميًا من Meta',
      description: 'شراكة رسمية تضمن الموثوقية والأمان'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'تكامل كامل مع القنوات الرقمية',
      description: 'واتساب، إنستغرام، ماسنجر، تيليجرام، البريد الإلكتروني'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: 'أدوات احترافية متطورة',
      description: 'شات بوت، أتمتة، وحملات جماعية ذكية'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'واجهة عربية سهلة الاستخدام',
      description: 'مصممة خصيصاً لفرق التسويق وخدمة العملاء'
    }
  ];

  const blogPosts = [
    {
      title: 'كيفية زيادة مبيعاتك باستخدام واتساب للأعمال',
      excerpt: 'اكتشف الاستراتيجيات المثبتة لتحويل المحادثات إلى مبيعات...',
      date: '2025-01-15',
      readTime: '5 دقائق'
    },
    {
      title: 'أفضل الممارسات في خدمة العملاء عبر الرسائل',
      excerpt: 'تعلم كيفية تقديم خدمة عملاء استثنائية من خلال قنوات المراسلة...',
      date: '2025-01-10',
      readTime: '7 دقائق'
    },
    {
      title: 'دليل شامل لأتمتة المحادثات التجارية',
      excerpt: 'خطوات عملية لبناء نظام أتمتة فعال يوفر الوقت والجهد...',
      date: '2025-01-05',
      readTime: '10 دقائق'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-blue-700 mb-6">من نحن</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              أوتوربلاي هي منصة سعودية معتمدة من Meta، متخصصة في تقديم حلول رسمية وذكية 
              للتواصل بين الأنشطة التجارية والعملاء.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                نساعد المتاجر، الشركات، والمؤسسات على إدارة تواجدهم الرقمي والتفاعل مع عملائهم 
                عبر واتساب أعمال، بالإضافة إلى إنستغرام، فيسبوك ماسنجر، تيليجرام، البريد الإلكتروني، 
                وغيرها من القنوات – من مكان واحد وبأسلوب منظم وسهل.
              </p>
              <p className="text-gray-600 leading-relaxed">
                نؤمن بأن التواصل الفعال هو أساس نجاح أي عمل تجاري، ولذلك نقدم حلولاً تقنية متطورة 
                تجمع بين السهولة والأمان والفعالية.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الخيار الأول في العالم العربي لمن يبحث عن قناة اتصال موثوقة وذكية 
                تجمع بين الوضوح، الأمان، وسرعة الاستجابة – سواءً عبر واتساب أو وسائل التواصل الأخرى.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why AutoRply */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">لماذا أوتوربلاي؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً متكاملة ومبتكرة تلبي احتياجات الشركات من جميع الأحجام
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">مميزات إضافية</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">دعم فني متخصص بمعرفة تقنية وسياق محلي</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">استضافة داخل المملكة العربية السعودية</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">خيارات أمن متقدمة للقطاعين الخاص والحكومي</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img src="/lovable-uploads/ae59c829-ce41-429a-99c8-6ef496212d06.png" alt="Meta Partner" className="h-20 mx-auto opacity-80" />
                <p className="text-sm text-gray-500 mt-2">شريك معتمد من Meta</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">من نخدم؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً مخصصة لمختلف القطاعات والصناعات
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">مقالات من المدونة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف أحدث النصائح والاستراتيجيات في عالم التسويق الرقمي
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a 
                  href="https://autorply.sa/blogs" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  اقرأ المزيد ←
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a 
              href="https://autorply.sa/blogs" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              زيارة المدونة
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

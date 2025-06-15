
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://autorply.sa/assets/img/logo_64.svg" alt="شعار اوتوربلاي" className="w-12 mb-4" />
          <p className="text-sm text-gray-400">اوتوربلاي توفر حلول رسمية وآمنة للربط مع WhatsApp API للشركات والمتاجر الإلكترونية.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => scrollToSection('features')} className="hover:text-blue-400 transition">المميزات</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition">الباقات</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">تواصل معنا</button></li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h4 className="text-lg font-bold mb-4">روابط قانونية</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">الشروط والأحكام</a></li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
          <p className="text-sm text-gray-400">واتساب: <a href="https://wa.me/966564455333" className="text-blue-400 hover:text-blue-300 transition">966564455333+</a></p>
          <p className="text-sm text-gray-400 mt-2">البريد الإلكتروني: support@autorply.sa</p>
        </motion.div>
      </div>
      
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        © 2025 اوتوربلاي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;

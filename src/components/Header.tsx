
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center space-x-2 space-x-reverse"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="https://autorply.sa/assets/img/logo_64.svg" alt="شعار اوتوربلاي" className="h-10 w-10" />
          <span className="text-xl font-bold text-blue-700">اوتوربلاي</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
          <motion.button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 hover:text-blue-600 transition"
            whileHover={{ y: -2 }}
          >
            المميزات
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('pricing')} 
            className="text-gray-700 hover:text-blue-600 transition"
            whileHover={{ y: -2 }}
          >
            الباقات
          </motion.button>
          <motion.button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-blue-600 transition"
            whileHover={{ y: -2 }}
          >
            تواصل معنا
          </motion.button>
        </nav>

        <div className="hidden md:block">
          <motion.a 
            href="https://wa.me/966564455333" 
            target="_blank" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ابدأ الآن
          </motion.a>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden px-6 pb-4 bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={() => scrollToSection('features')} className="block text-gray-700 py-2 w-full text-right">المميزات</button>
            <button onClick={() => scrollToSection('pricing')} className="block text-gray-700 py-2 w-full text-right">الباقات</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 py-2 w-full text-right">تواصل معنا</button>
            <a href="https://wa.me/966564455333" target="_blank" className="block bg-blue-600 text-white text-center py-2 mt-2 rounded-full">ابدأ الآن</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

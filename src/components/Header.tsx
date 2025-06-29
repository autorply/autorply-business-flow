
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات', href: '/services' },
    { name: 'الرسائل الإعلانية', href: '/campaign' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'من نحن', href: '/about-us' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/uploads/autorply.svg" 
              alt="أوتوربلاي" 
              className="w-10 h-10 rounded-xl"
            />
            <span className="text-2xl font-bold text-blue-600">أوتوربلاي</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ مجاناً
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex flex-col gap-4 mt-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <motion.a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors text-center mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ابدأ مجاناً
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

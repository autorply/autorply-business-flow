
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const CarouselCards = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=150&fit=crop',
      title: 'هاتف ذكي جديد',
      price: '2,999 ريال',
      description: 'أحدث إصدار بمواصفات عالية',
      rating: 4.8,
      buttonText: 'اشتري الآن'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=150&fit=crop',
      title: 'حذاء رياضي',
      price: '599 ريال',
      description: 'مريح وأنيق للاستخدام اليومي',
      rating: 4.5,
      buttonText: 'اشتري الآن'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop',
      title: 'ساعة ذكية',
      price: '1,299 ريال',
      description: 'تتبع صحتك ولياقتك',
      rating: 4.7,
      buttonText: 'اشتري الآن'
    }
  ];

  // Auto rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % carouselItems.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">رسائل البطاقات</h2>
        <p className="text-xl text-gray-600">قوالب تفاعلية لعرض المنتجات والخدمات بطريقة جذابة</p>
      </motion.div>

      <div className="max-w-4xl mx-auto flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Modern iPhone Frame */}
          <div className="relative w-80 h-[650px] bg-white rounded-[3rem] p-2 shadow-2xl border-4 border-gray-100">
            <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative flex flex-col">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-black rounded-b-3xl z-10 border-4 border-black"></div>

              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white px-6 py-4 pt-10 flex items-center gap-3 relative z-0">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://autorply.sa/assets/img/logo_64.svg" 
                    alt="Autorply" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">متجر إلكتروني</h3>
                  <p className="text-xs opacity-75">متصل الآن</p>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 bg-[#efeae2] p-4 overflow-y-auto">
                {/* Bot Message */}
                <div className="mb-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800 mb-2">مرحباً! إليك أحدث المنتجات المتوفرة:</p>
                  </div>
                </div>

                {/* Carousel Card */}
                <div className="mb-4">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs relative">
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevCard}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={nextCard}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>

                    {/* Card Content */}
                    <motion.div
                      key={currentCard}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={carouselItems[currentCard].image}
                        alt={carouselItems[currentCard].title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="font-semibold text-gray-800 text-sm mb-1">
                          {carouselItems[currentCard].title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          {carouselItems[currentCard].description}
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">
                            {carouselItems[currentCard].rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-blue-600 text-sm">
                            {carouselItems[currentCard].price}
                          </span>
                          <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs hover:bg-green-600 transition-colors">
                            {carouselItems[currentCard].buttonText}
                          </button>
                        </div>
                      </div>
                    </motion.div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-1 p-2">
                      {carouselItems.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                            index === currentCard ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                          onClick={() => setCurrentCard(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* User Response */}
                <div className="flex justify-end mb-4">
                  <div className="bg-[#dcf8c6] rounded-lg p-3 shadow-sm max-w-xs">
                    <p className="text-sm text-gray-800">أريد المزيد من التفاصيل عن الهاتف الذكي</p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="bg-[#f0f0f0] p-3 flex items-center gap-2">
                <button className="text-gray-500 p-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                  <input
                    type="text"
                    placeholder="اكتب رسالة..."
                    className="w-full bg-transparent outline-none text-sm text-right"
                    disabled
                  />
                  <button className="text-gray-500 ml-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <button className="bg-green-500 text-white p-2 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        className="max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center px-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">تفاعلية</h4>
            <p className="text-sm text-gray-600">يمكن للعملاء التنقل بين المنتجات بسهولة</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">جذابة</h4>
            <p className="text-sm text-gray-600">عرض بصري مميز يلفت انتباه العملاء</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">فعالة</h4>
            <p className="text-sm text-gray-600">زيادة معدلات التحويل والمبيعات</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CarouselCards;

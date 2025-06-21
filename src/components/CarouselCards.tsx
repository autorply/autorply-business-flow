
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';

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
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-base">متجر إلكتروني</h3>
                  <p className="text-sm opacity-75">متصل الآن</p>
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
              <div className="bg-white p-3 flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <input
                    type="text"
                    placeholder="اكتب رسالة..."
                    className="w-full bg-transparent outline-none text-sm"
                    disabled
                  />
                </div>
                <button className="bg-green-500 text-white p-2 rounded-full">
                  <ShoppingBag className="w-4 h-4" />
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
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">تفاعلية</h4>
            <p className="text-sm text-gray-600">يمكن للعملاء التنقل بين المنتجات بسهولة</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">جذابة</h4>
            <p className="text-sm text-gray-600">عرض بصري مميز يلفت انتباه العملاء</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">فعالة</h4>
            <p className="text-sm text-gray-600">زيادة معدلات التحويل والمبيعات</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CarouselCards;

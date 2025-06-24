
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const MultiChannelSection = () => {
  const platforms = [
    {
      name: 'TikTok',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
        </svg>
      ),
      color: 'text-black',
      bgColor: 'bg-black'
    },
    {
      name: 'X',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'text-black',
      bgColor: 'bg-black'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426"/>
        </svg>
      ),
      color: 'text-green-500',
      bgColor: 'bg-green-500'
    },
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'text-blue-600',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            توثيق حسابات وسائل التواصل الاجتماعي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ربط وتوثيق جميع حساباتك على منصات التواصل الاجتماعي بأمان وموثوقية عالية
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative">
                  {/* Platform Icon Container */}
                  <div className={`w-20 h-20 rounded-2xl ${platform.name === 'Instagram' ? platform.bgColor : `bg-white`} 
                    shadow-lg border border-gray-100 flex items-center justify-center 
                    transition-all duration-300 group-hover:shadow-xl`}>
                    <div className={platform.name === 'Instagram' ? 'text-white' : platform.color}>
                      {platform.icon}
                    </div>
                  </div>
                  
                  {/* Blue Checkmark */}
                  <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                
                {/* Platform Name */}
                <p className="text-center mt-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {platform.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mx-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">حسابات موثقة ومحمية</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                جميع حساباتك على منصات التواصل الاجتماعي محمية بأعلى معايير الأمان مع إمكانية الإدارة المركزية 
                من لوحة تحكم واحدة. استمتع بتجربة سلسة وآمنة في إدارة جميع قنوات التواصل الخاصة بك.
              </p>
            </div>
          </motion.div>
        </div>

        {/* iPhone Frames - Updated to White */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* White iPhone Frame */}
              <div className="relative bg-white rounded-[3rem] p-2 shadow-2xl border-8 border-white">
                <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden">
                  {/* iPhone Screen Content */}
                  <div className="bg-white h-[600px] relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                      <span className="text-sm font-medium text-gray-800">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 bg-gray-800 rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-800 rounded-sm"></div>
                        <div className="w-6 h-3 border-2 border-gray-800 rounded-sm">
                          <div className="w-full h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* App Interface */}
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">A</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Autorply</h3>
                          <p className="text-xs text-gray-500">موثق ✓</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-100 p-3 rounded-lg rounded-tl-none">
                          <p className="text-sm text-gray-800">مرحباً! تم توثيق حسابك بنجاح</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none text-right">
                          <p className="text-sm text-gray-800">رائع! شكراً لكم</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              تكامل آمن مع جميع المنصات
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ربط مباشر وآمن مع جميع منصات التواصل الاجتماعي الرئيسية. 
              إدارة مركزية لجميع الرسائل والتفاعلات مع ضمان الحماية الكاملة لبياناتك.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">حماية متقدمة</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">ربط فوري</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">إدارة مركزية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">توثيق موثوق</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultiChannelSection;

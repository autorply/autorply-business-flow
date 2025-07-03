
import { motion } from 'framer-motion';
import { useWhatsAppForm } from '@/hooks/useWhatsAppForm';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';

const WhatsAppFormDemo = memo(() => {
  const { formData, isLoading, isSuccess, handleInputChange, handleSubmit } = useWhatsAppForm();

  return (
    <div className="bg-[#efeae2] p-4 flex-1 overflow-y-auto" style={{ height: 'calc(100% - 140px)' }}>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-semibold mb-3 text-center text-blue-600">استبيان سريع</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="demo-name" className="block text-xs text-gray-600 mb-1">الاسم *</label>
            <input 
              id="demo-name"
              type="text" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="أدخل اسمك"
              aria-required="true"
              required
            />
          </div>
          <div>
            <label htmlFor="demo-email" className="block text-xs text-gray-600 mb-1">البريد الإلكتروني *</label>
            <input 
              id="demo-email"
              type="email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="email@example.com"
              aria-required="true"
              required
            />
          </div>
          <div>
            <label htmlFor="demo-phone" className="block text-xs text-gray-600 mb-1">رقم الهاتف *</label>
            <input 
              id="demo-phone"
              type="tel" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="+966 5X XXX XXXX"
              aria-required="true"
              required
            />
          </div>
          <fieldset>
            <legend className="block text-xs text-gray-600 mb-1">التقييم</legend>
            <div className="flex gap-1" role="radiogroup" aria-label="تقييم الخدمة من 1 إلى 5 نجوم">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  type="button"
                  role="radio"
                  aria-checked={star <= formData.rating}
                  aria-label={`${star} نجوم`}
                  className={`text-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-500`}
                  onClick={() => handleInputChange('rating', star)}
                >
                  ★
                </button>
              ))}
            </div>
          </fieldset>
          <button 
            type="submit" 
            disabled={isLoading || isSuccess}
            aria-label={isLoading ? "جاري إرسال الاستبيان" : isSuccess ? "تم إرسال الاستبيان بنجاح" : "إرسال الاستبيان"}
            className="w-full bg-green-500 text-white py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                جاري الإرسال...
              </>
            ) : isSuccess ? (
              '✓ تم الإرسال بنجاح!'
            ) : (
              'إرسال'
            )}
          </button>
        </form>
      </div>
    </div>
  );
});

WhatsAppFormDemo.displayName = 'WhatsAppFormDemo';

export default WhatsAppFormDemo;

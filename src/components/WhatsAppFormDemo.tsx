
import { motion } from 'framer-motion';
import { useWhatsAppForm } from '@/hooks/useWhatsAppForm';
import { Loader2 } from 'lucide-react';

const WhatsAppFormDemo = () => {
  const { formData, isLoading, isSuccess, handleInputChange, handleSubmit } = useWhatsAppForm();

  return (
    <div className="bg-[#efeae2] p-4 flex-1 overflow-y-auto" style={{ height: 'calc(100% - 140px)' }}>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-sm font-semibold mb-3 text-center text-blue-600">استبيان سريع</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">الاسم *</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm" 
              placeholder="أدخل اسمك"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">البريد الإلكتروني *</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm" 
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">رقم الهاتف *</label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full p-2 border border-gray-200 rounded text-sm" 
              placeholder="+966 5X XXX XXXX"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">التقييم</label>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(star => (
                <span 
                  key={star} 
                  className={`text-lg cursor-pointer transition-colors ${
                    star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-500`}
                  onClick={() => handleInputChange('rating', star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button 
            type="submit" 
            disabled={isLoading || isSuccess}
            className="w-full bg-green-500 text-white py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
};

export default WhatsAppFormDemo;

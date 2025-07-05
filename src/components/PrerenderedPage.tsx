
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PrerenderedPageProps {
  children: React.ReactNode;
}

const PrerenderedPage = ({ children }: PrerenderedPageProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // تحديد ما إذا كانت الصفحة تم تحميلها من خادم pre-rendered أم لا
    const isPrerendered = document.documentElement.getAttribute('data-prerendered') === 'true';
    
    if (isPrerendered) {
      // إضافة تأخير بسيط للسماح بـ hydration الكامل
      const hydrationTimer = setTimeout(() => {
        setIsHydrated(true);
        document.documentElement.removeAttribute('data-prerendered');
      }, 100);

      return () => clearTimeout(hydrationTimer);
    } else {
      setIsHydrated(true);
    }
  }, [location.pathname]);

  // إضافة loading state أثناء hydration للصفحات المُعرَّضة مسبقًا
  if (!isHydrated && typeof window !== 'undefined') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600" dir="rtl">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrerenderedPage;

import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BreadcrumbStructuredData = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getBreadcrumbData = () => {
    const baseUrl = 'https://autorply.sa';
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length === 0) return null;

    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": baseUrl
      }
    ];

    const pathMap: Record<string, string> = {
      'services': 'خدماتنا',
      'pricing': 'الأسعار',
      'about-us': 'من نحن',
      'contact': 'تواصل معنا',
      'faq': 'الأسئلة الشائعة',
      'resources': 'الموارد',
      'articles': 'المقالات',
      'tutorials': 'الشروحات',
      'comparisons': 'المقارنات',
      'sitemap': 'خريطة الموقع'
    };

    let currentPath = baseUrl;
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = pathMap[segment] || segment;
      
      itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": currentPath
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  };

  const breadcrumbData = getBreadcrumbData();

  if (!breadcrumbData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbStructuredData;
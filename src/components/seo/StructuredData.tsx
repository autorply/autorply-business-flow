
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  data?: Record<string, any>;
}

const StructuredData = ({ type = 'Organization', data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseData,
          name: "اوتوربلاي",
          alternateName: "Autorply",
          url: "https://autorply.sa",
          logo: "https://autorply.sa/uploads/autorply.svg",
          description: "منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات",
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+966594959443",
            contactType: "customer service"
          },
          sameAs: [
            "https://twitter.com/autorply",
            "https://linkedin.com/company/autorply"
          ],
          ...data
        };
      
      case 'WebSite':
        return {
          ...baseData,
          name: "اوتوربلاي",
          url: "https://autorply.sa",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://autorply.sa/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
      
      case 'Service':
        return {
          ...baseData,
          name: "واتساب API وخدمات الردود الآلية",
          provider: {
            "@type": "Organization",
            name: "اوتوربلاي"
          },
          description: "خدمات متكاملة لواتساب الأعمال مع الردود الآلية والحملات التسويقية",
          areaServed: "SA",
          ...data
        };
      
      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;

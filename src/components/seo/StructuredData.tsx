
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
          logo: "https://autorply.sa/assets/img/logo_64.svg",
          description: "منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات",
          address: {
            "@type": "PostalAddress",
            streetAddress: "7541 يحيى الأنصاري، 3505",
            addressLocality: "جدة",
            postalCode: "23831",
            addressCountry: {
              "@type": "Country",
              name: "SA"
            }
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+966594959443",
            contactType: "customer support",
            areaServed: "SA",
            availableLanguage: ["Arabic", "English"]
          },
          sameAs: [
            "https://www.tiktok.com/@autorply",
            "https://x.com/Autorplycom",
            "https://www.linkedin.com/company/autorply",
            "https://wa.me/autorply"
          ],
          ...data
        };
      
      case 'WebSite':
        return {
          ...baseData,
          name: "اوتوربلاي",
          url: "https://autorply.sa",
          description: "منصة واتساب الأعمال الرائدة في السعودية مع دعم كامل للردود الآلية والحملات التسويقية",
          inLanguage: "ar-SA",
          publisher: {
            "@type": "Organization",
            name: "اوتوربلاي",
            logo: "https://autorply.sa/assets/img/logo_64.svg"
          },
          potentialAction: [
            {
              "@type": "SearchAction",
              target: "https://autorply.sa/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ],
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

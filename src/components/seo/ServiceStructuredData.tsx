import { Helmet } from 'react-helmet-async';

interface Service {
  name: string;
  description: string;
  features: string[];
}

interface ServiceStructuredDataProps {
  services?: Service[];
}

const ServiceStructuredData = ({ services }: ServiceStructuredDataProps) => {
  const defaultServices = [
    {
      name: "واتساب API للأعمال",
      description: "ربط رسمي وآمن مع WhatsApp Business API مع دعم كامل للردود الآلية",
      features: ["ردود تلقائية ذكية", "تقارير مفصلة", "دعم رسمي من Meta"]
    },
    {
      name: "الردود الآلية الذكية",
      description: "نظام ردود آلية متقدم يستخدم الذكاء الصناعي للتفاعل مع العملاء",
      features: ["ذكاء صناعي متقدم", "ردود فورية", "تخصيص كامل"]
    },
    {
      name: "التكامل مع المنصات",
      description: "تكامل سلس مع أكثر من 200 منصة وأداة تقنية عالمية",
      features: ["200+ تكامل متاح", "ربط تلقائي", "مزامنة البيانات"]
    }
  ];

  const servicesToUse = services || defaultServices;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesToUse.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.name,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "اوتوربلاي",
        "url": "https://autorply.sa"
      },
      "areaServed": "SA",
      "serviceType": "WhatsApp Business API",
      "category": "Business Communication Software",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات واتساب الأعمال",
        "itemListElement": service.features.map((feature, idx) => ({
          "@type": "Offer",
          "position": idx + 1,
          "name": feature,
          "description": `${feature} كجزء من خدمات ${service.name}`
        }))
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ServiceStructuredData;
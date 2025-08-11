
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface PrerenderedMetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const PrerenderedMetaTags = ({
  title = 'اوتوربلاي - WhatsApp API | منصة واتساب الأعمال الرائدة في السعودية',
  description = 'منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات التسويقية. شريك Meta المعتمد.',
  keywords = 'واتساب, WhatsApp API, الردود الآلية, التسويق الرقمي, خدمة العملاء, السعودية',
  image = 'https://autorply.sa/assets/img/logo_64.svg',
  url,
  type = 'website',
  author = 'أوتوربلاي'
}: PrerenderedMetaTagsProps) => {
  const location = useLocation();
  const currentUrl = url || `https://autorply.sa${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      
      {/* Language and Direction */}
      <html lang="ar-SA" dir="rtl" />
      <meta name="language" content="Arabic" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="أوتوربلاي" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Autorplycom" />
      <meta name="twitter:creator" content="@Autorplycom" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="اوتوربلاي - منصة واتساب الأعمال" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Prerendering specific tags */}
      <meta name="prerender-status-code" content="200" />
      <meta name="prerender-spa-plugin" content="true" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="ar-SA" href={currentUrl} />
      <link rel="alternate" hrefLang="ar" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Mark as prerendered for hydration */}
      <script type="application/javascript">
        {`
          if (typeof window === 'undefined') {
            document.documentElement.setAttribute('data-prerendered', 'true');
          }
        `}
      </script>
    </Helmet>
  );
};

export default PrerenderedMetaTags;

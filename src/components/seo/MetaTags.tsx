
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const MetaTags = ({
  title = 'اوتوربلاي - WhatsApp API',
  description = 'منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات',
  keywords = 'واتساب, WhatsApp API, الردود الآلية, التسويق الرقمي, خدمة العملاء, السعودية',
  image = 'https://autorply.sa/uploads/autorply.svg',
  url = 'https://autorply.sa',
  type = 'website',
  author = 'اوتوربلاي'
}: MetaTagsProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="اوتوربلاي" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;

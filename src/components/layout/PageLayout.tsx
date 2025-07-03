
import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MetaTags from '../seo/MetaTags';
import StructuredData from '../seo/StructuredData';
import { useSEO } from '../../hooks/useSEO';

interface PageLayoutProps {
  children: ReactNode;
  structuredDataType?: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  customMetaTags?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  };
}

const PageLayout = ({ 
  children, 
  structuredDataType = 'Organization',
  customMetaTags 
}: PageLayoutProps) => {
  const seoData = useSEO();
  
  const metaProps = {
    ...seoData,
    ...customMetaTags
  };

  return (
    <HelmetProvider>
      <MetaTags {...metaProps} />
      <StructuredData type={structuredDataType} />
      {children}
    </HelmetProvider>
  );
};

export default PageLayout;

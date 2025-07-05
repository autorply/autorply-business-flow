
import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MetaTags from '../seo/MetaTags';
import StructuredData from '../seo/StructuredData';
import PrerenderedPage from '../PrerenderedPage';
import { useSEO } from '../../hooks/useSEO';

interface PageLayoutProps {
  children: ReactNode;
  structuredDataType?: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  customMetaTags?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
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
      <PrerenderedPage>
        <MetaTags {...metaProps} />
        <StructuredData type={structuredDataType} />
        {children}
      </PrerenderedPage>
    </HelmetProvider>
  );
};

export default PageLayout;

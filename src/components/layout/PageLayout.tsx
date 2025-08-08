import { ReactNode, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import MetaTags from '../seo/MetaTags';
import StructuredData from '../seo/StructuredData';
import BreadcrumbStructuredData from '../seo/BreadcrumbStructuredData';
import PrerenderedPage from '../PrerenderedPage';
import { useSEO } from '../../hooks/useSEO';

interface PageLayoutProps {
  children: ReactNode;
  structuredDataType?: 'Organization' | 'WebSite' | 'Article' | 'Product' | 'Service';
  includeOrganization?: boolean;
  customMetaTags?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
  };
  canonical?: string;
}

const PageLayout = ({ 
  children, 
  structuredDataType = 'Organization',
  includeOrganization = false,
  customMetaTags,
  canonical
}: PageLayoutProps) => {
  const seoData = useSEO();
  const location = useLocation();
  const isResourceRoute = location.pathname.startsWith('/resources');
  
  const metaProps = {
    ...seoData,
    ...customMetaTags
  };

  // Signal to the prerenderer that the page is ready once critical content is rendered
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Fire after next tick to ensure Helmet and above-the-fold content rendered
      setTimeout(() => {
        document.dispatchEvent(new Event('prerender-ready'));
      }, 0);
    }
  }, [location.pathname]);
  return (
    <HelmetProvider>
      <Helmet>
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <PrerenderedPage>
        {!isResourceRoute && <MetaTags {...metaProps} />}
        
        {includeOrganization && structuredDataType !== 'Organization' && (
          <StructuredData type="Organization" />
        )}
        <StructuredData type={structuredDataType} />
        <BreadcrumbStructuredData />

        {children}
      </PrerenderedPage>
    </HelmetProvider>
  );
};

export default PageLayout;

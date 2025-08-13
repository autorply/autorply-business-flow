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
  const path = location.pathname;
  const isResourcePath = path.startsWith('/resources');
  const isResourceDetail = /^\/resources\/[^/]+\/[^/]+$/.test(path);
  
  const metaProps = {
    ...seoData,
    ...customMetaTags
  };

  // Signal to the prerenderer that the page is ready once critical content is rendered
  useEffect(() => {
    if (typeof document !== 'undefined' && !isResourcePath) {
      // Fire after next tick to ensure Helmet and above-the-fold content rendered
      setTimeout(() => {
        document.dispatchEvent(new Event('prerender-ready'));
      }, 0);
    }
  }, [location.pathname, isResourcePath]);
  return (
    <HelmetProvider>
      <Helmet>
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <PrerenderedPage>
        {!isResourceDetail && <MetaTags {...metaProps} />}
        
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

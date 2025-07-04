
import PageLayout from '../components/layout/PageLayout';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import HtmlSitemap from '../components/HtmlSitemap';
import Footer from '../components/Footer';

const Sitemap = () => {
  return (
    <PageLayout 
      structuredDataType="WebSite"
      customMetaTags={{
        title: 'خريطة الموقع - اوتوربلاي | جميع صفحات الموقع',
        description: 'خريطة شاملة لجميع صفحات وأقسام موقع اوتوربلاي. اكتشف خدماتنا، أسعارنا، ومواردنا بسهولة.',
        keywords: 'خريطة الموقع, صفحات اوتوربلاي, فهرس الموقع, واتساب الأعمال, خدماتنا'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
        <Header />
        <Breadcrumbs />
        <main className="pt-20">
          <HtmlSitemap />
        </main>
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Sitemap;

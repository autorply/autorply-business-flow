import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesList from "@/components/resources/ResourcesList";
import OptimizedContainer from "@/components/OptimizedContainer";
import PageLayout from "@/components/layout/PageLayout";

const Resources = () => {
  return (
    <PageLayout 
      structuredDataType="WebSite"
      includeOrganization={true}
      customMetaTags={{
        title: 'الموارد التعليمية | اوتوربلاي - مقالات وشروحات واتساب API',
        description: 'اكتشف مجموعة شاملة من المقالات والشروحات والمقارنات حول واتساب API والأتمتة التجارية لتطوير أعمالك',
        keywords: 'موارد واتساب, شروحات واتساب API, مقالات تقنية, دليل الأعمال, أتمتة المحادثات',
        url: 'https://autorply.sa/resources'
      }}
    >
      <Header />
      
      <main>
        <OptimizedContainer className="py-16">
          <ResourcesList />
        </OptimizedContainer>
      </main>

      <Footer />
    </PageLayout>
  );
};

export default Resources;
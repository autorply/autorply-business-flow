import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceContentComponent from "@/components/resources/ResourceContent";
import OptimizedContainer from "@/components/OptimizedContainer";
import PageLayout from "@/components/layout/PageLayout";

const ResourceContentPage = () => {
  return (
    <PageLayout 
      structuredDataType="Article"
      includeOrganization={true}
    >
      <Header />
      
      <main>
        <OptimizedContainer className="py-16">
          <ResourceContentComponent />
        </OptimizedContainer>
      </main>

      <Footer />
    </PageLayout>
  );
};

export default ResourceContentPage;
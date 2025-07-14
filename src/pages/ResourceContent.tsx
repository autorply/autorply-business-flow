import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceContentComponent from "@/components/resources/ResourceContent";
import OptimizedContainer from "@/components/OptimizedContainer";

const ResourceContentPage = () => {
  return (
    <>
      <Header />
      
      <main>
        <OptimizedContainer className="py-16">
          <ResourceContentComponent />
        </OptimizedContainer>
      </main>

      <Footer />
    </>
  );
};

export default ResourceContentPage;
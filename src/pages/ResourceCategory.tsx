import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesList from "@/components/resources/ResourcesList";
import OptimizedContainer from "@/components/OptimizedContainer";
import PageLayout from "@/components/layout/PageLayout";

const ResourceCategory = () => {
  const { category } = useParams();

  const getCategoryInfo = (cat: string) => {
    switch (cat) {
      case 'articles':
        return {
          title: 'المقالات',
          description: 'مقالات متخصصة في واتساب API وحلول الأعمال الرقمية',
          keywords: 'مقالات واتساب, واتساب API, أعمال رقمية, تسويق واتساب'
        };
      case 'tutorials':
        return {
          title: 'الشروحات',
          description: 'شروحات تفصيلية وتدريبات عملية لإتقان واتساب API',
          keywords: 'شروحات واتساب, تدريب واتساب API, دروس تطبيقية, تعلم الأتمتة'
        };
      case 'comparisons':
        return {
          title: 'المقارنات',
          description: 'مقارنات شاملة بين الحلول والخدمات المختلفة لواتساب الأعمال',
          keywords: 'مقارنة واتساب, واتساب API مقابل العادي, مقارنة الخدمات'
        };
      default:
        return {
          title: 'الموارد',
          description: 'موارد تعليمية متنوعة',
          keywords: 'موارد واتساب'
        };
    }
  };

  const categoryInfo = getCategoryInfo(category || '');

  return (
    <PageLayout 
      structuredDataType="WebSite"
      includeOrganization={true}
      customMetaTags={{
        title: `${categoryInfo.title} | اوتوربلاي - موارد واتساب API`,
        description: categoryInfo.description,
        keywords: categoryInfo.keywords,
        url: `https://autorply.sa/resources/${category}`
      }}
    >
      <Header />
      
      <main>
        <OptimizedContainer className="py-16">
          <ResourcesList category={category} />
        </OptimizedContainer>
      </main>

      <Footer />
    </PageLayout>
  );
};

export default ResourceCategory;
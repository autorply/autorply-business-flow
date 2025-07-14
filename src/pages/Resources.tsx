import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesList from "@/components/resources/ResourcesList";
import OptimizedContainer from "@/components/OptimizedContainer";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>الموارد التعليمية | اوتوربلاي - مقالات وشروحات واتساب API</title>
        <meta 
          name="description" 
          content="اكتشف مجموعة شاملة من المقالات والشروحات والمقارنات حول واتساب API والأتمتة التجارية لتطوير أعمالك"
        />
        <meta 
          name="keywords" 
          content="موارد واتساب, شروحات واتساب API, مقالات تقنية, دليل الأعمال, أتمتة المحادثات"
        />
        <meta property="og:title" content="الموارد التعليمية | اوتوربلاي" />
        <meta property="og:description" content="مجموعة شاملة من الموارد التعليمية لواتساب API" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://autorply.sa/resources" />
      </Helmet>

      <Header />
      
      <main>
        <OptimizedContainer className="py-16">
          <ResourcesList />
        </OptimizedContainer>
      </main>

      <Footer />
    </>
  );
};

export default Resources;
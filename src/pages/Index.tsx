
import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MetaPartnerBadge from '../components/MetaPartnerBadge';
import Features from '../components/Features';
import OmnichannelSection from '../components/OmnichannelSection';
import CarouselCards from '../components/CarouselCards';
import LiveChatSection from '../components/LiveChatSection';
import MultiChannelSection from '../components/MultiChannelSection';
import AutoSlider from '../components/AutoSlider';
import SmartSurveys from '../components/SmartSurveys';
import SmartSolutions from '../components/SmartSolutions';
import AppointmentBooking from '../components/AppointmentBooking';
import Integrations from '../components/Integrations';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <PageLayout 
      structuredDataType="WebSite"
      customMetaTags={{
        title: 'أوتوربلاي - WhatsApp API | منصة واتساب الأعمال الرائدة في السعودية',
        description: 'منصة متكاملة تتيح لك التواصل مع عملائك بسهولة عبر واتساب، مع دعم كامل للردود الآلية والحملات التسويقية. شريك Meta المعتمد.',
        keywords: 'واتساب أعمال, WhatsApp API, الردود الآلية, واتساب تجاري, شات بوت, التسويق الرقمي, خدمة العملاء, السعودية, Meta Partner'
      }}
    >
      <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
        <Header />
        <Hero />
        <MetaPartnerBadge />
        <Features />
        <OmnichannelSection />
        <CarouselCards />
        <LiveChatSection />
        <MultiChannelSection />
        <AutoSlider />
        <SmartSurveys />
        <SmartSolutions />
        <AppointmentBooking />
        <Integrations />
        <Pricing />
        <FAQ />
        <Clients />
        
        {/* SEO Internal Links Section */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/services" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  خدمات واتساب الأعمال
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  باقات واتساب API
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/campaign" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  الحملات التسويقية
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/about-us" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  عن أوتوربلاي
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/technology" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  التقنيات المستخدمة
                </a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                  تواصل معنا
                </a>
              </div>
            </div>
            
            {/* Additional SEO Content */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                لماذا تختار <a href="/about-us" className="text-blue-600 hover:text-blue-800">أوتوربلاي</a> لأعمالك؟
              </h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                نحن <a href="/tech-partners" className="text-blue-600 hover:text-blue-800">شريك Meta المعتمد</a> في المملكة العربية السعودية، 
                نقدم <a href="/services" className="text-blue-600 hover:text-blue-800">حلول واتساب الأعمال</a> المتكاملة مع 
                <a href="/pricing" className="text-blue-600 hover:text-blue-800"> أسعار تنافسية</a> و
                <a href="/faq" className="text-blue-600 hover:text-blue-800"> دعم فني متميز</a>. 
                اكتشف كيف يمكن لـ<a href="/campaign" className="text-blue-600 hover:text-blue-800">الحملات التسويقية الذكية</a> 
                أن تساعد في نمو أعمالك وتحسين <a href="/success-story" className="text-blue-600 hover:text-blue-800">قصص نجاح</a> عملائك.
              </p>
            </div>
          </div>
        </section>
        
        <Contact />
        <Footer />
      </div>
    </PageLayout>
  );
};

export default Index;

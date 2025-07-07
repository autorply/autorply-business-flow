
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
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <PageLayout 
      structuredDataType="WebSite"
      includeOrganization={true}
      customMetaTags={{
        title: 'اوتوربلاي - WhatsApp API | منصة واتساب الأعمال الرائدة في السعودية',
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
        
        {/* Enhanced SEO Internal Links Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                اكتشف حلول <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">واتساب الأعمال</Link> المتطورة
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                نحن <Link to="/tech-partners" className="text-blue-600 hover:text-blue-800 font-medium">شريك Meta المعتمد</Link> في المملكة العربية السعودية، 
                نقدم <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">حلول واتساب الأعمال</Link> المتكاملة مع 
                <Link to="/pricing" className="text-blue-600 hover:text-blue-800 font-medium"> أسعار تنافسية</Link> و
                <Link to="/faq" className="text-blue-600 hover:text-blue-800 font-medium"> دعم فني متميز</Link>. 
                اكتشف كيف يمكن لـ<Link to="/campaign" className="text-blue-600 hover:text-blue-800 font-medium">الحملات التسويقية الذكية</Link> 
                أن تساعد في نمو أعمالك وتحسين <Link to="/success-story" className="text-blue-600 hover:text-blue-800 font-medium">قصص نجاح</Link> عملائك.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {[
                { title: 'خدمات واتساب الأعمال', href: '/services', desc: 'حلول متكاملة للتواصل التجاري' },
                { title: 'باقات واتساب API', href: '/pricing', desc: 'أسعار تنافسية تناسب جميع الأعمال' },
                { title: 'الحملات التسويقية', href: '/campaign', desc: 'حملات ذكية وفعالة عبر واتساب' },
                { title: 'عن اوتوربلاي', href: '/about-us', desc: 'قصتنا وخبرتنا في المجال' },
                { title: 'التقنيات المستخدمة', href: '/technology', desc: 'أحدث التقنيات والابتكارات' },
                { title: 'شركاؤنا التقنيون', href: '/tech-partners', desc: 'شراكاتنا مع أكبر الشركات' },
                { title: 'قصص النجاح', href: '/success-story', desc: 'تجارب عملائنا الناجحة' },
                { title: 'تواصل معنا', href: '/contact', desc: 'نحن هنا لمساعدتك دائماً' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border hover:border-blue-200"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </Link>
              ))}
            </div>
            
            {/* Services Highlight with Internal Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                لماذا تختار <Link to="/about-us" className="text-blue-600 hover:text-blue-800">اوتوربلاي</Link> لأعمالك؟
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link to="/tech-partners" className="text-blue-600 hover:text-blue-800">شريك Meta المعتمد</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">أول شريك معتمد في المنطقة مع إمكانيات متقدمة</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link to="/services" className="text-blue-600 hover:text-blue-800">الردود الآلية الذكية</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">أتمتة شاملة لخدمة العملاء على مدار الساعة</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <Link to="/campaign" className="text-blue-600 hover:text-blue-800">حملات تسويقية متقدمة</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">استهداف دقيق ونتائج مضمونة لحملاتك</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  احصل على استشارة مجانية
                </Link>
              </div>
            </div>

            {/* Quick Access Links */}
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { name: 'الأسئلة الشائعة', href: '/faq' },
                  { name: 'مركز المساعدة', href: 'https://help.autorply.sa/' },
                  { name: 'رؤيتنا', href: '/vision' },
                  { name: 'الفوترة', href: '/billing' },
                  { name: 'خريطة الموقع', href: '/sitemap' },
                  { name: 'سياسة الخصوصية', href: '/privacy-policy' }
                ].map((link, index) => (
                  link.href.startsWith('http') ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={link.href}
                      className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
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

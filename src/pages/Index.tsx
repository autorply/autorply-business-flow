
import { useState } from 'react';
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
            {/* روابط داخلية لأغراض السيو */}
      <div className="hidden">
        <a href="/pricing">باقات واتساب</a>
        <a href="/blogs">مقالات واتساب</a>
        <a href="/docs/whatsapp-api">ربط API واتساب</a>
        <a href="/contact">تواصل معنا</a>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

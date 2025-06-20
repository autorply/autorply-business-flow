import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MetaPartnerBadge from '../components/MetaPartnerBadge';
import Features from '../components/Features';
import MultiChannelSection from '../components/MultiChannelSection';
import AutoSlider from '../components/AutoSlider';
import OmnichannelSection from '../components/OmnichannelSection';
import Pricing from '../components/Pricing';
import LeadForm from '../components/LeadForm';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SmartSurveys from '../components/SmartSurveys';
import SmartSolutions from '../components/SmartSolutions';
import Integrations from '../components/Integrations';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800" dir="rtl" lang="ar">
      <Header />
      <Hero />
      <MetaPartnerBadge />
      <Features />
      <MultiChannelSection />
      <AutoSlider />
      <OmnichannelSection />
      <SmartSurveys />
      <SmartSolutions />
      <Integrations />
      <Pricing />
      <LeadForm />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

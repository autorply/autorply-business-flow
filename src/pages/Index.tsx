
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MetaPartnerBadge from '../components/MetaPartnerBadge';
import Features from '../components/Features';
import OmnichannelSection from '../components/OmnichannelSection';
import CarouselCards from '../components/CarouselCards';
import MultiChannelSection from '../components/MultiChannelSection';
import AutoSlider from '../components/AutoSlider';
import SmartSurveys from '../components/SmartSurveys';
import SmartSolutions from '../components/SmartSolutions';
import AppointmentBooking from '../components/AppointmentBooking';
import Integrations from '../components/Integrations';
import Pricing from '../components/Pricing';
import LeadForm from '../components/LeadForm';
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
      <MultiChannelSection />
      <AutoSlider />
      <SmartSurveys />
      <SmartSolutions />
      <AppointmentBooking />
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

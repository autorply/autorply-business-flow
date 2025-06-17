
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MetaPartnerBadge from '../components/MetaPartnerBadge';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Demo from '../components/Demo';
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
      <Demo />
      <Pricing />
      <LeadForm />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import WebVitals from "./components/analytics/WebVitals";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Campaign from "./pages/Campaign";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Vision from "./pages/Vision";
import SuccessStory from "./pages/SuccessStory";
import FAQ from "./pages/FAQ";
import Technology from "./pages/Technology";
import Billing from "./pages/Billing";
import TechPartners from "./pages/TechPartners";
import BusinessPartners from "./pages/BusinessPartners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <WebVitals />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/success-story" element={<SuccessStory />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/tech-partners" element={<TechPartners />} />
            <Route path="/business-partners" element={<BusinessPartners />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

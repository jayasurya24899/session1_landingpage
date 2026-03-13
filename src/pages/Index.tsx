import { LanguageProvider } from "@/contexts/LanguageContext";
import HeroSection from "@/components/landing/HeroSection";
import PainPointSection from "@/components/landing/PainPointSection";
import SessionsSection from "@/components/landing/SessionsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import MentorSection from "@/components/landing/MentorSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import FixedCTA from "@/components/landing/FixedCTA";
import WhoIsThisFor from "@/components/landing/WhoIsThisFor";
import WhatYouGet21Days from "@/components/landing/WhatYouGet21Days";
import WalkAwaySection from "@/components/landing/WalkAwaySection";
import AnnouncementBar from "@/components/landing/AnnouncementBar";
import TestimonialsStrip from "@/components/landing/TestimonialsStrip";
import Footer from "@/components/landing/Footer";
import VideoTestimonials from "@/components/landing/VideoTestimonials";

const Index = () => (
  <LanguageProvider>
    <div className="noise-overlay">
      {/* <AnnouncementBar/> */}
      <HeroSection />
     {/* <TestimonialsStrip/> */}
       <div className="section-divider" />
      <WhoIsThisFor/>
      <div className="section-divider" />
      <PainPointSection />
      <div className="section-divider" />
      <WalkAwaySection/>
      <SessionsSection />
      <SocialProofSection />
      <VideoTestimonials/>
      <div className="section-divider" />
      <MentorSection />
      <WhatYouGet21Days/>
      <PricingSection />
      <div className="section-divider" />
      <FinalCTASection />
      {/* <Footer/> */}
      <StickyMobileCTA />
      <FixedCTA/>
    </div>
  </LanguageProvider>
);

export default Index;

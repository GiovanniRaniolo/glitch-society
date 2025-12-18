import {
  Header,
  Footer,
  HeroSection,
  BrowserMockup,
  ManifestoSection,
  AboutSection,
  CommunitySection,
  SectionDivider,
  FeaturedCourseSection
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero */}
      <HeroSection />
      <BrowserMockup />
      
      <SectionDivider />
      
      {/* Corso in Evidenza */}
      <FeaturedCourseSection />
      
      <SectionDivider />
      
      {/* Manifesto */}
      <ManifestoSection />
      
      <SectionDivider />
      
      {/* Chi Siamo */}
      <AboutSection />
      
      <SectionDivider />
      
      {/* Community */}
      <CommunitySection />
      
      <Footer />
    </div>
  );
};

export default Index;

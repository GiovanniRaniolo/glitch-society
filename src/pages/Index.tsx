import {
  Header,
  Footer,
  HeroSection,
  BrowserMockup,
  ManifestoSection,
  CommunitySection,
  SectionDivider,
  FeaturedCourseSection
} from "@/components/sections";
import { PageMeta } from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PageMeta />
      <Header />
      
      {/* Hero */}
      <HeroSection />
      <BrowserMockup />
      
      <SectionDivider />
      
      {/* Manifesto (La nostra mission) */}
      <ManifestoSection />

      <SectionDivider />

      {/* Corso in Evidenza */}
      <FeaturedCourseSection />
      
      <SectionDivider />
      
      {/* Community */}
      <CommunitySection />
      
      <Footer />
    </div>
  );
};

export default Index;

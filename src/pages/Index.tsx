import {
  Header,
  Footer,
  HeroSection,
  BrowserMockup,
  ManifestoSection,
  EthicsSection,
  CommunitySection,
  SectionDivider,
  FeaturedCourseSection
} from "@/components/sections";
import { PageMeta } from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid text-foreground overflow-x-hidden">
      <PageMeta />
      <Header />
      
      {/* Hero */}
      <HeroSection />
      <BrowserMockup />
      
      <SectionDivider />
      
      {/* Manifesto (La nostra mission) */}
      <ManifestoSection />

      <SectionDivider />

      {/* Etica (codice etico, T36) */}
      <EthicsSection />

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

import {
  Header,
  Footer,
  HeroSection,
  ManifestoSection,
  EthicsSection,
  CommunitySection,
  SectionDivider,
  FeaturedCourseSection,
  PartnersSection
} from "@/components/sections";
import { PageMeta } from "@/components/PageMeta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid text-foreground overflow-x-hidden">
      <PageMeta />
      <Header />
      
      {/* Hero */}
      <HeroSection />

      {/* Prossimo evento: subito dopo le CTA della Hero */}
      <FeaturedCourseSection />

      <SectionDivider />
      
      {/* Manifesto (La nostra mission) */}
      <ManifestoSection />

      <SectionDivider />

      {/* Etica (codice etico, T36) */}
      <EthicsSection />

      <SectionDivider />

      {/* Community */}
      <CommunitySection />

      <SectionDivider />

      {/* Partner */}
      <PartnersSection />
      
      <Footer />
    </div>
  );
};

export default Index;

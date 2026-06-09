import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { TrustAnchor } from "@/components/landing/TrustAnchor";
import { Manifesto } from "@/components/landing/Manifesto";
import { ResolutionTiers } from "@/components/landing/ResolutionTiers";
import { PanelOfNeutrals } from "@/components/landing/PanelOfNeutrals";
import { DualTrackGateway } from "@/components/landing/DualTrackGateway";
import { EnterpriseVerticals } from "@/components/landing/EnterpriseVerticals";
import { RetailPipeline } from "@/components/landing/RetailPipeline";
import { EconomicAdvantage } from "@/components/landing/EconomicAdvantage";
import { Jurisdiction } from "@/components/landing/Jurisdiction";
import { FAQTerminal } from "@/components/landing/FAQTerminal";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { SectionReveal, ScanDivider } from "@/components/landing/Motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Landing() {
  useSmoothScroll();
  return (
    <div
      data-testid="landing-page"
      className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]"
    >
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <ScanDivider />
        <SectionReveal><TrustAnchor /></SectionReveal>
        <ScanDivider />
        <SectionReveal><Manifesto /></SectionReveal>
        <SectionReveal><ResolutionTiers /></SectionReveal>
        <ScanDivider />
        <SectionReveal><PanelOfNeutrals /></SectionReveal>
        <ScanDivider />
        <SectionReveal><DualTrackGateway /></SectionReveal>
        <ScanDivider />
        <SectionReveal><EnterpriseVerticals /></SectionReveal>
        <ScanDivider />
        <SectionReveal><RetailPipeline /></SectionReveal>
        <ScanDivider />
        <SectionReveal><EconomicAdvantage /></SectionReveal>
        <ScanDivider />
        <SectionReveal><Jurisdiction /></SectionReveal>
        <SectionReveal><FAQTerminal /></SectionReveal>
      </main>
      <Footer />
    </div>
  );
}

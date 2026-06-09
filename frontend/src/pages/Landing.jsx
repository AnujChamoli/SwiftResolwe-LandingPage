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
import { TideDivider } from "@/components/landing/TideDivider";
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
        <TideDivider from="var(--bg-base)" to="var(--bg-surface-2)" />
        <TrustAnchor />
        <TideDivider from="var(--bg-surface-2)" to="var(--bg-base)" flip />
        <Manifesto />
        <ResolutionTiers />
        <TideDivider from="var(--bg-base)" to="var(--bg-surface-2)" />
        <PanelOfNeutrals />
        <TideDivider from="var(--bg-surface-2)" to="var(--bg-base)" flip />
        <DualTrackGateway />
        <TideDivider from="var(--bg-base)" to="var(--bg-surface-2)" />
        <EnterpriseVerticals />
        <TideDivider from="var(--bg-surface-2)" to="var(--bg-base)" flip />
        <RetailPipeline />
        <TideDivider from="var(--bg-base)" to="var(--bg-surface-2)" />
        <EconomicAdvantage />
        <TideDivider from="var(--bg-surface-2)" to="var(--bg-base)" flip />
        <Jurisdiction />
        <FAQTerminal />
      </main>
      <Footer />
    </div>
  );
}

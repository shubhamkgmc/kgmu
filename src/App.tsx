import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { LogoBar } from "./components/layout/LogoBar";
import { Hero } from "./components/sections/Hero";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PrintServices } from "./components/sections/PrintServices";
import { SitesSection } from "./components/sections/SitesSection";
import { DigitalServicesSection } from "./components/sections/DigitalServicesSection";
import { TeachingSection } from "./components/sections/TeachingSection";
import { TeamSection } from "./components/sections/TeamSection";

export default function App() {
  return (
    <>
      <Header />
      <LogoBar />
      <main>
        <Hero />
        <ServicesSection />
        <PrintServices />
        <SitesSection />
        <DigitalServicesSection />
        <TeachingSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

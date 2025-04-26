import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HowWeDoIt from "../../components/main/HowWeDoIt";
import LeadConsultation from "../../components/main/LeadConsultation";
import Hero from "../../components/main/MainHero";
import ManufacturerCarousel from "../../components/main/ManufacturerCarousel";
import ManufacturingComparison from "../../components/main/ManufacturingComparison";
import Our_clients from "../../components/main/OurClients";
import RevenueBoostingCard from "../../components/main/RevenueBoosting";
import SalesBlockers from "../../components/main/SalesBlocker";
import ServicesSection from "../../components/main/ServicesSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <SalesBlockers />
      <HowWeDoIt />
      <Our_clients />
      <ServicesSection />
      <ManufacturingComparison />
      <RevenueBoostingCard />
      <ManufacturerCarousel />
      <LeadConsultation />
    </div>
  );
}

import Header from "../../components/Header";
import HowWeDoIt from "../../components/main/HowWeDoIt";
import Hero from "../../components/main/MainHero";
import ManufacturerCarousel from "../../components/main/ManufacturerCarousel";
import ManufacturingComparison from "../../components/main/ManufacturingComparison";
import Our_clients from "../../components/main/OurClients";
import RevenueBoostingCard from "../../components/main/RevenueBoosting";
import SalesBlockers from "../../components/main/SalesBlocker";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SalesBlockers />
      <HowWeDoIt />
      <Our_clients />
      <ManufacturingComparison />
      <RevenueBoostingCard />
      <ManufacturerCarousel />
    </div>
  );
}

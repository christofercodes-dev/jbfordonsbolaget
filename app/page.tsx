import Hero from "@/components/Hero";
import SellCar from "@/components/SellCar";
import Info from "@/components/Info";
import InfoCards from "@/components/InfoCards";
import BrandsBanner from "@/components/BrandsBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <SellCar />
      <BrandsBanner />
      <InfoCards />
    </main>
  );
}
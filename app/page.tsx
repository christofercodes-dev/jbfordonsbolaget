import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Atmosphere from "@/components/Atmosphere";
import Features from "@/components/Features";
import Valuation from "@/components/Valuation";
import TrustBar from "@/components/TrustBar";
import SellCar from "@/components/SellCar";
import About from "@/components/About";
import Info from "@/components/Info";
import InfoCards from "@/components/InfoCards";
import BrandsBanner from "@/components/BrandsBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info/>
{/*       <TrustBar/>
 */}      <SellCar/>
 <BrandsBanner/>
 <InfoCards/>
      {/* <Process /> */}
   
    </main>
  );
}
import HeroWithServices from "@/components/HeroWithServices";
import MaterialsSection from "@/components/MaterialsSection";
import GameSection from "@/components/GameSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroWithServices />
      <MaterialsSection />
      <GameSection />
      <MobileStickyCTA />
    </div>
  );
}

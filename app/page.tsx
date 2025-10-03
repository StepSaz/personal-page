import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import GameSection from "@/components/GameSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <CoursesSection />
        <GameSection />
      </main>
      <Footer />
    </div>
  );
}

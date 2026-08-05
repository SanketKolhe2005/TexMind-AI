import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AIAssistant from "@/components/home/AIAssistant";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/home/AIChat";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Stats />
        <Categories />
        <FeaturedProducts />
        <AIAssistant />
        <AIChat />
      </main>

      <Footer />
    </>
  );
}
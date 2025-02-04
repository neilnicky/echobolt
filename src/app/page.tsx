import ComingSoon from "@/components/landingpage/ComingSoon";
import Features from "@/components/landingpage/Features";
import Footer from "@/components/landingpage/Footer";
import Hero from "@/components/landingpage/Hero";
import Navbar from "@/components/landingpage/Navbar";
import Pricing from "@/components/landingpage/Pricing";
import Privacy from "@/components/landingpage/Privacy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Privacy />
        <ComingSoon />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

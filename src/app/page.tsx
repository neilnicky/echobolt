import CodeBlock from "@/components/landingpage/CodeBlock";
import ComingSoon from "@/components/landingpage/ComingSoon";
import Features from "@/components/landingpage/Features";
import Hero from "@/components/landingpage/Hero";
import Pricing from "@/components/landingpage/Pricing";
import Privacy from "@/components/landingpage/Privacy";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <Hero />
        <CodeBlock />
        <Features />
        <Privacy />
        <ComingSoon />
        <Pricing />
      </main>
   
    </div>
  );
}

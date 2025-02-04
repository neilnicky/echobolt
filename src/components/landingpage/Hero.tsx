import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ShinyText from "../ui/Shinytext";
import SplitText from "../ui/Splittext";
import { Spotlight } from "../ui/Spotlight";

export default function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#001716]" />
      <div className="container mx-auto  relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          {/* <Sparkles className="h-4 w-4" /> */}
          <ShinyText
            text="The most affordable real-time widgets for your website"
            disabled={false}
            speed={3}
            className="custom-class "
          />
         
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 max-w-md md:max-w-xl">
          <SplitText
            text="Real-time Widgets Made Simple"
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
            delay={80}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <br />
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl ">
          Track your website visitors in real-time with our powerful and
          easy-to-integrate widgets. Perfect for modern web applications.
        </p>
        <div className="flex justify-start gap-4">
          <Link href="/signup">
            <Button className="gap-2  rounded-xl">
              Start for Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#demo">
            <Button variant="ghost" className="border rounded-xl">
              View Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
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
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4" />
          The most affordable real-time widgets for your website
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Real-time Widgets
          <br />
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl ">
          Track your website visitors in real-time with our powerful and
          easy-to-integrate widgets. Perfect for modern web applications.
        </p>
        <div className="flex justify-start gap-4">
          <Link href="/signup">
            <Button  className="gap-2  rounded-xl">
              Start for Free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#demo">
            <Button  variant="ghost" className="border rounded-xl">
              View Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

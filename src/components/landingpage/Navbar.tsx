import { Activity } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Activity className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">EchoLive</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-primary transition"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-primary transition"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-primary transition"
          >
            Docs
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

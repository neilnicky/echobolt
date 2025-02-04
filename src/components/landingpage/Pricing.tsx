import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Start for free, upgrade when you need more
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-background rounded-lg p-8 border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Developer</h3>
              <div className="text-3xl font-bold mb-2">Free</div>
              <p className="text-sm text-muted-foreground">
                Perfect for getting started
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>1 domain</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Up to 10 concurrent users</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic analytics</span>
              </li>
            </ul>
            <Link href="/signup" className="block">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>

          {/* Premium Plan */}
          <div className="bg-background rounded-lg p-8 border shadow-sm relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-2">
                $1<span className="text-lg text-muted-foreground">/mo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For growing websites
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>1 domain included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Up to 25 concurrent users</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>$1 per additional domain</span>
              </li>
            </ul>
            <Link href="/signup" className="block">
              <Button className="w-full">Upgrade Now</Button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-background rounded-lg p-8 border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-2">Custom</div>
              <p className="text-sm text-muted-foreground">
                For large-scale applications
              </p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited domains</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited concurrent users</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Lifetime license available</span>
              </li>
            </ul>
            <Link href="/contact" className="block">
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

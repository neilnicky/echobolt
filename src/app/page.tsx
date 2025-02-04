import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Zap, Shield, Users, Sparkles, Clock, Gauge, Rocket, Check, Lock, Eye, Database } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">EchoLive</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-muted-foreground hover:text-primary transition">Features</Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-primary transition">Pricing</Link>
            <Link href="/docs" className="text-muted-foreground hover:text-primary transition">Docs</Link>
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="container mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              The most affordable real-time widgets for your website
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Real-time Widgets
              <br />
              <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Track your website visitors in real-time with our powerful and easy-to-integrate widgets.
              Perfect for modern web applications.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start for Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button size="lg" variant="outline">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose EchoLive?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-muted-foreground">
                  See exactly who&apos;s on your website right now with accurate, real-time visitor counts.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
                <p className="text-muted-foreground">
                  GDPR compliant analytics that respect your visitors&apos; privacy while delivering insights.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-muted-foreground">
                  Simple drop-in widgets that work with any framework or technology stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy & Trust Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
                <Lock className="h-4 w-4" />
                Privacy First, Always
              </div>
              <h2 className="text-3xl font-bold mb-4">Zero Data Collection</h2>
              <p className="text-xl text-muted-foreground">
                We believe in absolute privacy. Our widgets only count visitors - nothing more, nothing less.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border shadow-sm">
                <Eye className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Personal Data</h3>
                <p className="text-muted-foreground">
                  We never collect, store, or process any personal information from your visitors.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border shadow-sm">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Just Numbers</h3>
                <p className="text-muted-foreground">
                  Only anonymous visitor counts - no cookies, no tracking, no fingerprinting.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg border shadow-sm">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">GDPR Friendly</h3>
                <p className="text-muted-foreground">
                  No consent banners needed. Our widgets are 100% compliant with privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-xl text-muted-foreground">
                We&apos;re building the future of real-time website widgets
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border bg-card">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Session Duration Tracker</h3>
                <p className="text-muted-foreground">
                  Track how long users spend on your website with detailed session analytics.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Gauge className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
                <p className="text-muted-foreground">
                  Real-time performance monitoring to ensure your website runs at its best.
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <Rocket className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Engagement Widgets</h3>
                <p className="text-muted-foreground">
                  Interactive elements to boost user engagement and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
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
                  <p className="text-sm text-muted-foreground">Perfect for getting started</p>
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
                  <div className="text-3xl font-bold mb-2">$1<span className="text-lg text-muted-foreground">/mo</span></div>
                  <p className="text-sm text-muted-foreground">For growing websites</p>
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
                  <p className="text-sm text-muted-foreground">For large-scale applications</p>
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
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-semibold">EchoLive</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EchoLive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
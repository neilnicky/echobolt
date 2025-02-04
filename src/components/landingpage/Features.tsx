import { Shield, Users, Zap } from "lucide-react";
import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EchoLive?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-muted-foreground">
              See exactly who&apos;s on your website right now with accurate,
              real-time visitor counts.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-muted-foreground">
              Simple drop-in widgets that work with any framework or technology
              stack.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
            <p className="text-muted-foreground">
              GDPR compliant analytics that respect your visitors&apos; privacy
              while delivering insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Database, Eye, Lock, Shield } from "lucide-react";
import React from "react";

export default function Privacy() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Lock className="h-4 w-4" />
            Privacy First, Always
          </div>
          <h2 className="text-3xl font-bold mb-4">Zero Data Collection</h2>
          <p className="text-xl text-muted-foreground">
            We believe in absolute privacy. Our widgets only count visitors -
            nothing more, nothing less.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background p-8 rounded-lg border shadow-sm">
            <Eye className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Personal Data</h3>
            <p className="text-muted-foreground">
              We never collect, store, or process any personal information from
              your visitors.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border shadow-sm">
            <Database className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Just Numbers</h3>
            <p className="text-muted-foreground">
              Only anonymous visitor counts - no cookies, no tracking, no
              fingerprinting.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border shadow-sm">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">GDPR Friendly</h3>
            <p className="text-muted-foreground">
              No consent banners needed. Our widgets are 100% compliant with
              privacy regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

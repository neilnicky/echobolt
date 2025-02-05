"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CodeBlock() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Works with
              <br />
              your stack
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Integrate it into your language or framework within minutes and
              unlock a simpler developer workflow.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium">
                Next.js
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium">
                React
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium">
                Vue
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium">
                Angular
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary/50 text-sm font-medium">
                Svelte
              </div>
            </div>
            <Link
              href="/docs"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "cursor-pointer"
              )}
            >
              View Documentation <ArrowRight className="h-4 w-4 " />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-12 bottom-0 top-auto" />
            <div className="glass-card rounded-xl overflow-hidden border border-border/50">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-background/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-primary">example.ts</div>
              </div>
              <div className="relative group">
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="language-typescript text-foreground">{`import { EchoBits } from '@echobits/client'

const analytics = new EchoBits({
  siteId: 'your-site-id',
})

// Initialize real-time visitor tracking
analytics.track({
  element: '#visitor-count',
  updateInterval: 1000,
})`}</code>
                </pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    copyToClipboard(
                      `import { EchoBits } from '@echobits/client'

const analytics = new EchoBits({
  siteId: 'your-site-id',
})

// Initialize real-time visitor tracking
analytics.track({
  element: '#visitor-count',
  updateInterval: 1000,
})`,
                      "code"
                    )
                  }
                >
                  {copied === "code" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between px-4">
              <div className="text-sm text-white">
                Ready to use in under 3 minutes
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs  text-white">
                  Live Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

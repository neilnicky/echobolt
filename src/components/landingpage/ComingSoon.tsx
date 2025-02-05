

import { Clock, Gauge, Rocket } from "lucide-react";
import ShinyText from "../ui/Shinytext";

export default function ComingSoon() {
  return (
    <section className="py-20 gradient-oreh">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ShinyText
            text="Coming Soon"
            disabled={false}
            speed={3}
            className="custom-class text-3xl font-bold mb-2"
          />
          <div className="w-fit mx-auto gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
            <ShinyText
              text="Continuous Updates and New Features"
              disabled={false}
              speed={3}
              className="custom-class "
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border bg-card">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Session Duration Tracker
            </h3>
            <p className="text-muted-foreground">
              Track how long users spend on your website with detailed session
              analytics.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Gauge className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
            <p className="text-muted-foreground">
              Real-time performance monitoring to ensure your website runs at
              its best.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card">
            <Rocket className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Engagement Widgets</h3>
            <p className="text-muted-foreground">
              Interactive elements to boost user engagement and conversion
              rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center  justify-center">
        <div className="flex items-center space-x-2">
          <Button>Add Your Website</Button>
        </div>
      </div>
    </div>
  );
}

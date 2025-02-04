"use client";

import AddDomain from "@/components/dashboard/AddDomain";
import GenerateKey from "@/components/dashboard/GenerateKey";
import { Settings } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [domains, setDomains] = useState<{ name: string; url: string }[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  const handleAddDomain = (name: string, url: string) => {
    setDomains([...domains, { name, url }]); // Store new domain
  };

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center  justify-center">
        <div className="flex items-center space-x-2">
          <AddDomain onAddDomain={handleAddDomain} />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Added Domains</h2>
        <ul className="mt-2 space-y-2">
          {domains.map((domain, index) => (
            <li
              key={index}
              className="flex  justify-between p-2 border rounded-lg"
            >
              <div>
                <span className="font-medium">{domain.name}</span> -{" "}
                {domain.url}
              </div>
              <Settings
                onClick={() => setSelectedDomain(index)}
                className="cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>

      {selectedDomain !== null && <GenerateKey />}
    </div>
  );
}

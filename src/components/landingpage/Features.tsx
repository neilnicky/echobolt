"use client";

import { Shield, Users, Zap } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-[#0a0f0d] border border-emerald-900/40 p-8 rounded-lg relative z-10 ">
        <motion.div
          // animate={{
          //   rotate: isHovered ? 360 : 0,
          // }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative mb-6 w-14 h-14 flex items-center justify-center"
        >
          <div
            className={`absolute inset-0 bg-emerald-500/10 rounded-lg transition-all duration-300 ${
              isHovered ? "scale-90 rotate-45" : "scale-0"
            }`}
          />
          <Icon
            className="h-8 w-8 text-emerald-500 relative z-10"
            strokeWidth={1.5}
          />
        </motion.div>

        <h3 className="text-xl font-medium mb-3 text-white/90 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-emerald-500/50"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-time Tracking",
      description:
        "See exactly who's on your website right now with accurate, real-time visitor counts.",
    },
    {
      icon: Users,
      title: "Easy Integration",
      description:
        "Simple drop-in widgets that work with any framework or technology stack.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description:
        "GDPR compliant analytics that respect your visitors' privacy while delivering insights.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-br from-[#030303] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-medium text-white/90 mb-4">
            Why Choose <span className="text-emerald-400">EchoLive</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Experience the future of web analytics with our cutting-edge
            features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

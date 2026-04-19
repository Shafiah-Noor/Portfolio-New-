import React from "react";
import { cn } from "@/lib/utils";

interface HeroBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const HeroBackground = ({ className, children }: HeroBackgroundProps) => {
  return (
    <div className={cn("absolute inset-0 z-0 w-full h-full overflow-hidden bg-white", className)}>
      {/* Noise Texture (Darker Dots) Background from demo.tsx */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.2) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative accent blob to maintain site theme slightly */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/5 -skew-x-12 translate-x-1/4 z-0" />
      
      {children}
    </div>
  );
};

export default HeroBackground;

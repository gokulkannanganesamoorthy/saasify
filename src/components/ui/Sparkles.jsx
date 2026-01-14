import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

// This is a simplified version of Sparkles for background
export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
}) => {
  // In a real implementation this would use tsparticles.
  // For this context, we will use a CSS-only sparkles/dots simulation
  // to avoid heavy dependency issues unless requested.
  // Actually, let's keep it simple with just the visual divider effect requested for FAQ usually.

  // Changing strategy: using a simple SVG pattern that looks like sparkles

  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full pointer-events-none',
        className
      )}
    >
      <div className="w-full h-full bg-black [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      {/* Placeholder for actual particles if installed */}
    </div>
  );
};

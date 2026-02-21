import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { MagicBentoContent, BentoProps } from "./MagicBentoContent";

const code = `// Universal Magic Bento Component
import React from 'react';
import { gsap } from 'gsap';

// See component source for full implementation details
// Features: Mouse tracking, Tilt effect, Particles, Spotlights
export const MagicBento = () => {
  return <div>Interactive Bento Grid</div>
}`;

export const MagicBento: React.FC<BentoProps> = (props) => {
    return (
        <ComponentShowcase title="Magic Bento" code={code} className="flex items-center justify-center p-12 bg-[#201E1D] min-h-[600px] w-full">
            <MagicBentoContent {...props} />
        </ComponentShowcase>
    );
};

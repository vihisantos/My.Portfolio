import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";
import { TiltCardContent } from "./TiltCardContent";

const code = `// TiltCard Component
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Code Implementation see source
export const TiltCard: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
  // ...
};
`;

export const TiltCard: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <ComponentShowcase title="Tilt Card" code={code} className="flex justify-center items-center p-12 min-h-[400px]">
            <div className="w-[300px] h-[300px]">
                <TiltCardContent className={className}>
                    {children}
                </TiltCardContent>
            </div>
        </ComponentShowcase>
    );
};

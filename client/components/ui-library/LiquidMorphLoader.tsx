import React from 'react';
import { motion } from 'framer-motion';

import { ComponentShowcase } from "./ComponentShowcase";

const code = `
import React from 'react';
import { motion } from 'framer-motion';

export const LiquidMorphLoader: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center size-64 bg-black/20 rounded-3xl overflow-hidden border border-white/5">
            {/* SVG Filter for Gooey Effect */}
            <svg className="hidden">
                <defs>
                    <filter id="liquid-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="relative filter blur-[1px]" style={{ filter: 'url(#liquid-goo)' }}>
                <motion.div
                    animate={{
                        x: [0, 80, 0, -80, 0],
                        y: [0, -40, 80, -40, 0],
                        scale: [1, 1.2, 0.8, 1.2, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0, 80, 0],
                        y: [0, 40, -80, 40, 0],
                        scale: [1, 0.8, 1.2, 0.8, 1]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -ms-6 -mt-6 size-12 rounded-full bg-white/40 blur-sm"
                />
            </div>

            <div className="absolute bottom-6 text-xs font-mono text-white/50 tracking-widest uppercase">
                Liquid Energy
            </div>
        </div>
    );
};
`;

export const LiquidMorphLoaderContent: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full min-h-[250px]">
            <style>
                {`
                @keyframes liquid-blob1-anim {
                    0% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(80px, -40px) scale(1.2); }
                    50% { transform: translate(0, 80px) scale(0.8); }
                    75% { transform: translate(-80px, -40px) scale(1.2); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                @keyframes liquid-blob2-anim {
                    0% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-80px, 40px) scale(0.8); }
                    50% { transform: translate(0, -80px) scale(1.2); }
                    75% { transform: translate(80px, 40px) scale(0.8); }
                    100% { transform: translate(0, 0) scale(1); }
                }

                @keyframes liquid-blob3-anim {
                    0% { transform: scale(1) rotate(0deg); }
                    50% { transform: scale(1.5) rotate(180deg); }
                    100% { transform: scale(1) rotate(360deg); }
                }

                .liquid-blob-1 {
                    animation: liquid-blob1-anim 6s ease-in-out infinite;
                }
                .liquid-blob-2 {
                    animation: liquid-blob2-anim 5s ease-in-out infinite;
                }
                .liquid-blob-3 {
                    animation: liquid-blob3-anim 4s ease-in-out infinite;
                }
                `}
            </style>

            {/* SVG Filter for Gooey Effect */}
            <svg className="hidden">
                <defs>
                    <filter id="liquid-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="relative filter blur-[1px]" style={{ filter: 'url(#liquid-goo)' }}>
                <div
                    className="liquid-blob-1 absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-sm"
                />
                <div
                    className="liquid-blob-2 absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm"
                />
                <div
                    className="liquid-blob-3 absolute top-1/2 left-1/2 -ms-6 -mt-6 size-12 rounded-full bg-white/40 blur-sm"
                />
            </div>
        </div>
    );
};

export function LiquidMorphLoader() {
    return (
        <ComponentShowcase title="Liquid Morph Loader" code={code} className="flex justify-center flex-col items-center">
            <LiquidMorphLoaderContent />
        </ComponentShowcase>
    );
}

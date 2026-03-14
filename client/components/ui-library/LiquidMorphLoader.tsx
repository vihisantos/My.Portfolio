import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { ComponentShowcase } from "./ComponentShowcase";

interface LiquidMorphLoaderProps {
    primaryColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    label?: string;
    duration?: number;
    className?: string;
    size?: number | string;
}

const code = `
import React from 'react';
import { motion } from 'framer-motion';

export const LiquidMorphLoader = ({ 
    primaryColor = "bg-cyan-500", 
    secondaryColor = "bg-purple-500",
    accentColor = "bg-white/40",
    label = "Liquid Energy",
    duration = 6
}) => {
    return (
        <div 
            className="relative flex items-center justify-center size-64 bg-black/20 rounded-3xl overflow-hidden border border-white/5"
            role="progressbar"
            aria-label="Liquid loading animation"
        >
            {/* SVG Filter for Gooey Effect */}
            <svg className="hidden" aria-hidden="true">
                <defs>
                    <filter id="liquid-goo-demo">
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

            <div className="relative filter blur-[1px]" style={{ filter: 'url(#liquid-goo-demo)' }} aria-hidden="true">
                <motion.div
                    animate={{
                        x: [0, 80, 0, -80, 0],
                        y: [0, -40, 80, -40, 0],
                        scale: [1, 1.2, 0.8, 1.2, 1]
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={\`absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full \${primaryColor} blur-sm\`}
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0, 80, 0],
                        y: [0, 40, -80, 40, 0],
                        scale: [1, 0.8, 1.2, 0.8, 1]
                    }}
                    transition={{
                        duration: duration - 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={\`absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full \${secondaryColor} blur-sm\`}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: duration - 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={\`absolute top-1/2 left-1/2 -ms-6 -mt-6 size-12 rounded-full \${accentColor} blur-sm\`}
                />
            </div>

            <div className="absolute bottom-6 text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
                {label}
            </div>
        </div>
    );
};
`;

export const LiquidMorphLoaderContent: React.FC<LiquidMorphLoaderProps> = ({
    primaryColor = "bg-cyan-500",
    secondaryColor = "bg-purple-500",
    accentColor = "bg-white/40",
    label = "Liquid Energy",
    duration = 6,
    size = "100%"
}) => {
    return (
        <div
            className="relative flex items-center justify-center w-full h-full min-h-[250px]"
            role="progressbar"
            aria-label="Liquid loading animation"
            style={{ width: size, height: size }}
        >
            {/* SVG Filter for Gooey Effect */}
            <svg className="hidden" aria-hidden="true">
                <defs>
                    <filter id="liquid-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <div className="relative filter blur-[0.5px]" style={{ filter: 'url(#liquid-goo)' }} aria-hidden="true">
                <motion.div
                    animate={{
                        x: [0, 60, 0, -60, 0],
                        y: [0, -30, 60, -30, 0],
                        scale: [1, 1.3, 0.7, 1.3, 1]
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={cn("absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full blur-md opacity-80", primaryColor)}
                />
                <motion.div
                    animate={{
                        x: [0, -60, 0, 60, 0],
                        y: [0, 30, -60, 30, 0],
                        scale: [1, 0.7, 1.3, 0.7, 1]
                    }}
                    transition={{
                        duration: duration - 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={cn("absolute top-1/2 left-1/2 -ms-8 -mt-8 size-16 rounded-full blur-md opacity-80", secondaryColor)}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.6, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: duration - 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={cn("absolute top-1/2 left-1/2 -ms-6 -mt-6 size-12 rounded-full blur-sm", accentColor)}
                />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase pointer-events-none"
            >
                {label}
            </motion.div>
        </div>
    );
};

export function LiquidMorphLoader(props: LiquidMorphLoaderProps) {
    return (
        <ComponentShowcase
            title="Liquid Morph Loader"
            code={code}
            className={cn("flex justify-center flex-col items-center", props.className)}
        >
            <LiquidMorphLoaderContent {...props} />
        </ComponentShowcase>
    );
}

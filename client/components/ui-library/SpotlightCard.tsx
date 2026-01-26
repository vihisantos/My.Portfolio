import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className,
    spotlightColor = "rgba(255, 255, 255, 0.15)"
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative flex size-full rounded-3xl border border-white/10 bg-black/40 px-8 py-12 shadow-2xl transition-all duration-300 hover:border-white/20",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative flex flex-col items-center justify-center gap-4 w-full h-full">
                {children}
            </div>
        </div>
    );
};

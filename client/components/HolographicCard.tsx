import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export const HolographicCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    // Mouse positions
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring physics for smooth return and movement
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Rotation transforms - Reduced rotation angles for a subtler, premium feel.
    const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Glare position
    const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);
    
    // Dynamic background using motion template
    const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const pointerX = event.clientX - rect.left;
        const pointerY = event.clientY - rect.top;
        
        const xPct = pointerX / width - 0.5;
        const yPct = pointerY / height - 0.5;
        
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div style={{ perspective: "1000px" }} className={`h-full w-full ${className}`}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full group/holo transition-transform duration-200 ease-linear"
            >
                {/* The wrapped content */}
                <div style={{ transform: "translateZ(20px)" }} className="w-full h-full relative z-10">
                    {children}
                </div>

                {/* Holographic Glare Overlay */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-50 rounded-2xl opacity-0 group-hover/holo:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                    style={{
                        background: glareBackground,
                        transform: "translateZ(30px)"
                    }}
                />
            </motion.div>
        </div>
    );
};

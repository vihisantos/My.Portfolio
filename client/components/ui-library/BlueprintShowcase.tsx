import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Maximize2, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BlueprintShowcaseProps {
    title: string;
    children: React.ReactNode;
    code: string;
    className?: string;
}

export function BlueprintShowcase({
    title,
    children,
    code,
    className,
}: BlueprintShowcaseProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("w-full h-full relative group overflow-hidden rounded-xl border border-blue-500/30 bg-[#0f172a] shadow-xl", className)}>

            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #3b82f6 1px, transparent 1px),
                        linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                     `,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #3b82f6 1px, transparent 1px),
                        linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                     `,
                    backgroundSize: '10px 10px'
                }}
            />

            {/* Technical Markings */}
            <div className="absolute top-0 left-0 p-4 font-mono text-xs text-blue-400/60 flex items-center gap-2">
                <Ruler className="w-3 h-3" />
                <span>FIG 1.0 // {title.toUpperCase()}</span>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 z-20">
                <Button
                    size="sm"
                    variant="outline"
                    className="h-8 border-blue-500/30 bg-blue-950/30 text-blue-400 hover:bg-blue-900/50 hover:text-blue-300 transition-all font-mono text-xs"
                    onClick={handleCopy}
                >
                    {copied ? (
                        <>
                            <Check className="w-3 h-3 mr-1" /> COPIED
                        </>
                    ) : (
                        <>
                            <Copy className="w-3 h-3 mr-1" /> COPY SRC
                        </>
                    )}
                </Button>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/50 rounded-tl-xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/50 rounded-tr-xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl" />

            {/* Center Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <div className="w-full h-px bg-blue-500" />
                <div className="h-full w-px bg-blue-500 absolute" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-12">
                <div className="relative group-hover:scale-110 transition-transform duration-500 ease-in-out">
                    {/* Glow Effect behind component */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    {children}
                </div>
            </div>

            {/* Footer Spec */}
            <div className="absolute bottom-0 w-full p-2 bg-blue-950/50 border-t border-blue-500/20 backdrop-blur-sm flex justify-between items-center text-[10px] text-blue-400/50 font-mono px-4">
                <span>SCALE: 1:1</span>
                <span>RENDER_MODE: PREVIEW</span>
                <span>STATUS: ACTIVE</span>
            </div>

        </div>
    );
}

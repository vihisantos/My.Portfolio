import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Code, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
    title: string;
    children: React.ReactNode;
    code: string;
    className?: string;
    scale?: number; // Visual scale (default 0.65)
    renderScale?: number; // Internal render size multiplier (default 1.5 -> 150%)
}

export function ComponentShowcase({
    title,
    children,
    code,
    className,
    scale = 0.65,
    renderScale = 1.5,
}: ComponentShowcaseProps) {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Calculate percentage strings
    const renderWidthPercent = `${renderScale * 100}%`;
    const renderHeightPercent = `${renderScale * 100}%`;

    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
                className
            )}
        >
            {/* Global style to force pause/play logic within this component */}
            <style>
                {`
                .component-showcase-content * {
                    animation-play-state: paused !important;
                }
                .group:hover .component-showcase-content * {
                    animation-play-state: running !important;
                }
                `}
            </style>

            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <h3 className="font-semibold text-sm text-foreground/80">{title}</h3>
            </div>

            {/* Toggle Code Button */}
            <div className={cn(
                "absolute top-3 right-3 z-30 transition-opacity duration-200",
                showCode ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}>
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 bg-background/50 backdrop-blur-sm hover:bg-background border"
                    onClick={() => setShowCode(!showCode)}
                    title={showCode ? "Hide Code" : "Show Code"}
                >
                    {showCode ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
                </Button>
            </div>

            {/* Content Container - with smart scaling to prevent layout breaking */}
            <div className={cn(
                "component-showcase-content relative flex h-64 w-full items-center justify-center p-0 transition-all duration-300 ease-in-out overflow-hidden",
                showCode ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}>
                {/* 
                    Scaling Wrapper: 
                    Renders content at renderScale (default 150%) to allow layouts to breathe,
                    then scales down (default 0.65) to fit the card.
                 */}
                <div
                    className="flex items-center justify-center origin-center"
                    style={{
                        width: renderWidthPercent,
                        height: renderHeightPercent,
                        transform: `scale(${scale})`
                    }}
                >
                    {children}
                </div>
            </div>

            {/* Code Overlay */}
            <div className={cn(
                "absolute inset-0 z-10 flex flex-col bg-zinc-950/95 p-6 transition-all duration-300",
                showCode ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="absolute right-2 top-12">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-zinc-400 hover:text-white"
                        onClick={handleCopy}
                    >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                </div>
                <pre className="h-full w-full overflow-auto rounded-md bg-transparent pt-8 p-2 text-xs text-zinc-200 scrollbar-none">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
}

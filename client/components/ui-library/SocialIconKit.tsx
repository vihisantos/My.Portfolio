import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useLanguage } from '@/contexts/LanguageContext';

const socialIcons = [
  { name: "Instagram", color: "#E4405F", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' },
  { name: "WhatsApp", color: "#25D366", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'},
  { name: "GitHub", color: "#333333", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>'},
  { name: "LinkedIn", color: "#0077B5", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>'},
  { name: "YouTube", color: "#FF0000", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 58.38 58.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 58.38 58.38 0 0 1-15 0 2 2 0 0 1-2-2z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>'},
  { name: "Discord", color: "#5865F2", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6a15.4 15.4 0 0 0-3.6-1.1c-.2 0-.3.1-.4.3a10.6 10.6 0 0 0-.5 1c-1.3-.2-2.6-.2-3.9 0a10.6 10.6 0 0 0-.5-1 .3.3 0 0 0-.4-.3A15.4 15.4 0 0 0 5 6a.3.3 0 0 0-.1.1A15.8 15.8 0 0 0 2 17.6a.4.4 0 0 0 .2.3c2 1.5 3.9 2.4 5.7 2.9a.3.3 0 0 0 .3-.1c.4-.6.8-1.2 1.1-1.9a.3.3 0 0 0-.2-.4c-.6-.2-1.2-.5-1.8-.8a.3.3 0 0 1-.1-.4c.1-.1.3-.2.4-.2.1 0 2.4 1.1 4.7 1.1s4.6-1.1 4.7-1.1c.1 0 .3.1.4.2.1.1.1.3-.1.4a6.6 6.6 0 0 1-1.7.8.3.3 0 0 0-.2.4c.3.7.7 1.3 1.1 1.9a.3.3 0 0 0 .3.1c1.8-.5 3.7-1.4 5.7-2.9a.4.4 0 0 0 .2-.3 15.8 15.8 0 0 0-3-11.5.3.3 0 0 0-.1-.1ZM9 14.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5Zm6 0a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5Z"/></svg>'},
  { name: "X (Twitter)", color: "#ffffff", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.746m2.464 -2.502l6.768 -6.752"/></svg>'},
  { name: "TikTok", color: "#000000", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>'},
  { name: "Facebook", color: "#1877F2", svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>'},
];

export function SocialIconKit() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState<string | null>(null);
    const [hoveredColor, setHoveredColor] = useState<string | null>(null);
 
    const handleCopy = (svg: string, name: string) => {
        navigator.clipboard.writeText(svg);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };
 
    return (
        <div 
            className="p-6 bg-card border rounded-xl overflow-hidden w-full h-full flex flex-col items-center justify-center relative group transition-colors duration-500"
            style={{ 
                backgroundColor: hoveredColor ? `${hoveredColor}08` : undefined,
                borderColor: hoveredColor ? `${hoveredColor}30` : undefined
            }}
        >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-500 relative z-10 transition-opacity duration-300">
                {t('categories.iconKits.social')}
            </h3>
            <div className="grid grid-cols-3 gap-4 relative z-10">
                {socialIcons.map((icon) => (
                    <button
                        key={icon.name}
                        onClick={() => handleCopy(icon.svg, icon.name)}
                        onMouseEnter={() => setHoveredColor(icon.color)}
                        onMouseLeave={() => setHoveredColor(null)}
                        className="flex flex-col items-center justify-center p-3 rounded-lg border bg-muted/50 hover:bg-white/10 dark:hover:bg-white/5 transition-all relative group/btn"
                        style={{ 
                            borderColor: hoveredColor === icon.color ? `${icon.color}50` : undefined,
                            boxShadow: hoveredColor === icon.color ? `0 0 15px ${icon.color}15` : undefined
                        }}
                        title="Click to copy SVG"
                    >
                        <div 
                            dangerouslySetInnerHTML={{ __html: icon.svg }} 
                            className="w-6 h-6 mb-2 transition-all duration-300" 
                            style={{ color: hoveredColor === icon.color ? icon.color : 'inherit' }}
                        />
                        <span className="text-[10px] text-muted-foreground truncate w-full text-center group-hover/btn:text-foreground transition-colors">{icon.name}</span>
                        
                        {copied === icon.name && (
                            <div className="absolute inset-0 bg-primary/90 rounded-lg flex items-center justify-center p-1 text-primary-foreground backdrop-blur-sm animate-in fade-in zoom-in duration-200 z-20">
                                <Check className="w-4 h-4 mr-1" />
                                <span className="text-[10px] font-medium leading-none">Copied!</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <div className="mt-8 pt-4 border-t w-full flex items-center justify-center gap-1.5 text-muted-foreground/60 transition-colors group-hover:text-muted-foreground relative z-10">
                <Copy className="w-3.5 h-3.5" /> 
                <span className="text-[10px] font-medium uppercase tracking-wider">{t('common.clickToCopy')}</span>
            </div>
            
            {/* Ambient Brand Glow */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ 
                    background: hoveredColor 
                        ? `radial-gradient(circle at center, ${hoveredColor}15 0%, transparent 70%)` 
                        : 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.05), rgba(244, 63, 94, 0.05))'
                }} 
            />
        </div>
    );
}

export function SocialIconKitContent() {
    return <SocialIconKit />;
}

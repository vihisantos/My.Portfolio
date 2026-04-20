import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';


const icons = [
  { name: "home", path: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22 9 12 15 12 15 22" },
  { name: "user", path: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
  { name: "settings", path: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "search", path: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M21 21l-4.3-4.3" },
  { name: "mail", path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
  { name: "bell", path: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9 M10.3 21a1.94 1.94 0 0 0 3.4 0" },
  { name: "heart", path: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" },
  { name: "star", path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { name: "shield", path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
];

const checkPath = "M20 6L9 17l-5-5";

export function BasicIconKit() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (path: string, name: string) => {
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>`;
        navigator.clipboard.writeText(svgString);
        setCopied(name);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="p-6 bg-card border rounded-xl overflow-hidden w-full h-full flex flex-col items-center justify-center relative group">
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 relative z-10 transition-opacity duration-300">
                {t('categories.iconKits.basic')}
            </h3>
            <div className="grid grid-cols-3 gap-4 relative z-10">
                {icons.map((icon) => (
                    <button
                        key={icon.name}
                        onClick={() => handleCopy(icon.path, icon.name)}
                        className="flex flex-col items-center justify-center p-3 rounded-lg border bg-muted/50 hover:bg-primary/10 hover:border-primary/30 transition-all relative group/btn"
                        title={t('common.clickToCopy')}
                    >
                        <div className="w-6 h-6 mb-2 flex items-center justify-center overflow-visible">
                            <svg 
                                viewBox="0 0 24 24" 
                                className={cn(
                                    "w-6 h-6 stroke-current transition-colors duration-300",
                                    copied === icon.name ? "text-primary" : "text-foreground"
                                )}
                                fill="none" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <motion.path
                                    initial={false}
                                    animate={{ d: copied === icon.name ? checkPath : icon.path }}
                                    transition={{ 
                                        type: "spring", 
                                        stiffness: 250, 
                                        damping: 20,
                                        duration: 0.4
                                    }}
                                />
                            </svg>
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-tight group-hover/btn:text-foreground transition-colors">
                            {t(`categories.iconKits.names.${icon.name}`)}
                        </span>
                        
                        <AnimatePresence>
                            {copied === icon.name && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[8px] px-2 py-1 rounded shadow-lg font-bold pointer-events-none uppercase tracking-widest whitespace-nowrap"
                                >
                                    {t('common.copied')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                ))}
            </div>
            <div className="mt-8 pt-4 border-t w-full flex items-center justify-center gap-1.5 text-muted-foreground/60 transition-colors group-hover:text-muted-foreground relative z-10">
                <Copy className="w-3.5 h-3.5" /> 
                <span className="text-[10px] font-medium uppercase tracking-wider">{t('common.clickToCopy')}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
        </div>
    );
}

export function BasicIconKitContent() {
    return <BasicIconKit />;
}


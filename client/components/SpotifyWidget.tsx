import { Music, SkipForward, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const tracks = [
    {
        name: "Coding Mode On",
        artist: "Lo-Fi Beats",
        albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Deep Focus",
        artist: "Ambient Logic",
        albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Midnight Jazz",
        artist: "Smooth Trio",
        albumArt: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Synthwave Vibe",
        artist: "Neon Runner",
        albumArt: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=100&auto=format&fit=crop",
    },
];

export function SpotifyWidget() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        // Random duration between 2 minutes (120000ms) and 4 minutes (240000ms)
        const trackDuration = Math.floor(Math.random() * (240000 - 120000 + 1)) + 120000;

        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % tracks.length);
        }, trackDuration);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % tracks.length);
    };

    const toggleCollapse = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCollapsed(!isCollapsed);
    };

    const currentTrack = tracks[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
                opacity: 1,
                x: 0,
                width: isCollapsed ? "56px" : "auto",
                transition: { duration: 0.3 }
            }}
            transition={{ delay: 1 }}
            className={`fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 ${isCollapsed ? 'bg-transparent p-0' : 'bg-white/95 dark:bg-slate-900/80 p-2 border-2 border-slate-300 dark:border-slate-700/50 shadow-xl'} backdrop-blur-md rounded-full overflow-hidden group cursor-pointer ${isCollapsed ? 'hover:scale-105' : ''}`}
            onClick={isCollapsed ? toggleCollapse : handleNext}
            title={isCollapsed ? "Expandir Player" : "Próxima Música"}
        >
            <div className="relative shrink-0">
                <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={`w-10 h-10 rounded-full overflow-hidden border-2 ${isCollapsed ? 'border-primary/50 shadow-lg' : 'border-primary/20'}`}
                >
                    <img
                        src={currentTrack.albumArt}
                        alt="Album Art"
                        className="w-full h-full object-cover"
                    />
                    {/* Vinyl Center Hole for realistic look in collapsed mode */}
                    {isCollapsed && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full border border-gray-700/50 z-10" />
                    )}
                </motion.div>

                {/* Status Indicator (only in expanded mode) */}
                {!isCollapsed && (
                    <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full p-0.5 border-2 border-white dark:border-slate-900">
                        <Music size={8} className="text-white" />
                    </div>
                )}

                {/* Vinyl Needle (only in collapsed mode) */}
                {isCollapsed && (
                    <div className="absolute -top-3 -right-3 pointer-events-none z-20">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                            {/* Arm Base */}
                            <circle cx="28" cy="8" r="4" fill="#475569" stroke="#1e293b" strokeWidth="1" />
                            {/* Arm */}
                            <path d="M28 8 L16 26" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                            {/* Head shell */}
                            <rect x="13" y="24" width="6" height="8" rx="1" transform="rotate(20 16 26)" fill="#475569" />
                        </svg>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col overflow-hidden min-w-[140px] pr-2"
                    >
                        <div className="flex justify-between items-center mb-0.5">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                Ouvindo agora
                            </span>
                            <div className="flex gap-1">
                                <SkipForward
                                    size={12}
                                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                    onClick={handleNext}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-xs font-semibold truncate leading-tight max-w-[120px]">
                                        {currentTrack.name}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">
                                        {currentTrack.artist}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Visualizer bars */}
                            {isPlaying && (
                                <div className="flex items-end gap-[2px] h-3 ml-auto">
                                    {[1, 2, 3].map((bar) => (
                                        <motion.div
                                            key={bar}
                                            className="w-[2px] bg-green-500 rounded-full"
                                            animate={{
                                                height: ["2px", "10px", "2px"],
                                            }}
                                            transition={{
                                                duration: 0.5 + Math.random() * 0.5,
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={toggleCollapse}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-200 dark:bg-slate-800 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 z-10"
                style={{ right: isCollapsed ? '-100px' : '0' }} // Hidden when collapsed, handled by container click
            >
                {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
            </button>

            {/* Collapse indicator for small mode */}
            {isCollapsed && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center border border-border cursor-pointer hover:scale-110 transition-transform">
                    <ChevronRight size={10} />
                </div>
            )}
        </motion.div>
    );
}

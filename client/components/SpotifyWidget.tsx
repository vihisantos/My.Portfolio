import { Music, SkipForward } from "lucide-react";
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

    useEffect(() => {
        // Random duration between 2 minutes (120000ms) and 4 minutes (240000ms)
        const trackDuration = Math.floor(Math.random() * (240000 - 120000 + 1)) + 120000;

        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % tracks.length);
        }, trackDuration);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % tracks.length);
    };

    const currentTrack = tracks[currentIndex];

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 bg-white/95 dark:bg-slate-900/80 backdrop-blur-md p-3 rounded-2xl border-2 border-slate-300 dark:border-slate-700/50 shadow-xl hover:w-auto overflow-hidden group max-w-[300px] cursor-pointer"
            onClick={handleNext}
        >
            <div className="relative shrink-0">
                <motion.div
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20"
                >
                    <img
                        src={currentTrack.albumArt}
                        alt="Album Art"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white dark:border-slate-900">
                    <Music size={10} className="text-white" />
                </div>
            </div>

            <div className="flex flex-col overflow-hidden min-w-[120px]">
                <div className="flex justify-between items-center mb-0.5">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Ouvindo agora
                    </span>
                    <SkipForward size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
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
                            <span className="text-sm font-semibold truncate group-hover:whitespace-normal leading-tight">
                                {currentTrack.name}
                            </span>
                            <span className="text-xs text-muted-foreground truncate">
                                {currentTrack.artist}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Visualizer bars */}
                    {isPlaying && (
                        <div className="flex items-end gap-[2px] h-3 ml-2 mb-1">
                            {[1, 2, 3, 4].map((bar) => (
                                <motion.div
                                    key={bar}
                                    className="w-[2px] bg-green-500 rounded-full"
                                    animate={{
                                        height: ["2px", "12px", "2px"],
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
            </div>
        </motion.div>
    );
}

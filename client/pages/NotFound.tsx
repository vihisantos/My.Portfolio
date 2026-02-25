import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlertCircle, Hexagon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GalaxyButton from "@/components/GalaxyButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative overflow-hidden">
      <Navigation />

      {/* Abstract Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="flex-1 flex items-center justify-center section-padding relative z-10 w-full">
        <div className="container-custom max-w-3xl flex flex-col items-center justify-center text-center">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="relative mb-8 mt-12"
          >
            {/* Glitch Effect 404 */}
            <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-secondary drop-shadow-2xl mix-blend-overlay dark:mix-blend-normal">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center blur-[2px] opacity-70 animate-pulse text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-primary z-0 translate-x-1 translate-y-1">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center blur-[4px] opacity-50 animate-pulse text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-secondary z-0 -translate-x-2 -translate-y-1" style={{ animationDelay: '0.2s' }}>
              404
            </div>

            {/* Badges floating around */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 text-secondary/40 backdrop-blur-sm bg-white/10 dark:bg-slate-800/20 p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-xl"
            >
              <AlertCircle size={48} className="drop-shadow-lg" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-4 text-primary/40 backdrop-blur-sm bg-white/10 dark:bg-slate-800/20 p-3 rounded-xl border border-white/20 dark:border-slate-700/50 shadow-xl"
            >
              <Hexagon size={32} className="drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-100 dark:to-slate-400">
              Oops! Sinal perdido no espaço.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed drop-shadow-sm">
              A página que você está procurando foi sugada por um buraco negro, movida para outra dimensão ou talvez nunca tenha existido.
            </p>

            <div className="pt-8 flex justify-center w-full max-w-xs mx-auto">
              <GalaxyButton href="/" text="Retornar à Base" />
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;

import { useRef } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone, Server, Cpu, Cloud, Terminal } from "lucide-react";

const icons = [
    { id: 1, Icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: 2, Icon: Database, color: "text-green-500", bg: "bg-green-500/10" },
    { id: 3, Icon: Globe, color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { id: 4, Icon: Smartphone, color: "text-purple-500", bg: "bg-purple-500/10" },
    { id: 5, Icon: Server, color: "text-orange-500", bg: "bg-orange-500/10" },
    { id: 6, Icon: Cpu, color: "text-red-500", bg: "bg-red-500/10" },
    { id: 7, Icon: Cloud, color: "text-sky-500", bg: "bg-sky-500/10" },
    { id: 8, Icon: Terminal, color: "text-slate-500", bg: "bg-slate-500/10" },
];

export function Playground() {
    const constraintsRef = useRef(null);

    return (
        <div className="w-full h-[400px] bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-400 dark:border-slate-700 relative overflow-hidden flex items-center justify-center shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-4xl md:text-6xl font-black text-slate-300 dark:text-slate-800 uppercase tracking-widest select-none">
                    Playground
                </p>
            </div>

            <motion.div ref={constraintsRef} className="w-full h-full p-8">
                <div className="flex flex-wrap gap-8 justify-center items-center h-full">
                    {icons.map((item) => (
                        <motion.div
                            key={item.id}
                            drag
                            dragConstraints={constraintsRef}
                            dragElastic={0.2}
                            whileHover={{ scale: 1.1, cursor: "grab" }}
                            whileTap={{ scale: 0.95, cursor: "grabbing" }}
                            className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.bg} backdrop-blur-md border border-slate-300 dark:border-white/20 shadow-xl flex items-center justify-center z-10`}
                        >
                            <item.Icon className={`w-8 h-8 md:w-10 md:h-10 ${item.color}`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <p className="text-sm text-muted-foreground animate-pulse">
                    Arraste e solte os ícones!
                </p>
            </div>
        </div>
    );
}

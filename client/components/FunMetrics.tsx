import { Coffee, Code2, Bug, Moon } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
    {
        id: 1,
        label: "Latas de Monster",
        value: "1,240+",
        icon: Coffee,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        id: 2,
        label: "Linhas de Código",
        value: "500k+",
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        id: 3,
        label: "Bugs Resolvidos",
        value: "99.9%",
        icon: Bug,
        color: "text-green-500",
        bg: "bg-green-500/10",
    },
    {
        id: 4,
        label: "Noites codando",
        value: "∞",
        icon: Moon,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
    },
];

export function FunMetrics() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full">
            {metrics.map((metric, index) => (
                <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700/50 shadow-md hover:shadow-lg transition-all cursor-default"
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${metric.bg} ${metric.color}`}>
                        <metric.icon size={20} />
                    </div>
                    <span className="text-2xl font-bold text-foreground mb-1">
                        {metric.value}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium text-center uppercase tracking-wide">
                        {metric.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

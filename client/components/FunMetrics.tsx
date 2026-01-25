import { Coffee, Code2, Bug, Moon } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, duration = 2 }: { value: string, duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Extract number from string (e.g., "1,240+" -> 1240)
    const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    const suffix = value.replace(/[0-9,]/g, "");
    const hasComma = value.includes(",");

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
    });

    const display = useTransform(spring, (current) => {
        const val = Math.round(current);
        if (hasComma) {
            return val.toLocaleString() + suffix;
        }
        return val + suffix;
    });

    useEffect(() => {
        if (isInView) {
            spring.set(numericValue);
        }
    }, [isInView, spring, numericValue]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

const metrics = [
    {
        id: 1,
        label: "Latas de Monster",
        value: "1,240+",
        icon: Coffee,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        glow: "group-hover:shadow-amber-500/20",
    },
    {
        id: 2,
        label: "Linhas de Código",
        value: "500k+",
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        glow: "group-hover:shadow-blue-500/20",
    },
    {
        id: 3,
        label: "Bugs Resolvidos",
        value: "99.9%",
        icon: Bug,
        color: "text-green-500",
        bg: "bg-green-500/10",
        glow: "group-hover:shadow-green-500/20",
    },
    {
        id: 4,
        label: "Noites codando",
        value: "∞",
        icon: Moon,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        glow: "group-hover:shadow-purple-500/20",
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
                    whileHover={{ y: -5 }}
                    className={`group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl ${metric.glow} transition-all duration-300 cursor-default relative overflow-hidden`}
                >
                    {/* Decorative background circle */}
                    <div className={`absolute -right-4 -top-4 w-12 h-12 rounded-full ${metric.bg} opacity-20 group-hover:scale-150 transition-transform duration-500`} />

                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${metric.bg} ${metric.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner`}>
                        <metric.icon size={24} />
                    </div>

                    <span className="text-2xl font-bold text-foreground mb-1">
                        {metric.value === "∞" ? (
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                ∞
                            </motion.span>
                        ) : (
                            <AnimatedCounter value={metric.value} />
                        )}
                    </span>

                    <span className="text-[10px] text-muted-foreground font-bold text-center uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                        {metric.label}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

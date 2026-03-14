import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import GalaxyButton from "@/components/GalaxyButton";

const ServerError = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Melting effect for 500
            gsap.to(codeRef.current, {
                scaleY: 1.1,
                skewX: 5,
                duration: 0.2,
                repeat: -1,
                yoyo: true,
                ease: "none"
            });

            // Red flicker
            gsap.to(".red-glow", {
                opacity: 0.8,
                scale: 1.2,
                duration: 0.05,
                repeat: -1,
                yoyo: true,
                ease: "none",
                stagger: 0.1
            });

            // Floating debris
            gsap.to(".debris", {
                y: "random(-100, 100)",
                x: "random(-100, 100)",
                rotation: "random(0, 360)",
                duration: "random(5, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5
            });

            // Entrance
            gsap.from(".content-fade-in", {
                scale: 0.9,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-zinc-950 flex flex-col relative overflow-hidden text-white selection:bg-red-600 selection:text-white">
            <Navigation />

            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Heat haze effect (simplified) */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-50" />

                {/* Burning embers (debris) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="debris absolute w-2 h-2 bg-red-500 rounded-full blur-[2px] opacity-40"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}

                {/* Dynamic Glows */}
                <div className="red-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-red-600/10 rounded-full blur-[150px] opacity-20" />
            </div>

            <div className="flex-1 flex items-center justify-center section-padding relative z-10 w-full">
                <div className="container-custom max-w-4xl flex flex-col items-center justify-center text-center">

                    <div className="relative mb-12 content-fade-in">
                        {/* Warning Icon with Glow */}
                        <div className="mb-8 relative inline-block">
                            <AlertTriangle size={80} className="text-red-500 animate-pulse drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                        </div>

                        {/* Error Code */}
                        <h1
                            ref={codeRef}
                            className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-950 select-none drop-shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                        >
                            500
                        </h1>
                    </div>

                    <div className="space-y-8 max-w-2xl px-4">
                        <div className="content-fade-in">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase text-red-500">
                                O filme queimou
                            </h2>
                            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                                Houve um superaquecimento nos nossos servidores. Nossos projetores estão sendo resfriados e a equipe técnica já está trocando a lâmpada.
                            </p>
                        </div>

                        <div className="content-fade-in pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={handleReload}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest transition-all rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] active:scale-95"
                            >
                                <RefreshCcw size={20} />
                                Tentar Novamente
                            </button>

                            <div className="w-full sm:w-auto">
                                <GalaxyButton href="/" text="Voltar ao Início" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServerError;

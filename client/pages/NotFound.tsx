import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AlertCircle, Hexagon, Tv, Zap } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import GalaxyButton from "@/components/GalaxyButton";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const glitchRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );

    let ctx = gsap.context(() => {
      // Main 404 Glitch
      const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      glitchTl
        .to(glitchRef.current, {
          skewX: 20,
          duration: 0.1,
          ease: "power4.inOut",
        })
        .to(glitchRef.current, {
          skewX: 0,
          duration: 0.1,
          ease: "power4.inOut",
        })
        .to(glitchRef.current, {
          opacity: 0.5,
          x: -10,
          duration: 0.1,
        })
        .to(glitchRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.1,
        })
        .to(glitchRef.current, {
          textShadow: "2px 0 #ff00c1, -2px 0 #00fff9",
          duration: 0.05,
        })
        .to(glitchRef.current, {
          textShadow: "0px 0 #ff00c1, 0px 0 #00fff9",
          duration: 0.05,
        });

      // Floating Icons
      gsap.to(".floating-icon-1", {
        y: -20,
        rotation: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(".floating-icon-2", {
        y: 25,
        rotation: -10,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      // Background flicker
      gsap.to(".bg-flicker", {
        opacity: 0.4,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });

      // Entrance animation
      gsap.from(".content-fade-in", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black flex flex-col relative overflow-hidden text-white selection:bg-primary selection:text-white">
      <Navigation />

      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* TV Static Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[url('https://media.giphy.com/media/oEI9uWU0WMrQmEd6Io/giphy.gif')] bg-repeat" />

        {/* Flickering Lights */}
        <div className="bg-flicker absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[120px] opacity-20" />
        <div className="bg-flicker absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[120px] opacity-20" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="flex-1 flex items-center justify-center section-padding relative z-10 w-full">
        <div className="container-custom max-w-4xl flex flex-col items-center justify-center text-center">

          <div className="relative mb-8 mt-12 content-fade-in">
            {/* Main Error Code */}
            <div className="relative inline-block">
              <h1
                ref={glitchRef}
                className="text-[140px] md:text-[220px] font-black leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] select-none"
              >
                404
              </h1>

              {/* Scanline effect over text */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none mix-blend-overlay" />
            </div>

            {/* Floating Storytelling Assets */}
            <div className="floating-icon-1 absolute -top-8 -right-12 text-primary/40 p-4 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
              <Zap size={40} className="drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>

            <div className="floating-icon-2 absolute -bottom-12 -left-8 text-secondary/40 p-4 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-md">
              <Tv size={32} className="drop-shadow-[0_0_10px_rgba(255,100,255,0.5)]" />
            </div>
          </div>

          <div className="space-y-8 max-w-2xl px-4">
            <div className="content-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Frequência não encontrada
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                Parece que você entrou em uma zona de sombra digital. O sinal que você procura foi perdido entre as camadas da rede.
              </p>
            </div>

            <div className="content-fade-in pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="w-full sm:w-auto">
                <GalaxyButton href="/" text="Sintonizar Início" />
              </div>
              <Link
                to="/projects"
                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all font-bold tracking-widest uppercase text-xs"
              >
                <span className="w-8 h-px bg-slate-700 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
                Explorar Projetos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;


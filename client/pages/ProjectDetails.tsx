import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjects } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ArrowLeft, Rocket, ExternalLink, Calendar, Layers, Download, MessageCircle, Search } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { useEffect } from "react";
import GalaxyButton from "@/components/GalaxyButton";

export default function ProjectDetails() {
    const { id } = useParams();
    const { t } = useLanguage();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Find project
    const projects = getProjects(t);
    const project = projects.find((p) => p.id === Number(id));

    // Redirect if not found
    useEffect(() => {
        if (!project) {
            // Optional: Could redirect to 404 or projects page
            // navigate('/projects');
        }
    }, [project, navigate]);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex flex-col relative overflow-hidden text-white font-mono selection:bg-primary/30">
                <Navigation />

                {/* ADVANCED CINEMATIC OVERLAY */}
                <div className="absolute inset-0 z-50 pointer-events-none border-[20px] md:border-[40px] border-black/80 mix-blend-multiply" />
                <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

                {/* LENS DISTORTION & SCANLINES */}
                <div className="absolute inset-0 z-30 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_4px,3px_100%]" />

                <div className="flex-1 flex items-center justify-center section-padding relative z-10 w-full overflow-hidden">
                    {/* BACKGROUND DATA STREAM */}
                    <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 text-[10px] overflow-hidden whitespace-nowrap select-none">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                                0x{Math.random().toString(16).slice(2, 10).toUpperCase()} ERROR_SIG_LOST_V{i} [DECRYPTING...]
                            </div>
                        ))}
                    </div>

                    <div className="container-custom max-w-5xl flex flex-col items-center justify-center text-center relative px-6">

                        <div className="relative mb-16">
                            {/* GLITCH BOX */}
                            <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-sm flex items-center justify-center group overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.1)] transition-transform duration-700 hover:scale-110">
                                <Search size={100} className="text-white/10 group-hover:text-primary/40 transition-colors duration-1000" />

                                {/* DYNAMIC SCANLINE */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent h-20 -top-20 animate-v-scan" />

                                {/* SECURITY CORNERS */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
                                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50" />

                                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] font-black opacity-30 select-none text-primary">SECURE_LINK_BROKEN</div>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-20 text-white tracking-widest uppercase">Unauthorized Access Detected</div>
                            </div>

                            {/* RADAR DECORATION */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/10 rounded-full animate-ping opacity-20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-secondary/5 rounded-full animate-pulse opacity-10" />
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase glitch-text" data-text="PROJETO CLASSIFICADO">
                                PROJETO CLASSIFICADO
                            </h2>

                            <div className="flex flex-col items-center gap-4">
                                <p className="text-xl md:text-2xl text-slate-400 font-bold max-w-3xl leading-relaxed terminal-text italic">
                                    // SINAL_INTERROMPIDO: O arquivo solicitado foi expurgado dos servidores centrais ou encontra-se em nível de sigilo 0.
                                </p>

                                <div className="mt-4 flex items-center gap-6 text-[10px] md:text-xs font-black tracking-[0.5em] text-primary bg-primary/10 px-8 py-3 border-y border-primary/30 animate-pulse rounded-sm">
                                    [ACESSO_NEGADO_IDENTIFICADO]
                                </div>
                            </div>

                            <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-10 content-fade-in transition-all">
                                <div className="scale-125 hover:scale-[1.35] transition-transform duration-500">
                                    <GalaxyButton href="/projects" text="Retornar à Central" />
                                </div>
                                <Link
                                    to="/contact"
                                    className="text-white/40 hover:text-primary transition-all font-black text-xs uppercase tracking-widest border-b border-white/5 pb-2 hover:border-primary hover:tracking-[0.8em]"
                                >
                                    Solicitar Credenciais
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    .glitch-text {
                        position: relative;
                        color: white;
                        text-shadow: 0.05em 0 0 #ff00ff, -0.025em -0.05em 0 #00ffff, 0.025em 0.05em 0 #ff0000;
                        animation: glitch 1.5s infinite;
                    }

                    @keyframes glitch {
                        0% { text-shadow: 0.05em 0 0 #ff00ff, -0.025em -0.05em 0 #00ffff, 0.025em 0.05em 0 #ff0000; transform: translate(0); }
                        20% { text-shadow: -0.05em -0.025em 0 #ff00ff, 0.025em 0.025em 0 #00ffff, -0.05em -0.05em 0 #ff0000; transform: translate(-2px, 2px); }
                        40% { text-shadow: 0.05em 0 0 #ff00ff, -0.025em -0.05em 0 #00ffff, 0.025em 0.05em 0 #ff0000; transform: translate(2px, -2px); }
                        60% { text-shadow: -0.05em -0.025em 0 #ff00ff, 0.025em 0.025em 0 #00ffff, -0.05em -0.05em 0 #ff0000; transform: translate(-2px, -2px); }
                        80% { text-shadow: 0.025em 0.05em 0 #ff00ff, 0.05em 0 0 #00ffff, 0.05em -0.05em 0 #ff0000; transform: translate(2px, 2px); }
                        100% { text-shadow: -0.025em 0 0 #ff00ff, -0.025em -0.025em 0 #00ffff, -0.025em -0.05em 0 #ff0000; transform: translate(0); }
                    }

                    @keyframes v-scan {
                        0% { top: -100%; }
                        100% { top: 200%; }
                    }
                    .animate-v-scan {
                        animation: v-scan 3s linear infinite;
                    }
                    .terminal-text {
                        text-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
                    }
                `}</style>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <SEO
                title={`${project.title} | Vitor.dev`}
                description={project.description.slice(0, 160)}
                keywords={t('seo.projectDetails.keywords')}
                image={project.image}
                url={`/project/${project.id}`}
                structuredData={[
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://vihisantos.github.io/My.Portfolio" },
                            { "@type": "ListItem", "position": 2, "name": "Projetos", "item": "https://vihisantos.github.io/My.Portfolio/projects" },
                            { "@type": "ListItem", "position": 3, "name": project.title, "item": `https://vihisantos.github.io/My.Portfolio/project/${project.id}` }
                        ]
                    },
                    {
                        "@type": "CreativeWork",
                        "name": project.title,
                        "description": project.description.slice(0, 160),
                        "url": `https://vihisantos.github.io/My.Portfolio/project/${project.id}`,
                        "image": typeof project.image === 'string' ? project.image : '',
                        "keywords": Array.isArray(project.technologies) ? project.technologies.join(', ') : '',
                        "author": {
                            "@type": "Person",
                            "name": "Vitor Santos"
                        }
                    }
                ]}
            />
            <Navigation />

            {/* Hero Header */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover blur-[5px] scale-105 opacity-50 dark:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-slate-950 dark:via-slate-950/50 dark:to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-slate-950/20" />
                </div>

                <div className="container-custom relative z-30 h-full flex flex-col justify-end pb-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 w-fit bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50"
                    >
                        <ArrowLeft size={16} />
                        {t('projectsPage.backHome') || "Back to Projects"}
                    </Link>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            {project.badge && (
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${project.badgeType === 'sale'
                                    ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                                    : project.badgeType === 'new'
                                        ? 'bg-blue-500/10 text-blue-600 border-blue-500/20'
                                        : 'bg-primary/10 text-primary border-primary/20'
                                    }`}>
                                    {project.badge}
                                </span>
                            )}
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-muted-foreground border border-border">
                                {project.technologies[0]}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            <SectionDivider position="bottom" fill="text-slate-50 dark:text-slate-900/30" type="wave" height="h-24" className="scale-y-[-1] -mt-24 relative z-20" />

            {/* Main Content */}
            <section className="section-padding pt-12 bg-slate-50 dark:bg-slate-900/30 min-h-[50vh]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Column */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Project Image - Clean View */}
                            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-white dark:bg-slate-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Description */}
                            <div className="prose dark:prose-invert max-w-none">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <Layers className="text-primary" />
                                    {t('about.title') || "Sobre o Projeto"}
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {project.description}
                                </p>

                                {/* Story Section */}
                                {(project.challenge || project.solution || project.impact) && (
                                    <div className="grid grid-cols-1 gap-6 pt-8">
                                        {project.challenge && (
                                            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-6 rounded-2xl">
                                                <h4 className="font-bold text-lg text-red-600 dark:text-red-400 mb-2 flex items-center gap-2">
                                                    🎯 {t('story.challenge') || "The Challenge"}
                                                </h4>
                                                <p className="text-muted-foreground">{project.challenge}</p>
                                            </div>
                                        )}

                                        {project.solution && (
                                            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 p-6 rounded-2xl">
                                                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                                                    💡 {t('story.solution') || "The Solution"}
                                                </h4>
                                                <p className="text-muted-foreground">{project.solution}</p>
                                            </div>
                                        )}

                                        {project.impact && (
                                            <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 p-6 rounded-2xl">
                                                <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
                                                    🚀 {t('story.impact') || "The Impact"}
                                                </h4>
                                                <p className="text-muted-foreground">{project.impact}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Actions Card */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border shadow-sm space-y-4">
                                <h3 className="font-bold text-lg mb-2">{t('projectsPage.projectLinks') || "Project Links"}</h3>

                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                                    >
                                        <Rocket size={18} />
                                        Live Demo
                                    </a>
                                )}

                                {/* WhatsApp CTA */}
                                <a
                                    href={`https://wa.me/5511937507066?text=${encodeURIComponent(
                                        (t('projectsPage.whatsappMessage') || "Hi! I'm interested in {project}").replace('{project}', project.title)
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 transition-all"
                                >
                                    <MessageCircle size={18} />
                                    {t('projectsPage.imInterested') || "I'm Interested"}
                                </a>

                                {project.downloadLink && (
                                    <a
                                        href={project.downloadLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-foreground font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                    >
                                        <Download size={18} />
                                        Download App
                                    </a>
                                )}

                                {!project.demoUrl && !project.downloadLink && (
                                    <div className="text-center p-4 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-dashed border-border text-sm text-muted-foreground">
                                        Internal Project / No Public Link
                                    </div>
                                )}
                            </div>

                            {/* Tech Stack Card */}
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                                    <Calendar size={18} className="text-secondary" />
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-border text-sm font-medium hover:border-primary/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

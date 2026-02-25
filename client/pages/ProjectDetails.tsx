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
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col relative overflow-hidden">
                <Navigation />

                {/* Abstract Background Effects */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 -left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="flex-1 flex items-center justify-center section-padding relative z-10 w-full">
                    <div className="container-custom max-w-3xl flex flex-col items-center justify-center text-center">
                        <div className="relative mb-12 group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 group-hover:scale-[1.60] transition-transform duration-700 opacity-60"></div>
                            <div className="relative z-10 w-36 h-36 rounded-[2rem] bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800/60 shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-primary/50 group-hover:bg-white/20 dark:group-hover:bg-slate-800/60">
                                <Search size={64} className="text-primary/80 mb-2 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 drop-shadow-md" />
                                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
                                {/* Animated scanline */}
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/50 blur-[1px] -translate-y-[4rem] group-hover:translate-y-[4rem] transition-transform duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100"></div>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter gradient-text drop-shadow-lg">
                            Projeto Classificado
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground/90 mb-12 leading-relaxed max-w-2xl drop-shadow-sm font-medium">
                            Você tentou acessar um projeto ultra-secreto ou que foi realocado para outra dimensão 🚀.<br /> <span className="opacity-70 text-lg">Acesso negado.</span>
                        </p>

                        <div className="w-full max-w-[280px] mx-auto">
                            <GalaxyButton href="/projects" text="Voltar aos Projetos" />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <SEO
                title={`${project.title} | Vitor.dev`}
                description={project.description.slice(0, 160)}
                image={project.image}
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

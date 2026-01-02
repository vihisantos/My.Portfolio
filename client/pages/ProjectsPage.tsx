
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useMemo } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import { Loader } from "@/components/Loader";
import { getProjects } from "@/data/projects";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleProjectClick = (project: any) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setSelectedProject(project);
        }, 1000);
    };

    const allProjects = useMemo(() => getProjects(t), [t]);

    // Get unique technologies for filter
    const allTechnologies = useMemo(() => Array.from(
        new Set(allProjects.flatMap((p) => p.technologies))
    ), [allProjects]);

    // Filter projects based on selected technologies
    const projects = useMemo(
        () =>
            selectedTechs.length === 0
                ? allProjects
                : allProjects.filter((p) =>
                    selectedTechs.every((tech) => p.technologies.includes(tech))
                ),
        [selectedTechs, allProjects]
    );

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <Navigation />

            <section className="section-padding bg-slate-50 dark:bg-slate-900/30 pt-32 pb-20">
                <div className="container-custom">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:underline">
                        <ArrowLeft size={18} /> {t('projectsPage.backHome')}
                    </Link>

                    <div className="mb-12">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('projectsPage.title')}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            {t('projectsPage.subtitle')}
                        </p>
                    </div>

                    <ProjectFilter technologies={allTechnologies} onFilterChange={setSelectedTechs} />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {projects.map((project, index) => {
                            return (
                                <ScrollFadeIn key={project.id} delay={index * 50}>
                                    <div
                                        className="glass-card rounded-2xl p-6 group hover:shadow-lg smooth-transition hover:-translate-y-1 border border-white/50 dark:border-slate-700/50 overflow-hidden h-full flex flex-col cursor-pointer"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        <div className="mb-6 rounded-lg overflow-hidden aspect-video relative group-hover:scale-105 smooth-transition">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 smooth-transition" />
                                        </div>

                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg">{project.title}</h3>
                                            {project.badge && (
                                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border-emerald-500/20 animate-pulse">
                                                    {project.badge}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 opacity-0 group-hover:opacity-100 smooth-transition">
                                            <div className="text-sm font-semibold text-primary flex items-center gap-1">
                                                {t('projects.viewProject')} <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </ScrollFadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
            {isLoading && <Loader />}
        </div>
    );
}

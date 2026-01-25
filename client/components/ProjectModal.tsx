import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import GalaxyButton from "./GalaxyButton";
import { InstructionModal } from "./InstructionModal";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    repoUrl?: string;
    badge?: string;
    badgeType?: 'sale' | 'new';
    downloadLink?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [isInstructionOpen, setIsInstructionOpen] = useState(false);
    const scrollRef = (node: HTMLDivElement) => {
        if (node && isOpen) {
            setTimeout(() => {
                const element = node;
                // Find the closest scrollable container (DialogContent usually has max-h and overflow-y-auto)
                const container = element.closest('.overflow-y-auto') as HTMLElement;
                if (!element || !container) return;

                // Calculate target position to center the element
                const elementRect = element.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const currentScrollTop = container.scrollTop;

                // Position of element relative to the container's top edge (considering current scroll)
                const elementRelativeTop = elementRect.top - containerRect.top + currentScrollTop;

                // Calculate the scroll position to center the element
                const targetScrollTop = elementRelativeTop - (container.clientHeight / 2) + (element.clientHeight / 2);

                const startPosition = currentScrollTop;
                const distance = targetScrollTop - startPosition;
                const duration = 2000; // 2 seconds for smooth ease
                let start: number | null = null;

                function step(timestamp: number) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percentage = Math.min(progress / duration, 1);

                    const ease = percentage < 0.5
                        ? 4 * percentage * percentage * percentage
                        : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                    container.scrollTop = startPosition + distance * ease;

                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    }
                }

                window.requestAnimationFrame(step);
            }, 600);
        }
    };

    if (!project) return null;

    const { t } = useLanguage();

    const whatsappNumber = "5511937507066";
    const waMessage = `Olá Vitor! Vi seu projeto "${project.title}" no seu site e tenho interesse em saber mais ${project.badgeType === 'sale' ? 'sobre o template' : 'sobre como desenvolver algo parecido'}.`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/10 rounded-3xl p-0 gap-0">
                <div className="p-6">
                    <DialogHeader>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-inner relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 z-20">
                                {project.badgeType === 'sale' ? (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white border border-emerald-400 shadow-lg">
                                        {project.badge}
                                    </span>
                                ) : project.badgeType === 'new' ? (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/90 backdrop-blur-md text-white border border-blue-400 shadow-lg">
                                        {t('uiLibrary.newFreeApp')}
                                    </span>
                                ) : project.badge && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 shadow-lg">
                                        {project.badge}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mb-2">
                            <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
                                {project.title}
                            </DialogTitle>
                        </div>
                        <DialogDescription className="text-base text-muted-foreground leading-relaxed mb-8">
                            {project.description}
                            {project.downloadLink && (
                                <span
                                    onClick={() => setIsInstructionOpen(true)}
                                    className="text-primary hover:underline cursor-pointer font-bold ml-1 inline-flex items-center gap-1"
                                >
                                    <Rocket size={14} /> {t('uiLibrary.learnToUse') || "Aprenda a usar"}
                                </span>
                            )}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                <Terminal size={14} /> Tecnologias
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-lg bg-secondary/5 text-secondary text-sm font-medium border border-secondary/10 hover:bg-secondary/10 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex flex-col gap-3">
                            {project.demoUrl && (
                                <Button className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-[24px]" asChild>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <Rocket className="w-5 h-5" /> {t('projects.viewProject') || "Ver Projeto"}
                                    </a>
                                </Button>
                            )}
                            <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-[24px]" asChild>
                                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-5 h-5" /> Tenho Interesse
                                </a>
                            </Button>
                        </div>

                        {project.downloadLink && (
                            <div className="pt-2" ref={scrollRef}>
                                <GalaxyButton
                                    href={project.downloadLink}
                                    text={t('uiLibrary.downloadFreeTool') || "Baixar Ferramenta Gratuita"}
                                    download={true}
                                />
                            </div>
                        )}

                        <InstructionModal isOpen={isInstructionOpen} onClose={() => setIsInstructionOpen(false)} />

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );

}

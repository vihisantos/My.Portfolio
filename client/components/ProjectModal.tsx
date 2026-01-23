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
import { MessageCircle, Rocket } from "lucide-react";
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
    const waMessage = `Olá Vitor! Vi seu projeto "${project.title}" no seu site e tenho interesse em saber mais ${project.badge ? 'sobre o template' : 'sobre como desenvolver algo parecido'}.`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 border border-border">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <DialogTitle className="text-2xl font-bold">
                            {project.title}
                        </DialogTitle>
                        {project.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                {project.badge === "New" ? (t('uiLibrary.newFreeApp') || "Nova Aplicação Gratuita") : project.badge}
                            </span>
                        )}
                    </div>
                    <DialogDescription className="text-lg mb-6">
                        {project.description}
                        {project.downloadLink && (
                            <span
                                onClick={() => setIsInstructionOpen(true)}
                                className="text-primary hover:underline cursor-pointer font-bold ml-1"
                            >
                                • {t('uiLibrary.learnToUse') || "Aprenda a usar"}
                            </span>
                        )}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-3">Tecnologias Utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
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
            </DialogContent>
        </Dialog>
    );

}

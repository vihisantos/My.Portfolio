import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    repoUrl?: string;
    badge?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

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
                                {project.badge}
                            </span>
                        )}
                    </div>
                    <DialogDescription className="text-lg mb-6">
                        {project.description}
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

                    <div className="pt-4 border-t border-border">
                        <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12" asChild>
                            <a href={waUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5" /> Tenho Interesse
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

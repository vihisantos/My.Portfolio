import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    repoUrl?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

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
                    <DialogTitle className="text-2xl font-bold mb-2">
                        {project.title}
                    </DialogTitle>
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

                    <div className="flex gap-4 pt-4 border-t border-border">
                        <Button className="flex-1 gap-2" asChild>
                            <a href={project.demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                                <Globe className="w-4 h-4" /> Ver Demo
                            </a>
                        </Button>
                        <Button variant="outline" className="flex-1 gap-2" asChild>
                            <a href={project.repoUrl || "#"} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" /> Repositório
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

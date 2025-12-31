import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
    className?: string;
}

export function SocialLinks({ className = "" }: SocialLinksProps) {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://github.com/vihisantos/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10" asChild>
                <a href="mailto:adm-vitor@capybaraholding.com" aria-label="Email">
                    <Mail className="w-5 h-5" />
                </a>
            </Button>
        </div>
    );
}

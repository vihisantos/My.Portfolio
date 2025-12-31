import { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from "@/components/ui/badge";
import { translations } from '@/lib/i18n';

export function Certificates() {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    const t = translations[language].certificates;
    const certificatesList = translations[language].certificatesList;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-primary/20 bg-primary/5 text-primary font-semibold smooth-transition hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg"
            >
                <Award size={20} />
                {t.button}
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <Award className="text-primary" />
                            {t.title}
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                            {t.subtitle}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {certificatesList && (certificatesList as any[]).map((cert: any) => (
                            <div
                                key={cert.id}
                                className="relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/50 smooth-transition group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Award size={24} />
                                    </div>
                                    {cert.credentialUrl && (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            title={t.viewCredential}
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                                    <span className="font-medium text-foreground">{cert.issuer}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {cert.date}
                                    </span>
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill: string) => (
                                        <Badge key={skill} variant="secondary" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

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
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold smooth-transition hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
                <Award size={20} className="text-primary" />
                {t.button}
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-y-auto bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/10 rounded-3xl p-0 gap-0">
                    <div className="p-8 overflow-y-auto">
                        <DialogHeader className="mb-8">
                            <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 flex items-center gap-3">
                                <Award className="text-primary" size={28} />
                                {t.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground mt-2">
                                {t.subtitle}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {certificatesList && (certificatesList as any[]).map((cert: any) => (
                                <div
                                    key={cert.id}
                                    className="relative p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-primary/50 smooth-transition group overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                            <Award size={24} />
                                        </div>
                                        {cert.credentialUrl && (
                                            <a
                                                href={cert.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                                                title={t.viewCredential}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>

                                    <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-primary transition-colors relative z-10">
                                        {cert.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2 relative z-10">
                                        <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                                        <span className="opacity-30">•</span>
                                        <span className="flex items-center gap-1 font-medium">
                                            <Calendar size={12} className="opacity-60" /> {cert.date}
                                        </span>
                                    </p>

                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {cert.skills.map((skill: string) => (
                                            <span
                                                key={skill}
                                                className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

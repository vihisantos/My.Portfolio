import { useState, useMemo } from 'react';
import { Award, ExternalLink, Calendar, Search, Filter, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Certificates() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const { language } = useLanguage();

    const t = translations[language].certificates;
    const certificatesList = translations[language].certificatesList || [];

    // Mapeamento Inteligente de Categorias (agrupa tags relacionadas)
    const CATEGORY_MAPPING: Record<string, string[]> = {
        "Design & UX": ["UI Design", "UX Design", "Figma", "Usability", "Prototipagem", "Prototyping", "Pesquisa com Usuário", "User Research"],
        "AI & Data": [
            "AI", "IA", "Artificial Intelligence", "Generative AI", "IA Generativa",
            "Data Science", "Ciência de Dados", "Machine Learning", "NLP", "Analytics", "Big Data",
            "Bing", "LLM", "Prompt Engineering", "Microsoft", "Pattern Mining", "Mineração de Padrões",
            "Text Mining", "Mineração de Texto", "Classification", "Classificação",
            "Data Processing", "Processamento de Dados", "ETL"
        ],
        "DevOps & Security": [
            "DevOps", "Security", "Segurança", "CI/CD", "Automation", "Automação",
            "Cybersecurity", "Cibersegurança", "InfoSec", "Segurança da Informação",
            "Cloud IDE", "IDE em Nuvem"
        ],
        "Engineering": [
            "Coding", "Codificação", "GitHub", "Software Architecture", "Arquitetura de Software",
            "Design Patterns", "Padrões de Projeto", "UML", "Development", "Desenvolvimento",
            "Drones", "Operations", "Operações", "Technology", "Tecnologia"
        ],
        "Management": [
            "Management", "Gestão", "Leadership", "Liderança", "Project Management", "Gestão de Projetos",
            "Agile", "Scrum", "HR", "RH", "Remote Work", "Trabalho Remoto", "Planning", "Planejamento",
            "BPM", "Process Improvement", "Melhoria de Processos", "Ethics", "Ética",
            "Compliance", "Conformidade", "Innovation", "Inovação", "Productivity", "Produtividade",
            "History", "História", "Foundations", "Fundamentos"
        ]
    };

    const categories = Object.keys(CATEGORY_MAPPING);

    // Lógica de Filtro
    const filteredCertificates = useMemo(() => {
        return certificatesList.filter((cert: any) => {
            const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());

            // Se uma categoria estiver selecionada, verificar se ALGUMA das habilidades do certificado corresponde às tags permitidas da categoria
            const matchesCategory = selectedCategory
                ? cert.skills.some((skill: string) => CATEGORY_MAPPING[selectedCategory]?.includes(skill))
                : true;

            return matchesSearch && matchesCategory;
        });
    }, [certificatesList, searchQuery, selectedCategory]);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold smooth-transition hover:bg-primary/10 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
                <Award size={20} className="text-primary" />
                {t.button}
            </motion.button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl shadow-primary/10 rounded-3xl p-0 gap-0 flex flex-col">

                    {/* Seção de Cabeçalho */}
                    <div className="p-8 pb-4 shrink-0 z-20 bg-gradient-to-b from-white via-white to-transparent dark:from-slate-950 dark:via-slate-950 dark:to-transparent">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <Award size={28} />
                                </div>
                                {t.title}
                            </DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground mt-2">
                                {t.subtitle}
                            </DialogDescription>
                        </DialogHeader>

                        {/* Controles de Pesquisa e Filtro */}
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                <Input
                                    placeholder={t.searchPlaceholder}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 h-12 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 focus:ring-primary/50"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            {/* Pílulas de Categoria */}
                            <div className="flex flex-wrap gap-2 pb-2">
                                <Badge
                                    variant={selectedCategory === null ? "default" : "outline"}
                                    className={`cursor-pointer px-4 py-1.5 rounded-full text-sm transition-all ${selectedCategory === null ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10 border-slate-300 dark:border-slate-700'}`}
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    {t.all}
                                </Badge>
                                {categories.map((cat: any) => (
                                    <Badge
                                        key={cat}
                                        variant={selectedCategory === cat ? "default" : "outline"}
                                        className={`cursor-pointer px-3 py-1.5 rounded-full text-sm transition-all ${selectedCategory === cat ? 'bg-primary hover:bg-primary/90' : 'hover:bg-primary/10 border-slate-300 dark:border-slate-700'}`}
                                        onClick={() => setSelectedCategory(cat)}
                                    >
                                        {t.categories[cat as keyof typeof t.categories]}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Conteúdo Rolável */}
                    <div className="flex-1 overflow-y-auto p-8 pt-2 scrollbar-hide">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <AnimatePresence mode="popLayout">
                                {filteredCertificates.length > 0 ? (
                                    filteredCertificates.map((cert: any) => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            key={cert.id}
                                            className="relative p-6 rounded-2xl border border-slate-200 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-primary/50 smooth-transition group overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/5"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
                                                    <Award size={24} />
                                                </div>
                                                {cert.credentialUrl && cert.credentialUrl !== '#' && (
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

                                            <div className="mb-4">
                                                <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-primary transition-colors relative z-10 line-clamp-2">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground flex items-center gap-2 relative z-10">
                                                    <span className="font-semibold text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                                                    <span className="opacity-30">•</span>
                                                    <span className="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs whitespace-nowrap shrink-0">
                                                        <Calendar size={10} className="opacity-60" /> {cert.date}
                                                    </span>
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                                                {cert.skills.map((skill: string) => (
                                                    <span
                                                        key={skill}
                                                        className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 group-hover:border-primary/20 group-hover:text-primary transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full py-12 text-center text-muted-foreground"
                                    >
                                        <div className="bg-slate-100 dark:bg-slate-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Search size={32} className="opacity-50" />
                                        </div>
                                        <p>{t.noCertificates}</p>
                                        <button
                                            onClick={() => {
                                                setSearchQuery("");
                                                setSelectedCategory(null);
                                            }}
                                            className="mt-2 text-primary hover:underline text-sm"
                                        >
                                            {t.clearFilters}
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

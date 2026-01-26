import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    Home,
    Search,
    CreditCard,
    Building2,
    Moon,
    Sun,
    Languages,
    Terminal,
    ArrowRight,
    Contact2
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CommandBar = () => {
    const [open, setOpen] = useState(false);
    const { t, language, setLanguage } = useLanguage();
    const [theme, setInternalTheme] = useState<'dark' | 'light'>('dark');
    const navigate = useNavigate();

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setInternalTheme(isDark ? 'dark' : 'light');
    }, [open]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
        setInternalTheme(newTheme);
    };

    // Toggle the menu when ⌘K (or Ctrl+K) is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <div className="command-bar-container">
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh] p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="relative w-full max-w-[640px] bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
                        >
                            <Command label="Command Menu" className="flex flex-col h-full">
                                <div className="flex items-center px-4 border-b border-slate-200 dark:border-white/5">
                                    <Search className="mr-3 h-4 w-4 text-slate-400" />
                                    <Command.Input
                                        autoFocus
                                        placeholder={language === 'pt' ? 'Digite um comando ou procure...' : 'Type a command or search...'}
                                        className="flex h-14 w-full bg-transparent py-4 outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400"
                                    />
                                    <div className="flex items-center gap-1.5 ml-auto">
                                        <kbd className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono border border-slate-200 dark:border-white/5 text-slate-400 uppercase leading-none">ESC</kbd>
                                    </div>
                                </div>

                                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin">
                                    <Command.Empty className="px-4 py-8 text-center text-sm text-slate-500">
                                        {language === 'pt' ? 'Nenhum resultado encontrado.' : 'No results found.'}
                                    </Command.Empty>

                                    <Command.Group heading={language === 'pt' ? 'Navegação' : 'Navigation'} className="px-2 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Item
                                            onSelect={() => runCommand(() => navigate('/'))}
                                            icon={<Home className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Ir para Home' : 'Go to Home'}
                                        />
                                        <Item
                                            onSelect={() => runCommand(() => navigate('/sponsorship'))}
                                            icon={<CreditCard className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Sponsorship (Patrocínio)' : 'Sponsorship'}
                                        />
                                        <Item
                                            onSelect={() => runCommand(() => navigate('/capybara-holding'))}
                                            icon={<Building2 className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Capybara Holding' : 'Capybara Holding'}
                                        />
                                        <Item
                                            onSelect={() => runCommand(() => {
                                                const el = document.getElementById('contact');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                                else navigate('/#contact');
                                            })}
                                            icon={<Contact2 className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Contato' : 'Contact'}
                                        />
                                    </Command.Group>

                                    <Command.Separator className="h-px bg-slate-200 dark:bg-white/5 my-2" />

                                    <Command.Group heading={language === 'pt' ? 'Ações Rápidas' : 'Quick Actions'} className="px-2 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Item
                                            onSelect={() => runCommand(toggleTheme)}
                                            icon={theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Alternar Tema' : 'Toggle Theme'}
                                        />
                                        <Item
                                            onSelect={() => runCommand(() => setLanguage(language === 'pt' ? 'en' : 'pt'))}
                                            icon={<Languages className="w-4 h-4" />}
                                            label={language === 'pt' ? 'Mudar Idioma' : 'Switch Language'}
                                        />
                                    </Command.Group>

                                    <Command.Separator className="h-px bg-slate-200 dark:bg-white/5 my-2" />

                                    <Command.Group heading={language === 'pt' ? 'Desenvolvedor' : 'Developer'} className="px-2 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Item
                                            onSelect={() => runCommand(() => window.open('https://github.com/vihisantos', '_blank'))}
                                            icon={<Terminal className="w-4 h-4" />}
                                            label="GitHub Repository"
                                        />
                                    </Command.Group>
                                </Command.List>

                                <div className="p-3 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-4 text-[10px] text-slate-400">
                                    <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-black/50 leading-none">↑↓</kbd> Navegar</span>
                                    <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-black/50 leading-none">ENTER</kbd> Selecionar</span>
                                </div>
                            </Command>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface ItemProps {
    onSelect: () => void;
    icon: React.ReactNode;
    label: string;
}

const Item = ({ onSelect, icon, label }: ItemProps) => {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 dark:text-slate-300 aria-selected:bg-primary/10 aria-selected:text-primary cursor-pointer transition-colors group"
        >
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-aria-selected:bg-primary group-aria-selected:text-white transition-colors">
                {icon}
            </div>
            <span className="font-medium text-sm flex-1">{label}</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-aria-selected:opacity-100 -translate-x-2 group-aria-selected:translate-x-0 transition-all" />
        </Command.Item>
    );
};

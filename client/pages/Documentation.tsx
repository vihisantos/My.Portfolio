import React from 'react';
import { ComponentShowcase } from "../components/ui-library/ComponentShowcase";
import readmeContent from '../../README.md?raw';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Simple Markdown Parser Component to avoid adding new dependencies
const MarkdownRenderer = ({ content }: { content: string }) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];

    const parseLine = (line: string, index: number) => {
        // Code blocks
        if (line.trim().startsWith('```')) {
            if (inCodeBlock) {
                // End of code block
                elements.push(
                    <div key={`code-${index}`} className="my-4 bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner border border-zinc-800">
                        <pre><code>{codeBlockContent.join('\n')}</code></pre>
                    </div>
                );
                codeBlockContent = [];
                inCodeBlock = false;
            } else {
                // Start of code block
                inCodeBlock = true;
            }
            return;
        }
        if (inCodeBlock) {
            codeBlockContent.push(line);
            return;
        }

        // Images
        const imgMatch = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (imgMatch) {
            let imgSrc = imgMatch[2];
            // Fix relative paths for web view
            // If path starts with public/, remove it and prepend BASE_URL (which includes the base path of the app)
            if (imgSrc.startsWith('public/')) {
                const cleanPath = imgSrc.replace('public/', '');
                const baseUrl = import.meta.env.BASE_URL.endsWith('/')
                    ? import.meta.env.BASE_URL.slice(0, -1)
                    : import.meta.env.BASE_URL;
                imgSrc = `${baseUrl}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;
            } else if (!imgSrc.startsWith('http') && !imgSrc.startsWith('/')) {
                // handle other relative paths if needed, defaulting to root for now
                imgSrc = '/' + imgSrc;
            }

            elements.push(
                <div key={`img-${index}`} className="my-6">
                    <img src={imgSrc} alt={imgMatch[1]} className="rounded-xl shadow-lg border border-black/10 dark:border-white/10 w-full max-w-3xl mx-auto" />
                    {imgMatch[1] && <p className="text-center text-sm text-custom-gray mt-2 italic">{imgMatch[1]}</p>}
                </div>
            );
            return;
        }

        // Headers
        if (line.startsWith('# ')) {
            elements.push(<h1 key={`h1-${index}`} className="text-4xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block">{line.replace('# ', '')}</h1>);
            return;
        }
        if (line.startsWith('## ')) {
            // Handle "Link Direto" special case or just styling
            elements.push(<h2 key={`h2-${index}`} className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2 pb-2 border-b border-border">{line.replace('## ', '')}</h2>);
            return;
        }
        if (line.startsWith('### ')) {
            elements.push(<h3 key={`h3-${index}`} className="text-xl font-semibold mt-6 mb-2">{line.replace('### ', '')}</h3>);
            return;
        }

        // Horizontal Rule
        if (line.trim() === '---') {
            elements.push(<hr key={`hr-${index}`} className="my-8 border-border" />);
            return;
        }

        // Bullet Points
        if (line.trim().startsWith('- ')) {
            const text = line.trim().substring(2);
            currentList.push(<li key={`li-${index}`} className="ml-4 pl-2 border-l-2 border-primary/50">{parseInline(text)}</li>);
            return;
        } else if (currentList.length > 0) {
            // Flush list if current line isn't a list item
            elements.push(<ul key={`ul-${index}`} className="space-y-2 my-4 pl-4">{[...currentList]}</ul>);
            currentList = [];
        }

        // Regular Paragraphs (skip empty lines)
        if (line.trim() !== '') {
            elements.push(<p key={`p-${index}`} className="leading-relaxed mb-4 text-custom-gray dark:text-zinc-300">{parseInline(line)}</p>);
        }
    };

    // Helper to parse bold, italic, links
    const parseInline = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\)|`.*?`)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={i} className="italic">{part.slice(1, -1)}</em>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={i} className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono text-sm text-primary">{part.slice(1, -1)}</code>;
            }
            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
            if (linkMatch) {
                const isExternal = linkMatch[2].startsWith('http');
                return (
                    <a
                        key={i}
                        href={linkMatch[2]}
                        className="text-primary hover:underline underline-offset-4 decoration-primary/30"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                        {linkMatch[1]}
                    </a>
                );
            }
            return part;
        });
    };

    lines.forEach((line, index) => parseLine(line, index));

    // Flush remaining list
    if (currentList.length > 0) {
        elements.push(<ul key="ul-last" className="space-y-2 my-4 pl-4">{[...currentList]}</ul>);
    }

    return <div className="max-w-4xl mx-auto">{elements}</div>;
};

export default function Documentation() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            <Helmet>
                <title>Documentação | Vitor.dev</title>
                <meta name="description" content="Documentação oficial e detalhes técnicos do projeto Portfolio." />
            </Helmet>

            <div className="container-custom mx-auto">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar para Home
                    </Link>
                </div>

                <div className="mb-12 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Docs
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentação do Projeto</h1>
                    <p className="text-xl text-custom-gray max-w-2xl mx-auto">
                        Visão geral técnica, instalação e guia de uso.
                    </p>
                </div>

                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                    <MarkdownRenderer content={readmeContent} />
                </div>
            </div>
        </div>
    );
}

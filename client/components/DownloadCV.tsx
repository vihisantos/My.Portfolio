import { Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function DownloadCV() {
  const { language } = useLanguage();

  const handleDownload = () => {
    // Create a sample CV PDF content
    const cvContent = `
VITOR SANTOS - Full-Stack Developer

${language === 'pt' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY'}
${language === 'pt' ? 'Desenvolvedor Full-Stack apaixonado por criar aplicações escaláveis e modernas. Estudando Análise e Desenvolvimento de Sistemas e Gestão de T.I.' : 'Passionate Full-Stack Developer creating scalable and modern applications. Studying Analysis and Systems Development and IT Management.'}

${language === 'pt' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS'}
Frontend: React, TypeScript, Tailwind CSS, Next.js
Backend: Node.js, Express, Python, REST APIs
Databases: PostgreSQL, MongoDB, Redis, Prisma
DevOps: Docker, Git, GitHub, AWS, Vercel

${language === 'pt' ? 'EXPERIÊNCIA' : 'EXPERIENCE'}
- E-Commerce Platform (Full-Stack)
- Task Management System (Full-Stack)
- Analytics Dashboard (Full-Stack)
- Mobile App Backend (Node.js/Express)
- AI Chat Interface (React/Python)

${language === 'pt' ? 'EDUCAÇÃO' : 'EDUCATION'}
${language === 'pt' ? 'Análise e Desenvolvimento de Sistemas - Cursando' : 'Analysis and Systems Development - In Progress'}
${language === 'pt' ? 'Gestão de T.I - Cursando' : 'IT Management - In Progress'}
    `;

    // Create blob and download
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent)
    );
    element.setAttribute(
      'download',
      `Vitor_Santos_${language === 'pt' ? 'Currículo' : 'CV'}.txt`
    );
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold smooth-transition hover:shadow-lg hover:shadow-primary/30"
    >
      <Download size={18} />
      {language === 'pt' ? 'Baixar CV' : 'Download CV'}
    </button>
  );
}

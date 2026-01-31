import ecommerceImg from "@/assets/projects/ecommerce.png";
import taskManagementImg from "@/assets/projects/task-management.png";
import aiChatImg from "@/assets/projects/ai-chat.png";
import colorFlicksImg from "@/assets/projects/ColorFlick.png";
import capyFlowImg from "@/assets/projects/capyflowacademy.png";
import mizinAppImg from "@/assets/projects/Mizin.png";
import siteInstitucionalImg from "@/assets/projects/site institucional.png";
import zapediaImg from "@/assets/projects/zapedia.png";
import medHubImg from "@/assets/projects/med-hub.png";

export const getProjects = (t: any) => [

    {
        id: 8,
        title: t('projects.ecommerce.title'),
        description: t('projects.ecommerce.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "PWA"],
        image: ecommerceImg,
        challenge: t('projects.ecommerce.story.challenge'),
        solution: t('projects.ecommerce.story.solution'),
        impact: t('projects.ecommerce.story.impact'),
    },
    {
        id: 2,
        title: t('projects.taskmanagement.title'),
        description: t('projects.taskmanagement.description'),
        technologies: ["React", "Vite", "CSS Vanilla"],
        image: taskManagementImg,
        badge: t('projects.taskmanagement.badge'),
        badgeType: 'sale',
        demoUrl: "https://vihisantos.github.io/portfolio-profissional/",
        challenge: t('projects.taskmanagement.story.challenge'),
        solution: t('projects.taskmanagement.story.solution'),
        impact: t('projects.taskmanagement.story.impact'),
    },
    {
        id: 5,
        title: t('projects.aichat.title'),
        description: t('projects.aichat.description'),
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        image: aiChatImg,
        demoUrl: "https://vitrine360.vercel.app",
        challenge: t('projects.aichat.story.challenge'),
        solution: t('projects.aichat.story.solution'),
        impact: t('projects.aichat.story.impact'),
    },
    {
        id: 6,
        title: t('projects.colorflicks.title'),
        description: t('projects.colorflicks.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "TMDB API", "ColorThief"],
        image: colorFlicksImg,
        demoUrl: "https://vihisantos.github.io/ColorFlicks/",
        challenge: t('projects.colorflicks.story.challenge'),
        solution: t('projects.colorflicks.story.solution'),
        impact: t('projects.colorflicks.story.impact'),
    },
    {
        id: 7,
        title: t('projects.capyflow.title'),
        description: t('projects.capyflow.description'),
        technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        image: capyFlowImg,
        demoUrl: "https://vihisantos.github.io/CapyFlow-Academy/",
        challenge: t('projects.capyflow.story.challenge'),
        solution: t('projects.capyflow.story.solution'),
        impact: t('projects.capyflow.story.impact'),
    },

    {
        id: 1,
        title: t('projects.mizinapp.title'),
        description: t('projects.mizinapp.description'),
        technologies: ["Python", "CustomTkinter"],
        image: mizinAppImg,
        badgeType: 'new',
        downloadLink: "https://drive.google.com/file/d/1dGPSta5n3k7fQQsaPdVg72K0ztsUT-9C/view?usp=sharing",
        challenge: t('projects.mizinapp.story.challenge'),
        solution: t('projects.mizinapp.story.solution'),
        impact: t('projects.mizinapp.story.impact'),
    },
    {
        id: 9,
        title: t('projects.siteinstitucional.title'),
        description: t('projects.siteinstitucional.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "Framer Motion"],
        image: siteInstitucionalImg,
        demoUrl: "https://vihisantos.github.io/site_institucional/",
        challenge: t('projects.siteinstitucional.story.challenge'),
        solution: t('projects.siteinstitucional.story.solution'),
        impact: t('projects.siteinstitucional.story.impact'),
    },
    {
        id: 10,
        title: t('projects.zapedia.title'),
        description: t('projects.zapedia.description'),
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide React", "TypeScript"],
        image: zapediaImg,
        demoUrl: "https://vihisantos.github.io/Zapedia/",
        challenge: t('projects.zapedia.story.challenge'),
        solution: t('projects.zapedia.story.solution'),
        impact: t('projects.zapedia.story.impact'),
    },
    {
        id: 11,
        title: t('projects.medhub.title'),
        description: t('projects.medhub.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js"],
        image: medHubImg,
        demoUrl: "https://vihisantos.github.io/Med_Hub/",
        challenge: t('projects.medhub.story.challenge'),
        solution: t('projects.medhub.story.solution'),
        impact: t('projects.medhub.story.impact'),
    }
];

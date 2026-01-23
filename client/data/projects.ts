import ecommerceImg from "@/assets/projects/ecommerce.png";
import taskManagementImg from "@/assets/projects/task-management.png";
import aiChatImg from "@/assets/projects/ai-chat.png";
import colorFlicksImg from "@/assets/projects/ColorFlick.png";
import capyFlowImg from "@/assets/projects/capyflowacademy.png";
import mizinAppImg from "@/assets/projects/Mizin.png";

export const getProjects = (t: any) => [

    {
        id: 8,
        title: t('projects.ecommerce.title'),
        description: t('projects.ecommerce.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "Supabase", "PWA"],
        image: ecommerceImg,
    },
    {
        id: 2,
        title: t('projects.taskmanagement.title'),
        description: t('projects.taskmanagement.description'),
        technologies: ["React", "Vite", "CSS Vanilla"],
        image: taskManagementImg,
        badge: t('projects.taskmanagement.badge'),
        demoUrl: "https://vihisantos.github.io/portfolio-profissional/",
    },
    {
        id: 5,
        title: t('projects.aichat.title'),
        description: t('projects.aichat.description'),
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        image: aiChatImg,
    },
    {
        id: 6,
        title: t('projects.colorflicks.title'),
        description: t('projects.colorflicks.description'),
        technologies: ["React", "Vite", "Tailwind CSS", "TMDB API", "ColorThief"],
        image: colorFlicksImg,
        demoUrl: "https://vihisantos.github.io/ColorFlicks/",
    },
    {
        id: 7,
        title: t('projects.capyflow.title'),
        description: t('projects.capyflow.description'),
        technologies: ["Next.js 16", "NestJS 11", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        image: capyFlowImg,
    },
    {
        id: 1,
        title: t('projects.mizinapp.title'),
        description: t('projects.mizinapp.description'),
        technologies: ["Python 3.14", "CustomTkinter"],
        image: mizinAppImg,
        badge: "New",
        downloadLink: "https://drive.google.com/file/d/1dGPSta5n3k7fQQsaPdVg72K0ztsUT-9C/view?usp=sharing",
    }
];

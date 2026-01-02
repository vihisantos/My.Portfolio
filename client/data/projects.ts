import ecommerceImg from "@/assets/projects/ecommerce.png";
import taskManagementImg from "@/assets/projects/task-management.png";
import aiChatImg from "@/assets/projects/ai-chat.png";

export const getProjects = (t: any) => [
    {
        id: 1,
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
    },
    {
        id: 5,
        title: t('projects.aichat.title'),
        description: t('projects.aichat.description'),
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        image: aiChatImg,
    }
];

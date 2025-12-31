
import ecommerceImg from "@/assets/projects/ecommerce.png";
import taskManagementImg from "@/assets/projects/task-management.png";
import analyticsImg from "@/assets/projects/analytics.png";
import mobileApiImg from "@/assets/projects/mobile-api.png";
import aiChatImg from "@/assets/projects/ai-chat.png";
import teamCollaborationImg from "@/assets/projects/team-collaboration.png";

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
    },
    {
        id: 5,
        title: t('projects.aichat.title'),
        description: t('projects.aichat.description'),
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "JWT"],
        image: aiChatImg,
    },
    {
        id: 4,
        title: t('projects.mobileapi.title'),
        description: t('projects.mobileapi.description'),
        technologies: ["Node.js", "Express", "Redis", "JWT"],
        image: mobileApiImg,
    },
    {
        id: 3,
        title: t('projects.analytics.title'),
        description: t('projects.analytics.description'),
        technologies: ["React", "Python", "PostgreSQL", "D3.js"],
        image: analyticsImg,
    },
    {
        id: 6,
        title: t('projects.teamcollaboration.title'),
        description: t('projects.teamcollaboration.description'),
        technologies: ["React", "Node.js", "S3", "PostgreSQL"],
        image: teamCollaborationImg,
    },
];

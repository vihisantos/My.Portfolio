import { TechCard } from './TechCard';

const technologies = [
  { name: 'React', color: '#61DAFB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', },
  { name: 'TypeScript', color: '#3178C6', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', },
  { name: 'Node.js', color: '#339933', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', },
  { name: 'Express', color: '#ffffff', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', },
  { name: 'PostgreSQL', color: '#336791', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', },
  { name: 'MongoDB', color: '#47A248', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', },
  { name: 'Tailwind', color: '#06B6D4', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', },
  { name: 'Docker', color: '#2496ED', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', },
  { name: 'Git', color: '#F05032', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', },
  { name: 'AWS', color: '#FF9900', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', },
  { name: 'Python', color: '#3776AB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', },
  { name: 'Prisma', color: '#2D3748', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 p-4">
      {technologies.map((tech) => (
        <TechCard
          key={tech.name}
          name={tech.name}
          imageUrl={tech.imageUrl}
          color={tech.color}
        />
      ))}
    </div>
  );
}

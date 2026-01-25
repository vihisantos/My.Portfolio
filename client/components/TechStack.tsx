import { TechCard } from './TechCard';

// Define categories type for better organization
type Category = 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';

interface Tech {
  name: string;
  color: string;
  imageUrl: string;
  category: Category;
}

export const technologies: Tech[] = [
  // UI/UX & Basics (Highlight)
  { name: 'HTML5', color: '#E34F26', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
  { name: 'CSS3', color: '#1572B6', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },

  // Frontend Frameworks
  { name: 'React', color: '#61DAFB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Vue.js', color: '#4FC08D', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
  { name: 'Angular', color: '#DD0031', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
  { name: 'TypeScript', color: '#3178C6', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'Tailwind', color: '#06B6D4', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },

  // Backend
  { name: 'Node.js', color: '#339933', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Express', color: '#ffffff', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
  { name: 'Python', color: '#3776AB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
  { name: 'Django', color: '#2BA977', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg', category: 'Backend' },
  { name: 'FastAPI', color: '#009688', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'Backend' },
  { name: 'GraphQL', color: '#E10098', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', category: 'Backend' },

  // Database
  { name: 'PostgreSQL', color: '#336791', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
  { name: 'MongoDB', color: '#47A248', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
  { name: 'Supabase', color: '#3ECF8E', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'Database' },
  { name: 'Firebase', color: '#FFCA28', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Database' },
  // { name: 'Prisma', color: '#2D3748', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', category: 'Database' },

  // DevOps & Tools
  { name: 'Docker', color: '#2496ED', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
  { name: 'AWS', color: '#FF9900', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'DevOps' },
  { name: 'Git', color: '#F05032', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
];

export function TechStack() {
  return (
    <div className="flex flex-col gap-4">
      {/* <h3 className="font-bold text-lg">Tech Stack</h3> */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {technologies.map((tech) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            imageUrl={tech.imageUrl}
            color={tech.color}
          />
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';

interface ProjectFilterProps {
  technologies: string[];
  onFilterChange: (selected: string[]) => void;
}

export function ProjectFilter({ technologies, onFilterChange }: ProjectFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleTechnology = (tech: string) => {
    const newSelected = selected.includes(tech)
      ? selected.filter((t) => t !== tech)
      : [...selected, tech];
    setSelected(newSelected);
    onFilterChange(newSelected);
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {technologies.map((tech) => (
        <button
          key={tech}
          onClick={() => toggleTechnology(tech)}
          className={`px-4 py-2 rounded-lg smooth-transition font-medium ${
            selected.includes(tech)
              ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
              : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {tech}
        </button>
      ))}
      {selected.length > 0 && (
        <button
          onClick={() => {
            setSelected([]);
            onFilterChange([]);
          }}
          className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground smooth-transition underline"
        >
          Clear
        </button>
      )}
    </div>
  );
}

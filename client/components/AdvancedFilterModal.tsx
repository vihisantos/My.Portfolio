import { useState, useMemo, useEffect } from 'react';
import { Search, X, Filter, Code, Layout, Smartphone, Server, Database, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectFilterProps {
  technologies: string[];
  onFilterChange: (filters: { selectedTechs: string[]; searchQuery: string; projectType?: string }) => void;
  projects?: any[];
}

type ProjectType = 'all' | 'web' | 'desktop' | 'mobile';

export function AdvancedProjectFilter({ technologies, onFilterChange, projects }: ProjectFilterProps) {

  const { t, language } = useLanguage();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [projectType, setProjectType] = useState<ProjectType>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Categorizar tecnologias
  const categorizedTechs = useMemo(() => {
    const frontend = ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'TypeScript', 'CSS Vanilla', 'WCAG AAA'];
    const backend = ['Node.js', 'Express', 'NestJS', 'Python', 'CustomTkinter'];
    const database = ['PostgreSQL', 'Supabase', 'Firebase'];
    const other = ['Three.js', 'React Three Fiber', 'TMDB API', 'ColorThief', 'PWA', 'Lucide React', 'JWT'];

    return {
      frontend: technologies.filter(t => frontend.includes(t)),
      backend: technologies.filter(t => backend.includes(t)),
      database: technologies.filter(t => database.includes(t)),
      other: technologies.filter(t => other.includes(t)),
    };
  }, [technologies]);

  // Detectar tipo de projeto baseado nas tecnologias
  const getProjectType = (project: any): ProjectType => {
    const techs = project.technologies || [];
    if (techs.includes('Python') || techs.includes('CustomTkinter')) return 'desktop';
    if (techs.includes('React Native') || techs.includes('Mobile')) return 'mobile';
    return 'web';
  };

  // Filtrar projetos
  const handleFilter = () => {
    onFilterChange({
      selectedTechs,
      searchQuery,
      projectType: projectType === 'all' ? undefined : projectType,
    });
  };

  // Limpar filtros
  const clearFilters = () => {
    setSelectedTechs([]);
    setSearchQuery('');
    setProjectType('all');
    onFilterChange({ selectedTechs: [], searchQuery: '' });
  };

  const toggleTechnology = (tech: string) => {
    const newSelected = selectedTechs.includes(tech)
      ? selectedTechs.filter((t) => t !== tech)
      : [...selectedTechs, tech];
    setSelectedTechs(newSelected);
  };

  // Auto-aplicar filtros sempre que mudam
  useEffect(() => {
    handleFilter();
  }, [selectedTechs, searchQuery, projectType]);

  const hasActiveFilters = selectedTechs.length > 0 || searchQuery || projectType !== 'all';

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
      <div className="relative max-w-2xl flex-1">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <input
            type="text"
            placeholder={language === 'pt' ? 'Buscar projetos...' : 'Search projects...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>
      {/* Filter button */}
      <button
        type="button"
        onClick={() => setShowFilters(true)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${hasActiveFilters
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
            : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
      >
        <Filter size={18} />
        {language === 'pt' ? 'Filtros' : 'Filters'}
        {hasActiveFilters && (
          <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center">
            {[selectedTechs.length, projectType !== 'all' ? 1 : 0].filter(Boolean).length}
          </span>
        )}
      </button>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground underline flex items-center gap-2"
        >
          <X size={16} />
          {language === 'pt' ? 'Limpar' : 'Clear'}
        </button>
      )}



      {/* Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={() => setShowFilters(false)}>
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{language === 'pt' ? 'Filtros' : 'Filters'}</h3>
              <button onClick={() => setShowFilters(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>


            {/* Project Type Filter */}
            <div className="mb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
                <Globe size={16} />
                {language === 'pt' ? 'Tipo de Projeto' : 'Project Type'}
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { id: 'all', label: language === 'pt' ? 'Todos' : 'All', icon: Filter },
                  { id: 'web', label: 'Web', icon: Globe },
                  { id: 'desktop', label: 'Desktop', icon: Layout },
                  { id: 'mobile', label: 'Mobile', icon: Smartphone },
                ].map((type) => {
                  const Icon = type.icon;
                  const isActive = projectType === type.id;
                  return (

                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id as ProjectType)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isActive
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                          : 'bg-white dark:bg-slate-800 text-foreground hover:bg-slate-100 dark:hover:bg-slate-700 border border-border'
                        }`}
                    >
                      <Icon size={16} />
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Technology Filters */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-2">
                <Code size={16} />
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </h4>

              {/* Frontend */}
              {categorizedTechs.frontend.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-500">
                    <Layout size={14} />
                    Frontend
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedTechs.frontend.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border ${selectedTechs.includes(tech)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                            : 'bg-white dark:bg-slate-800 text-foreground border-border hover:border-primary/50'
                          }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend */}
              {categorizedTechs.backend.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-green-500">
                    <Server size={14} />
                    Backend
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedTechs.backend.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border ${selectedTechs.includes(tech)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                            : 'bg-white dark:bg-slate-800 text-foreground border-border hover:border-primary/50'
                          }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Database */}
              {categorizedTechs.database.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-purple-500">
                    <Database size={14} />
                    Database
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedTechs.database.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border ${selectedTechs.includes(tech)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                            : 'bg-white dark:bg-slate-800 text-foreground border-border hover:border-primary/50'
                          }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Other */}
              {categorizedTechs.other.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-orange-500">
                    <Code size={14} />
                    {language === 'pt' ? 'Outros' : 'Other'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorizedTechs.other.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => toggleTechnology(tech)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium border ${selectedTechs.includes(tech)
                            ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                            : 'bg-white dark:bg-slate-800 text-foreground border-border hover:border-primary/50'
                          }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
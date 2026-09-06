import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, ArrowUpRight, Sparkles, Filter, 
  TrendingUp, Sliders, ChevronRight, Eye 
} from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';

interface PortfolioGridProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenProjectStudio: () => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'META ADS',
  'GOOGLE ADS',
  'SEO',
  'SHOPIFY',
  'WEB',
  'LOCAL SEO',
  'MARKETING'
];

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  onSelectProject,
  onOpenProjectStudio
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return projects;
    return projects.filter((p) => p.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [projects, selectedCategory]);

  return (
    <section id="work" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-blue-500" />
              <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
                SELECTED CASE STUDIES & CAMPAIGNS
              </span>
            </div>
            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
              PROVEN RESULTS. <span className="text-gradient">REAL GROWTH.</span>
            </h2>
          </div>

          {/* Quick Studio Trigger */}
          <button
            onClick={onOpenProjectStudio}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl glass border border-white/15 hover:border-blue-400 text-blue-400 text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider transition-all hover:bg-blue-500/10 w-fit"
          >
            <Sliders className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Manage / Add Projects (CMS)</span>
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count = cat === 'ALL' 
              ? projects.length 
              : projects.filter((p) => p.category.toUpperCase() === cat.toUpperCase()).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-white text-[#050817] font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105'
                    : 'glass text-gray-400 hover:text-white border-white/10 hover:border-blue-500/40'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat ? 'bg-black/15 text-[#050817] font-black' : 'bg-white/10 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Masonry/Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;
            const primaryMetric = project.metrics[0];

            return (
              <div
                key={project.id}
                data-cursor="project"
                onClick={() => onSelectProject(project)}
                className="group glass-panel rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-400/60 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.25)]"
              >
                {/* Image Cover Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#070b1e]">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D24] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech uppercase tracking-wider bg-[#050817]/85 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
                      {project.category}
                    </span>

                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech text-slate-300 bg-black/60 border border-slate-700/60 backdrop-blur-md">
                      {project.country} {project.countryCode ? `(${project.countryCode})` : ''}
                    </span>
                  </div>

                  {/* Highlight Metric Pill on Image */}
                  {primaryMetric && (
                    <div className="absolute bottom-3 left-3.5 glass-panel px-3 py-1.5 rounded-xl border border-emerald-500/40 text-white font-display text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                      <span className="text-[10px] text-slate-300 font-mono-tech uppercase">{primaryMetric.label}:</span>
                      <span className="font-bold text-emerald-400">{primaryMetric.value}</span>
                      {primaryMetric.change && (
                        <span className="text-[10px] text-emerald-300">({primaryMetric.change})</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-mono-tech text-slate-400 mb-1">
                      Client: <span className="text-slate-200">{project.clientName}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mt-2 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#050817] text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-tech text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono-tech text-cyan-300 group-hover:text-cyan-200">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>INSPECT CASE STUDY</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800">
            <p className="text-sm font-mono-tech text-slate-400">
              No projects found in this category. You can add one via the Project Studio button above!
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

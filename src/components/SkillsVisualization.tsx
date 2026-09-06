import React, { useState } from 'react';
import { 
  Target, Search, TrendingUp, BarChart3, Activity, 
  ShoppingBag, Layers, Globe, Palette, Image as ImageIcon, 
  Cpu, Bot, Sparkles, Zap, ShieldCheck 
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { SkillNode } from '../types';

const skillIconMap: Record<string, React.ElementType> = {
  Target,
  Search,
  TrendingUp,
  BarChart3,
  Activity,
  ShoppingBag,
  Layers,
  Globe,
  Palette,
  Image: ImageIcon,
  Cpu,
  Bot,
  Sparkles,
  Zap
};

export const SkillsVisualization: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(skillsData[0]);

  const categories = [
    'ALL',
    'Advertising',
    'SEO & Organic',
    'Analytics & Tracking',
    'Platforms & CMS',
    'Design & Creative',
    'AI & Automation'
  ];

  const filteredSkills = selectedCategory === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-blue-500" />
              <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
                TOOLKIT & TECHNICAL STACK
              </span>
              <span className="h-px w-6 sm:w-8 bg-blue-500" />
            </div>
            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
              GROWTH TOOLS & <span className="text-gradient">CORE PROFICIENCIES.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-xs sm:text-base max-w-md font-light leading-relaxed">
            From algorithmic ad bidding and deep GTM dataLayers to state-of-the-art AI growth modeling with ChatGPT, Gemini & Claude.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-8 sm:mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Constellation & Interactive Cards Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const Icon = skillIconMap[skill.iconName || 'Zap'] || Sparkles;
              const isSelected = activeSkill?.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => setActiveSkill(skill)}
                  className={`glass-panel p-5 rounded-2xl border cursor-pointer transition-all duration-300 group ${
                    isSelected
                      ? 'border-cyan-400 bg-[#0c163b] shadow-[0_0_30px_rgba(0,240,255,0.25)] scale-[1.02]'
                      : 'border-slate-800 hover:border-cyan-500/40 hover:bg-[#080d24]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${
                      isSelected ? 'bg-cyan-500 text-black' : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono-tech font-bold text-cyan-300">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <div className="text-[10px] text-slate-400 font-mono-tech uppercase mb-3">
                    {skill.category}
                  </div>

                  {/* Level Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Skill Deep Dive Card (Right) */}
          <div className="lg:col-span-4 sticky top-24">
            {activeSkill ? (
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-cyan-500/30 shadow-2xl bg-[#080e2a] space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40">
                    {React.createElement(skillIconMap[activeSkill.iconName || 'Zap'] || Sparkles, {
                      className: "w-6 h-6"
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {activeSkill.name}
                    </h3>
                    <div className="text-xs text-cyan-300 font-mono-tech">
                      {activeSkill.category}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono-tech">
                    <span className="text-slate-400">Proficiency & Execution Depth</span>
                    <span className="text-cyan-400 font-bold">{activeSkill.level}% (Expert)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-rose-500"
                      style={{ width: `${activeSkill.level}%` }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050817] border border-slate-800 space-y-2 text-xs text-slate-300 leading-relaxed font-light">
                  <p>
                    Full hands-on commercial experience managing live client accounts, custom tag triggers, campaign debugging, and scalable automation workflows.
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider mb-2">
                    Integrated Growth Services:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeSkill.relatedServiceIds.map((id, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                      >
                        {id.replace('serv-', '').toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                >
                  <span>Inquire for {activeSkill.name}</span>
                </a>
              </div>
            ) : null}
          </div>

        </div>

      </div>
    </section>
  );
};

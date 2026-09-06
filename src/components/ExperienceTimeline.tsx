import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = experienceData.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-blue-500" />
              <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
                CAREER JOURNEY & EDUCATION
              </span>
            </div>
            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
              EXPERIENCE & <span className="text-gradient">MILESTONES.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 glass p-1 sm:p-1.5 rounded-2xl border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-tech uppercase transition-all whitespace-nowrap text-center ${
                filter === 'all'
                  ? 'bg-white text-[#050817] font-bold shadow-lg shadow-white/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Timeline
            </button>
            <button
              onClick={() => setFilter('work')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-tech uppercase transition-all whitespace-nowrap text-center ${
                filter === 'work'
                  ? 'bg-blue-600 text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilter('education')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-xl text-[11px] sm:text-xs font-mono-tech uppercase transition-all whitespace-nowrap text-center ${
                filter === 'education'
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 sm:space-y-12">
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-[13px] sm:left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-rose-500/30" />

          {filteredItems.map((item, idx) => {
            const isWork = item.type === 'work';
            const isCurrent = item.year.includes('Present');

            return (
              <div key={idx} className="relative pl-8 min-[380px]:pl-10 sm:pl-16 group">
                
                {/* Glowing Node Dot centered directly on the vertical timeline */}
                <div
                  className={`absolute left-[13px] sm:left-[23px] -translate-x-1/2 top-5 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                    isCurrent
                      ? 'bg-cyan-400 border-white shadow-[0_0_16px_#00f0ff] scale-110'
                      : 'bg-[#050817] border-cyan-500 group-hover:border-cyan-300 group-hover:bg-cyan-950'
                  }`}
                >
                  <div className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full ${isCurrent ? 'bg-black animate-ping' : 'bg-cyan-400'}`} />
                </div>

                {/* Timeline Card */}
                <div className="w-full max-w-full box-border glass-panel p-4 min-[380px]:p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_35px_-10px_rgba(0,240,255,0.2)] [overflow-wrap:anywhere] break-words">
                  
                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className={`px-2 min-[380px]:px-2.5 py-0.5 rounded-full text-[9px] min-[380px]:text-[10px] font-mono-tech uppercase tracking-wider flex items-center gap-1 ${
                        isWork 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                          : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
                      }`}>
                        {isWork ? <Briefcase className="w-3 h-3 shrink-0" /> : <GraduationCap className="w-3 h-3 shrink-0" />}
                        <span className="whitespace-nowrap">{isWork ? 'Work Experience' : 'Academic Education'}</span>
                      </span>

                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] min-[380px]:text-[10px] font-mono-tech bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse whitespace-nowrap">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] sm:text-xs font-mono-tech text-cyan-400 shrink-0">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>{item.year}</span>
                    </div>
                  </div>

                  {/* Position & Organization */}
                  <h3 className="text-base min-[380px]:text-lg sm:text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors leading-snug break-words">
                    {item.position}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-slate-300 font-mono-tech mt-1 mb-3 sm:mb-4">
                    <span className="font-semibold text-cyan-200">{item.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-3.5 sm:mb-4 break-words">
                    {item.description}
                  </p>

                  {/* Key Achievements Bullet Points */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2 border-t border-slate-800/80 pt-3 sm:pt-4">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="flex-1 break-words [overflow-wrap:anywhere]">{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

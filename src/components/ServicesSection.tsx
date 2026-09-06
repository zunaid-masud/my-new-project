import React from 'react';
import { 
  Target, Search, TrendingUp, ShoppingBag, Layers, 
  Share2, Mail, Users, Compass, Activity, BarChart3, 
  CheckCircle2, Sparkles, ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Search,
  TrendingUp,
  ShoppingBag,
  Layers,
  Share2,
  Mail,
  Users,
  Compass,
  Activity,
  BarChart3
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
              <span className="h-px w-6 sm:w-8 bg-blue-500" />
              <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
                CORE EXPERTISE & SOLUTIONS
              </span>
            </div>
            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
              ENGINEERED <span className="text-gradient">MARKETING SERVICES.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Data-backed acquisition, conversion optimization, and technical growth infrastructure crafted for scale.
          </p>
        </div>

        {/* Services Grid (11 Services) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            const isRed = service.accentColor === 'red';

            return (
              <div
                key={service.id}
                className={`glass-panel p-4 min-[380px]:p-5 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 group relative flex flex-col justify-between [overflow-wrap:anywhere] break-words ${
                  isRed
                    ? 'border-slate-800 hover:border-rose-500/60 hover:shadow-[0_10px_40px_-10px_rgba(255,42,95,0.25)]'
                    : 'border-slate-800 hover:border-cyan-400/60 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)]'
                }`}
              >
                {/* Top Section */}
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`p-3 rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${
                        isRed
                          ? 'bg-rose-500/20 border-rose-500/40 text-rose-400 shadow-[0_0_20px_rgba(255,42,95,0.3)]'
                          : 'bg-cyan-500/20 border-cyan-400/40 text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 px-2.5 py-1 rounded-full bg-[#050817] border border-slate-800">
                      {service.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-cyan-200/70 font-mono-tech mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    <div className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400 mb-1">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isRed ? 'text-rose-400' : 'text-cyan-400'
                          }`}
                        />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact Metric & Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[9px] font-mono-tech text-slate-500 uppercase tracking-wider">
                      Expected Impact
                    </div>
                    <div className={`text-xs sm:text-sm font-bold font-display ${isRed ? 'text-rose-400' : 'text-cyan-300'}`}>
                      {service.impactMetric}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className={`p-2.5 rounded-xl border transition-all ${
                      isRed 
                        ? 'border-rose-500/30 text-rose-300 hover:bg-rose-500/20 hover:border-rose-400' 
                        : 'border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400'
                    }`}
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-8 bg-blue-500" />
            <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
              CLIENT REVIEWS & TRUST
            </span>
            <span className="h-px w-6 sm:w-8 bg-blue-500" />
          </div>
          <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
            WHAT FOUNDERS & <span className="text-gradient">LEADERS SAY.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base font-light">
            Direct feedback from global eCommerce owners, agency partners, and tech executives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-4 min-[380px]:p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Quote Mark */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-cyan-500/15 group-hover:text-cyan-500/30 transition-colors">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {item.verified && (
                    <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] min-[380px]:text-[10px] font-mono-tech bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" />
                      <span>VERIFIED CLIENT</span>
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-base text-slate-200 font-light leading-relaxed mb-4 sm:mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800 flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <img
                    src={item.avatarUrl}
                    alt={item.clientName}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-cyan-400/40 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-base font-bold text-white font-display truncate">
                      {item.clientName}
                    </h4>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono-tech truncate">
                      {item.clientRole} • <span className="text-cyan-300">{item.company}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-mono-tech text-slate-400 uppercase">
                    {item.country}
                  </div>
                  <div className="text-[11px] font-mono-tech text-cyan-400">
                    {item.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { Hero3DObject } from './Hero3DObject';
import { siteConfig } from '../data/siteConfig';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-24 min-[380px]:pt-28 sm:pt-32 pb-16 flex flex-col justify-center overflow-hidden w-full max-w-full box-border"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full relative z-10 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Eyebrow Tag */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 w-full max-w-full overflow-hidden">
              <span className="h-px w-4 min-[380px]:w-6 sm:w-8 bg-blue-500 shrink-0" />
              <span className="text-[9px] min-[360px]:text-[10px] min-[380px]:text-xs font-bold tracking-[0.14em] min-[360px]:tracking-[0.2em] sm:tracking-[0.35em] text-blue-400 uppercase font-mono-tech truncate sm:whitespace-normal">
                DIGITAL MARKETING • SEO • PERFORMANCE
              </span>
              <span className="h-px w-4 min-[380px]:w-6 sm:w-8 bg-blue-500 shrink-0" />
            </div>

            {/* Main Headline with Immersive UI Display Typography */}
            <h1 className="text-[34px] min-[360px]:text-[38px] min-[400px]:text-[44px] sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.94] font-black tracking-tighter italic uppercase font-display text-white break-words w-full">
              DIGITAL<br />
              GROWTH<br />
              <span className="text-gradient">ENGINEERED.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Digital Marketing Specialist helping eCommerce brands & global enterprises scale through technical SEO, high-ROAS Meta & Google advertising, and conversion-rate engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <a
                  href="#work"
                  className="relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm border border-white/10 flex items-center justify-center gap-2.5 text-white hover:bg-[#080d24] transition-all"
                >
                  <span>VIEW CASE STUDIES</span>
                  <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <a
                href="#about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/5 text-white transition-all text-center flex items-center justify-center"
              >
                ABOUT ZUNAID
              </a>
            </div>

            {/* Immersive Metric Highlights */}
            <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <div className="glass p-2.5 min-[380px]:p-3 sm:p-4 rounded-xl text-center sm:text-left">
                <div className="text-[9px] min-[380px]:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Meta Ads</div>
                <div className="text-base min-[380px]:text-xl sm:text-2xl font-black text-white italic mt-0.5">+185%</div>
                <div className="text-[8px] min-[380px]:text-[10px] text-blue-400 font-bold uppercase italic tracking-tight truncate">Conversion ↑</div>
              </div>

              <div className="glass p-2.5 min-[380px]:p-3 sm:p-4 rounded-xl text-center sm:text-left">
                <div className="text-[9px] min-[380px]:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">SEO Traffic</div>
                <div className="text-base min-[380px]:text-xl sm:text-2xl font-black text-white italic mt-0.5">42.5K</div>
                <div className="text-[8px] min-[380px]:text-[10px] text-red-400 font-bold uppercase italic tracking-tight truncate">Monthly Traffic</div>
              </div>

              <div className="glass p-2.5 min-[380px]:p-3 sm:p-4 rounded-xl text-center sm:text-left">
                <div className="text-[9px] min-[380px]:text-[10px] font-bold text-gray-400 uppercase tracking-wider truncate">Lead Cost</div>
                <div className="text-base min-[380px]:text-xl sm:text-2xl font-black text-white italic mt-0.5">-41%</div>
                <div className="text-[8px] min-[380px]:text-[10px] text-emerald-400 font-bold uppercase italic tracking-tight truncate">Cost / Lead ↓</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Holographic Core */}
          <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0 w-full max-w-full overflow-visible">
            <Hero3DObject />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
          >
            <span className="text-[10px] font-mono-tech tracking-widest uppercase text-gray-400">
              SCROLL TO EXPLORE
            </span>
            <div className="w-6 h-10 rounded-full border border-white/20 group-hover:border-blue-400 flex items-start justify-center p-1.5 transition-colors">
              <ArrowDown className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

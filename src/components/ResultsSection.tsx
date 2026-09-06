import React, { useState } from 'react';
import { 
  TrendingUp, Users, Globe2, DollarSign, Award, 
  Zap, BarChart2, Target, CheckCircle2 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ResultsSection: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'all' | 'meta' | 'google' | 'seo'>('all');

  const statsList = [
    { label: "Projects Completed", value: siteConfig.stats.projectsCompleted, detail: "Across US, UK, EU & CA", icon: Award, color: "blue" },
    { label: "Happy Global Clients", value: siteConfig.stats.happyClients, detail: "100% 5-Star Rating", icon: Users, color: "red" },
    { label: "Countries Served", value: siteConfig.stats.countriesServed, detail: "International Markets", icon: Globe2, color: "blue" },
    { label: "Ad Spend Managed", value: siteConfig.stats.adBudgetManaged, detail: "Optimized & Profitable", icon: DollarSign, color: "blue" },
    { label: "Average Tracked ROAS", value: siteConfig.stats.averageROAS, detail: "Blended Return on Spend", icon: TrendingUp, color: "red" },
    { label: "High-Intent Leads", value: siteConfig.stats.leadsGenerated, detail: "Verified B2B & B2C SQLs", icon: Zap, color: "blue" },
  ];

  const channelMetrics = {
    all: {
      spend: "$100,000+",
      revenue: "$380,000+",
      roas: "3.8x Blended",
      conversions: "12,450",
      description: "Aggregated multi-touch performance across search intent, social disruption, and organic topical authority."
    },
    meta: {
      spend: "$45,000+",
      revenue: "$189,000+",
      roas: "4.2x ROAS",
      conversions: "6,200",
      description: "Advantage+ shopping campaigns, dynamic catalog carousels, and high-converting video hook testing."
    },
    google: {
      spend: "$40,000+",
      revenue: "$152,000+",
      roas: "3.8x ROAS",
      conversions: "4,800",
      description: "High-intent Exact Match search clusters, Performance Max, and negative keyword budget protection."
    },
    seo: {
      spend: "$15,000 (Equity)",
      revenue: "$120,000+ (Organic)",
      roas: "8.0x Long-Term",
      conversions: "1,450",
      description: "Core Web Vitals acceleration, topical keyword silos, and high-authority contextual link building."
    }
  };

  const currentMetrics = channelMetrics[activeChannel];

  return (
    <section id="results" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-8 bg-blue-500" />
            <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
              PERFORMANCE METRICS & IMPACT
            </span>
            <span className="h-px w-6 sm:w-8 bg-blue-500" />
          </div>
          <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
            DATA THAT SPEAKS IN <span className="text-gradient">REVENUE & RETURNS.</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base font-light">
            Every campaign is calibrated against strict performance benchmarks, lowering CAC and amplifying bottom-line profitability.
          </p>
        </div>

        {/* 6 Key Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            const isRed = stat.color === 'red';

            return (
              <div
                key={idx}
                className="glass-panel p-3.5 sm:p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group [overflow-wrap:anywhere] break-words"
              >
                <div className={`p-2 sm:p-2.5 rounded-xl w-fit mb-2 sm:mb-3 ${isRed ? 'bg-rose-500/20 text-rose-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-xl min-[380px]:text-2xl sm:text-3xl font-black text-white font-display group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-300 font-display mt-0.5 sm:mt-1 truncate">
                    {stat.label}
                  </div>
                  <div className="text-[9px] min-[380px]:text-[10px] text-slate-500 font-mono-tech mt-0.5 truncate">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Channel Growth Performance Interactive Engine */}
        <div className="glass-panel rounded-2xl sm:rounded-3xl border border-cyan-500/20 p-4 min-[380px]:p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 text-[10px] min-[380px]:text-xs font-mono-tech text-cyan-400 uppercase tracking-wider">
                <BarChart2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Multi-Channel Growth Engine Matrix</span>
              </div>
              <h3 className="text-lg min-[380px]:text-xl sm:text-2xl font-bold text-white font-display">
                Channel Efficiency & Scalability Breakdown
              </h3>
            </div>

            {/* Channel Switchers */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 glass-panel p-1 rounded-xl border border-slate-800 w-full sm:w-auto">
              <button
                onClick={() => setActiveChannel('all')}
                className={`flex-1 sm:flex-initial px-2.5 min-[380px]:px-3.5 py-1.5 rounded-lg text-[10px] min-[380px]:text-xs font-mono-tech uppercase transition-all text-center whitespace-nowrap ${
                  activeChannel === 'all'
                    ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Channels
              </button>
              <button
                onClick={() => setActiveChannel('meta')}
                className={`flex-1 sm:flex-initial px-2.5 min-[380px]:px-3.5 py-1.5 rounded-lg text-[10px] min-[380px]:text-xs font-mono-tech uppercase transition-all text-center whitespace-nowrap ${
                  activeChannel === 'meta'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Meta Ads
              </button>
              <button
                onClick={() => setActiveChannel('google')}
                className={`flex-1 sm:flex-initial px-2.5 min-[380px]:px-3.5 py-1.5 rounded-lg text-[10px] min-[380px]:text-xs font-mono-tech uppercase transition-all text-center whitespace-nowrap ${
                  activeChannel === 'google'
                    ? 'bg-rose-500 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Google Ads
              </button>
              <button
                onClick={() => setActiveChannel('seo')}
                className={`flex-1 sm:flex-initial px-2.5 min-[380px]:px-3.5 py-1.5 rounded-lg text-[10px] min-[380px]:text-xs font-mono-tech uppercase transition-all text-center whitespace-nowrap ${
                  activeChannel === 'seo'
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Organic SEO
              </button>
            </div>
          </div>

          {/* Matrix Body */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-5 sm:pt-6">
            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <div className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider truncate">
                Total Budget
              </div>
              <div className="text-lg min-[380px]:text-xl sm:text-2xl font-bold text-white font-display mt-1">
                {currentMetrics.spend}
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <div className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider truncate">
                Tracked Revenue
              </div>
              <div className="text-lg min-[380px]:text-xl sm:text-2xl font-bold text-emerald-400 font-display mt-1">
                {currentMetrics.revenue}
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <div className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider truncate">
                Target Return
              </div>
              <div className="text-lg min-[380px]:text-xl sm:text-2xl font-bold text-cyan-300 font-display mt-1">
                {currentMetrics.roas}
              </div>
            </div>

            <div className="glass-panel p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <div className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider truncate">
                Conversions
              </div>
              <div className="text-lg min-[380px]:text-xl sm:text-2xl font-bold text-rose-400 font-display mt-1">
                {currentMetrics.conversions}
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#050817] border border-slate-800 text-xs sm:text-sm text-slate-300 font-light flex items-start sm:items-center gap-2.5 sm:gap-3">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">{currentMetrics.description}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

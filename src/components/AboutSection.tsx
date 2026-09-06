import React from 'react';
import { 
  Target, TrendingUp, BarChart3, Zap, Shield, Award, 
  MapPin, Mail, Phone, ExternalLink, CheckCircle2, Palette, Sparkles 
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BRAND_ASSETS } from './BrandLogo';

interface AboutSectionProps {
  onOpenBrandModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBrandModal }) => {
  const capabilityCards = [
    { title: "Technical SEO", desc: "Topical authority, structured schema, crawl budget & Core Web Vitals.", icon: TrendingUp, color: "blue" },
    { title: "High-ROI Paid Ads", desc: "Full-funnel Meta & Google search/PMax campaigns engineered for ROAS.", icon: Target, color: "red" },
    { title: "Tracking & Analytics", desc: "Server-side GA4, GTM dataLayer & cookieless CAPI attribution.", icon: BarChart3, color: "blue" },
    { title: "E-Commerce CRO", desc: "Frictionless Shopify & WooCommerce checkout velocity & AOV expansion.", icon: Zap, color: "blue" },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
            <span className="h-px w-6 sm:w-8 bg-blue-500" />
            <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
              ABOUT MD ZUNAID MASUD
            </span>
          </div>
          <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">
            TURNING ATTENTION INTO <span className="text-gradient">SCALABLE GROWTH.</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Futuristic Visual Card Frame with Light Sweep & Tilt */}
          <div className="lg:col-span-5 relative group max-w-md mx-auto lg:max-w-none w-full">
            
            {/* Outer Cyber Glow Frame */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-500/40 via-blue-600/20 to-red-500/30 shadow-[0_0_50px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-all overflow-visible max-w-full">
              
              <div className="relative rounded-[22px] overflow-hidden bg-[#070b1e] light-sweep-container aspect-[4/5] w-full max-w-full">
                <img
                  src="https://cdn.phototourl.com/free/2026-09-06-2c7212b9-7c48-4612-a832-021f6d188bae.jpg"
                  alt="MD Zunaid Masud"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/user_photo.jpg') {
                      target.src = '/user_photo.jpg';
                    }
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 max-w-full block"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-[#050817]/25 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-radial-gradient opacity-50" />

                {/* Cyber Corner Marks */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-400 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-500 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500 pointer-events-none" />

                {/* Info Overlay at Bottom */}
                <div className="absolute bottom-4 min-[380px]:bottom-6 left-4 min-[380px]:left-6 right-4 min-[380px]:right-6 space-y-1 z-10">
                  <div className="flex items-center gap-1.5 min-[380px]:gap-2">
                    <span className="w-1.5 h-1.5 min-[380px]:w-2 min-[380px]:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <span className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-emerald-300 uppercase tracking-wider truncate">
                      AVAILABLE FOR HIGH-GROWTH PROJECTS
                    </span>
                  </div>
                  <h3 className="text-lg min-[380px]:text-xl font-bold text-white font-display">
                    {siteConfig.legalName}
                  </h3>
                  <p className="text-[11px] min-[380px]:text-xs text-blue-300 font-mono-tech truncate">
                    {siteConfig.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Metric Pin (Top-Left) */}
            <div className="absolute -top-4 -left-4 glass px-3.5 py-2 rounded-xl border border-blue-400/40 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 animate-float-slow">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono-tech text-white font-bold">50+ PROJECTS DELIVERED</span>
            </div>

            {/* Floating Location Pin (Bottom-Right) */}
            <div className="absolute -bottom-4 -right-4 glass px-3.5 py-2 rounded-xl border border-red-500/40 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="text-xs font-mono-tech text-white">{siteConfig.location}</span>
            </div>
          </div>

          {/* Right: Bio & Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Bio Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              {siteConfig.bioParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Official Brand Identity Mini-Card */}
            {onOpenBrandModal && (
              <div 
                onClick={onOpenBrandModal}
                className="glass p-3.5 sm:p-4 rounded-2xl border border-blue-500/30 hover:border-blue-400 cursor-pointer group transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-gradient-to-r from-blue-900/10 via-[#050816] to-[#080D24]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 rounded-xl overflow-hidden border border-blue-500/40 bg-[#050816] flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">
                    <img src={BRAND_ASSETS.iconMonogram3D} alt="Brand Monogram" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-white uppercase font-display tracking-wider truncate">
                        Official Brand Identity (3D MD Logo)
                      </span>
                      <span className="text-[9px] font-mono-tech px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
                        Luxury Spec
                      </span>
                    </div>
                    <p className="text-[10px] min-[380px]:text-[11px] text-gray-400 font-light truncate">
                      Electric Blue Metallic • Red Accent • 8K Suite & Vectors
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-blue-400 group-hover:text-white uppercase font-bold flex-shrink-0 self-end sm:self-center">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Inspect Suite →</span>
                </div>
              </div>
            )}

            {/* Capability Mini-Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {capabilityCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="glass p-3.5 sm:p-4 rounded-xl border border-white/10 hover:border-blue-400/40 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                      <div className={`p-1.5 sm:p-2 rounded-lg shrink-0 ${card.color === 'red' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Quick Contact Details */}
            <div className="p-3.5 sm:p-4 rounded-2xl glass border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-mono-tech text-gray-400 uppercase">Direct Email</div>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm font-mono-tech text-white hover:text-blue-300 transition-colors truncate block">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-mono-tech text-gray-400 uppercase">Direct WhatsApp / Phone</div>
                  <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm font-mono-tech text-white hover:text-red-300 transition-colors truncate block">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-white text-[#050817] font-bold text-xs font-mono-tech uppercase tracking-wider transition-all hover:scale-105"
              >
                Hire Zunaid →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

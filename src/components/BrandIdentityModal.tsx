import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, Layers, Eye, ShieldCheck, Palette, FileCode, Monitor, Smartphone, CreditCard } from 'lucide-react';
import { BRAND_ASSETS, VectorMonogram, BrandLogo } from './BrandLogo';

interface BrandIdentityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandIdentityModal: React.FC<BrandIdentityModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'assets' | 'mockups' | 'tokens'>('overview');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [copiedSvg, setCopiedSvg] = useState(false);

  if (!isOpen) return null;

  const colorTokens = [
    { name: 'Electric Blue', hex: '#2563EB', role: 'Primary Brand (80-85%)', desc: 'Conveys technical precision, digital growth, authority, and scale.' },
    { name: 'Crimson Red', hex: '#FF3B5C', role: 'Accent Touch (5-10%)', desc: 'Subtle high-impact micro accent for conversion momentum and high performance.' },
    { name: 'Deep Navy', hex: '#050816', role: 'Atmospheric Canvas', desc: 'Luxury dark background with deep optical contrast and anti-glare readability.' },
    { name: 'Cyber Slate', hex: '#080D24', role: 'Glass Surface', desc: 'Translucent frosted glass container baseline for cards and navigation HUDs.' },
    { name: 'Pure White', hex: '#FFFFFF', role: 'Primary Typography', desc: 'Ultra-crisp typography with high contrast ratio exceeding WCAG AAA standards.' },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const rawSvgCode = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mzm-blue-primary" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#60A5FA" />
      <stop offset="45%" stopColor="#2563EB" />
      <stop offset="100%" stopColor="#1D4ED8" />
    </linearGradient>
    <linearGradient id="mzm-crimson-accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FF6584" />
      <stop offset="50%" stopColor="#FF3B5C" />
      <stop offset="100%" stopColor="#DC2626" />
    </linearGradient>
    <linearGradient id="mzm-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0E1638" />
      <stop offset="100%" stopColor="#050816" />
    </linearGradient>
  </defs>
  <rect x="6" y="6" width="108" height="108" rx="24" fill="url(#mzm-bg-dark)" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="1.5"/>
  <g transform="translate(18, 22)">
    <path d="M6 68 V14 L24 38 V68 H6Z" fill="url(#mzm-blue-primary)" />
    <path d="M24 38 L42 14 L60 38 L78 14 V68 H62 V38 L42 66 L24 38Z" fill="url(#mzm-blue-primary)" />
    <path d="M24 68 L48 40 H78 V54 L56 68 H24Z" fill="url(#mzm-blue-primary)" opacity="0.95" />
    <path d="M60 14 L78 14 L68 28 L50 28 L60 14Z" fill="url(#mzm-crimson-accent)" />
  </g>
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(rawSvgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2500);
  };

  const handleDownloadAsset = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
      <div className="relative w-full max-w-5xl bg-[#050816] border border-blue-500/30 rounded-3xl shadow-[0_0_60px_rgba(37,99,235,0.3)] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl overflow-visible border border-blue-500/40 bg-[#050816] shadow-lg shadow-blue-500/20 flex items-center justify-center p-1">
              <img src={BRAND_ASSETS.iconMonogram3D} alt="MD Zunaid Masud Icon" referrerPolicy="no-referrer" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-tight">
                  BRAND IDENTITY & LOGO SUITE
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-mono-tech uppercase font-bold">
                  v2.0 Luxury Edition
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono-tech uppercase tracking-wider">
                MD ZUNAID MASUD • PERFORMANCE & GROWTH SPECIALIST
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl glass border border-white/15 text-gray-400 hover:text-white hover:border-white/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 sm:px-8 pt-4 border-b border-white/10 bg-[#080D24]/40 relative z-10 overflow-x-auto">
          {[
            { id: 'overview', label: 'Brand Overview', icon: Sparkles },
            { id: 'assets', label: 'Logo & Icon Assets', icon: Layers },
            { id: 'mockups', label: 'Real-World Mockups', icon: Monitor },
            { id: 'tokens', label: 'Design Tokens & Code', icon: Palette },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-blue-400 text-white font-bold bg-blue-500/10'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto relative z-10 space-y-8">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Presentation Card */}
              <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="max-w-xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-mono-tech uppercase tracking-widest font-bold">
                    <span>PREMIUM 3D MD LOGO SUITE</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-display uppercase italic tracking-tight">
                    ENGINEERED FOR <span className="text-gradient">GLOBAL SCALE.</span>
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Designed for <strong>MD ZUNAID MASUD</strong>. Crafted with beveled titanium edges, high-gloss electric blue surfaces, and a precise crimson red wedge accent at the apex. Engineered for high ROAS, digital growth authority, and executive agency craftsmanship.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleDownloadAsset(BRAND_ASSETS.fullLogo3D, 'MD-Zunaid-Masud-Brand-Logo.jpg')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono-tech uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Full Logo (8K)</span>
                    </button>
                    <button
                      onClick={() => handleDownloadAsset(BRAND_ASSETS.iconMonogram3D, 'MD-Zunaid-Masud-Icon-Monogram.jpg')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/20 hover:border-white/40 text-white font-bold text-xs font-mono-tech uppercase tracking-wider transition-all"
                    >
                      <Download className="w-3.5 h-3.5 text-blue-400" />
                      <span>Download Monogram Icon</span>
                    </button>
                  </div>
                </div>

                {/* 3D Visual Box */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-blue-500/40 shadow-[0_0_50px_rgba(37,99,235,0.4)] relative group bg-[#050816] flex-shrink-0">
                  <img
                    src={BRAND_ASSETS.fullLogo3D}
                    alt="MD Zunaid Masud 3D Logo Presentation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono-tech text-gray-300">
                    <span>3D PRECISION RENDER</span>
                    <span className="text-blue-400 font-bold">8K RESOLUTION</span>
                  </div>
                </div>
              </div>

              {/* Core Brand Pillars Grid */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="glass p-5 rounded-2xl border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 font-black text-xs font-mono-tech">
                    01
                  </div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">M + Z Interlocking Monogram</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Custom origami geometric vectors that fuse 'M' and 'Z' seamlessly into an upward-trending performance chevron.
                  </p>
                </div>

                <div className="glass p-5 rounded-2xl border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 font-black text-xs font-mono-tech">
                    02
                  </div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">Electric Blue & 5% Crimson</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Primary #2563EB with subtle #FF3B5C micro-highlights representing analytical clarity and explosive conversion velocity.
                  </p>
                </div>

                <div className="glass p-5 rounded-2xl border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-black text-xs font-mono-tech">
                    03
                  </div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">Global Agency Prestige</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    Calibrated against tier-one design systems like Stripe, Linear, Arc, and Vercel for high enterprise client conversion.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ASSETS (FULL & ICON) */}
          {activeTab === 'assets' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* 1. Full Brand Lockup Asset */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-tech text-blue-400 font-bold uppercase tracking-wider">
                        ASSET 01: FULL BRAND IDENTITY
                      </span>
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        1:1 HQ Lockup
                      </span>
                    </div>

                    <div className="w-full aspect-square rounded-2xl overflow-hidden border border-blue-500/30 bg-[#050816] shadow-xl relative group flex items-center justify-center p-4">
                      <img
                        src={BRAND_ASSETS.fullLogo3D}
                        alt="MD Zunaid Masud Full Logo"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-gray-400 font-mono-tech">
                      Used for: Website Hero, Presentations, Invoices, Case Study Covers & Investor Decks.
                    </div>
                    <button
                      onClick={() => handleDownloadAsset(BRAND_ASSETS.fullLogo3D, 'MD-Zunaid-Masud-Full-Logo.jpg')}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Full Logo File</span>
                    </button>
                  </div>
                </div>

                {/* 2. Standalone Monogram Mark */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono-tech text-red-400 font-bold uppercase tracking-wider">
                        ASSET 02: STANDALONE MONOGRAM (M+Z)
                      </span>
                      <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        App Mark / Favicon
                      </span>
                    </div>

                    <div className="w-full aspect-square rounded-2xl overflow-hidden border border-red-500/30 bg-[#050816] shadow-xl relative group flex items-center justify-center p-4">
                      <img
                        src={BRAND_ASSETS.iconMonogram3D}
                        alt="MD Zunaid Masud Monogram Icon"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-gray-400 font-mono-tech">
                      Used for: Favicons, Social Media Avatars (LinkedIn, Meta, X), App Icons, & Browser Badges.
                    </div>
                    <button
                      onClick={() => handleDownloadAsset(BRAND_ASSETS.iconMonogram3D, 'MD-Zunaid-Masud-Monogram-Icon.jpg')}
                      className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Monogram Icon</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: REAL WORLD MOCKUPS */}
          {activeTab === 'mockups' && (
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Mockup 1: Luxury Dark Business Card */}
                <div className="glass p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400 uppercase">
                    <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                    <span>Executive Agency Card</span>
                  </div>
                  <div className="aspect-[1.75/1] rounded-xl bg-gradient-to-br from-[#0B132B] via-[#050816] to-[#02040A] p-5 border border-white/15 shadow-2xl relative flex flex-col justify-between overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500/40">
                        <img src={BRAND_ASSETS.iconMonogram3D} alt="Icon" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-[8px] font-mono-tech text-blue-400 tracking-widest uppercase">
                        GROWTH ARCHITECT
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-black text-sm text-white tracking-wider uppercase">
                        MD ZUNAID MASUD
                      </div>
                      <div className="text-[8px] text-gray-400 font-mono-tech">
                        masudzunaid5@gmail.com • +8801771161787
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                  </div>
                </div>

                {/* Mockup 2: Social Media Avatar Badges */}
                <div className="glass p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400 uppercase">
                    <Smartphone className="w-3.5 h-3.5 text-red-400" />
                    <span>Social Media Profile Avatar</span>
                  </div>
                  <div className="aspect-[1.75/1] rounded-xl bg-[#080D24] p-4 border border-white/10 flex items-center justify-around">
                    {/* Circle Avatar */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 p-0.5 bg-[#050816] shadow-lg shadow-blue-500/30">
                        <img src={BRAND_ASSETS.iconMonogram3D} alt="Social Circle" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <span className="text-[9px] font-mono-tech text-gray-400">Circular</span>
                    </div>

                    {/* Squircle Avatar */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-red-500/80 p-0.5 bg-[#050816] shadow-lg shadow-red-500/30">
                        <img src={BRAND_ASSETS.iconMonogram3D} alt="Social Squircle" referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-xl" />
                      </div>
                      <span className="text-[9px] font-mono-tech text-gray-400">Squircle</span>
                    </div>
                  </div>
                </div>

                {/* Mockup 3: Browser Favicon & Tab Bar */}
                <div className="glass p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400 uppercase">
                    <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Browser Tab & Favicon</span>
                  </div>
                  <div className="aspect-[1.75/1] rounded-xl bg-[#040612] p-3 border border-white/10 flex flex-col justify-center gap-2.5">
                    {/* Browser Chrome Bar */}
                    <div className="flex items-center gap-2 bg-[#0C122C] px-3 py-2 rounded-lg border border-white/10 shadow-inner">
                      <div className="w-4 h-4 rounded overflow-hidden flex-shrink-0">
                        <img src={BRAND_ASSETS.iconMonogram3D} alt="Favicon" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] text-gray-300 font-mono-tech truncate font-semibold">
                        MD Zunaid Masud | Digital Growth
                      </span>
                      <span className="text-[9px] text-gray-500 ml-auto">✕</span>
                    </div>

                    <div className="flex items-center justify-between px-2 text-[9px] font-mono-tech text-gray-400">
                      <span>Multi-Resolution: 16px • 32px • 64px • 512px</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: DESIGN TOKENS & SVG CODE */}
          {activeTab === 'tokens' && (
            <div className="space-y-8">
              
              {/* Color Tokens Matrix */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase font-mono-tech tracking-wider mb-4 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-blue-400" />
                  <span>Color Architecture Tokens</span>
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {colorTokens.map((token) => (
                    <div
                      key={token.hex}
                      className="glass p-4 rounded-2xl border border-white/10 flex items-start gap-3.5 hover:border-blue-400/40 transition-colors"
                    >
                      <div
                        className="w-12 h-12 rounded-xl shadow-lg border border-white/20 flex-shrink-0"
                        style={{ backgroundColor: token.hex }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-xs truncate">{token.name}</span>
                          <button
                            onClick={() => handleCopy(token.hex, token.name)}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                            title="Copy HEX"
                          >
                            {copiedToken === token.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <div className="font-mono-tech text-blue-400 text-xs font-bold">{token.hex}</div>
                        <div className="text-[10px] text-gray-400 mt-1 leading-tight">{token.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Raw SVG Code Exporter */}
              <div className="glass p-6 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-red-400" />
                    <span className="text-xs font-mono-tech text-white font-bold uppercase tracking-wider">
                      Scalable Vector SVG Source (Production-Ready)
                    </span>
                  </div>
                  <button
                    onClick={handleCopySvg}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono-tech text-xs uppercase font-bold transition-all"
                  >
                    {copiedSvg ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg ? 'Copied to Clipboard!' : 'Copy Raw SVG'}</span>
                  </button>
                </div>

                <div className="bg-[#02040A] p-4 rounded-xl border border-white/10 font-mono-tech text-[11px] text-blue-300 overflow-x-auto max-h-48 scrollbar-thin">
                  <pre>{rawSvgCode}</pre>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between p-6 border-t border-white/10 bg-[#080D24]/60 relative z-10 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Trademark Standard: Fully Unique Geometric Monogram (No generic templates)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl glass border border-white/15 text-gray-300 hover:text-white text-xs font-mono-tech uppercase font-bold transition-all"
            >
              Close
            </button>
            <button
              onClick={() => handleDownloadAsset(BRAND_ASSETS.fullLogo3D, 'MD-Zunaid-Masud-Brand-Suite.jpg')}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono-tech uppercase font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Brand Package</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

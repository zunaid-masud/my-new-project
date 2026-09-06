import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { WhatsAppIcon } from './WhatsAppButton';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const cleanPhone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(whatsappUrl);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#25D366]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center space-x-2.5 sm:space-x-3 mb-2">
            <span className="h-px w-6 sm:w-8 bg-cyan-500" />
            <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] sm:tracking-[0.35em] text-cyan-400 uppercase font-mono-tech">
              GET IN TOUCH • DIRECT CONTACT
            </span>
            <span className="h-px w-6 sm:w-8 bg-cyan-500" />
          </div>
          
          <h2 className="text-3xl min-[380px]:text-4xl sm:text-5xl font-black text-white font-display uppercase italic tracking-tight">
            CONTACT <span className="text-gradient">ME</span>
          </h2>
          
          <p className="text-gray-400 text-xs sm:text-base font-light max-w-lg mx-auto leading-relaxed">
            Ready to scale your brand, audit your ad campaigns, or engineer a high-ROAS marketing system? Reach out to me directly.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          
          {/* 1. Email Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-500/30 bg-[#070b1e]/90 hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.08)] group flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header Icon & Status */}
              <div className="flex items-center justify-between">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500 group-hover:text-black transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] sm:text-xs font-mono-tech text-cyan-300 font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Primary Inbox
                </span>
              </div>

              {/* Title & Email Display */}
              <div>
                <div className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Email
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white font-mono-tech hover:text-cyan-300 transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Send your project brief, questions, or growth inquiries directly to my inbox. Typical response within 12 hours.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-black font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="py-3 px-4 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 2. WhatsApp Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#25D366]/30 bg-[#070b1e]/90 hover:border-[#25D366]/60 transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.08)] group flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header Icon & Status */}
              <div className="flex items-center justify-between">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[10px] sm:text-xs font-mono-tech text-[#25D366] font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                  Instant Chat
                </span>
              </div>

              {/* Title & WhatsApp Display */}
              <div>
                <div className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  WhatsApp
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg md:text-xl font-bold text-white font-mono-tech hover:text-[#25D366] transition-colors break-all"
                >
                  {whatsappUrl}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                Connect on WhatsApp for real-time discussions, quick consulting questions, or immediate project onboarding.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)]"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyWhatsApp}
                className="py-3 px-4 rounded-xl glass-panel border border-slate-700 hover:border-[#25D366]/50 text-slate-300 hover:text-white font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                title="Copy WhatsApp Link"
              >
                {copiedWhatsApp ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="text-[#25D366]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};



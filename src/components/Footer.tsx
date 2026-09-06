import React from 'react';
import { ArrowUp, Heart, Globe, Linkedin, Facebook, Github, ExternalLink, Palette, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenBrandModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030612] border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" variant="lockup-horizontal" onClick={onOpenBrandModal} />
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Engineering high-return digital growth pipelines, technical SEO architectures, and full-funnel paid media campaigns for international brands.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="text-xs text-gray-500 font-mono-tech">
                Operating globally from {siteConfig.location}
              </div>

              {onOpenBrandModal && (
                <button
                  onClick={onOpenBrandModal}
                  className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Palette className="w-3 h-3" />
                  <span>Inspect Brand Suite & Logo Assets</span>
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono-tech">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Zunaid</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing Services</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Case Studies & Work</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Performance Metrics</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Career Timeline</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Client Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact / Hire</a></li>
            </ul>
          </div>

          {/* Social Profiles & Platforms */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono-tech">
              Verified Profiles & Marketplaces
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {siteConfig.socialLinks.linkedin && (
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl glass border border-white/10 hover:border-blue-400 text-xs font-mono-tech text-gray-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              )}

              {siteConfig.socialLinks.facebook && (
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl glass border border-white/10 hover:border-blue-400 text-xs font-mono-tech text-gray-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-500" />
                  <span>Facebook</span>
                </a>
              )}

              {siteConfig.socialLinks.github && (
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl glass border border-white/10 hover:border-blue-400 text-xs font-mono-tech text-gray-300 hover:text-white flex items-center gap-1.5 transition-all"
                >
                  <Github className="w-3.5 h-3.5 text-gray-300" />
                  <span>GitHub</span>
                </a>
              )}

              {siteConfig.socialLinks.fiverr && (
                <a
                  href={siteConfig.socialLinks.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl glass border border-white/10 hover:border-emerald-400 text-xs font-mono-tech text-gray-300 hover:text-emerald-300 flex items-center gap-1.5 transition-all"
                >
                  <span className="font-bold text-emerald-400">fi</span>
                  <span>Fiverr Pro</span>
                </a>
              )}

              {siteConfig.socialLinks.upwork && (
                <a
                  href={siteConfig.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl glass border border-white/10 hover:border-emerald-400 text-xs font-mono-tech text-gray-300 hover:text-emerald-300 flex items-center gap-1.5 transition-all"
                >
                  <span className="font-bold text-emerald-400">up</span>
                  <span>Upwork</span>
                </a>
              )}
            </div>

            <div className="pt-2 text-[11px] text-gray-400 font-mono-tech">
              Direct Contact: <a href={`mailto:${siteConfig.email}`} className="text-blue-400 hover:underline">{siteConfig.email}</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-blue-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

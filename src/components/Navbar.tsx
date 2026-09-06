import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenProjectStudio?: () => void;
  onOpenBrandModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Results', href: '#results' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full box-border transition-all duration-300 ${
        scrolled
          ? 'py-2 min-[360px]:py-2.5 sm:py-3 bg-[#050817]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
          : 'py-2.5 min-[360px]:py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 min-[360px]:px-3.5 sm:px-6 lg:px-8 box-border flex items-center justify-between gap-2 sm:gap-4 min-w-0">
        {/* Luxury Brand Monogram Lockup - Flex 1 & min-w-0 for clean responsive shrinking */}
        <div className="flex-1 min-w-0 flex items-center">
          <a href="#home" className="focus:outline-none min-w-0 max-w-full inline-block" aria-label="MD Zunaid Masud Home">
            <BrandLogo size="md" variant="lockup-horizontal" />
          </a>
        </div>

        {/* Desktop Navigation Links - Standalone navbar text without container/pill */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-3 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-gray-400 hover:text-white hover:text-cyan-400 uppercase tracking-widest transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5 min-[360px]:gap-2 sm:gap-3 shrink-0">
          {/* Let's Talk CTA Button */}
          <a
            href="#contact"
            id="header-cta-button"
            className="bg-white text-[#050817] px-2.5 min-[360px]:px-3.5 sm:px-6 py-1.5 min-[360px]:py-2 sm:py-2.5 rounded-full text-[10px] min-[360px]:text-xs sm:text-sm font-bold flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-white/20 tracking-wider uppercase whitespace-nowrap shrink-0"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3 h-3 min-[360px]:w-3.5 min-[360px]:h-3.5 sm:w-4 sm:h-4 text-[#050817] shrink-0" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 min-[360px]:p-2 rounded-xl glass border border-white/10 text-gray-300 hover:text-white shrink-0 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 min-[360px]:w-5 min-[360px]:h-5" /> : <Menu className="w-4 h-4 min-[360px]:w-5 min-[360px]:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass bg-[#050817]/95 border-b border-white/10 px-4 sm:px-6 py-5 mt-2 space-y-4 shadow-2xl backdrop-blur-2xl max-w-full">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl glass text-xs font-mono-tech text-gray-300 hover:text-white uppercase tracking-wider text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white text-[#050817] py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 text-[#050817]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

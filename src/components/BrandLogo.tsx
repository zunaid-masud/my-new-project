import React from 'react';

// Generated high-res luxury 3D brand assets
export const BRAND_ASSETS = {
  fullLogo3D: 'https://cdn.phototourl.com/free/2026-08-28-41d2b589-de6d-4a79-a187-8c7e783a9629.png?v=2',
  iconMonogram3D: 'https://cdn.phototourl.com/free/2026-08-28-41d2b589-de6d-4a79-a187-8c7e783a9629.png?v=2',
  brandName: 'MD ZUNAID MASUD',
  tagline: 'DIGITAL MARKETING & PERFORMANCE GROWTH',
  colors: {
    primaryElectricBlue: '#2563EB',
    secondaryCrimsonRed: '#FF3B5C',
    deepNavy: '#050816',
    slateDark: '#080D24',
    pureWhite: '#FFFFFF',
  }
};

interface BrandLogoProps {
  variant?: 'full' | 'icon' | 'lockup-horizontal' | 'vector-icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  use3DRender?: boolean;
  onClick?: () => void;
}

/**
 * Pure scalable Vector SVG monogram combining geometric 3D M + D
 * Interlocking architectural geometry with electric blue titanium & subtle crimson accent
 */
export const VectorMonogram: React.FC<{ size?: number; className?: string }> = ({ size = 42, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${className}`}
    >
      <defs>
        {/* Electric Blue Primary Gradient */}
        <linearGradient id="mzm-blue-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="45%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Electric Blue Secondary / Facet Gradient */}
        <linearGradient id="mzm-blue-highlight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="60%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>

        {/* Crimson Red Subtle Accent */}
        <linearGradient id="mzm-crimson-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6584" />
          <stop offset="50%" stopColor="#FF3B5C" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>

        {/* Ambient Dark Navy Surface */}
        <linearGradient id="mzm-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E1638" />
          <stop offset="100%" stopColor="#050816" />
        </linearGradient>

        {/* Specular Glow Filter */}
        <filter id="mzm-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background Container Tile */}
      <rect
        x="4"
        y="4"
        width="112"
        height="112"
        rx="26"
        fill="url(#mzm-bg-dark)"
        stroke="rgba(255, 255, 255, 0.12)"
        strokeWidth="1.5"
      />
      <rect
        x="4"
        y="4"
        width="112"
        height="112"
        rx="26"
        fill="none"
        stroke="rgba(37, 99, 235, 0.35)"
        strokeWidth="1"
      />

      {/* Internal Ambient Radial Shimmer */}
      <circle cx="60" cy="60" r="38" fill="#2563EB" opacity="0.15" filter="url(#mzm-glow)" />

      {/* Modern Geometric 3D MD Monogram */}
      <g transform="translate(18, 20)">
        {/* Left M Pillar */}
        <path
          d="M6 72 V16 L25 42 L44 16 V72 H30 V38 L25 46 L20 38 V72 H6Z"
          fill="url(#mzm-blue-primary)"
        />

        {/* Right D Block */}
        <path
          d="M48 16 H68 C78 16 84 24 84 44 C84 64 78 72 68 72 H48 V16ZM62 58 C68 58 70 52 70 44 C70 36 68 30 62 30 H60 V58 H62Z"
          fill="url(#mzm-blue-highlight)"
        />

        {/* Top Crimson Red Wedge Accent */}
        <path
          d="M40 16 L52 16 L46 26 L34 26 L40 16Z"
          fill="url(#mzm-crimson-accent)"
        />

        {/* Specular Edge Line */}
        <path
          d="M6 16 L25 42 L44 16 M48 16 H68"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'lockup-horizontal',
  size = 'md',
  showTagline = true,
  className = '',
  use3DRender = true,
  onClick,
}) => {
  const sizeMap = {
    sm: { iconSize: 34, iconBox: 'w-8 h-8 sm:w-9 sm:h-9', title: 'text-xs', sub: 'text-[8.5px] sm:text-[9px]' },
    md: { 
      iconSize: 42, 
      iconBox: 'w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 sm:w-12 sm:h-12', 
      title: 'text-[13px] min-[360px]:text-[14px] sm:text-[15px]', 
      sub: 'text-[8.5px] min-[360px]:text-[9px] sm:text-[10px] min-[1280px]:text-[10.5px]' 
    },
    lg: { iconSize: 58, iconBox: 'w-12 h-12 sm:w-16 sm:h-16', title: 'text-base sm:text-xl', sub: 'text-[10px] sm:text-xs' },
    xl: { iconSize: 88, iconBox: 'w-16 h-16 sm:w-24 sm:h-24', title: 'text-xl sm:text-3xl', sub: 'text-xs sm:text-sm' },
  };

  const currentSize = sizeMap[size];

  // 1. Standalone Icon Only
  if (variant === 'icon' || variant === 'vector-icon') {
    return (
      <div
        onClick={onClick}
        className={`relative inline-flex items-center justify-center cursor-pointer group select-none ${className}`}
      >
        {use3DRender ? (
          <div className={`${currentSize.iconBox} relative rounded-2xl overflow-visible border border-blue-500/35 shadow-[0_0_22px_rgba(37,99,235,0.28)] group-hover:border-blue-400 group-hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center p-1`}>
            <img
              src={BRAND_ASSETS.iconMonogram3D}
              alt="MD Zunaid Masud 3D Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <VectorMonogram size={currentSize.iconSize} className="group-hover:scale-105 transition-transform" />
        )}
      </div>
    );
  }

  // 2. Full Centered Lockup (Emblem + Typography below)
  if (variant === 'full') {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center text-center group cursor-pointer select-none ${className}`}
      >
        <div className="relative mb-3">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-visible border border-blue-500/40 shadow-[0_0_35px_rgba(37,99,235,0.35)] group-hover:border-blue-400 group-hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center p-1.5">
            <img
              src={BRAND_ASSETS.iconMonogram3D}
              alt="MD Zunaid Masud 3D Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl tracking-wider text-white uppercase group-hover:text-blue-300 transition-colors whitespace-nowrap">
            MD ZUNAID MASUD
          </h2>
          {showTagline && (
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-4 bg-blue-500/60" />
              <p className="text-[10px] sm:text-xs font-mono-tech tracking-[0.22em] text-blue-400 font-bold uppercase whitespace-nowrap">
                DIGITAL MARKETING & SEO
              </p>
              <span className="h-px w-4 bg-blue-500/60" />
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. Badge variant
  if (variant === 'badge') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl glass border border-white/15 hover:border-blue-400/50 transition-all cursor-pointer group select-none ${className}`}
      >
        <div className="w-7 h-7 rounded-lg overflow-visible border border-blue-500/40 bg-[#050816] flex-shrink-0 flex items-center justify-center p-0.5">
          <img
            src={BRAND_ASSETS.iconMonogram3D}
            alt="MZM Icon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider text-white whitespace-nowrap">
          <span className="font-bold">MD ZUNAID MASUD</span>
          <span className="text-gray-400">• DIGITAL MARKETING</span>
        </div>
      </div>
    );
  }

  // 4. Default: Horizontal Header Lockup (Clean 3D Icon + Neatly Aligned Single-Line Typography)
  return (
    <div
      onClick={onClick}
      className={`group flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-3.5 cursor-pointer select-none min-w-0 w-full max-w-full ${className}`}
    >
      {/* 3D Blue Logo Icon - Prominent, crisp, adaptive */}
      <div className="relative flex-shrink-0">
        <div className={`${currentSize.iconBox} rounded-xl sm:rounded-2xl overflow-visible border border-blue-500/35 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center p-1 sm:p-1.5`}>
          <img
            src={BRAND_ASSETS.iconMonogram3D}
            alt="MD Zunaid Masud 3D Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Typography Hierarchy - Perfectly Aligned, No Overlapping or Horizontal Overflow */}
      <div className="flex flex-col justify-center min-w-0 flex-1 overflow-hidden">
        <div className="flex items-center min-w-0">
          <span className={`font-display font-extrabold tracking-wide sm:tracking-wider text-white uppercase group-hover:text-blue-300 transition-colors whitespace-nowrap truncate leading-tight ${currentSize.title}`}>
            MD ZUNAID MASUD
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center mt-0.5 min-w-0">
            <span className={`font-mono-tech font-bold uppercase tracking-[0.8px] min-[360px]:tracking-[1.2px] sm:tracking-[0.16em] text-blue-400/90 whitespace-nowrap truncate leading-tight ${currentSize.sub}`}>
              DIGITAL MARKETING & SEO
            </span>
          </div>
        )}
      </div>
    </div>
  );
};


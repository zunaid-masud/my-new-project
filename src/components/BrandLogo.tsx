import React from 'react';

// Local high-res brand vector assets (zero external CDN dependency)
export const BRAND_ASSETS = {
  fullLogo3D: '/logo.svg',
  iconMonogram3D: '/logo.svg',
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
        <radialGradient id="mzm-bg-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="65%" stopColor="#080D24" />
          <stop offset="100%" stopColor="#050816" />
        </radialGradient>
        <linearGradient id="mzm-blue-primary" x1="15%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="45%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="mzm-blue-highlight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="mzm-crimson-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6584" />
          <stop offset="55%" stopColor="#FF3B5C" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>

      {/* Deep Navy Ambient Backdrop */}
      <rect width="120" height="120" rx="24" fill="url(#mzm-bg-glow)" />
      <circle cx="60" cy="60" r="42" fill="#2563EB" opacity="0.14" />

      {/* Geometric M */}
      <path
        d="M20 88V32H30L39 50L48 32H58V88H48V52L39 68L30 52V88H20Z"
        fill="url(#mzm-blue-primary)"
      />
      <path
        d="M48 32H58V88H48V52L39 68V50L48 32Z"
        fill="url(#mzm-blue-highlight)"
        opacity="0.85"
      />

      {/* Geometric D */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64 32H80C93 32 100 41 100 60C100 79 93 88 80 88H64V32ZM74 42V78H79C86 78 89 72 89 60C89 48 86 42 79 42H74Z"
        fill="url(#mzm-blue-highlight)"
      />

      {/* Specular Edge Highlight */}
      <path
        d="M20 32.5H30L39 50.5L48 32.5H58M64 32.5H80C90 32.5 96 38.5 98.5 50"
        stroke="#BFDBFE"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Crimson Apex Diamond Accent */}
      <path
        d="M39 27L43.5 34L39 41L34.5 34L39 27Z"
        fill="url(#mzm-crimson-accent)"
      />
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
      iconBox: 'w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 sm:w-11 sm:h-11', 
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
          <div className={`${currentSize.iconBox} relative rounded-2xl overflow-hidden border border-blue-500/35 shadow-[0_0_22px_rgba(37,99,235,0.28)] group-hover:border-blue-400 group-hover:shadow-[0_0_32px_rgba(37,99,235,0.55)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center`}>
            <VectorMonogram className="w-full h-full" />
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
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-blue-500/40 shadow-[0_0_35px_rgba(37,99,235,0.35)] group-hover:border-blue-400 group-hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center">
            <VectorMonogram className="w-full h-full" />
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
        <div className="w-7 h-7 rounded-lg overflow-hidden border border-blue-500/40 bg-[#050816] flex-shrink-0 flex items-center justify-center">
          <VectorMonogram className="w-full h-full" />
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider text-white whitespace-nowrap">
          <span className="font-bold">MD ZUNAID MASUD</span>
          <span className="text-gray-400">• DIGITAL MARKETING</span>
        </div>
      </div>
    );
  }

  // 4. Default: Horizontal Header Lockup (Crisp Vector Monogram + Neatly Aligned Single-Line Typography)
  return (
    <div
      onClick={onClick}
      className={`group flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-3.5 cursor-pointer select-none min-w-0 w-full max-w-full ${className}`}
    >
      {/* Blue Monogram Logo Icon - Prominent, crisp, adaptive */}
      <div className="relative flex-shrink-0">
        <div className={`${currentSize.iconBox} rounded-xl sm:rounded-2xl overflow-hidden border border-blue-500/35 shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] group-hover:scale-105 transition-all duration-300 bg-[#050816] flex items-center justify-center`}>
          <VectorMonogram className="w-full h-full" />
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


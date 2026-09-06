import React, { useState, useRef, useCallback } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE (Audit & Low ROAS)",
  afterLabel = "AFTER (Optimized & Scaled)",
  aspectRatio = "aspect-video"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden select-none border border-cyan-500/20 shadow-2xl group cursor-ew-resize`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* After Label */}
      <div className="absolute top-4 right-4 z-10 glass-panel px-3 py-1.5 rounded-lg border border-cyan-400/40 text-cyan-300 font-mono-tech text-xs flex items-center gap-1.5 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>{afterLabel}</span>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.clientWidth || '100%', height: '100%' }}
          loading="lazy"
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 rounded-lg border border-rose-500/40 text-rose-300 font-mono-tech text-xs flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>{beforeLabel}</span>
        </div>
      </div>

      {/* Draggable Divider Handle */}
      <div
        className="absolute top-0 bottom-0 z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Neon vertical line */}
        <div className="w-[2px] h-full bg-cyan-400 shadow-[0_0_12px_#00f0ff]" />
        
        {/* Interactive circular grip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050817] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform">
          <div className="flex items-center gap-1">
            <span className="w-1 h-3 rounded-full bg-cyan-400" />
            <span className="w-1 h-3 rounded-full bg-rose-400" />
          </div>
        </div>
      </div>

      {/* Hint on hover */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#050817]/80 text-[11px] font-mono-tech text-slate-400 pointer-events-none border border-slate-700/50 backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity">
        ◀ DRAG TO COMPARE IMPACT ▶
      </div>
    </div>
  );
};

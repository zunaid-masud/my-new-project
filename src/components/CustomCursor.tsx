import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project' | 'explore'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect cursor context
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const exploreTarget = target.closest('[data-cursor="explore"]');
      const interactive = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor="pointer"]');

      if (projectCard) {
        setCursorType('project');
      } else if (exploreTarget) {
        setCursorType('explore');
      } else if (interactive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-white"
        style={{
          width: 8,
          height: 8,
          boxShadow: '0 0 14px 2px rgba(255, 255, 255, 0.9)',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: mousePosition.x < 0 ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing interactive ring / capsule */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full"
        style={{
          backgroundColor: cursorType === 'project' 
            ? '#2563eb' 
            : cursorType === 'explore'
            ? '#dc2626'
            : cursorType === 'pointer' 
            ? 'rgba(59, 130, 246, 0.2)' 
            : 'transparent',
          border: cursorType === 'default' ? '1px solid rgba(255, 255, 255, 0.25)' : 'none',
          boxShadow: cursorType === 'project' || cursorType === 'pointer' 
            ? '0 0 30px rgba(59, 130, 246, 0.4)' 
            : cursorType === 'explore'
            ? '0 0 30px rgba(239, 68, 68, 0.4)'
            : 'none',
        }}
        animate={{
          x: cursorType === 'project' 
            ? mousePosition.x + 16
            : cursorType === 'explore'
            ? mousePosition.x + 16
            : cursorType === 'pointer' 
            ? mousePosition.x - 20 
            : mousePosition.x - 16,
          y: cursorType === 'project' 
            ? mousePosition.y + 16
            : cursorType === 'explore'
            ? mousePosition.y + 16
            : cursorType === 'pointer' 
            ? mousePosition.y - 20 
            : mousePosition.y - 16,
          width: cursorType === 'project' ? 110 : cursorType === 'explore' ? 90 : cursorType === 'pointer' ? 40 : 32,
          height: cursorType === 'project' || cursorType === 'explore' ? 30 : cursorType === 'pointer' ? 40 : 32,
          borderRadius: cursorType === 'project' || cursorType === 'explore' ? 6 : 9999,
          opacity: mousePosition.x < 0 ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.15 }}
      >
        {cursorType === 'project' && (
          <span className="text-[10px] font-bold tracking-widest text-white font-mono-tech uppercase whitespace-nowrap px-2">
            VIEW CASE →
          </span>
        )}
        {cursorType === 'explore' && (
          <span className="text-[10px] font-bold tracking-widest text-white font-mono-tech uppercase whitespace-nowrap px-2">
            EXPLORE
          </span>
        )}
      </motion.div>
    </div>
  );
};

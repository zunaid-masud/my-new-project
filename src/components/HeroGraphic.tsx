import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Award, Zap, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface HeroGraphicProps {
  className?: string;
}

export const HeroGraphic: React.FC<HeroGraphicProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroImageUrl = "https://cdn.phototourl.com/free/2026-08-28-88317940-c162-42b8-9571-eec794fdb1c5.jpg";

  // Three.js Background Particle & Orbit Canvas
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Orbit Rings
    const createRing = (radius: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.015, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      group.add(ring);
      return ring;
    };

    const ring1 = createRing(2.6, 0x00f0ff, Math.PI / 3, Math.PI / 6);
    const ring2 = createRing(3.0, 0xff2a5f, -Math.PI / 4, Math.PI / 4);

    // Dynamic Nodes / Floating Particles
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 3;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      group.rotation.y = t * 0.15;
      ring1.rotation.z = t * 0.4;
      ring2.rotation.z = -t * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // 3D Parallax Tilt Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative w-full max-w-md lg:max-w-none mx-auto flex items-center justify-center overflow-visible select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* 3D Canvas Background for Orbit Rings & Ambient Particles */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center opacity-80"
      />

      {/* Ambient background glow layers */}
      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-blue-600/20 blur-[100px] pointer-events-none -top-10 -left-10 z-0" />
      <div className="absolute w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-red-600/15 blur-[90px] pointer-events-none -bottom-8 -right-8 z-0" />

      {/* Main 3D Card Frame with Dynamic Tilt */}
      <div
        ref={cardRef}
        className="relative z-10 w-full rounded-3xl p-1 bg-gradient-to-b from-blue-500/40 via-blue-600/20 to-red-500/30 shadow-[0_0_50px_rgba(37,99,235,0.3)] hover:shadow-[0_0_70px_rgba(37,99,235,0.5)] transition-all duration-300 group overflow-visible"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Inner Card Container */}
        <div className="relative rounded-[22px] overflow-hidden bg-[#070b1e] w-full max-w-full aspect-[4/5] sm:aspect-[4/5] flex items-center justify-center">
          
          {/* Main Hero Graphic Image */}
          <img
            src="https://cdn.phototourl.com/free/2026-09-06-2c7212b9-7c48-4612-a832-021f6d188bae.jpg"
            alt="MD Zunaid Masud - Digital Marketing Specialist"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== window.location.origin + '/user_photo.jpg') {
                target.src = '/user_photo.jpg';
              }
            }}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 max-w-full block"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />

          {/* Cinematic Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050817] via-[#050817]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />

          {/* Cyber Corner Accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-400 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-400 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-500 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-500 pointer-events-none" />

          {/* Bottom Card Identity Overlay */}
          <div className="absolute bottom-4 min-[380px]:bottom-6 left-4 min-[380px]:left-6 right-4 min-[380px]:right-6 space-y-1 z-10">
            <div className="flex items-center gap-1.5 min-[380px]:gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="text-[9px] min-[380px]:text-[10px] font-mono-tech text-emerald-300 uppercase tracking-wider font-bold truncate">
                AVAILABLE FOR HIGH-GROWTH PROJECTS
              </span>
            </div>
            <h3 className="text-xl min-[380px]:text-2xl font-bold text-white font-display">
              {siteConfig.legalName}
            </h3>
            <p className="text-[11px] min-[380px]:text-xs text-blue-300 font-mono-tech truncate">
              {siteConfig.title}
            </p>
          </div>
        </div>

        {/* Floating HUD Badge 1: Top-Left "50+ PROJECTS DELIVERED" */}
        <div className="absolute -top-3.5 -left-2 sm:-left-4 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-blue-400/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow z-20">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono-tech text-white font-bold whitespace-nowrap">
            50+ PROJECTS DELIVERED
          </span>
        </div>

        {/* Floating HUD Badge 2: Top-Right "3.8x AVG ROAS" */}
        <div className="absolute -top-3.5 -right-2 sm:-right-4 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-blue-400/40 shadow-xl backdrop-blur-md flex items-center gap-2 animate-float-slow z-20" style={{ animationDelay: '1s' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono-tech text-white font-bold whitespace-nowrap">
            3.8x AVG ROAS
          </span>
        </div>

        {/* Floating HUD Badge 3: Bottom-Right "10K+ LEADS SCALED" */}
        <div className="absolute -bottom-3.5 -right-2 sm:-right-4 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-red-500/40 shadow-xl backdrop-blur-md flex items-center gap-2 z-20 animate-float-slow" style={{ animationDelay: '2s' }}>
          <Zap className="w-3.5 h-3.5 text-red-400 shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono-tech text-white font-semibold whitespace-nowrap">
            10K+ LEADS SCALED
          </span>
        </div>
      </div>
    </div>
  );
};


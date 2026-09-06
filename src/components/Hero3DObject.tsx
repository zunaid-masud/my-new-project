import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

export const Hero3DObject: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeMetric, setActiveMetric] = useState<number>(0);

  const metricsOverlay = [
    { label: "CPA REDUCTION", value: "-48.2%", tag: "OPTIMIZED", progress: 68, color: "red" },
    { label: "AVERAGE ROAS", value: "3.8x — 4.5x", tag: "SCALING", progress: 85, color: "blue" },
    { label: "LEADS DELIVERED", value: "10K+", tag: "VERIFIED", progress: 92, color: "emerald" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metricsOverlay.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [metricsOverlay.length]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 460;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7.0;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all core 3D elements
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Holographic Outer Sphere (Wireframe Grid)
    const sphereGeo = new THREE.IcosahedronGeometry(2.3, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(outerSphere);

    // 2. Inner Solid Core (Dark Blue Sphere)
    const innerGeo = new THREE.SphereGeometry(1.25, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x142850,
      transparent: true,
      opacity: 0.85,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    // 3. Dynamic Analytical 3D Data Pillars (Cyan & Magenta/Red)
    const barCount = 14;
    const barGroup = new THREE.Group();
    const bars: { mesh: THREE.Mesh; baseHeight: number; speed: number; offset: number }[] = [];

    for (let i = 0; i < barCount; i++) {
      const angle = (i / barCount) * Math.PI * 2;
      const radius = 1.55;
      const baseHeight = 0.8 + (i % 5) * 0.3;
      const barGeo = new THREE.BoxGeometry(0.14, baseHeight, 0.14);
      const isRed = i % 3 === 0 || i === 7 || i === 11;
      const barMat = new THREE.MeshBasicMaterial({
        color: isRed ? 0xff2a5f : 0x00f0ff,
        transparent: true,
        opacity: 0.9,
      });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.x = Math.cos(angle) * radius;
      bar.position.z = Math.sin(angle) * radius;
      bar.position.y = (Math.sin(angle * 2) * 0.4);
      bar.rotation.y = -angle;
      barGroup.add(bar);
      bars.push({ mesh: bar, baseHeight, speed: 1.5 + (i % 3), offset: i * 0.6 });
    }
    coreGroup.add(barGroup);

    // 4. Glowing Orbit Rings with Satellite Node
    const createOrbitRing = (radius: number, color: number, tiltX: number, tiltY: number, hasNode = false) => {
      const ringGroup = new THREE.Group();
      const ringGeo = new THREE.TorusGeometry(radius, 0.02, 16, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.55,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ringGroup.add(ring);

      let nodeMesh: THREE.Mesh | null = null;
      if (hasNode) {
        const nodeGeo = new THREE.SphereGeometry(0.1, 16, 16);
        const nodeMat = new THREE.MeshBasicMaterial({
          color: color,
          blending: THREE.AdditiveBlending,
        });
        nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
        nodeMesh.position.x = radius;
        ringGroup.add(nodeMesh);
      }

      ringGroup.rotation.x = tiltX;
      ringGroup.rotation.y = tiltY;
      return { ringGroup, nodeMesh, radius };
    };

    const ring1 = createOrbitRing(2.9, 0x00f0ff, Math.PI / 2.8, Math.PI / 5, true);
    const ring2 = createOrbitRing(3.2, 0xff2a5f, -Math.PI / 3.5, Math.PI / 4, false);
    const ring3 = createOrbitRing(2.7, 0x2563eb, Math.PI / 2, 0, true);

    coreGroup.add(ring1.ringGroup);
    coreGroup.add(ring2.ringGroup);
    coreGroup.add(ring3.ringGroup);

    // Mouse interactive tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Animation Loop
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      targetRotX += (mouseY * 0.35 - targetRotX) * 0.05;
      targetRotY += (mouseX * 0.5 - targetRotY) * 0.05;

      coreGroup.rotation.x = targetRotX + Math.sin(t * 0.4) * 0.06;
      coreGroup.rotation.y = targetRotY + t * 0.22;

      outerSphere.rotation.y = -t * 0.12;
      outerSphere.rotation.z = t * 0.08;

      // Animate growth bars
      bars.forEach(({ mesh, speed, offset }) => {
        const scaleY = 1 + Math.sin(t * speed + offset) * 0.35;
        mesh.scale.set(1, Math.max(0.3, scaleY), 1);
      });

      // Orbit rotations
      ring1.ringGroup.rotation.z = t * 0.5;
      ring2.ringGroup.rotation.z = -t * 0.35;
      ring3.ringGroup.rotation.z = t * 0.25;

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
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const current = metricsOverlay[activeMetric];

  return (
    <div className="relative w-full max-w-[340px] min-[380px]:max-w-[400px] sm:max-w-[460px] lg:max-w-[480px] h-[280px] min-[380px]:h-[330px] sm:h-[440px] md:h-[480px] lg:h-[520px] flex items-center justify-center overflow-visible select-none mx-auto">
      {/* Background glow radial layers */}
      <div className="absolute inset-0 bg-radial-gradient opacity-80 pointer-events-none" />
      <div className="absolute w-52 sm:w-80 h-52 sm:h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-44 sm:w-72 h-44 sm:h-72 rounded-full bg-rose-500/15 blur-3xl -bottom-4 -right-4 pointer-events-none" />

      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />

      {/* Floating Holographic Badge (Bottom-Left: CPA REDUCTION) */}
      <div className="glass bg-[#050817]/95 absolute bottom-1 min-[380px]:bottom-2 sm:bottom-4 left-0 min-[380px]:left-1 sm:left-3 p-2.5 min-[380px]:p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.35)] z-20 transition-all duration-500 animate-float-slow max-w-[145px] min-[380px]:max-w-[185px] sm:max-w-[230px] backdrop-blur-xl">
        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
          <div className="text-[8.5px] min-[380px]:text-[10px] sm:text-[11px] font-bold text-blue-400 uppercase tracking-wider italic font-mono-tech truncate">
            {current.label}
          </div>
          <span className="w-1.5 h-1.5 min-[380px]:w-2 min-[380px]:h-2 rounded-full bg-blue-400 animate-ping shrink-0 ml-1" />
        </div>
        <div className="text-xl min-[380px]:text-2xl sm:text-4xl font-black text-white font-display tracking-tight">
          {current.value}
        </div>
        <div className="w-full bg-blue-950/80 h-1 min-[380px]:h-1.5 mt-1.5 min-[380px]:mt-2.5 rounded-full overflow-hidden border border-white/5">
          <div
            className={`h-full bg-gradient-to-r ${
              current.color === 'red'
                ? 'from-red-500 via-rose-500 to-red-400 shadow-[0_0_12px_rgba(244,63,94,0.8)]'
                : current.color === 'emerald'
                ? 'from-emerald-500 to-teal-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]'
                : 'from-blue-500 via-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]'
            } rounded-full transition-all duration-700`}
            style={{ width: `${current.progress}%` }}
          />
        </div>
      </div>

      {/* Floating Badge (Top-Right: OPTIMIZED ENGINE) */}
      <div className="glass bg-[#050817]/95 absolute top-1 min-[380px]:top-2 sm:top-4 right-0 min-[380px]:right-1 sm:right-3 px-2.5 min-[380px]:px-3.5 py-1 min-[380px]:py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-red-500/40 shadow-[0_0_25px_rgba(239,68,68,0.3)] z-20 flex items-center gap-1.5 sm:gap-2 backdrop-blur-xl animate-float-slow" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 shrink-0" />
        <span className="text-[8.5px] min-[380px]:text-[10px] sm:text-xs font-bold font-mono-tech text-white uppercase tracking-wider whitespace-nowrap">
          {current.tag} ENGINE
        </span>
      </div>
    </div>
  );
};

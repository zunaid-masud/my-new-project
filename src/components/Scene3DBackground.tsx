import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Scene3DBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050817, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 700;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    container.appendChild(renderer.domElement);

    // Particle Cloud 1: Electric Blue / Cyan Nodes
    const blueCount = 450;
    const blueGeometry = new THREE.BufferGeometry();
    const bluePositions = new Float32Array(blueCount * 3);
    const blueColors = new Float32Array(blueCount * 3);

    for (let i = 0; i < blueCount * 3; i += 3) {
      bluePositions[i] = (Math.random() - 0.5) * 1600;
      bluePositions[i + 1] = (Math.random() - 0.5) * 1600;
      bluePositions[i + 2] = (Math.random() - 0.5) * 1000;

      // Cyan / Blue hues
      blueColors[i] = 0.0 + Math.random() * 0.2;     // R
      blueColors[i + 1] = 0.6 + Math.random() * 0.4; // G
      blueColors[i + 2] = 0.95 + Math.random() * 0.05; // B
    }

    blueGeometry.setAttribute('position', new THREE.BufferAttribute(bluePositions, 3));
    blueGeometry.setAttribute('color', new THREE.BufferAttribute(blueColors, 3));

    const blueMaterial = new THREE.PointsMaterial({
      size: 4.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const blueParticles = new THREE.Points(blueGeometry, blueMaterial);
    scene.add(blueParticles);

    // Particle Cloud 2: Crimson / Red Energy Sparks
    const redCount = 120;
    const redGeometry = new THREE.BufferGeometry();
    const redPositions = new Float32Array(redCount * 3);

    for (let i = 0; i < redCount * 3; i += 3) {
      redPositions[i] = (Math.random() - 0.5) * 1400;
      redPositions[i + 1] = (Math.random() - 0.5) * 1400;
      redPositions[i + 2] = (Math.random() - 0.5) * 800;
    }

    redGeometry.setAttribute('position', new THREE.BufferAttribute(redPositions, 3));

    const redMaterial = new THREE.PointsMaterial({
      size: 6,
      color: 0xff2a5f,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const redParticles = new THREE.Points(redGeometry, redMaterial);
    scene.add(redParticles);

    // Subtle 3D Wireframe Cyber Grid Plane in the background
    const gridGeometry = new THREE.PlaneGeometry(2400, 2400, 36, 36);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e3a8a,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.rotation.x = -Math.PI / 2.3;
    gridMesh.position.y = -350;
    scene.add(gridMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.4;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5;
      camera.lookAt(scene.position);

      // Particle rotations
      blueParticles.rotation.y = elapsedTime * 0.03;
      blueParticles.rotation.x = elapsedTime * 0.015;

      redParticles.rotation.y = -elapsedTime * 0.02;
      redParticles.rotation.z = elapsedTime * 0.01;

      gridMesh.position.z = Math.sin(elapsedTime * 0.2) * 20;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};

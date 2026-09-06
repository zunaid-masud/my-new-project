import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, 
  TrendingUp, Award, Play, Image as ImageIcon, ZoomIn, ArrowRight, ShieldCheck, Sparkles
} from 'lucide-react';
import { ProjectItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { AutoImage } from './AutoImage';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  allProjects,
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'before-after' | 'gallery' | 'video'>('overview');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!isOpen || !project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const validGalleryImages = (project.galleryImages || []).filter(
    (image) => typeof image === 'string' && image.trim() !== ''
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#02040a]/90 backdrop-blur-xl">
        {/* Backdrop click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl my-auto glass-panel bg-[#070b1e]/95 border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-cyan-950/80 overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden shrink-0 border-b border-cyan-500/20">
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b1e] via-[#070b1e]/60 to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient opacity-60" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-panel border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Eyebrow & Title */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech uppercase tracking-widest bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-tech">
                    {project.country} {project.countryCode ? `(${project.countryCode})` : ''}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400 font-mono-tech">
                    {project.projectDate}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
                  {project.name}
                </h2>
                <p className="text-sm text-cyan-200/80 font-mono-tech mt-1">
                  Client: {project.clientName}
                </p>
              </div>

              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-wider font-mono-tech transition-all shadow-lg shadow-cyan-500/25 shrink-0 w-fit"
                >
                  <span>VISIT LIVE STORE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-slate-800/80 bg-[#050817]/60 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all ${
                activeTab === 'overview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Overview & Results
            </button>
            {project.beforeImage && project.afterImage && (
              <button
                onClick={() => setActiveTab('before-after')}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'before-after'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-400/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="w-3 h-3 text-rose-400" />
                <span>Before vs After</span>
              </button>
            )}
            {project.galleryImages && (
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'gallery'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Media Gallery ({validGalleryImages.length})</span>
              </button>
            )}
            {project.videoUrl && (
              <button
                onClick={() => setActiveTab('video')}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeTab === 'video'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Case Video</span>
              </button>
            )}
          </div>

          {/* Modal Body Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-8">
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <>
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="glass-panel p-4 rounded-xl border border-cyan-500/20 flex flex-col justify-between"
                    >
                      <span className="text-[11px] text-slate-400 font-mono-tech uppercase tracking-wider">
                        {metric.label}
                      </span>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-white font-display">
                          {metric.value}
                        </span>
                        {metric.change && (
                          <span className="text-xs font-bold text-emerald-400 font-mono-tech">
                            {metric.change}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-panel p-5 rounded-2xl border border-rose-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                      <h3 className="text-base font-bold text-rose-300 font-display uppercase tracking-wider">
                        The Challenge & Bottleneck
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-base font-bold text-cyan-300 font-display uppercase tracking-wider">
                        Growth Strategy & Funnel
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.strategy || project.solution}
                    </p>
                  </div>
                </div>

                {/* Execution & Outcome */}
                <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20">
                  <h3 className="text-base font-bold text-white font-display mb-3 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Engineered Execution & Key Results</span>
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>
                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-200 text-sm font-medium">
                    <strong className="text-white">Commercial Result: </strong> {project.result}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3">
                    Technologies & Platforms Deployed
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-[#0b1335] text-cyan-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial (if available) */}
                {project.testimonial && (
                  <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 to-transparent">
                    <div className="flex items-center gap-2 text-xs font-mono-tech text-amber-300 uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Verified Client Feedback</span>
                    </div>
                    <p className="text-sm text-slate-200 italic mb-2">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="text-xs font-bold text-white font-display">
                      — {project.testimonial.author}, <span className="text-slate-400 font-normal">{project.testimonial.role}</span>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* TAB 2: BEFORE VS AFTER */}
            {activeTab === 'before-after' && project.beforeImage && project.afterImage && (
              <div className="space-y-4">
                <div className="text-sm text-slate-300 font-mono-tech">
                  Interactive Before & After Comparison: Drag the neon vertical slider to inspect the campaign landing page transformation and traffic scaling.
                </div>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel="BEFORE OPTIMIZATION"
                  afterLabel="AFTER PERFORMANCE REDESIGN"
                />
              </div>
            )}

            {/* TAB 3: GALLERY */}
            {activeTab === 'gallery' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm text-slate-300 font-mono-tech">
                  <span>Project Screenshots & Media Proof ({validGalleryImages.length})</span>
                  {validGalleryImages.length > 0 && (
                    <span className="text-xs text-cyan-400 font-normal">Click any screenshot for enlarged lightbox preview</span>
                  )}
                </div>

                {validGalleryImages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {validGalleryImages.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightboxImage(img)}
                        className="group relative h-56 sm:h-60 rounded-xl overflow-hidden cursor-pointer border border-cyan-500/20 hover:border-cyan-400 transition-all bg-[#050817] shadow-lg flex flex-col"
                      >
                        <div className="w-full h-full relative overflow-hidden">
                          <AutoImage
                            src={img}
                            alt={`${project.name} Media Proof ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <div className="p-3 rounded-full bg-cyan-500 text-black shadow-xl transform scale-90 group-hover:scale-100 transition-transform pointer-events-auto">
                            <ZoomIn className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/80 border border-slate-700/60 text-[10px] font-mono-tech text-slate-300 pointer-events-none backdrop-blur-sm">
                          Proof {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-14 px-4 glass-panel rounded-2xl border border-cyan-500/20 bg-[#050817]/40">
                    <ImageIcon className="w-10 h-10 text-cyan-400/50 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider mb-1">
                      No Screenshots Added Yet
                    </h4>
                    <p className="text-xs text-slate-400 font-mono-tech max-w-md mx-auto">
                      Direct image URLs or share links added to this project's gallery will automatically appear here.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: VIDEO */}
            {activeTab === 'video' && project.videoUrl && (
              <div className="space-y-4">
                <div className="text-sm text-slate-300 font-mono-tech">
                  High-Impact Campaign Reel & Walkthrough:
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-black shadow-2xl">
                  <video
                    src={project.videoUrl}
                    controls
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Next/Prev Switcher */}
          <div className="px-6 py-4 border-t border-slate-800/80 bg-[#050817]/90 flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">PREV: {prevProject.name.slice(0, 22)}...</span>
              <span className="sm:hidden">PREV</span>
            </button>

            <span className="text-xs font-mono-tech text-cyan-400">
              {currentIndex + 1} / {allProjects.length}
            </span>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span className="hidden sm:inline">NEXT: {nextProject.name.slice(0, 22)}...</span>
              <span className="sm:hidden">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Fullscreen Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-5xl w-full h-[85vh] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-[#050817] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <AutoImage
                src={lightboxImage}
                alt="Enlarged screenshot preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

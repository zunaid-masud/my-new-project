import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2, Copy, Check, Sparkles, Code, RefreshCw } from 'lucide-react';
import { ProjectItem, ProjectCategory } from '../types';

interface ProjectManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onUpdateProjects: (updated: ProjectItem[]) => void;
  onResetDefault: () => void;
}

export const ProjectManagerModal: React.FC<ProjectManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  onUpdateProjects,
  onResetDefault
}) => {
  const [activeTab, setActiveTab] = useState<'list' | 'add' | 'export'>('list');
  const [copied, setCopied] = useState(false);

  // New Project Form State
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    name: '',
    clientName: '',
    country: 'United States',
    countryCode: 'US',
    category: 'GOOGLE ADS',
    service: 'Google Ads & Search Optimization',
    websiteUrl: '',
    shortDescription: '',
    fullDescription: '',
    challenge: '',
    strategy: '',
    solution: '',
    result: '',
    technologies: ['Google Ads', 'GA4', 'GTM'],
    metrics: [
      { label: 'ROAS', value: '4.0x', change: '+120%', isPositive: true },
      { label: 'CPA', value: '$18', change: '-45%', isPositive: true }
    ],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    beforeImage: '',
    afterImage: '',
    galleryImages: [],
    videoUrl: '',
    projectDate: '2026',
    featured: true
  });

  const [techInput, setTechInput] = useState('Google Ads, GA4, GTM, Shopify');
  const [galleryInput, setGalleryInput] = useState('');

  if (!isOpen) return null;

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name || !newProject.shortDescription) return;

    const item: ProjectItem = {
      id: `proj-custom-${Date.now()}`,
      name: newProject.name || 'New Marketing Project',
      clientName: newProject.clientName || 'Client Name',
      country: newProject.country || 'Global',
      countryCode: newProject.countryCode || 'GL',
      category: (newProject.category as ProjectCategory) || 'MARKETING',
      service: newProject.service || 'Performance Marketing',
      websiteUrl: newProject.websiteUrl,
      shortDescription: newProject.shortDescription || '',
      fullDescription: newProject.fullDescription || newProject.shortDescription || '',
      challenge: newProject.challenge || 'Scaling customer acquisition efficiently.',
      strategy: newProject.strategy || 'Full-funnel segmentation and automated bidding.',
      solution: newProject.solution || 'Implemented data-backed campaign restructuring.',
      result: newProject.result || 'Achieved high ROAS and significant lead volume growth.',
      technologies: techInput.split(',').map((t) => t.trim()).filter(Boolean),
      metrics: newProject.metrics || [{ label: 'ROAS', value: '3.8x', isPositive: true }],
      coverImage: newProject.coverImage || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      beforeImage: newProject.beforeImage || undefined,
      afterImage: newProject.afterImage || undefined,
      galleryImages: galleryInput.split('\n').map((url) => url.trim()).filter(Boolean),
      videoUrl: newProject.videoUrl || undefined,
      projectDate: newProject.projectDate || '2026',
      featured: true
    };

    const updated = [item, ...projects];
    onUpdateProjects(updated);
    setActiveTab('list');
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    onUpdateProjects(updated);
  };

  const exportCode = `// Copy and paste this into src/data/projects.ts
import { ProjectItem } from '../types';

export const initialProjects: ProjectItem[] = ${JSON.stringify(projects, null, 2)};
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exportCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] glass-panel bg-[#070b1e] border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="p-5 border-b border-cyan-500/20 flex items-center justify-between bg-[#050817]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Project Data & CMS Studio
                </h3>
                <p className="text-xs text-slate-400 font-mono-tech">
                  Easily add, edit or export portfolio items without editing raw code.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full glass-panel border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 py-2.5 border-b border-slate-800 bg-[#050817]/70">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all ${
                activeTab === 'list'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Live Project Items ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all flex items-center gap-1.5 ${
                activeTab === 'add'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New Project</span>
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-tech uppercase transition-all flex items-center gap-1.5 ${
                activeTab === 'export'
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Export Code</span>
            </button>
          </div>

          {/* Body content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {/* TAB 1: LIST */}
            {activeTab === 'list' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech text-slate-400">
                    Showing all currently active portfolio case studies
                  </span>
                  <button
                    onClick={onResetDefault}
                    className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-mono-tech underline"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset to Defaults</span>
                  </button>
                </div>

                <div className="grid gap-3">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between gap-4 transition-all"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <img
                          src={proj.coverImage}
                          alt={proj.name}
                          className="w-14 h-14 rounded-lg object-cover border border-cyan-500/20 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded text-[9px] font-mono-tech bg-cyan-500/20 text-cyan-300">
                              {proj.category}
                            </span>
                            <span className="text-xs text-slate-400 font-mono-tech">
                              {proj.country}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white truncate font-display">
                            {proj.name}
                          </h4>
                          <p className="text-xs text-slate-400 truncate">
                            {proj.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-2 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: ADD NEW PROJECT */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddProject} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ultra Luxury Watch Scaling"
                      value={newProject.name}
                      onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Client Name & Brand *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chronos Timepieces LLC"
                      value={newProject.clientName}
                      onChange={(e) => setNewProject({ ...newProject, clientName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Primary Category
                    </label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value as ProjectCategory })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    >
                      <option value="GOOGLE ADS">GOOGLE ADS</option>
                      <option value="META ADS">META ADS</option>
                      <option value="SEO">SEO</option>
                      <option value="SHOPIFY">SHOPIFY</option>
                      <option value="WEB">WEB</option>
                      <option value="LOCAL SEO">LOCAL SEO</option>
                      <option value="MARKETING">MARKETING</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Country & Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. United States (US)"
                      value={newProject.country}
                      onChange={(e) => setNewProject({ ...newProject, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Live Store URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://clientstore.com"
                      value={newProject.websiteUrl}
                      onChange={(e) => setNewProject({ ...newProject, websiteUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    Cover Image URL (Unsplash or direct image link)
                  </label>
                  <input
                    type="url"
                    value={newProject.coverImage}
                    onChange={(e) => setNewProject({ ...newProject, coverImage: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Before Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={newProject.beforeImage}
                      onChange={(e) => setNewProject({ ...newProject, beforeImage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      After Image URL (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={newProject.afterImage}
                      onChange={(e) => setNewProject({ ...newProject, afterImage: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    Short Summary *
                  </label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Short punchy summary displayed on portfolio cards..."
                    value={newProject.shortDescription}
                    onChange={(e) => setNewProject({ ...newProject, shortDescription: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      The Challenge
                    </label>
                    <textarea
                      rows={2}
                      placeholder="What was the core problem..."
                      value={newProject.challenge}
                      onChange={(e) => setNewProject({ ...newProject, challenge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                      Strategy & Solution
                    </label>
                    <textarea
                      rows={2}
                      placeholder="What strategy was deployed..."
                      value={newProject.strategy}
                      onChange={(e) => setNewProject({ ...newProject, strategy: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech text-slate-300 mb-1">
                    Technologies (comma separated)
                  </label>
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090f2b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/30"
                  >
                    Add Project & Render Live Immediately
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: EXPORT */}
            {activeTab === 'export' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400 font-mono-tech">
                    Export your custom projects to keep them permanently in the codebase!
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Code!' : 'Copy to Clipboard'}</span>
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-[#030612] border border-slate-800 text-xs font-mono text-cyan-300 max-h-96 overflow-y-auto leading-relaxed">
                  {exportCode}
                </pre>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

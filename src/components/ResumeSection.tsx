import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  X,
  CheckCircle2,
} from 'lucide-react';

import { siteConfig } from '../data/siteConfig';
import { experienceData } from '../data/experience';
import { skillsData } from '../data/skills';

export const ResumeSection: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // =========================================================
  // ORIGINAL CV LINK
  // =========================================================
  const CV_URL = 'https://shorturl.at/A98K7';
  const CV_FILE_NAME = 'MD_Zunaid_Masud_CV.pdf';

  // =========================================================
  // DOWNLOAD ORIGINAL CV
  // =========================================================
  const handleDownloadCV = async (
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isDownloading) return;

    setIsDownloading(true);

    try {
      const response = await fetch(CV_URL, {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error('CV could not be downloaded');
      }

      const blob = await response.blob();

      if (!blob || blob.size === 0) {
        throw new Error('Empty CV file');
      }

      const blobUrl = window.URL.createObjectURL(blob);

      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = CV_FILE_NAME;
      downloadLink.style.display = 'none';

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1000);

    } catch (error) {
      console.error('CV download failed:', error);

      // Fallback: open the ORIGINAL CV link
      window.open(
        CV_URL,
        '_blank',
        'noopener,noreferrer'
      );
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="resume"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            Banner Box
        ====================================================== */}
        <div className="relative rounded-2xl sm:rounded-3xl p-5 min-[380px]:p-8 sm:p-12 glass-panel border border-cyan-500/30 overflow-hidden bg-gradient-to-r from-[#070d28] via-[#081033] to-[#0a143f] shadow-2xl">

          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">

            {/* CV Information */}
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">

              <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full glass-panel border border-cyan-400/40 text-[10px] min-[380px]:text-[11px] font-mono-tech text-cyan-300 uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>

              <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl font-black text-white font-display">
                Experience, Skills & Results —{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-rose-400">
                  All In One Document.
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed">
                Download or inspect the complete, verified CV of Zunaid Masud
                detailing client case histories, technical certifications,
                and academic qualifications.
              </p>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">

              {/* View Full CV */}
              <button
                type="button"
                onClick={() => {
                  window.open(
                    CV_URL,
                    '_blank',
                    'noopener,noreferrer'
                  );
                }}
                className="flex-1 sm:flex-initial px-4 min-[380px]:px-6 py-3 sm:py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] cursor-pointer whitespace-nowrap"
                aria-label="View Original Curriculum Vitae"
                title="View Original CV"
              >
                <Eye className="w-4 h-4 shrink-0" />
                <span>View Full CV</span>
              </button>

              {/* Download CV */}
              <button
                type="button"
                onClick={handleDownloadCV}
                disabled={isDownloading}
                className="flex-1 sm:flex-initial px-4 min-[380px]:px-6 py-3 sm:py-3.5 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400 text-white font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:bg-cyan-500/10 cursor-pointer disabled:opacity-60 disabled:cursor-wait whitespace-nowrap"
                aria-label="Download Original CV PDF"
                title="Download Original CV PDF"
              >
                <Download
                  className={`w-4 h-4 text-cyan-400 shrink-0 ${
                    isDownloading ? 'animate-bounce' : ''
                  }`}
                />

                <span>
                  {isDownloading
                    ? 'Downloading...'
                    : 'Download CV'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            Modal: CV Viewer
        ====================================================== */}
        {showResumeModal && (
          <div
            className="fixed inset-0 z-[160] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setShowResumeModal(false)}
          >

            <div
              className="relative max-w-4xl w-full glass-panel bg-[#070b1e] border border-cyan-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-8"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">

                <div className="flex items-center gap-3">

                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                    <FileText className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {siteConfig.legalName} — Curriculum Vitae
                    </h3>

                    <p className="text-xs text-cyan-300 font-mono-tech">
                      {siteConfig.title}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2">

                  {/* Modal Download */}
                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="p-2 rounded-xl glass-panel border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-mono-tech transition-colors cursor-pointer disabled:opacity-60"
                    title="Download Original CV"
                    aria-label="Download Original CV"
                  >
                    <Download
                      className={`w-4 h-4 text-cyan-400 ${
                        isDownloading ? 'animate-bounce' : ''
                      }`}
                    />

                    <span className="hidden sm:inline">
                      {isDownloading
                        ? 'Downloading...'
                        : 'Download CV'}
                    </span>
                  </button>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 rounded-xl glass-panel border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
                    aria-label="Close CV Modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                </div>
              </div>

              {/* Resume Body */}
              <div className="space-y-6 text-sm text-slate-200">

                {/* Contact Header */}
                <div className="p-4 rounded-2xl bg-[#050817] border border-slate-800 grid sm:grid-cols-3 gap-3 text-xs font-mono-tech">

                  <div>
                    <span className="text-slate-500 uppercase block">
                      Email:
                    </span>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-cyan-300 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase block">
                      Phone / WhatsApp:
                    </span>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-cyan-300 hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase block">
                      Location:
                    </span>

                    <span className="text-slate-200">
                      {siteConfig.location}
                    </span>
                  </div>

                </div>

                {/* Summary */}
                <div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono-tech mb-2">
                    Professional Summary
                  </h4>

                  <p className="text-slate-300 leading-relaxed font-light">
                    Results-driven Digital Marketing Specialist with deep
                    hands-on expertise in technical SEO, high-return Google &
                    Meta advertising campaigns, and conversion rate
                    optimization for international eCommerce stores
                    (Shopify, WooCommerce) and tech companies.
                  </p>

                </div>

                {/* Experience */}
                <div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono-tech mb-3">
                    Experience History
                  </h4>

                  <div className="space-y-4">

                    {experienceData
                      .filter((e) => e.type === 'work')
                      .map((exp, i) => (

                        <div
                          key={i}
                          className="p-4 rounded-xl glass-panel border border-slate-800"
                        >

                          <div className="flex justify-between items-baseline mb-1">

                            <span className="font-bold text-white text-base">
                              {exp.position}
                            </span>

                            <span className="text-xs text-cyan-400 font-mono-tech">
                              {exp.year}
                            </span>

                          </div>

                          <div className="text-xs text-slate-400 font-mono-tech mb-2">
                            {exp.company} • {exp.location}
                          </div>

                          <p className="text-xs text-slate-300 mb-2">
                            {exp.description}
                          </p>

                          <div className="space-y-1">

                            {exp.achievements.map((ach, aI) => (

                              <div
                                key={aI}
                                className="flex items-start gap-2 text-xs text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                                <span>{ach}</span>
                              </div>

                            ))}

                          </div>
                        </div>

                      ))}

                  </div>
                </div>

                {/* Education */}
                <div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono-tech mb-3">
                    Academic Background
                  </h4>

                  <div className="space-y-3">

                    {experienceData
                      .filter((e) => e.type === 'education')
                      .map((edu, i) => (

                        <div
                          key={i}
                          className="p-3.5 rounded-xl glass-panel border border-slate-800 flex justify-between items-center"
                        >

                          <div>

                            <div className="font-bold text-white text-sm">
                              {edu.position}
                            </div>

                            <div className="text-xs text-slate-400 font-mono-tech">
                              {edu.company}
                            </div>

                          </div>

                          <div className="text-xs text-cyan-400 font-mono-tech">
                            {edu.year}
                          </div>

                        </div>

                      ))}

                  </div>
                </div>

                {/* Core Technical Skills */}
                <div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono-tech mb-2">
                    Core Technical Skills & Platforms
                  </h4>

                  <div className="flex flex-wrap gap-2">

                    {skillsData.map((s, i) => (

                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono-tech bg-[#050817] text-cyan-300 border border-cyan-500/30"
                      >
                        {s.name} ({s.level}%)
                      </span>

                    ))}

                  </div>
                </div>

                {/* =================================================
                    ORIGINAL CV DOWNLOAD
                ================================================== */}
                <div className="pt-4 border-t border-slate-800 flex justify-center">

                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(0,240,255,0.35)] cursor-pointer disabled:opacity-60"
                  >

                    <Download
                      className={`w-4 h-4 ${
                        isDownloading ? 'animate-bounce' : ''
                      }`}
                    />

                    <span>
                      {isDownloading
                        ? 'Downloading...'
                        : 'Download Original CV PDF'}
                    </span>

                  </button>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

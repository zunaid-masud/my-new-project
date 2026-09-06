import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  ShieldCheck,
  X,
  ZoomIn,
} from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
};

export const CertificatesGallery: React.FC = () => {
  const [selectedCert, setSelectedCert] =
    useState<Certificate | null>(null);

  // =========================================================
  // ORIGINAL CERTIFICATE LINKS
  // =========================================================
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Digital Marketing and Content Writing',
      issuer: 'Trainers IT Institute',
      date: 'Verified',
      credentialId: 'Official Credential',
      verificationUrl:
        'https://kommodo.ai/i/4p4AuvZQGT1bhOgXHuq9',
    },

    {
      id: 2,
      title: 'SEO Certification',
      issuer: 'HubSpot Academy',
      date: 'Verified',
      credentialId: 'Official Credential',
      verificationUrl:
        'https://kommodo.ai/i/tJ0gqTv8BrsqaQyiDXUT',
    },

    {
      id: 3,
      title: 'SEMrush Certification',
      issuer: 'SEMrush',
      date: 'Verified',
      credentialId: 'Official Credential',
      verificationUrl:
        'https://kommodo.ai/i/o6i9GuwLkgjgNgkwKuN0',
    },

    {
      id: 4,
      title: 'Freelancer ID Card',
      issuer: 'ICT Division, Government of Bangladesh',
      date: 'Verified',
      credentialId: 'Official Credential',
      verificationUrl:
        'https://kommodo.ai/i/nA4jLYJBOGtW8WwhOV1X',
    },
  ];

  // =========================================================
  // OPEN ORIGINAL CERTIFICATE
  // =========================================================
  const openCertificate = (url: string) => {
    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-32 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">

          <div>

            <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">

              <span className="h-px w-6 sm:w-8 bg-blue-500" />

              <span className="text-[10px] min-[380px]:text-xs font-bold tracking-[0.25em] min-[380px]:tracking-[0.35em] text-blue-400 uppercase font-mono-tech">
                ACCREDITATIONS & CREDENTIALS
              </span>

              <span className="h-px w-6 sm:w-8 bg-blue-500" />

            </div>

            <h2 className="text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl font-black text-white font-display uppercase italic tracking-tight">

              VERIFIED{' '}

              <span className="text-gradient">
                CERTIFICATIONS.
              </span>

            </h2>

          </div>

          <p className="text-gray-400 text-xs sm:text-base max-w-md font-light leading-relaxed">
            Officially verified professional certifications and
            accreditations.
          </p>

        </div>


        {/* =====================================================
            CERTIFICATE GRID
        ====================================================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {certificates.map((cert) => (

            <div
              key={cert.id}
              className="glass-panel rounded-2xl sm:rounded-3xl border border-slate-800 hover:border-cyan-400/60 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.25)] flex flex-col"
            >

              {/* =================================================
                  CERTIFICATE PREVIEW
              ================================================== */}
              <button
                type="button"
                onClick={() =>
                  setSelectedCert(cert)
                }
                className="relative h-48 w-full overflow-hidden bg-[#070b1e] cursor-pointer"
              >

                {/* Certificate icon / preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#07112d] via-[#08194a] to-[#050817]">

                  <Award
                    className="w-16 h-16 text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300"
                  />

                  <span className="text-cyan-300 font-bold text-sm uppercase tracking-widest">
                    {cert.issuer}
                  </span>

                  <span className="text-slate-400 text-xs mt-1">
                    Official Certificate
                  </span>

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D24] via-transparent to-transparent" />

                {/* Zoom */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/60 backdrop-blur-md text-cyan-300 group-hover:scale-110 transition-transform">

                  <ZoomIn className="w-4 h-4" />

                </div>

                {/* Issuer */}
                <div className="absolute bottom-3 left-3.5">

                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">

                    {cert.issuer}

                  </span>

                </div>

              </button>


              {/* =================================================
                  CERTIFICATE DETAILS
              ================================================== */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">

                <div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">

                    {cert.title}

                  </h3>

                  <div className="text-xs text-slate-400 font-mono-tech mt-1">

                    Credential ID: {cert.credentialId}

                  </div>

                </div>


                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">

                  <span className="flex items-center gap-1.5 text-xs font-mono-tech text-emerald-400">

                    <ShieldCheck className="w-3.5 h-3.5" />

                    <span>
                      Verified
                    </span>

                  </span>


                  {/* OPEN ORIGINAL LINK */}
                  <button
                    type="button"
                    onClick={() =>
                      openCertificate(
                        cert.verificationUrl
                      )
                    }
                    className="text-xs font-mono-tech text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5"
                  >

                    View Certificate

                    <ExternalLink className="w-3.5 h-3.5" />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =====================================================
            CERTIFICATE MODAL
        ====================================================== */}
        {selectedCert && (

          <div
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() =>
              setSelectedCert(null)
            }
          >

            <div
              className="relative max-w-2xl w-full glass-panel bg-[#070b1e] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              {/* Close */}
              <button
                type="button"
                onClick={() =>
                  setSelectedCert(null)
                }
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass-panel border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center z-10"
                aria-label="Close certificate"
              >

                <X className="w-4 h-4" />

              </button>


              {/* =================================================
                  PREVIEW
              ================================================== */}
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-gradient-to-br from-[#07112d] to-[#050817]">

                <div className="h-72 flex flex-col items-center justify-center">

                  <Award className="w-20 h-20 text-cyan-400 mb-4" />

                  <h3 className="text-white text-xl font-bold">
                    {selectedCert.issuer}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {selectedCert.title}
                  </p>

                  <p className="text-cyan-300 text-xs mt-3 font-mono-tech">
                    Original certificate available below
                  </p>

                </div>

              </div>


              {/* Certificate information */}
              <div>

                <span className="text-xs font-mono-tech uppercase text-cyan-400">

                  {selectedCert.issuer}

                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">

                  {selectedCert.title}

                </h3>

                <p className="text-xs text-slate-400 font-mono-tech mt-1">

                  {selectedCert.credentialId}

                </p>

              </div>


              {/* =================================================
                  OPEN ORIGINAL CERTIFICATE
              ================================================== */}
              <button
                type="button"
                onClick={() =>
                  openCertificate(
                    selectedCert.verificationUrl
                  )
                }
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25"
              >

                <span>
                  View Original Certificate
                </span>

                <ExternalLink className="w-3.5 h-3.5" />

              </button>


              {/* Exact link */}
              <div className="p-3 rounded-xl bg-black/30 border border-slate-800">

                <p className="text-[10px] text-slate-500 uppercase font-mono-tech mb-1">
                  Original Certificate Link
                </p>

                <p className="text-xs text-cyan-300 break-all font-mono-tech">
                  {selectedCert.verificationUrl}
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

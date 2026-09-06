import React, { useState, useEffect, useRef } from 'react';
import { ImageOff, Loader2, ExternalLink } from 'lucide-react';
import { isDirectImageUrl, extractImageFromShareUrl } from '../utils/imageHelper';

export interface AutoImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AutoImage: React.FC<AutoImageProps> = ({
  src,
  alt = 'Media proof',
  className = '',
  style,
}) => {
  const cleanSrc = typeof src === 'string' ? src.trim() : '';
  const isDirect = isDirectImageUrl(cleanSrc);

  const [resolvedImageUrl, setResolvedImageUrl] = useState<string | null>(() => {
    if (!cleanSrc) return null;
    return isDirect ? cleanSrc : null;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Abort any ongoing fetch and clear timeout
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!cleanSrc) {
      setIsLoading(false);
      setHasError(true);
      setResolvedImageUrl(null);
      return;
    }

    // CASE 1: Direct image URL (jpg, png, webp, svg, etc.)
    if (isDirect) {
      setResolvedImageUrl(cleanSrc);
      setIsLoading(true);
      setHasError(false);

      // Strict 3.5s timeout even for direct image networks
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        setHasError(true);
      }, 3500);
      return;
    }

    // CASE 2: Webpage Share Link (e.g. prnt.sc, kommodo.ai, gyazo) -> Extract actual image
    setIsLoading(true);
    setHasError(false);
    setResolvedImageUrl(null);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    // Strict 3.5s timeout for metadata extraction
    timeoutRef.current = setTimeout(() => {
      controller.abort();
      setIsLoading(false);
      setHasError(true);
    }, 3500);

    extractImageFromShareUrl(cleanSrc, controller.signal)
      .then((extractedUrl) => {
        if (extractedUrl) {
          setResolvedImageUrl(extractedUrl);
        } else {
          setIsLoading(false);
          setHasError(true);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [cleanSrc, isDirect]);

  const handleImageLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLoading(false);
    setHasError(true);
  };

  if (!cleanSrc) {
    return null;
  }

  // Extract clean domain for badge
  let domainLabel = 'Link';
  try {
    const parsed = new URL(cleanSrc);
    domainLabel = parsed.hostname.replace(/^www\./, '');
  } catch {
    domainLabel = 'Link';
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050817] flex items-center justify-center">
      {/* Loading Skeleton & Spinner (Auto-aborts in 3.5s) */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070c24] animate-pulse">
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin mb-1.5 opacity-80" />
          <span className="text-[10px] font-mono-tech text-cyan-300/80 uppercase tracking-wider">
            Loading Image...
          </span>
        </div>
      )}

      {/* Fallback Card when image is unavailable */}
      {hasError || (!isLoading && !resolvedImageUrl) ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#080d26] border border-cyan-500/20 text-slate-400 select-none">
          <div className="p-2.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-2">
            <ImageOff className="w-5 h-5" />
          </div>
          <span className="text-xs font-display font-semibold text-slate-200 mb-0.5">
            Image Unavailable
          </span>
          <span className="text-[10px] font-mono-tech text-slate-400 mb-2.5 truncate max-w-[85%]">
            {domainLabel}
          </span>
          <a
            href={cleanSrc}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-[11px] font-mono-tech transition-colors"
          >
            <span>Open Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      ) : (
        resolvedImageUrl && (
          <img
            src={resolvedImageUrl}
            alt={alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
            style={style}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )
      )}
    </div>
  );
};

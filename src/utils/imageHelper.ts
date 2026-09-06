/**
 * Utility functions for smart image extraction from direct files and share links (e.g. prnt.sc, kommodo.ai, gyazo, canva).
 */

// Extensions recognized as direct image files
const DIRECT_IMAGE_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.avif',
  '.svg',
  '.bmp',
  '.ico',
  '.tiff',
];

// Domains that host web pages / shares that are NOT direct image files
const WEBPAGE_SHARE_DOMAINS = [
  'prnt.sc',
  'prntscr.com',
  'lightshot',
  'canva.link',
  'canva.com',
  'kommodo.ai',
  'gyazo.com',
  'loom.com',
  'figma.com',
  'dribbble.com',
  'behance.net',
  'github.com',
  'drive.google.com',
  'dropbox.com',
  'postimg.cc',
  'snipboard.io',
  'pasteboard.co',
];

// Known Image CDNs that serve direct image content even without file extensions
const DIRECT_IMAGE_CDNS = [
  'images.unsplash.com',
  'res.cloudinary.com',
  'cdn.shopify.com',
  'i.imgur.com',
  'i.ibb.co',
  'images.pexels.com',
  'fastly.picsum.photos',
  'firebasestorage.googleapis.com',
  'image.prntscr.com',
];

/**
 * Checks if a given string is a direct image URL.
 */
export function isDirectImageUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const cleanUrl = url.trim();
  if (!cleanUrl) return false;

  // Base64 data URLs or Blob URLs
  if (cleanUrl.startsWith('data:image/') || cleanUrl.startsWith('blob:')) {
    return true;
  }

  try {
    const parsed = new URL(cleanUrl);
    const hostname = parsed.hostname.toLowerCase();
    const pathname = parsed.pathname.toLowerCase();

    // If it's a known share/webpage hosting domain (e.g. prnt.sc, kommodo.ai), treat as share page unless it's direct CDN
    if (WEBPAGE_SHARE_DOMAINS.some((domain) => hostname.includes(domain))) {
      // Gyazo direct image: i.gyazo.com/xxx.png
      if (hostname === 'i.gyazo.com' && (pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.webp'))) {
        return true;
      }
      return false;
    }

    // Direct extension match in pathname (e.g., /photo.jpg, /image.png)
    if (DIRECT_IMAGE_EXTENSIONS.some((ext) => pathname.endsWith(ext))) {
      return true;
    }

    // Known image CDNs that serve direct image content
    if (DIRECT_IMAGE_CDNS.some((cdn) => hostname.includes(cdn))) {
      return true;
    }

    return false;
  } catch {
    // Regex fallback for relative paths or atypical URLs
    return /\.(jpe?g|png|webp|gif|avif|svg|bmp)(\?.*)?$/i.test(cleanUrl);
  }
}

/**
 * Asynchronously extracts the actual uploaded/shared image from webpage share links (like prnt.sc, kommodo.ai, etc.)
 * by querying OpenGraph / metadata extraction endpoints.
 */
export async function extractImageFromShareUrl(url: string, signal?: AbortSignal): Promise<string | null> {
  if (!url || typeof url !== 'string') return null;
  const cleanUrl = url.trim();
  if (!cleanUrl) return null;

  // If already a direct image, return immediately
  if (isDirectImageUrl(cleanUrl)) {
    return cleanUrl;
  }

  try {
    const parsed = new URL(cleanUrl);
    const hostname = parsed.hostname.toLowerCase();

    // Special quick rule for Gyazo share links
    if (hostname.includes('gyazo.com') && !hostname.startsWith('i.')) {
      const parts = parsed.pathname.split('/').filter(Boolean);
      const id = parts[parts.length - 1];
      if (id) {
        return `https://i.gyazo.com/${id}.png`;
      }
    }

    // Method 1: Query Microlink API to extract the exact Open Graph og:image / image element from the page HTML
    const microlinkEndpoint = `https://api.microlink.io?url=${encodeURIComponent(cleanUrl)}&palette=false&audio=false&video=false&iframe=false`;
    
    const res = await fetch(microlinkEndpoint, { signal });
    if (res.ok) {
      const data = await res.json();
      if (data && data.status === 'success' && data.data) {
        // 1. Direct extracted image
        if (data.data.image && data.data.image.url && typeof data.data.image.url === 'string') {
          return data.data.image.url;
        }
        // 2. Extracted logo or fallback image if available
        if (data.data.logo && data.data.logo.url && typeof data.data.logo.url === 'string') {
          return data.data.logo.url;
        }
      }
    }
  } catch {
    // Silent fail to allow caller fallback
  }

  return null;
}

export type ProjectCategory = 
  | 'ALL' 
  | 'SEO' 
  | 'GOOGLE ADS' 
  | 'META ADS' 
  | 'SHOPIFY' 
  | 'WEB' 
  | 'LOCAL SEO' 
  | 'MARKETING';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface ProjectImage {
  url: string;
  caption?: string;
  type?: 'cover' | 'gallery' | 'before' | 'after';
}

export interface ProjectItem {
  id: string;
  name: string;
  clientName: string;
  country: string;
  countryCode?: string;
  category: ProjectCategory | string;
  service: string;
  websiteUrl?: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  strategy?: string;
  execution?: string;
  solution: string;
  result: string;
  technologies: string[];
  metrics: ProjectMetric[];
  coverImage: string;
  beforeImage?: string;
  afterImage?: string;
  galleryImages: string[];
  videoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  projectDate: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impactMetric: string;
  iconName: string;
  accentColor?: 'blue' | 'red';
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Advertising' | 'SEO & Organic' | 'Analytics & Tracking' | 'Platforms & CMS' | 'Design & Creative' | 'AI & Automation';
  level: number; // 0 to 100
  iconName?: string;
  relatedServiceIds: string[];
  orbitRadius: number; // For 3D orbital visualization
  orbitSpeed: number;
}

export interface ExperienceItem {
  year: string;
  position: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'work' | 'education';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  country: string;
  avatarUrl: string;
  review: string;
  service: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  imageUrl: string;
  badgeColor?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  title: string;
  bioHeadline: string;
  bioParagraphs: string[];
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
  profilePhoto: string;
  cvPdfUrl?: string; // Direct URL to official CV PDF
  meetingCalendarUrl?: string; // external calendar booking URL
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    github?: string;
    fiverr?: string;
    upwork?: string;
  };
  stats: {
    projectsCompleted: string;
    happyClients: string;
    countriesServed: string;
    adBudgetManaged: string;
    averageROAS: string;
    leadsGenerated: string;
  };
}

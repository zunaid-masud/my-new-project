import { SkillNode } from '../types';

export const skillsData: SkillNode[] = [
  {
    id: "sk-meta",
    name: "Meta Ads",
    category: "Advertising",
    level: 95,
    iconName: "Target",
    relatedServiceIds: ["serv-meta-ads", "serv-shopify", "serv-woocommerce"],
    orbitRadius: 110,
    orbitSpeed: 0.012
  },
  {
    id: "sk-google-ads",
    name: "Google Ads",
    category: "Advertising",
    level: 96,
    iconName: "Search",
    relatedServiceIds: ["serv-google-ads", "serv-leadgen", "serv-analytics"],
    orbitRadius: 160,
    orbitSpeed: 0.009
  },
  {
    id: "sk-seo",
    name: "SEO (Search Engine Optimization)",
    category: "SEO & Organic",
    level: 94,
    iconName: "TrendingUp",
    relatedServiceIds: ["serv-seo", "serv-shopify"],
    orbitRadius: 130,
    orbitSpeed: -0.011
  },
  {
    id: "sk-ga4",
    name: "GA4 (Google Analytics 4)",
    category: "Analytics & Tracking",
    level: 92,
    iconName: "BarChart3",
    relatedServiceIds: ["serv-analytics", "serv-tracking"],
    orbitRadius: 180,
    orbitSpeed: 0.008
  },
  {
    id: "sk-gtm",
    name: "GTM (Google Tag Manager)",
    category: "Analytics & Tracking",
    level: 90,
    iconName: "Activity",
    relatedServiceIds: ["serv-tracking", "serv-meta-ads"],
    orbitRadius: 210,
    orbitSpeed: -0.007
  },
  {
    id: "sk-shopify",
    name: "Shopify",
    category: "Platforms & CMS",
    level: 93,
    iconName: "ShoppingBag",
    relatedServiceIds: ["serv-shopify", "serv-meta-ads"],
    orbitRadius: 140,
    orbitSpeed: 0.014
  },
  {
    id: "sk-woocommerce",
    name: "WooCommerce",
    category: "Platforms & CMS",
    level: 89,
    iconName: "Layers",
    relatedServiceIds: ["serv-woocommerce"],
    orbitRadius: 170,
    orbitSpeed: -0.01
  },
  {
    id: "sk-wordpress",
    name: "WordPress",
    category: "Platforms & CMS",
    level: 91,
    iconName: "Globe",
    relatedServiceIds: ["serv-seo", "serv-woocommerce"],
    orbitRadius: 200,
    orbitSpeed: 0.006
  },
  {
    id: "sk-canva",
    name: "Canva Pro",
    category: "Design & Creative",
    level: 95,
    iconName: "Palette",
    relatedServiceIds: ["serv-smm", "serv-meta-ads"],
    orbitRadius: 120,
    orbitSpeed: -0.013
  },
  {
    id: "sk-photoshop",
    name: "Photoshop",
    category: "Design & Creative",
    level: 86,
    iconName: "Image",
    relatedServiceIds: ["serv-smm"],
    orbitRadius: 190,
    orbitSpeed: 0.007
  },
  {
    id: "sk-ai-tools",
    name: "AI Growth Tools",
    category: "AI & Automation",
    level: 94,
    iconName: "Cpu",
    relatedServiceIds: ["serv-strategy", "serv-smm"],
    orbitRadius: 150,
    orbitSpeed: 0.015
  },
  {
    id: "sk-chatgpt",
    name: "ChatGPT",
    category: "AI & Automation",
    level: 96,
    iconName: "Bot",
    relatedServiceIds: ["serv-smm", "serv-strategy"],
    orbitRadius: 125,
    orbitSpeed: -0.016
  },
  {
    id: "sk-gemini",
    name: "Gemini",
    category: "AI & Automation",
    level: 95,
    iconName: "Sparkles",
    relatedServiceIds: ["serv-strategy", "serv-seo"],
    orbitRadius: 165,
    orbitSpeed: 0.011
  },
  {
    id: "sk-claude",
    name: "Claude",
    category: "AI & Automation",
    level: 93,
    iconName: "Zap",
    relatedServiceIds: ["serv-strategy", "serv-email"],
    orbitRadius: 220,
    orbitSpeed: -0.005
  }
];

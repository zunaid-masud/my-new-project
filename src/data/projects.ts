import { ProjectItem } from '../types';

export const initialProjects: ProjectItem[] = [
  {
    id: "proj-01",
    name: "Wispa & Exquisite Luxury Handbags Scaling",
    clientName: "Wispa Luxury Goods LLC",
    country: "United States",
    countryCode: "US",
    category: "Shopify",
    service: "Meta Ads & E-commerce Funnel Scaling",
    websiteUrl: "",
    shortDescription: "End-to-end luxury fashion ad campaign restructure yielding 4.2x ROAS and a 48% reduction in Customer Acquisition Cost.",
    fullDescription: "High-ticket luxury leather goods require sophisticated trust-building, retargeting sequences, and micro-moment dynamic creative testing. We redesigned the Meta pixel events, GTM data layer, and targeted affluent buyer personas.",
    challenge: "High cost-per-purchase ($84 CPA) and stagnant retargeting performance with audience fatigue on standard catalog carousels.",
    strategy: "Implemented 3-stage full-funnel Meta framework: Top of Funnel (lifestyle UGC & luxury video hooks), Middle of Funnel (curated collection carousels with social proof), Bottom of Funnel (dynamic retargeting with exclusive VIP offers).",
    execution: "Constructed Advantage+ shopping campaigns, custom custom-conversions for luxury cart thresholds, and enhanced server-side Conversion API (CAPI).",
    solution: "Re-architected campaign structure into segmented ad sets, integrated Meta CAPI with Shopify, and deployed interactive luxury unboxing reels.",
    result: "Achieved record $318,000+ in trackable revenue with 4.2x blended ROAS and 10,200+ confirmed conversions.",
    technologies: ["Meta Ads Manager", "Shopify Plus", "Meta CAPI", "Google Tag Manager", "Canva Pro", "Hotjar"],
    metrics: [
      { label: "ROAS", value: "4.2x", change: "+140%", isPositive: true },
      { label: "Conversions", value: "10.2K", change: "+85%", isPositive: true },
      { label: "CPA Reduction", value: "-48%", change: "-$40.32", isPositive: true },
      { label: "Revenue Generated", value: "$318K+", change: "+210%", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",

    beforeImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop",

    afterImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",

    // Add 4 direct image URLs here
    galleryImages: [
      "https://kommodo.ai/i/OjN5vXq3MJ3qTp1JgNNb",
      "https://kommodo.ai/i/7tVagUt7z9whEwTOlSni",
      "https://kommodo.ai/i/QXcZPUm1IIYM2Y7m3bU4",
      ""
    ],

    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-luxurious-environment-41006-large.mp4",

    testimonial: {
      quote: "Zunaid completely overhauled our paid media strategy. Our ROAS spiked from 1.8x to over 4x within 60 days. An absolute master of data-driven e-commerce growth!",
      author: "Jennifer T.",
      role: "Founder, Exquisite Handbags NYC"
    },

    projectDate: "2025 - 2026",
    featured: true
  },

  {
    id: "proj-02",
    name: "Xtreme Fitness 4U Global Shopify Scaling",
    clientName: "Xtreme Fitness Equipment",
    country: "United Kingdom",
    countryCode: "GB",
    category: "Shopify",
    service: "Google Search, Performance Max & Shopping",
    websiteUrl: "",
    shortDescription: "Massive scale Google Ads campaign managing £212K+ ad spend across 980K impressions, lowering average CPC to £0.71.",
    fullDescription: "A dominant search and shopping overhaul targeting high-intent commercial fitness keywords, gym installations, and consumer home fitness machines with negative keyword sculpting and smart bidding strategies.",
    challenge: "High competitor CPCs (>£2.50) and low search impression share in tier-1 UK and European markets.",
    strategy: "Implemented SKAG + Theme-based exact match search clusters, segmented Performance Max campaigns with localized asset groups, and dynamic merchant center promotions.",
    execution: "Aggressive negative keyword lists, Dayparting bid adjustments, target ROAS automated bidding, and conversion tracking via GA4.",
    solution: "Rebuilt Google Merchant Center feed with rich product attributes, deployed granular target ROAS campaigns, and launched dynamic remarketing.",
    result: "Generated 52.3K clicks, 1.8K high-ticket conversions, and maintained a low £0.71 CPC across competitive markets.",
    technologies: ["Google Ads", "Google Merchant Center", "GA4", "Google Tag Manager", "Shopify", "SEMrush"],
    metrics: [
      { label: "Total Impressions", value: "35.2M", change: "+320%", isPositive: true },
      { label: "Total Clicks", value: "233K", change: "+190%", isPositive: true },
      { label: "Average CPC", value: "$0.41", change: "-62%", isPositive: true },
      { label: "Conversion Rate", value: "29.0%", change: "+14.5%", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",

    beforeImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",

    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",

    galleryImages: [
      "",
      "https://kommodo.ai/i/4VvgxBObpwWXNMhEb4PB",
      "https://kommodo.ai/i/srkkA5a0SDz5QUyVxQrW",
      "https://kommodo.ai/i/Q7fKz02BlT007Mhx5mhF"
    ],

    projectDate: "2024 - 2026",
    featured: true
  },

  {
    id: "proj-03",
    name: "Baby Store & Accessories Shopify Optimization & SEO",
    clientName: "Baby Heaven Co.",
    country: "Canada",
    countryCode: "CA",
    category: "SHOPIFY",
    service: "Shopify Store CRO & Technical SEO",
    websiteUrl: "https://babystoreaccessories.com",
    shortDescription: "Shopify UX & conversion rate optimization accompanied by organic technical SEO architecture and collection ranking.",
    fullDescription: "Transformed a cluttered baby essentials store into a high-trust, fast-loading shopping experience with optimized collection hierarchies, structured product schema, and high-converting product detail pages.",
    challenge: "Drop-off at checkout (over 78% cart abandonment), slow mobile page speeds (LCP > 4.8s), and unranked category pages.",
    strategy: "Re-engineered UI/UX for one-click purchases, sticky add-to-cart badges, trust seals, and programmatic schema markup for organic Google snippets.",
    execution: "Optimized mobile page speed to 1.2s LCP, streamlined checkout funnel, implemented Klaviyo automated flows, and generated 40+ keyword rich collection pages.",
    solution: "Eliminated layout friction, introduced bundle discounts, optimized meta descriptions, and built high-authority organic backlinks.",
    result: "Conversion rate increased from 1.4% to 3.9%, organic organic traffic grew by +215%, and mobile sales surged by +82%.",
    technologies: ["Shopify Liquid", "PageFly", "Google Search Console", "Klaviyo", "Ahrefs", "Schema.org"],
    metrics: [
      { label: "Organic Traffic", value: "+215%", change: "+45K/mo", isPositive: true },
      { label: "Checkout Conversion", value: "3.9%", change: "+178%", isPositive: true },
      { label: "Mobile Speed", value: "98/100", change: "+46 pts", isPositive: true },
      { label: "Average Order Value", value: "$68.50", change: "+34%", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop",

    beforeImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000&auto=format&fit=crop",

    afterImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1000&auto=format&fit=crop",

    galleryImages: [
      "https://kommodo.ai/i/L7XgqLqNY18XQ5YD57eW",
      "https://kommodo.ai/i/ScFzDSLQI9DhdbPJVmB7",
      "https://kommodo.ai/i/IBitaYX1IUJFfsdByFhR",
      "https://kommodo.ai/i/FC40ORUGvY8T1PKxro8O"
    ],

    testimonial: {
      quote: "Our store looks world-class and orders started flying in within two weeks of launching the new funnel and SEO updates.",
      author: "Maria S.",
      role: "Operations Lead, Baby Heaven"
    },

    projectDate: "2025",
    featured: true
  },

  {
    id: "proj-04",
    name: "Enterprise B2B SaaS Global Lead Generation",
    clientName: "Viginet Cloud Systems",
    country: "Germany",
    countryCode: "DE",
    category: "MARKETING",
    service: "High-Intent Lead Gen & Account-Based Marketing",
    websiteUrl: "https://viginet-cloud.io",
    shortDescription: "Multi-touch B2B lead generation engine delivering 38 qualified enterprise demos at a high 10.76% Click-Through Rate.",
    fullDescription: "Designed an automated inbound lead acquisition framework targeting CTOs, IT managers, and enterprise decision makers across Western Europe.",
    challenge: "Extremely long sales cycles and low inbound lead quality from generic social campaigns.",
    strategy: "Laser-targeted Google Search for high-intent software migration keywords coupled with LinkedIn sponsored content and gated whitepapers.",
    execution: "Created high-converting interactive ROI calculator landing pages and CRM-integrated automated lead scoring.",
    solution: "Segmented audience clusters, deployed multi-stage email nurturing cadences, and set up real-time Slack lead alerts for sales reps.",
    result: "Generated 38 enterprise demos in 30 days with a 10.76% CTR and 28% close rate on SQLs.",
    technologies: ["HubSpot CRM", "Google Ads", "LinkedIn Campaign Manager", "Zapier", "GA4", "WordPress"],
    metrics: [
      { label: "CTR", value: "10.76%", change: "+7.2%", isPositive: true },
      { label: "Qualified Leads", value: "38.00", change: "+180%", isPositive: true },
      { label: "Cost Per Lead", value: "€107.60", change: "-55%", isPositive: true },
      { label: "Pipeline Value", value: "€420K", change: "+310%", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",

    galleryImages: [
      "",
      "",
      "",
      ""
    ],

    projectDate: "2026",
    featured: true
  },

  {
    id: "proj-05",
    name: "Complete Technical SEO & Domain Authority Architecture",
    clientName: "Alpha Tech Hub",
    country: "Australia",
    countryCode: "AU",
    category: "SEO",
    service: "Technical & On-Page SEO Overhaul",
    websiteUrl: "https://alphatechhub.com.au",
    shortDescription: "Zero to 120K monthly organic impressions via core web vitals optimization, semantic topic clusters, and backlink outreach.",
    fullDescription: "A comprehensive SEO engineering project resolving 404 crawl errors, index bloat, missing canonicals, and duplicate content while establishing topical authority in competitive tech niches.",
    challenge: "Google Core algorithm penalty dropped impressions by 60% due to duplicate thin affiliate pages.",
    strategy: "Pruned 2,000+ thin URLs, restructured internal silo linking, implemented dynamic FAQ & product schema, and authored 15 comprehensive pillar guides.",
    execution: "Achieved 100/100 Core Web Vitals, secured 45+ DA 50+ contextual backlinks, and recaptured #1 rankings for primary commercial keywords.",
    solution: "Cleaned site architecture, built semantic keyword hierarchy, and implemented continuous rank tracking with daily SERP alerts.",
    result: "Organic clicks grew to 120K with 1.2M impressions and over 140 first-page keyword positions.",
    technologies: ["Ahrefs", "Google Search Console", "Screaming Frog", "SurferSEO", "WordPress", "RankMath"],
    metrics: [
      { label: "Organic Clicks", value: "120K", change: "+240%", isPositive: true },
      { label: "Impressions", value: "1.2M", change: "+410%", isPositive: true },
      { label: "Top 3 Keywords", value: "84", change: "+62", isPositive: true },
      { label: "Domain Rating", value: "48 DR", change: "+18 pts", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",

    galleryImages: [
      "",
      "",
      "",
      ""
    ],

    projectDate: "2025",
    featured: false
  },

  {
    id: "proj-06",
    name: "Multi-Location Local SEO & Google Business Profile Ranking",
    clientName: "Apex Medical & Wellness Centers",
    country: "United States",
    countryCode: "US",
    category: "LOCAL SEO",
    service: "Local Pack Domination & GMB Optimization",
    websiteUrl: "https://apexwellnessclinics.com",
    shortDescription: "Secured top-3 Google Maps rankings across 12 clinic locations resulting in 4,800+ phone calls and direction requests.",
    fullDescription: "Engineered local citation consistency, geo-tagged photo uploads, localized landing pages, review generation workflows, and localized service schema.",
    challenge: "Clinics were invisible on Google Maps 3-pack outside a 0.5-mile radius.",
    strategy: "Built local proximity signals, high-authority NAP citations, optimized primary/secondary categories, and implemented SMS review automation.",
    execution: "Optimized 12 Google Business Profiles, published weekly localized posts, and acquired local press citations.",
    solution: "Structured local landing pages with embedded Google Maps and localized FAQ schemas.",
    result: "320% surge in patient booking inquiries, 4,800+ inbound calls, and 100% of locations in the top-3 Local Pack.",
    technologies: ["Google Business Profile", "BrightLocal", "Whitespark", "Google Analytics", "WordPress"],
    metrics: [
      { label: "Inbound Phone Calls", value: "+320%", change: "+4.8K calls", isPositive: true },
      { label: "Map Views", value: "280K", change: "+195%", isPositive: true },
      { label: "Local Pack Rankings", value: "#1 - #3", change: "12 Locations", isPositive: true },
      { label: "New Reviews", value: "480+", change: "4.9 ★ avg", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",

    galleryImages: [
      "",
      "",
      "",
      ""
    ],

    projectDate: "2025 - 2026",
    featured: false
  },

  {
    id: "proj-07",
    name: "WooCommerce High-Ticket Custom Furniture Growth",
    clientName: "Nordic Haven Studio",
    country: "Sweden",
    countryCode: "SE",
    category: "WEB",
    service: "WooCommerce Growth & Funnel Optimization",
    websiteUrl: "https://nordichavenstudio.se",
    shortDescription: "Custom WooCommerce checkout redesign, speed optimization, and dynamic Pinterest & Meta catalog advertising.",
    fullDescription: "Crafted a seamless custom furniture purchasing flow with custom 3D wood finish previews, flexible payment integration (Klarna/Stripe), and dynamic social retargeting.",
    challenge: "High cart abandonment on customized furniture configurations and sluggish WordPress database queries.",
    strategy: "Optimized WooCommerce database, cached dynamic fragments, implemented Klarna express checkout, and launched high-converting Pinterest showcase ads.",
    execution: "Streamlined checkout to a 2-step frictionless flow with live shipping estimators and financing breakdowns.",
    solution: "Rebuilt checkout UI with modern Tailwind styling, added real-time stock notifications, and integrated automated abandoned cart recovery sequences.",
    result: "Average Order Value increased by +42%, cart abandonment dropped from 74% to 49%, and total store revenue grew by 165%.",
    technologies: ["WooCommerce", "WordPress", "Stripe", "Klarna", "Meta Catalog", "Pinterest Ads"],
    metrics: [
      { label: "AOV Growth", value: "+42%", change: "+$240", isPositive: true },
      { label: "Abandonment Rate", value: "-25%", change: "Down to 49%", isPositive: true },
      { label: "Page Load Time", value: "0.8s", change: "-2.4s", isPositive: true },
      { label: "ROAS on Pinterest", value: "3.6x", change: "+110%", isPositive: true }
    ],

    coverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",

    galleryImages: [
      "",
      "",
      "",
      ""
    ],

    projectDate: "2025",
    featured: false
  }
];
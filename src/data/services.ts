import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "serv-meta-ads",
    title: "Meta Ads",
    category: "Paid Advertising",
    tagline: "Performance-focused Facebook & Instagram advertising engineered for scale.",
    description: "High-ROI paid social campaigns designed with rigorous audience segmentation, Advantage+ machine learning frameworks, creative iteration, and server-side Conversion API (CAPI) tracking.",
    deliverables: [
      "Full-Funnel Ad Architecture (TOF/MOF/BOF)",
      "High-Converting Copywriting & Hook Ideation",
      "Dynamic Product Ads & Catalog Retargeting",
      "Meta Pixel & Server-Side CAPI Setup",
      "A/B Creative & Audience Split-Testing"
    ],
    impactMetric: "Avg 3.8x - 4.5x ROAS",
    iconName: "Target",
    accentColor: "blue"
  },
  {
    id: "serv-google-ads",
    title: "Google Ads",
    category: "Search & Intent",
    tagline: "Search, display, and Performance Max campaigns targeting high-intent buyers.",
    description: "Capture qualified customer demand with precision search keyword clusters, negative keyword sculpting, Google Shopping feed optimization, and algorithmic target CPA/ROAS bidding.",
    deliverables: [
      "Google Search & High-Intent Keyword Sculpting",
      "Performance Max & Shopping Feed Optimization",
      "Negative Keyword Audits to Eliminate Waste",
      "Target ROAS & Smart Bidding Architecture",
      "Search Impression Share Dominance"
    ],
    impactMetric: "Up to -52% Lower Cost-Per-Click",
    iconName: "Search",
    accentColor: "red"
  },
  {
    id: "serv-seo",
    title: "SEO (Search Engine Optimization)",
    category: "Organic Growth",
    tagline: "Technical, on-page, off-page, and programmatic SEO strategies for organic dominance.",
    description: "Build an organic growth engine with structured data, Core Web Vitals optimization, semantic topical authority clustering, crawl budget management, and white-hat contextual backlink acquisition.",
    deliverables: [
      "Comprehensive Technical SEO & Crawl Audits",
      "Topical Keyword Maps & Content Silos",
      "Core Web Vitals & Page Speed Acceleration",
      "Structured Schema Markup (JSON-LD)",
      "High-Authority Contextual Link Building"
    ],
    impactMetric: "+180% Avg Organic Traffic Growth",
    iconName: "TrendingUp",
    accentColor: "blue"
  },
  {
    id: "serv-shopify",
    title: "Shopify Marketing",
    category: "E-Commerce",
    tagline: "Store optimization, traffic acquisition, and checkout conversion improvement.",
    description: "Turn your Shopify store into a revenue machine. From friction-free one-page checkouts and bundle recommendations to high-intent traffic generation and customer lifetime value expansion.",
    deliverables: [
      "Conversion Rate Optimization (CRO) UX Audits",
      "Shopify App Ecosystem & Tag Integration",
      "Average Order Value (AOV) Boosters",
      "Mobile Speed & UX Friction Elimination",
      "Omnichannel Ad & Analytics Synchronization"
    ],
    impactMetric: "+35% Higher Checkout Conversion",
    iconName: "ShoppingBag",
    accentColor: "blue"
  },
  {
    id: "serv-woocommerce",
    title: "WooCommerce Marketing",
    category: "E-Commerce",
    tagline: "E-commerce growth, performance optimization, and custom funnel engineering.",
    description: "Tailored strategies for WordPress & WooCommerce stores, resolving database query bottlenecks, implementing instant payment gateways, and deploying dynamic product remarketing.",
    deliverables: [
      "WooCommerce Funnel & Checkout Optimization",
      "Product Catalog Sync to Meta & Google",
      "Dynamic Retargeting & Upsell Sequences",
      "Database & Query Caching Speedups",
      "Cart Abandonment Recovery Frameworks"
    ],
    impactMetric: "-28% Cart Abandonment",
    iconName: "Layers",
    accentColor: "red"
  },
  {
    id: "serv-smm",
    title: "Social Media Marketing",
    category: "Brand & Organic Social",
    tagline: "Content strategy, audience growth, and community engagement systems.",
    description: "Develop a cohesive brand presence that commands attention. Strategic multi-platform content scheduling, viral video hooks, graphic assets, and community engagement workflows.",
    deliverables: [
      "Brand Persona & Creative Direction",
      "Short-Form Video & Reel Hook Strategy",
      "High-Engagement Visual Graphics (Canva/PS)",
      "Community Management & Inbound Nurturing",
      "Organic-to-Paid Amplification Bridge"
    ],
    impactMetric: "3x Higher Engagement Rate",
    iconName: "Share2",
    accentColor: "blue"
  },
  {
    id: "serv-email",
    title: "Email Marketing",
    category: "Retention & LTV",
    tagline: "Lead nurturing, automated lifecycle journeys, and customer retention flows.",
    description: "Maximize customer lifetime value with automated behavioral flows in Klaviyo, Mailchimp, and HubSpot. From welcome sequences and browse abandonment to VIP win-back campaigns.",
    deliverables: [
      "Automated Welcome & Onboarding Sequences",
      "Abandoned Cart & Browse Recovery Flows",
      "Segmented VIP & Loyalty Campaigns",
      "Email Deliverability & Inbox Placement Audit",
      "High-Converting HTML Template Design"
    ],
    impactMetric: "30%+ Email Revenue Contribution",
    iconName: "Mail",
    accentColor: "blue"
  },
  {
    id: "serv-leadgen",
    title: "Lead Generation",
    category: "Acquisition",
    tagline: "High-quality, qualified B2B & B2C customer acquisition funnels.",
    description: "Generate consistent pipelines of sales-ready prospects using interactive landing pages, qualification surveys, automated CRM synchronization, and multi-channel retargeting.",
    deliverables: [
      "Frictionless Multi-Step Lead Capture Pages",
      "Automated CRM Lead Routing & Notification",
      "Audience Scoring & Intent Qualification",
      "B2B LinkedIn & Google Search Integration",
      "Cost-Per-Lead (CPL) Minimization"
    ],
    impactMetric: "99.8% Lead Quality Score",
    iconName: "Users",
    accentColor: "red"
  },
  {
    id: "serv-strategy",
    title: "Marketing Strategy",
    category: "Consulting & Growth",
    tagline: "Data-driven digital growth roadmaps and multi-channel scaling plans.",
    description: "Holistic commercial strategy aligning your product positioning, pricing economics, competitor landscape, and CAC:LTV metrics into a predictable, scalable growth roadmap.",
    deliverables: [
      "Competitor Intelligence & Market Gap Analysis",
      "Unit Economics & CAC:LTV Projections",
      "Quarterly Growth Roadmaps & OKRs",
      "Omnichannel Attribution Modeling",
      "Brand Positioning & Value Proposition"
    ],
    impactMetric: "Clear 90-Day Scaling Blueprint",
    iconName: "Compass",
    accentColor: "blue"
  },
  {
    id: "serv-tracking",
    title: "Conversion Tracking (GA4 & GTM)",
    category: "Analytics & Tracking",
    tagline: "Advanced GA4, Google Tag Manager, and server-side tracking setup.",
    description: "Ensure 100% data integrity with customized Google Tag Manager data layers, Enhanced eCommerce events, cross-domain measurement, and cookieless server-side tracking.",
    deliverables: [
      "Custom GTM DataLayer Event Implementation",
      "GA4 Enhanced Measurement & Funnel Reports",
      "Cross-Domain & Iframe Checkout Tracking",
      "Server-Side Tagging & Privacy Compliance",
      "Form Submission & Phone Call Attribution"
    ],
    impactMetric: "100% Clean Event Attribution",
    iconName: "Activity",
    accentColor: "blue"
  },
  {
    id: "serv-analytics",
    title: "Google Analytics",
    category: "Data & Reporting",
    tagline: "In-depth data analysis, user cohort tracking, and executive dashboards.",
    description: "Transform complex data into actionable commercial insights. Custom Looker Studio dashboards, user drop-off analysis, traffic source profitability, and automated executive reports.",
    deliverables: [
      "Custom Looker Studio / Data Studio Dashboards",
      "User Journey & Cart Drop-Off Diagnostics",
      "Cohort & Retention Lifetime Analysis",
      "Channel ROAS & Cost-Per-Acquisition Audits",
      "Automated Weekly Executive Performance Summaries"
    ],
    impactMetric: "Real-Time Actionable Business Intel",
    iconName: "BarChart3",
    accentColor: "red"
  }
];

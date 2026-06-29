import {
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
  ClevertechLogo,
  BimLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_AI = {
  name: "Rishi Agarwal",
  initials: "RA",
  location: "Mumbai, India",
  locationLink: "https://maps.app.goo.gl/XSgSp6gNPUjLzU8s8",
  about: "AI Systems Builder | Agentic Workflows | Founder",
  summary:
    "I build with Claude, not just use it. Founded Bombay Print Lab (₹23L+ annual revenue) where I've shipped Bombay-Terminal (internal ops automation, 40% overhead reduction), an AI-assisted STL customisation pipeline, and a live AI image generation product — all in production. Currently at Accenture working on LLM-based AI agent systems at scale. Background in Strategic Design Management means I build things that are both technically solid and experientially intentional. I reach for new tools before they're mainstream and I ship.",
  avatarUrl:
    "https://github.com/1amrishi/resume/blob/main/src/images/logos/Rishi_Avatar.jpg?raw=true",
  personalWebsiteUrl: "https://rishiag.com",
  contact: {
    email: "hello@rishiag.com",
    tel: "+917076267167",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/1amrishi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishiagarwalslg/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "ATLAS SkillTech University",
      degree: "Bachelor of Design — Strategic Design Management (Minor: Furniture & Lighting Design)",
      start: "2021",
      end: "2025",
    },
    {
      school: "Don Bosco School, Siliguri",
      degree: "Class 12 — Commerce & Graphic Design",
      start: "2007",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Accenture",
      link: "",
      badges: ["OnSite", "AI Agents", "Production"],
      title: "User Experience Engineering Analyst",
      logo: ParabolLogo,
      start: "Sept 2025",
      end: "Present",
      description:
        "Working on LLM-based AI agent systems in production — defining product requirements, mapping agent behaviour to real developer workflows, and ensuring agentic tools reduce manual overhead at scale. Daily exposure to how Claude-based agents behave beyond prototype contexts: edge cases, reliability, and engineering team integration.",
    },
    {
      company: "Bombay Print Lab",
      link: "https://bombayprintlab.com",
      badges: ["Founder", "AI Products", "Shipped"],
      title: "Founder & Product Lead",
      logo: ConsultlyLogo,
      start: "Mar 2024",
      end: "Present",
      description:
        "Founded and scaled a D2C 3D printing business to ₹23L+ annual revenue. Built Bombay-Terminal — a custom internal ops dashboard (order automation, print queue, inventory, multi-printer management) that reduced manual overhead by 40%. Built an AI-assisted STL customisation pipeline. Currently shipping an AI image generation product line using Gemini via OpenRouter and Tripo AI for photo-to-3D-mesh generation, including custom photo validation logic and a browser-based generation tool.",
    },
    {
      company: "Landor",
      link: "https://www.landor.com",
      badges: ["Brand Strategy", "Global Agency"],
      title: "Strategy Intern",
      logo: BimLogo,
      start: "Jan 2025",
      end: "Jun 2025",
      description:
        "Worked with Landor's client portfolio on brand strategy and positioning. Hands-on experience inside one of the world's leading creative brand agencies — useful context for building AI tools for creative and brand environments.",
    },
    {
      company: "Runtime Solutions Pvt. Ltd.",
      link: "",
      badges: ["OnSite", "Dubai Client"],
      title: "Business Design Consultant",
      logo: ParabolLogo,
      start: "Jun 2024",
      end: "Jul 2024",
      description:
        "Delivered pitch decks and digital solutions for a Dubai-based real estate firm. Managed stakeholder relationships across Pharma, F&B, and Finance sectors.",
    },
    {
      company: "Red in the White",
      link: "https://www.instagram.com/redinthewhite/?hl=en",
      badges: ["Remote", "Creative Studio"],
      title: "Motion Designer",
      logo: ClevertechLogo,
      start: "Jan 2023",
      end: "Nov 2023",
      description:
        "Created motion design and promotional content for FinTech and AI clients including Tartan AI, MirrAR, and Flexiloans.",
    },
    {
      company: "Meet Interiors",
      link: "https://www.instagram.com/meetinteriors.hq/",
      badges: ["Founder"],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "May 2021",
      end: "Jan 2024",
      description:
        "Built a two-sided marketplace connecting interior designers with clients — directory, portfolio management, and lead generation. Designed and built the full platform from scratch.",
    },
  ],
  skills: [
    "Claude / Claude Code",
    "Anthropic APIs",
    "MCP (Model Context Protocol)",
    "Agentic AI Systems",
    "Prompt Engineering",
    "AI Workflow Orchestration",
    "Gemini / Image Generation",
    "OpenRouter API",
    "Tripo AI (photo-to-3D)",
    "Next.js / TypeScript",
    "Python / FastAPI",
    "Supabase",
    "Vercel / GitHub / Git",
    "Shopify & E-commerce Automation",
    "Service Design",
    "Product Management",
    "Figma & Prototyping",
  ],
  projects: [
    {
      title: "Bombay-Terminal",
      techStack: ["Next.js", "Supabase", "TypeScript", "Automation", "Production"],
      description:
        "Internal ops dashboard for Bombay Print Lab — print queue, order auto-import from Shopify, multi-printer management, inventory tracking. 40% reduction in manual overhead. Source is private.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/1amrishi",
        href: "https://github.com/1amrishi/bombay-terminal-docs",
      },
    },
    {
      title: "AI Figurine Platform",
      techStack: ["Gemini", "OpenRouter", "Tripo AI", "Next.js", "Supabase"],
      description:
        "Customer ordering platform + AI pipeline for custom 3D-printed figurines. Photo upload → Gemini image generation → 3D mesh (Tripo AI) → order. Includes custom photo validation and admin approval workflow.",
      logo: ConsultlyLogo,
      link: {
        label: "make.bombayprintlab.com",
        href: "https://make.bombayprintlab.com",
      },
    },
    {
      title: "MapTo3D",
      techStack: ["Python", "FastAPI", "OpenStreetMap", "Trimesh", "Three.js"],
      description:
        "Generates 3D-printable STL files of real locations from OpenStreetMap data. Search any place in India, preview in-browser in 3D, export for printing. Built for Bombay Print Lab.",
      logo: MonitoLogo,
      link: {
        label: "github.com/1amrishi/mapto3d",
        href: "https://github.com/1amrishi/mapto3d",
      },
    },
    {
      title: "Empathy Flow Simulator",
      techStack: ["React", "TypeScript", "shadcn/ui", "Tailwind"],
      description:
        "Interactive simulation tool modelling how communication style alignment impacts customer-advisor interactions. Designed and built solo.",
      logo: ConsultlyLogo,
      link: {
        label: "empathy-flow-simulator.vercel.app",
        href: "https://empathy-flow-simulator.vercel.app",
      },
    },
    {
      title: "CV Website",
      techStack: ["Next.js", "TypeScript", "Vercel", "Claude Code"],
      description:
        "This resume — built with Next.js + TypeScript, deployed on Vercel, developed using Claude Code. Multiple role-specific variants at different routes from one codebase.",
      logo: ConsultlyLogo,
      link: {
        label: "rishiag.vercel.app",
        href: "https://rishiag.vercel.app/ai",
      },
    },
  ],
} as const;

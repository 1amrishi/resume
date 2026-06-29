import {
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
  ClevertechLogo,
} from "@/images/logos";
import { LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_YELLOW = {
  name: "Rishi Agarwal",
  initials: "RA",
  location: "Mumbai, India",
  locationLink: "https://maps.app.goo.gl/XSgSp6gNPUjLzU8s8",
  about: "AI Systems Builder | Agentic Workflows | Founder",
  summary:
    "I build with Claude, not just use it. Founded Bombay Print Lab (₹23L+ annual revenue) where I've shipped internal automation tooling, an AI-assisted 3D customisation pipeline, and a multi-model image generation product using GPT-Image-1, Gemini, and Tripo AI — all built and deployed in production. Currently at Accenture working on LLM-based AI agent systems at scale. My background in Strategic Design Management means I build things that are technically functional and experientially intentional — which matters in a creative environment. I learn new tools before they're mainstream, and I ship.",
  avatarUrl:
    "https://github.com/1amrishi/resume/blob/main/src/images/logos/Rishi_Avatar.jpg?raw=true",
  personalWebsiteUrl: "https://rishiag.com",
  contact: {
    email: "hello@rishiag.com",
    tel: "+917076267167",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishiagarwalslg/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Atlas Skilltech University",
      degree: "Bachelor's of Design — Strategic Design Management",
      start: "2021",
      end: "2025",
    },
    {
      school: "Don Bosco School Siliguri",
      degree: "10+2 (Commerce)",
      start: "2009",
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
      end: "Ongoing",
      description:
        "Working on LLM-based AI agent systems in production environments — defining product requirements, mapping agent behaviour to real developer workflows, and ensuring agentic tools reduce manual overhead at scale. Direct hands-on exposure to how Claude-based agents behave beyond prototype contexts: edge cases, reliability, and workflow integration with engineering teams.",
    },
    {
      company: "Bombay Print Lab",
      link: "https://bombayprintlab.com",
      badges: ["Founder", "AI Products", "Shipped"],
      title: "Founder & Product Lead",
      logo: ConsultlyLogo,
      start: "2023",
      end: "Present",
      description:
        "Founded and scaled a D2C 3D printing business to ₹23L+ annual revenue. Built Bombay-Terminal: a custom internal print queue management and order automation tool (AI-assisted, fully in production) that reduced manual overhead by 40%. Developed an AI-assisted STL customisation pipeline and am currently shipping a new product line using GPT-Image-1, Gemini via OpenRouter, and Tripo AI for photo-to-3D-mesh generation — includes a browser-based image generation tool and an automated photo validator with hard-fail/soft-warning logic. Full service blueprint: e-commerce UX, order flow, last-mile delivery, internal ops tooling.",
    },
    {
      company: "Red in the White",
      link: "https://www.instagram.com/redinthewhite/?hl=en",
      badges: ["Remote", "Creative Agency"],
      title: "Motion Designer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2024",
      description:
        "Created motion design and demo content for FinTech and AI clients including Tartan AI, MirrAR, and Flexiloans. Delivered fast-turnaround creative assets for a brand studio environment — directly relevant to working at the intersection of creative and technology.",
    },
    {
      company: "Runtime Solutions Pvt. Ltd.",
      link: "",
      badges: ["OnSite", "Dubai Client"],
      title: "Business Design Consultant",
      logo: ParabolLogo,
      start: "June 2024",
      end: "July 2024",
      description:
        "Delivered pitch decks and digital solutions for a Dubai-based real estate firm. Led website development and managed stakeholder relationships across Pharma, F&B, and Finance sectors.",
    },
    {
      company: "Ministry of Infrastructure (Netherlands)",
      link: "https://rishiag.com/project/plofsluis",
      badges: ["Service Design", "UNESCO"],
      title: "Experience Designer",
      logo: ParabolLogo,
      start: "2024",
      end: "2024",
      description:
        "Redesigned the visitor experience for Plofsluis, a UNESCO World Heritage Site. Conducted user research and proposed service interventions that the client approved for implementation — demonstrating systems thinking applied to complex, real-world environments.",
    },
    {
      company: "Meet Interiors",
      link: "https://www.instagram.com/meetinteriors.hq/",
      badges: ["Founder"],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2023",
      description:
        "Built a two-sided marketplace connecting interior designers with clients. Designed the full service flow and platform from scratch — first experience building a product people actually use.",
    },
  ],
  skills: [
    "Claude / Claude Code",
    "Anthropic APIs",
    "MCP (Model Context Protocol)",
    "Agentic AI Systems",
    "Prompt Engineering",
    "AI Workflow Orchestration",
    "Multi-model Pipelines",
    "API Integrations",
    "OpenRouter / GPT-Image-1 / Gemini",
    "Next.js / React / TypeScript",
    "Vercel / GitHub",
    "Shopify & E-commerce Automation",
    "Service Design",
    "Strategic Planning",
    "Figma & Prototyping",
  ],
  projects: [
    {
      title: "Bombay-Terminal",
      techStack: ["Internal Tool", "AI-Assisted Dev", "Automation", "Production"],
      description:
        "Custom-built print queue management and order automation system for Bombay Print Lab. Reduced manual processing overhead by 40%. Built entirely with AI-assisted development and deployed in production.",
      logo: ConsultlyLogo,
      link: {
        label: "bombayprintlab.com",
        href: "https://bombayprintlab.com",
      },
    },
    {
      title: "AI Figurine Pipeline",
      techStack: ["GPT-Image-1", "Gemini", "OpenRouter", "Tripo AI", "Multi-agent"],
      description:
        "Multi-model AI product pipeline for photo-to-3D-mesh generation. Includes a browser-based image generation tool, an automated photo validator with hard-fail/soft-warning logic, and an STL customisation layer. Currently in development.",
      logo: ConsultlyLogo,
      link: {
        label: "bombayprintlab.com",
        href: "https://bombayprintlab.com",
      },
    },
    {
      title: "CV Website (this page)",
      techStack: ["Next.js", "TypeScript", "Vercel", "GitHub", "Claude Code"],
      description:
        "Built and deployed this resume site using Next.js, TypeScript, and Vercel. Maintained via GitHub, developed and iterated using Claude Code. Multiple role-specific variants shipped at different routes — the same way I approach internal tooling.",
      logo: ConsultlyLogo,
      link: {
        label: "rishiag.vercel.app",
        href: "https://rishiag.vercel.app/yellow",
      },
    },
    {
      title: "Plofsluis Experience",
      techStack: ["Experience Design", "UNESCO", "Systems Thinking"],
      description:
        "Service design intervention to revitalise a dormant UNESCO heritage site. Approved for implementation — showing I can apply systems thinking to complex creative and real-world problems, not just technical ones.",
      logo: MonitoLogo,
      link: {
        label: "rishiag.com",
        href: "https://rishiag.com/project/plofsluis",
      },
    },
  ],
} as const;

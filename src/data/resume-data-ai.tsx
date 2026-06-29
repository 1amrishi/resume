import {
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  ParabolLogo,
  ClevertechLogo,
} from "@/images/logos";
import { LinkedInIcon } from "@/components/icons";

export const RESUME_DATA_AI = {
  name: "Rishi Agarwal",
  initials: "RA",
  location: "Mumbai, India",
  locationLink: "https://maps.app.goo.gl/XSgSp6gNPUjLzU8s8",
  about: "AI Builder | Product Developer | Founder",
  summary:
    "Builder and entrepreneur who uses AI tools — Claude, agentic pipelines, and generative models — to create real, revenue-generating products. Founded Bombay Print Lab (₹23L+ annual revenue), where I've shipped internal automation tooling and am currently developing a new AI image-generation-led product line. Background in Strategic Design Management (Atlas Skilltech University, Mumbai) means I build things that are intentional and designed, not just functional. Currently at Accenture working on AI agent systems in production environments.",
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
      degree: "Bachelor's of Design - Strategic Design Management",
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
      badges: ["OnSite", "AI Agents"],
      title: "User Experience Engineering Analyst",
      logo: ParabolLogo,
      start: "Sept 2025",
      end: "Ongoing",
      description:
        "Working with cross-functional engineering teams on AI agent systems — defining product requirements, mapping agent behaviour to real developer workflows, and ensuring agentic tools reduce manual overhead in production environments. Direct exposure to how LLM-based agents behave at scale, beyond prototype/demo contexts.",
    },
    {
      company: "Bombay Print Lab",
      link: "https://bombayprintlab.com",
      badges: ["Founder", "AI Products"],
      title: "Founder & Product Lead",
      logo: ConsultlyLogo,
      start: "2023",
      end: "Present",
      description:
        "Founded and scaled a D2C 3D printing business to ₹23L+ annual revenue on Shopify. Built Bombay-Terminal, a custom internal print queue management and order processing tool (vibe-coded, AI-assisted) that reduced manual overhead by 40%. Developed an AI-assisted STL customisation pipeline to generate and customise 3D printable files based on customer inputs. Currently building a new product line using GPT-Image-1, Gemini via OpenRouter, and Tripo AI for photo-to-3D-mesh generation — includes a custom browser-based image generation tool and an automated photo validator with hard-fail/soft-warning logic. Designed and implemented the full service blueprint: e-commerce UX, order flow, last-mile delivery, and internal ops tooling.",
    },
    {
      company: "Runtime Solutions Pvt. Ltd.",
      link: "https://rishiag.com/project/plofsluis",
      badges: ["OnSite", "Dubai Client"],
      title: "Business Design Consultant",
      logo: ParabolLogo,
      start: "June 2024",
      end: "July 2024",
      description:
        "Delivered pitch decks and digital solutions for Dubai-based real estate firm. Managed stakeholder relationships across Pharma, F&B, and Finance sectors. Led website development project for prominent UAE property developer.",
    },
    {
      company: "Ministry of Infrastructure (Netherlands)",
      link: "https://rishiag.com/project/plofsluis",
      badges: ["Service Design"],
      title: "Experience Designer",
      logo: ParabolLogo,
      start: "2024",
      end: "2024",
      description:
        "Redesigned the visitor experience for Plofsluis, a UNESCO World Heritage Site. Conducted user research and brainstorming sessions to increase site visibility and engagement. The client approved the proposed service interventions for implementation.",
    },
    {
      company: "Red in the White",
      link: "https://www.instagram.com/redinthewhite/?hl=en",
      badges: ["Remote"],
      title: "Motion Designer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2024",
      description:
        "Created motion design assets including demo videos and promotional content for FinTech and AI clients like Tartan AI, MirrAR, and Flexiloans.",
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
        "Identified a gap in the interior design discovery market and built a two-sided marketplace connecting designers with clients. Designed the entire service flow, reducing friction in portfolio management and lead generation.",
    },
  ],
  skills: [
    "Claude / Agentic AI",
    "MCP (Model Context Protocol)",
    "Prompt Engineering",
    "GPT-Image-1 / Gemini Image Gen",
    "OpenRouter API",
    "Tripo AI (image-to-3D mesh)",
    "HTML/JS (vibe-coded tooling)",
    "Shopify / E-commerce Automation",
    "Service Design",
    "Strategic Planning",
    "Product Management",
    "Figma & Prototyping",
    "Visual Design",
    "Adobe Creative Suite",
  ],
  projects: [
    {
      title: "Bombay-Terminal",
      techStack: ["Internal Tool", "Vibe-Coding", "Automation"],
      description:
        "Custom-built print queue management and order automation system for Bombay Print Lab. Reduced manual order processing overhead by 40%. Built entirely using vibe-coding and AI-assisted development.",
      logo: ConsultlyLogo,
      link: {
        label: "bombayprintlab.com",
        href: "https://bombayprintlab.com",
      },
    },
    {
      title: "AI Figurine Pipeline",
      techStack: ["Gemini", "OpenRouter", "Tripo AI", "In Development"],
      description:
        "AI image-generation product pipeline for custom 3D-printed figurines. Photo upload → Gemini image generation (via OpenRouter) → 3D mesh (Tripo AI). Includes custom photo validation and a browser-based generation tool.",
      logo: ConsultlyLogo,
      link: {
        label: "bombayprintlab.com",
        href: "https://bombayprintlab.com",
      },
    },
    {
      title: "Plofsluis Experience",
      techStack: ["Experience Design", "UNESCO Project"],
      description:
        "Service design intervention to revitalize a dormant UNESCO heritage site, focusing on visitor journey mapping and digital-physical touchpoints.",
      logo: ConsultlyLogo,
      link: {
        label: "rishiag.com",
        href: "https://rishiag.com/project/plofsluis",
      },
    },
    {
      title: "Isvaera",
      techStack: ["Business Design", "Process Optimization"],
      description:
        "Consulted for a non-profit to solve high employee churn. Redesigned their product customization workflow to improve operational efficiency.",
      logo: ConsultlyLogo,
      link: {
        label: "rishiag.com",
        href: "https://rishiag.com/project/isvaera",
      },
    },
    {
      title: "FurniCare",
      techStack: ["Service Design", "Sustainability"],
      description:
        "Designed a service ecosystem to educate users on modern furniture care, extending product lifecycles and promoting sustainability.",
      logo: MonitoLogo,
      link: {
        label: "rishiag.com",
        href: "https://rishiag.com/project/furnicare",
      },
    },
  ],
} as const;

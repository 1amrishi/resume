import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rishi Agarwal",
  initials: "RA",
  location: "Mumbai, India",
  locationLink: "https://maps.app.goo.gl/XSgSp6gNPUjLzU8s8",
  about:
    "Service Designer | Business Strategist | Founder",
  summary:"Entrepreneurial designer bridging business strategy and user experience through service design. Built revenue-generating ventures (₹23L+ annual) and led service interventions for UNESCO heritage sites. I design end-to-end service ecosystems — not just interfaces. Seeking opportunities to apply strategic design management expertise in high-impact environments.",
  avatarUrl: "https://github.com/1amrishi/resume/blob/main/src/images/logos/Rishi_Avatar.jpg?raw=true",
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
      degree: "10+2(Commerce)",
      start: "2009",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Bombay Print Lab",
      link: "https://bombayprintlab.com",
      badges: ["Founder", "Service Design"],
      title: "Founder & Product Lead",
      logo: ConsultlyLogo,
      start: "2023",
      end: "Present",
      description:
        "Founded and scaled a D2C 3D printing service to ₹23 Lakhs+ annual revenue. Designed the end-to-end service blueprint, from e-commerce UX (Shopify) to last-mile delivery. Implemented 'Bombay-Terminal', a custom internal tool to automate order processing and reduce manual overhead by 40%.",
    },
    {
      company: "Accenture",
      link: "",
      badges: ["OnSite"],
      title: "User Experience Engineering Analyst",
      logo: ParabolLogo,
      start: "Sept 2025",
      end: "Ongoing",
      description:
        "Collaborating with cross-functional engineering teams to define product requirements, ensuring AI agents effectively reduce manual developer overhead and improve deployment speed.",
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
    "Service Design",
    "Business Design",
    "Strategic Planning",
    "Problem Solving",
    "AI-Driven Development",
    "Visual Design",
    "Product Management",
    "Figma & Prototyping",
    "Adobe Creative Suite",
  ],
  projects: [
	  {
      title: "Plofsluis Experience",
      techStack: [
        "Experience Design",
        "UNESCO Project",
      ],
      description: "Service design intervention to revitalize a dormant UNESCO heritage site, focusing on visitor journey mapping and digital-physical touchpoints.",
      logo: ConsultlyLogo,
      link: {
        label: "rishiag.com",
        href: "https://rishiag.com/project/plofsluis",
      },
    },    
{
      title: "Isvaera",
      techStack: [
        "Business Design",
        "Process Optimization",
      ],
      description: "Consulted for a non-profit to solve high employee churn. Redesigned their product customization workflow to improve operational efficiency.",
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
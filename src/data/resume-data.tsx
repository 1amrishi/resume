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
import { GitHubIcon, LinkedInIcon, XIcon, instagram } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rishi Agarwal",
  initials: "RA",
  location: "Mumbai, India",
  locationLink: "https://maps.app.goo.gl/XSgSp6gNPUjLzU8s8",
  about:
    "Driven by user empathy and business acumen, I design solutions that unlock value for both users and organizations.",
  summary:"They say curiosity killed the cat, but for me, it sparked a fire. Not of destruction, mind you, but of creation. I love solving problems and making things people love. I'm a designer who brings ideas to life, simply and creatively. From business to service design, I can tell your brand's story with wit and understanding. Let's chat and see how I can make your vision a reality!",
  avatarUrl: "https://iamrishi.com/wp-content/uploads/2024/02/Rishi_HKU_Avatar.jpg",
  personalWebsiteUrl: "https://iamrishi.com",
  contact: {
    email: "contactrishiag@gmail.com",
    tel: "+917076267167",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishiagarwalslg//",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
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
      company: "Ministry of Infrastructure and Water Management - Netherlands",
      link: "https://www.government.nl/ministries/ministry-of-infrastructure-and-water-management",
      badges: ["OnSite"],
      title: "Experience Designer",
      logo: ParabolLogo,
      start: "2024",
      end: "2024",
      description:
        "I worked on Plofsluis, a UNESCO World Heritage Site that was established during WWII but is little known and rarely visited. We began brainstorming and came up with ideas to make it more visible and experienceable; the customer appreciated the ideas and plans to implement them in the following year.",
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
        "Helped them with creating motion design videos including but not limited to Demo Videos, Promotional Videos for clients like Tartan AI, MirrAR and Flexiloans using After Effects",
    },
    {
      company: "Meet Interiors",
      link: "https://www.instagram.com/meetinteriors.hq/",
      badges: ["On-Site"],
      title: "Founder",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2023",
      description:
        "I developed a comprehensive directory of interior designers, providing a platform that connects designers with clients while also offering tools to manage their portfolios. My role involved leveraging technology to streamline the process of connecting designers with potential clients, creating a user-friendly platform that simplifies the search for interior design services. Currently paused due to time constraints"
    },
    {
      company: "McCann Worldgroup",
      link: "https://www.mccannworldgroup.com/",
      badges: ["Remote"],
      title: "Graphic Designer",
      logo: NSNLogo,
      start: "2022",
      end: "2022",
      description: "Helped in designing and delivering social media content for brands like Kotak Mahindra Bank, Jio-BP and Emami",
    },
  ],
  skills: [
    "Service Design",
    "Business Design",
    "After Effects",
    "Final Cut Pro",
    "Photoshop",
    "Illustrator",
    "User Experience Design",
  ],
  projects: [
{
      title: "Plofsluis",
      techStack: [
        "Experience Design",
        "Client Project",
        "On-Site",
      ],
      description: "Helped make this UNESCO recognised heritage monument a more visible and experienceable monument for people all around the world",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },    
{
      title: "Isvaera",
      techStack: [
        "Business Design",
        "Client Project",
        "Non-Profit",
      ],
      description: "Helped them solve business challenges like employee churn and making their product customisation process easier",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "FurniCare",
      techStack: ["Service Design", "Academic"],
      description:
        "Established a service to assist individuals in taking better care of their furniture; many are clinging to cleaning techniques from the past, even though furniture has evolved greatly in that time.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
{
      title: "FurniCare",
      techStack: ["Service Design", "Academic"],
      description:
        "Established a service to assist individuals in taking better care of their furniture; many are clinging to cleaning techniques from the past, even though furniture has evolved greatly in that time.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
{
      title: "Meet Interiors",
      techStack: ["Side Project", "Service Design"],
      description:
        "Found a gap in the Indian Market where there was not rusted platform for people to find interior designer and relied on word of mouth, tried solving it by creating a service which was free for the designers and the visitors",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },    
{
      title: "SOLHFagito",
      techStack: ["Client Project", "Graphic Design"],
      description:
        "Helped this healthy drink brand with the social media content in collaboration with a team of designers through a agency called Byooooob",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    
  ],
} as const;

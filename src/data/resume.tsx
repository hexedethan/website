import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "HexedEthan",
  initials: "HE",
  url: "https://hexedethan.me",
  location: "Anaheim, CA",
  locationLink: "https://www.google.com/maps/place/anaheim+ca",
  description: "Computer Science/Cybersecurity Student",
  summary:
    "I'm a computer science student with a passion for building things. I'm always looking for new opportunities to learn and grow.",
  avatarUrl: "/snoopy.jpg",
  ogImage: "",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: {
      order: 2,
      enabled: false,
      heading: "Work Experience",
      presentLabel: "Present",
    },
    education: { order: 3, enabled: false, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "Projects I've built and contributed to.",
    },
    hackathons: {
      order: 7,
      enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6,
      enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a DM with a direct question and I'll respond whenever I can.",
    },
  },
  photos: [
    /*
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
     */
  ],
  skills: [
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "ethan@hexedethan.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hexedethan",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hexedethan",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@hexedethan",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ethan@hexedethan.me",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Meridian Labs",
      href: "https://meridian.so",
      badges: ["Founder"],
      location: "Austin, TX",
      title: "Co-founder & Engineer",
      logoUrl: "https://avatar.vercel.sh/meridian-labs?size=40",
      start: "January 2023",
      end: undefined,
      description:
        "Building a suite of developer productivity tools focused on local-first architecture and offline sync. Grew to 1,200 paying customers within the first year. Responsible for the full stack - product, engineering, and growth.",
    },
  ],
  education: [
    {
      school: "Founder Fellowship SF",
      href: "https://foundersfellowship.io",
      degree: "Cohort 4 - Founder in Residence",
      logoUrl: "https://avatar.vercel.sh/founder-fellowship?size=40",
      start: "2023",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Bakeologie",
      href: "https://www.roblox.com/communities/2910718/Bakeologie",
      dates: "June 2026 - Present",
      active: true,
      description:
        "Bakeologie is a Roblox group and community that I founded in 2026. We're currently working on our Bakery game for players to socialize and roleplay in.",
      technologies: ["Roblox Studio", "Luau"],
      links: [],
      image: "/Bakeologie.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description:
        "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
  ],
} as const;

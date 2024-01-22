import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Thom Browne",
    href: "/projects",
    tags: ["React", "Django", "Tailwind CSS", "MongoDB"],
    image: {
      LIGHT: "/images/projects/thombrowne.jpg",
      DARK: "/images/projects/thombrowne_dark.jpg",
    },
  },
  {
    index: 1,
    title: "Privilee",
    href: "/projects",
    tags: [
      "Vue.js",
      "Tailwind CSS",
      "Scss",
      "Vite",
      "MongoDB",
      "Automation",
      "Python"
    ],
    image: {
      LIGHT: "/images/projects/privilee.jpg",
      DARK: "/images/projects/privilee_dark.jpg",
    },
  },
  {
    index: 2,
    title: "APS",
    href: "/projects",
    tags: ["Next.js", "Node.js", "GraphQL", "CSS3", "JavaScript"],
    image: {
      LIGHT: "/images/projects/aps.jpg",
      DARK: "/images/projects/aps_dark.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Thom Browne",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/thombrowne.jpg",
      "/images/projects/thombrowne_1.jpg",
    ],
    description:
      "Developed a responsive web application using React and Node.js, resulting in a 43% increase in user engagement.",
    liveWebsiteHref: "https://www.thombrowne.com/",
  },
  {
    name: "Privilee",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/privilee.jpg",
      "/images/projects/privilee_dark.jpg",
    ],
    description:
      "Integrated the client web platform with admin dashboard platform built with Vue.js/Nuxt.js, Vite to raise the management analysis as 160%. ",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "Arizona Power Sweeping",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/aps.jpg",
      "/images/projects/aps_1.jpg",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  // {
  //   name: "My portfolio",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/portfolioDark.webp",
  //     "/images/projects/portfolioLight.webp",
  //   ],
  //   description:
  //     "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
  //   liveWebsiteHref: siteMetadata.siteUrl,
  // },
];

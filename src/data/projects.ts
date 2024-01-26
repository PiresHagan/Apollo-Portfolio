import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Waking Up",
    href: "/projects",
    tags: ["React", "NodeJS", "Docker", "GraphQL"],
    image: {
      LIGHT: "/images/projects/wakingup_1.jpg",
      DARK: "/images/projects/wakingup_2.jpg",
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
      "Python",
    ],
    image: {
      LIGHT: "/images/projects/privilee.jpg",
      DARK: "/images/projects/privilee_dark.jpg",
    },
  },
  {
    index: 2,
    title: "Lyveat",
    href: "/projects",
    tags: ["React", "Node.js", "Vue.js", "JavaScript"],
    image: {
      LIGHT: "/images/projects/lyveat_1.jpg",
      DARK: "/images/projects/lyveat_2.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Thom Browne",
    favicon: "/images/projects/logos/favicon.ico",
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
    favicon: "/images/projects/logos/favicon.ico",
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
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: ["/images/projects/aps.jpg", "/images/projects/aps_1.jpg"],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "Waking Up",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/wakingup_1.jpg",
      "/images/projects/wakingup_2.jpg",
    ],
    description:
      "Waking Up isn't just another meditation app—it's a new operating system for your mind. We help you discover the true purpose of meditation, and give you pressure- tested wisdom for living a more examined, fulfilling life. Here, you won't find any New Age fluff or religious dogma—just powerful training and insights.",
    liveWebsiteHref: "https://www.wakingup.com/",
  },
  {
    name: "Lyveat",
    favicon: "/images/projects/logos/favicon.ico",
    imageUrl: [
      "/images/projects/lyveat_1.jpg",
      "/images/projects/lyveat_2.jpg",
      "/images/projects/lyveat_3.jpg",
    ],
    description:
      "Lyveat is the first French restaurant delivery application outside major cities. A very practical solution when you don't have time to go shopping or want to take a quick meal break. Or simply treat yourself without having to cook! Lyveat is a similar and competing company to Uber Eats | Deliveroo.",
    liveWebsiteHref: "https://www.lyveat.com/",
  },
];

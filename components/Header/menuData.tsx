import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Meet the team",
    newTab: false,
    path: "/team",
  },
  {
    id: 2.1,
    title: "Events",
    newTab: false,
    path: "/events",
  },
  {
    id: 2.3,
    title: "Podcasts",
    newTab: false,
    path: "/podcast",
  },
  {
    id: 3,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Case Studies",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Data Analytics",
        newTab: false,
        path: "/blog",
      },
    ],
  },

  {
    id: 4,
    title: "Enigma",
    newTab: false,
    path: "/enigma",
  },

  {
    id: 5,
    title: "Initiatives",
    newTab: false,
    path: "/blog",
  }
] as const;

export default menuData;

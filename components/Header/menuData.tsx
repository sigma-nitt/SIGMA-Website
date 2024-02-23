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
    title: "About Us",
    newTab: false,
    path: "/aboutus",
  },
  {
    id: 3,
    title: "Meet the team",
    newTab: false,
    path: "/team",
  },
  {
    id: 3.1,
    title: "Events",
    newTab: false,
    path: "/events",
  },
  {
    id: 3.3,
    title: "Podcasts",
    newTab: false,
    path: "/podcast",
  },
  {
    id: 4,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 4.1,
        title: "Case Studies",
        newTab: false,
        path: "/casestudies",
      },
      {
        id: 4.2,
        title: "Data Analytics",
        newTab: false,
        path: "/casestudies",
      },
    ],
  },

  {
    id: 5,
    title: "Enigma",
    newTab: false,
    path: "/enigma",
  },

  {
    id: 6,
    title: "Initiatives",
    newTab: false,
    path: "/blog",
  }
];

export default menuData;

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
    // path: "/#features",
    path: "/aboutus",
  },
  {
    id: 3,
    title: "Meet the team",
    newTab: false,
    path: "/team",
  },
  {
    id: 5,
    title: "Achievements",
    newTab: false,
    path: "/events",
  },
  {
    id: 4,
    title: "Projects",
    newTab: false,
    submenu: [
      {
        id: 4.1,
        title: "Data Analytics",
        newTab: false,
        path: "/dataanalytics",
      },
      {
        id: 4.2,
        title: "Case Studies",
        newTab: false,
        path: "/casestudies",
      },
    ],
  },
  {
    id: 7,
    title: "Initiatives",
    newTab: false,
    submenu: [
      {
        id: 7.1,
        title: "Podcasts",
        newTab: false,
        path: "/podcast",
      },
      {
        id: 7.2,
        title: "Enigma",
        newTab: false,
        path: "/enigma",
      },
      {
        id: 7.3,
        title: "Resources",
        newTab: false,
        path: "/resources",
      },
      {
        id: 7.4,
        title: "Events",
        newTab: false,
        path: "/events",
      }
    ],
  },
  {
    id: 6,
    title: "Inductions",
    newTab: false,
    path: "/inductions",
  },
];

export default menuData;

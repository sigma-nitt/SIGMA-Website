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
    path: "#features",
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
    id: 4,
    title: "Inductions",
    newTab: false,
    path: "/inductions",
  },
  {
    id: 5,
    title: "Initiatives",
    newTab: false,
    submenu: [
      {
        id: 5.1,
        title: "Podcasts",
        newTab: false,
        path: "/podcast",
      },
      {
        id: 5.2,
        title: "Projects - Data Analytics",
        newTab: false,
        path: "/dataanalytics",
      },
      {
        id: 5.3,
        title: "Projects - Case Studies",
        newTab: false,
        path: "/casestudies",
      },
      {
        id: 5.4,
        title: "Enigma",
        newTab: false,
        path: "/enigma",
      },
      {
        id: 5.5,
        title: "Resources",
        newTab: false,
        path: "/resources",
      },
    ],
  },
  {
    id: 6,
    title: "Contact Us",
    newTab: false,
    path: "/contactus",
  }
];

export default menuData;

import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Characters",
    path: "/",
    icon: <BsPeopleFill />,
    cName: "nav-text",
  },
  {
    title: "Locations",
    path: "/locations",
    icon: <IoLocation />,
    cName: "nav-text",
  },
  {
    title: "Episodes",
    path: "/episodes",
    icon: <FaListAlt />,
    cName: "nav-text",
  },
];

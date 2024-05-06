import { IoPerson, IoCreateOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { BsGraphUpArrow } from "react-icons/bs";

export const dashboardAdminSidebarItems = [
  {
    name: "Account",
    path: "/dashboard",
    icon: IoPerson,
  },
  {
    name: "Create New",
    path: "/dashboard/create",
    icon: IoCreateOutline,
  },
  {
    name: "Manage Feedbacks",
    path: "/dashboard/feedbacks",
    icon: LuScrollText,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: BsGraphUpArrow,
  },
];

export const dashboardUserSidebarItems = [
  {
    name: "Account",
    path: "/dashboard",
    icon: IoPerson,
  },
  {
    name: "Available Forms",
    path: "/dashboard/forms",
    icon: IoCreateOutline,
  },
  {
    name: "Submitted Forms",
    path: "/dashboard/submissions",
    icon: LuScrollText,
  },
];

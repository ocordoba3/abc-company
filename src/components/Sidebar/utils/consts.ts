import { MdOutlineDashboard } from "react-icons/md";
import { LuUserRoundSearch } from "react-icons/lu";
import { AiOutlineUserAdd } from "react-icons/ai";

import { PATHS } from "../../../router/paths";

export const drawerWidth = 200;

export const SIDEBAR_ITEMS = [
  { label: "Clients", href: PATHS.clients, icon: MdOutlineDashboard },
  { label: "Search Client", href: PATHS.clients, icon: LuUserRoundSearch },
  { label: "Add Client", href: PATHS.clients, icon: AiOutlineUserAdd },
];

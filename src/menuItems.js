import Home from "@mui/icons-material/Home";
import Article from "@mui/icons-material/Article";
import Group from "@mui/icons-material/Group";
import Storefront from "@mui/icons-material/Storefront";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import AccountBox from "@mui/icons-material/AccountBox";

const MenuItems = [
  {
    id: 1,
    caption: "Home",
    href: "#home",
    icon: <Home />,
  },
  {
    id: 2,
    caption: "Pages",
    href: "#pages",
    icon: <Article />,
  },
  {
    id: 3,
    caption: "Groups",
    href: "#groups",
    icon: <Group />,
  },
  {
    id: 4,
    caption: "Marketplace",
    href: "#marketplace",
    icon: <Storefront />,
  },
  {
    id: 5,
    caption: "Friends",
    href: "#friends",
    icon: <Person />,
  },
  {
    id: 6,
    caption: "Settings",
    href: "#settings",
    icon: <Settings />,
  },
  {
    id: 7,
    caption: "Profile",
    href: "#profile",
    icon: <AccountBox />,
  },
];

export default MenuItems;

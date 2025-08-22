import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import JavascriptIcon from "@mui/icons-material/Javascript";

export const drawerItems = [
  {
    name: "Git",
    children: ["SubHome1", "SubHome2"],
    icon: <GitHubIcon />, // store the component, not JSX
  },
  {
    name: "Java Script",
    children: ["Team", "Mission"],
    icon: <i class="fa-brands fa-square-js"></i>,
  },
  { name: "Home", icon: <HomeIcon /> },
  { name: "About", icon: <InfoIcon /> },
  { name: "Contact", icon: <PermContactCalendarIcon /> },
];

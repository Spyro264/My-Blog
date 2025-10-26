import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const nav_data = [
  { nane: "Home", link: "/" },
  { nane: "About", link: "/about" },
  { nane: "Contact", link: "/contact" },
];

export const button_data = [
  { nane: "Login", link: "/login" },
  { nane: "Signup", link: "/register" },
];

export const topics = [
  { name: "Javascript", topic: ["Currying", "Debouncing", "Event Loop"] },
  { name: "React", topic: ["DOM", "useMemo", "Throttling"] },
];

export const about_data = [
  { heading: "10+", desc: "Years Experience" },
  { heading: "500+", desc: "Projects Completed" },
  { heading: "5+", desc: "Team Members" },
  { heading: "90%", desc: "Client Satisfaction" },
];

export const contact_data = [
  {
    name: "Phone",
    desc: "7619493354",
    icon: (
      <LocalPhoneOutlinedIcon
        fontSize="medium"
        sx={{
          padding: 1,
          color: "white",
          backgroundColor: "#444444",
          borderRadius: 3,
        }}
      />
    ),
  },
  {
    name: "Email",
    desc: "nagarajrakesh2000@gmail.com",
    icon: (
      <EmailOutlinedIcon
        fontSize="medium"
        sx={{
          padding: 1,
          color: "white",
          backgroundColor: "#444444",
          borderRadius: 3,
        }}
      />
    ),
  },
  {
    name: "Location",
    desc: "Bengaluru",
    icon: (
      <LocationOnOutlinedIcon
        fontSize="medium"
        sx={{
          padding: 1,
          color: "white",
          backgroundColor: "#444444",
          borderRadius: 3,
        }}
      />
    ),
  },
];

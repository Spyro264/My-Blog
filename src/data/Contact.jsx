import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const ContactItems = [
  {
    name: "email",
    text: "hello@myblog.com",
    logo: <EmailOutlinedIcon fontSize="large" sx={{ color: "#059669" }} />,
  },
  {
    name: "Phone",
    text: "7619493354",
    logo: <AddIcCallOutlinedIcon fontSize="large" sx={{ color: "#059669" }} />,
  },
  {
    name: "Location",
    text: "Bengaluru , karnataka",
    logo: <LocationOnOutlinedIcon fontSize="large" sx={{ color: "#059669" }} />,
  },
];

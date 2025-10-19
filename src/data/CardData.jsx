import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";

export const card_data = [
  {
    heading: "Interactive Learning",
    desc: "Hands-on examples and real-world projects",

    icon: (
      <StarBorderOutlinedIcon
        fontSize="large"
        sx={{ color: "#fed250", bgcolor: "#FFFFE6" }}
      />
    ),
  },
  {
    heading: "Fast Track Your Skills",
    desc: "Structured learning paths for rapid progress",
    icon: (
      <BoltOutlinedIcon
        fontSize="large"
        sx={{ color: "#f472b6", bgcolor: "#f9a8d4" }}
      />
    ),
  },
  {
    heading: "Always Updated",
    desc: "atest features and best practices",
    icon: (
      <LocalLibraryOutlinedIcon
        fontSize="latge"
        sx={{ color: "#60a5fa", bgcolor: "#93c5fd" }}
      />
    ),
  },
];

import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HotelClassOutlinedIcon from "@mui/icons-material/HotelClassOutlined";

const style = {
  color: "#FB923C",
  bgcolor: "rgba(249, 115, 22, 0.2)",
  borderRadius: 2,
  padding: 1,
};

export const data = [
  {
    heading: "Latest Tech Trends",
    desc: "Stay updated with cutting-edge technologies and industry insights",

    icon: <LocalFireDepartmentOutlinedIcon fontSize="large" sx={style} />,
  },
  {
    heading: "Developer Stories",
    desc: "Real-world experiences and lessons from the development journey",

    icon: <CodeOutlinedIcon fontSize="large" sx={style} />,
  },
  {
    heading: "Code Tutorials",
    desc: "Step-by-step guides to master new technologies and frameworks",

    icon: <HotelClassOutlinedIcon fontSize="large" sx={style} />,
  },
];

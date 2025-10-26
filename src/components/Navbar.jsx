import {
  Box,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import { button_data, nav_data } from "../data/navbardata";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();
  const [open, setOpen] = useState(isLargeScreen ? true : false);

  const style = {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "1rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #06b6d4, #3b82f6)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    display: "inline",
  };
  return (
    <>
      {/* {Drawer} */}
      <Drawer open={open} />

      {/* {Navbar} */}
      <Box
        position={"fixed"}
        width={{ xs: "95.9%", sm: "98%", md: "98.2%", lg: "99%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={1}
        paddingX={2}
        sx={{
          boxSizing: "border-box",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)", // Apply blur effect to the background
          WebkitBackdropFilter: "blur(10px)",
        }}
        zIndex={1000}
      >
        {/* {menu Icon} */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={1}
        >
          <IconButton
            sx={{ m: 0, p: 0, display: { xs: "block", lg: "none" } }}
            onClick={() => setOpen((prev) => !prev)}
          >
            <MenuOutlinedIcon
              fontSize="large"
              sx={{ padding: 1, color: "white" }}
            />
          </IconButton>
          <IconButton sx={{ p: 0, m: 0, display: { xs: "none", lg: "block" } }}>
            <LocalFireDepartmentOutlinedIcon
              fontSize="large"
              sx={{
                padding: 1,
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                color: "white",
                borderRadius: 3,
              }}
            />
          </IconButton>
          <Typography
            sx={{
              ...style,
              fontSize: { xs: "1rem", lg: "1.5rem" },
              fontWeight: "bold",
              display: { xs: "none", lg: "block" },
            }}
          >
            SpyroTechTales
          </Typography>
        </Box>

        {/* {page an dlinks} */}
        <Box display={{ xs: "none", sm: "flex", md: "flex" }} gap={3}>
          {nav_data?.map((item, index) => (
            <Button key={index} onClick={() => navigate(item.link)}>
              <Typography
                sx={{ ...style, fontSize: "1rem", textTransform: "none" }}
              >
                {item.nane}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* {Buttona} */}
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          {button_data?.map((item, index) => (
            <Button
              key={index}
              sx={{
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                color: "white",
                textTransform: "none",
                display: { xs: "none", lg: "block" },
              }}
              onClick={() => navigate(item.link)}
            >
              {item.nane}
            </Button>
          ))}
          <IconButton sx={{ p: 0, m: 0, display: { xs: "block", lg: "none" } }}>
            <LocalFireDepartmentOutlinedIcon
              fontSize="large"
              sx={{
                padding: 1,
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                color: "white",
                borderRadius: 3,
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

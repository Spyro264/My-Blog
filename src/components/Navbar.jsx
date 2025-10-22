import { Box, Button, IconButton, Typography, Drawer } from "@mui/material";
import DeblurIcon from "@mui/icons-material/Deblur";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import Close Icon
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { js_topics } from "../data/JsTopics";
import { react_topics } from "../data/ReactTopics";
import Collapsable from "./Collapsable";
import CodeIcon from "@mui/icons-material/Code";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [toogleSideBar, setToogleSideBar] = useState(false);
  const navigate = useNavigate();
  const loc = useLocation();

  const handleToogle = () => {
    setToogleSideBar((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setToogleSideBar(false); // Close the sidebar when the close button is clicked
  };

  return (
    <>
      {/* Navbar Box */}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"7vh"}
        boxShadow={1}
        px={2} // Added padding for some spacing on the navbar
      >
        {/* Title and Icon Box */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton
            sx={{ display: "block" }} // Always show hamburger icon
            onClick={handleToogle}
          >
            <MenuIcon
              fontSize="medium"
              sx={{
                padding: { xs: 0, lg: 1 },
                color: "black",
                borderRadius: 3,
              }}
            />
          </IconButton>
          <IconButton>
            <DeblurIcon
              fontSize="medium"
              sx={{
                backgroundColor: "#2563eb",
                padding: 1,
                color: "white",
                borderRadius: 3,
              }}
            />
          </IconButton>

          <Typography
            fontFamily='"Roboto", sans-serif'
            fontSize={{ xs: "1rem", md: "1.5rem" }}
            fontWeight={"medium"}
          >
            SpyroTechTales
          </Typography>
        </Box>

        {/* Login and Get Started Box */}
        <Box
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Button onClick={() => navigate("/login")}>
            <Typography
              sx={{
                color: "grey",
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "small",
                textTransform: "none",
              }}
            >
              Sign In
            </Typography>
          </Button>
          <Button
            sx={{
              background: "linear-gradient(to right, #2563eb, #9333ea)",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(to right, #1d4ed8, #7e22ce)",
              },
              color: "white",
            }}
          >
            <Typography sx={{ textTransform: "none" }}>Get Started</Typography>
          </Button>
        </Box>
      </Box>

      {/* Sidebar Drawer */}
      <Drawer
        variant="persistent"
        open={toogleSideBar} // Sidebar toggles based on button click
        PaperProps={{
          sx: {
            height: "100%", // Make the sidebar fill the height of the screen
            boxShadow: 2,
            display:
              loc.pathname.includes("login") ||
              loc.pathname.includes("register")
                ? "none"
                : "block",
            // Removed unnecessary margins and padding
          },
        }}
      >
        <Box
          sx={{
            width: 300, // Fixed width for sidebar
          }}
        >
          {/* Close Button */}
          <Box display="flex" justifyContent="flex-end" p={1}>
            <IconButton onClick={handleCloseSidebar}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Topics Box */}
          <Box paddingLeft={2} mt={2}>
            <Typography
              fontSize={{ xs: "1rem", lg: "1.5rem" }}
              fontWeight={"medium"}
              fontFamily='"Roboto", sans-serif'
            >
              Topics
            </Typography>
          </Box>

          {/* Side List Box */}
          <Box mt={1} padding={1}>
            <Collapsable
              name={"Javascript"}
              items={js_topics}
              icon={<CodeIcon sx={{ color: "#fed250" }} />}
              borderColor={"2px solid #fed250"}
            />
            <Collapsable
              name={"React"}
              items={react_topics}
              icon={<CodeIcon sx={{ color: "blue" }} />}
              borderColor={"2px solid blue"}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;

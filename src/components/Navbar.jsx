import { Box, Button, IconButton, Typography } from "@mui/material";
import DeblurIcon from "@mui/icons-material/Deblur";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toogleSideBar, setToogleSideBar] = useState(false);
  const navigate = useNavigate();

  const handleToogle = () => {
    setToogleSideBar((prev) => !prev);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"7vh"}
        boxShadow={1}
      >
        {/* {Title and icon Box}   */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton
            sx={{ display: { xs: "block", lg: "none" } }}
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

        {/* Login-logiyut box */}
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
      <SideBar toogleSideBar={toogleSideBar} />
    </>
  );
};

export default Navbar;

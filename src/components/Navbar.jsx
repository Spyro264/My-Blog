import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { drawerItems } from "../data/Navitem";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleToggleSubMenu = (item) => {
    setOpenSubMenu((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <>
      <Box height={"8vh"}>
        <AppBar
          position="static"
          sx={{ height: "8vh", backgroundColor: "white" }}
        >
          <Toolbar sx={{ height: "100%" }}>
            <Box
              height={"100%"}
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              {/* Menu Icon and Logo */}
              <Box display={"flex"} alignItems={"center"} gap={3}>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon sx={{ color: "black" }} fontSize="large" />
                </IconButton>

                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontWeight: 900,
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                >
                  SpyroTechTales
                </Typography>
              </Box>

              {/* Login Buttons */}
              <Box
                display={{ xs: "none", sm: "none", md: "flex" }}
                alignItems={"center"}
                gap={2}
              >
                <Button variant="main" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="main" onClick={() => navigate("/register")}>
                  Sign up
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* ------------------------------------------------------------------------{DRAWER}--------------------------------------------------------------------------------- */}

        {/* Drawer */}
        <Drawer anchor="left" open={drawerOpen}>
          <Box sx={{ width: 390 }} role="presentation">
            {/* {Menu bar and logo}   */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={"1px solid black"}
            >
              <Typography fontWeight={900} ml={2}>
                SpyroTechTales
              </Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon sx={{ color: "black" }} fontSize="large" />
              </IconButton>
            </Box>

            {/* {list} */}
            <List sx={{ mt: 3 }}>
              {drawerItems.map((item) => (
                <React.Fragment key={item.name}>
                  <ListItem
                    button
                    onClick={() =>
                      item.children && handleToggleSubMenu(item.name)
                    }
                    sx={{
                      padding: 0,
                      margin: 0,

                      paddingRight: 2,
                    }}
                  >
                    <ListItem
                      button
                      key={item.name}
                      // sx={{ border: "2px solid red" }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <IconButton>{item.icon}</IconButton>
                        <Typography
                          variant="h5"
                          fontWeight={900}
                          borderRadius={2}
                          p={1}
                          margin={0}
                          padding={0}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    </ListItem>

                    {item.children ? (
                      openSubMenu[item.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>

                  {item.children && (
                    <Collapse
                      in={openSubMenu[item.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.children.map((child) => (
                          <ListItem button key={child} sx={{ pl: 4, ml: 4 }}>
                            <ListItemText primary={child} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
              <Box
                display={{ xs: "flex", sm: "flex", md: "none" }}
                alignItems={"flex-start"}
                gap={2}
                px={3.2}
                flexDirection={"column"}
                mt={2}
              >
                <Button
                  variant="main"
                  sx={{ px: 4 }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <Typography variant="h6">Login</Typography>
                </Button>
                <Button
                  variant="main"
                  sx={{ px: 3 }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  <Typography variant="h6">Sign up</Typography>
                </Button>
              </Box>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;

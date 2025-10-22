import { Drawer, Box, Typography } from "@mui/material";
import Collapsable from "./Collapsable";
import { js_topics } from "../data/JsTopics";
import { react_topics } from "../data/ReactTopics";
import CodeIcon from "@mui/icons-material/Code";
import { useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

const SideBar = ({ toogleSideBar = true }) => {
  const loc = useLocation();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  console.log({ loc: loc.pathname });

  return (
    <Drawer
      variant="persistent"
      open={isLargeScreen || toogleSideBar}
      PaperProps={{
        sx: {
          marginTop: { xs: "8.2vh", lg: "8vh" },
          height: "93vh",
          boxShadow: 2,
          ml: 1,
          display:
            loc.pathname.includes("login") || loc.pathname.includes("register")
              ? "none"
              : "block",
        },
      }}
    >
      <Box
        sx={{
          width: { lg: 300 },
        }}
      >
        {/* {Topics Box} */}
        <Box paddingLeft={{ xs: 1, lg: 2 }} mt={2}>
          <Typography
            fontSize={{ xs: "1rem", lg: "1.5rem" }}
            fontWeight={"medium"}
            fontFamily='"Roboto", sans-serif'
          >
            Topics
          </Typography>
        </Box>

        {/* {side list Box} */}
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
  );
};

export default SideBar;

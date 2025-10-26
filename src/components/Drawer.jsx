import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { topics } from "../data/navbardata";
import { useLocation, useNavigate } from "react-router-dom";

const Drawer = ({ open }) => {
  const [expanded, setExpanded] = useState({});
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const navigate = useNavigate();
  const loc = useLocation();

  const toggleTopic = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubtopicClick = (topic, sub) => {
    navigate(`/${topic?.name}/${sub}`);

    setSelectedSubtopic(sub);
  };

  return (
    <Box
      sx={{
        width: open ? 300 : 0,
        transition: "width 0.3s ease",
        backgroundColor: "black",

        height: "100vh",
        position: "fixed",
        top: 10,
        left: 10,
        color: "white",
        overflow: "hidden",
        display:
          loc.pathname.includes("login") || loc.pathname.includes("register")
            ? "none"
            : "block",
        flexDirection: "column",
        boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.2)",
        zIndex: 1000,
      }}
    >
      <Box
        mt={10}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDirection={"column"}
        gap={3}
        padding={2}
      >
        <Typography
          fontFamily={'"Roboto", sans-serif'}
          fontSize={{ xs: "1rem", lg: "1.5rem" }}
          fontWeight={"bold"}
          borderBottom={"1px solid white"}
        >
          Topics
        </Typography>

        {/* Collapsible topics */}
        <Box ml={2} display="flex" flexDirection="column" gap={3}>
          {topics.map((topic) => (
            <Box key={topic.name}>
              {/* Main topic */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  border: "1px solid white",
                  borderRadius: 3,
                  color: "#06b6d4",
                  "&:hover": { color: "white" },
                }}
                onClick={() => toggleTopic(topic.name)}
              >
                <Typography
                  fontFamily={'"Roboto", sans-serif'}
                  fontWeight="bold"
                  px={3}
                >
                  {topic.name}
                </Typography>
                <IconButton size="small" sx={{ color: "white" }}>
                  {expanded[topic.name] ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
              </Box>

              {/* Subtopics */}
              <Collapse in={expanded[topic.name]} timeout="auto" unmountOnExit>
                <Box mt={1} display="flex" flexDirection="column" gap={1}>
                  {topic.topic.map((sub, index) => (
                    <Typography
                      key={index}
                      fontFamily={'"Roboto", sans-serif'}
                      variant="body2"
                      ml={1}
                      sx={{
                        background: selectedSubtopic === sub ? "#e6f0ff" : "",
                        borderRadius: 2,
                        width: "fit-content",
                        paddingX: 3,
                        cursor: "pointer",
                        color: selectedSubtopic === sub ? "black" : "white",
                        fontWeight: 700,
                      }}
                      onClick={() => {
                        handleSubtopicClick(topic, sub);
                      }}
                    >
                      {sub}
                    </Typography>
                  ))}
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;

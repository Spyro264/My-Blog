import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

const Collapsable = ({ name, items, icon, bordercolor, setToogleSideBar }) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToogle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderRadius={2}
        borderLeft={bordercolor}
        paddingLeft={1}
        boxShadow={2}
        onClick={handleToogle}
        sx={{ cursor: "pointer", transition: "background-color 0.3s ease" }}
        mt={2}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <IconButton>{icon}</IconButton>
          <Typography
            fontSize={"1rem"}
            fontFamily='"Roboto", sans-serif'
            fontWeight={"medium"}
          >
            {`${name} (${8})`}
          </Typography>
        </Box>

        <Box>
          <IconButton>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
      </Box>
      {/* Collapsible list */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {items.map((item, i) => (
            <ListItem
              key={i}
              sx={{ pl: 3 }}
              onClick={() => {
                navigate(`/blog/${item}`);
                setToogleSideBar(!isLargeScreen && false);
              }}
            >
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontWeight={"medium"}
              >
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default Collapsable;

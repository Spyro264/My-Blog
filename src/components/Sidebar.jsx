import { Box, Button, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Sidebar = ({ open, setToogle = () => {}, isLargeScreen }) => {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#141b2a",
        position: "absolute",
        left: open ? 0 : -400,
        top: isLargeScreen ? 81 : 7,
        bottom: 0,
        transition: "left 0.3s ease",
        zIndex: 999,
        marginLeft: 1,
        border: "2px solid #3c527f",
      }}
    >
      <Box border={"2px solid red"} display={isLargeScreen ? "none" : "block"}>
        <IconButton onClick={() => setToogle(false)}>
          <CloseOutlinedIcon
            fontSize="medium"
            sx={{ padding: 1, color: "white" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;

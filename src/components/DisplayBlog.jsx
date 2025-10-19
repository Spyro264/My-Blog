import { Box, IconButton, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const DisplayBlog = () => {
  const { topic } = useParams();

  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" py={4}>
        <Box maxWidth="800px" width="100%" p={3} ml={{ lg: 30 }}>
          {/* {headinf of the page} */}
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={1}
          >
            <Chip
              label="Javascript"
              sx={{ backgroundColor: "#FFFF8F", color: "black" }}
            />
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontWeight={"bold"}
              color="grey"
            >{`> ${topic}`}</Typography>
          </Box>

          {/* {Page Heading} */}
          <Box mt={1}>
            <Typography
              fontSize={{ xs: "1rem", md: "1.5rem", lg: "2rem" }}
              fontWeight={"medium"}
              fontFamily={'"Roboto", sans-serif'}
            >{`Introduction To ${topic}`}</Typography>
          </Box>

          {/* {Date and time} */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            width={"fit-content"}
            gap={4}
            mt={1}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={1}
            >
              <IconButton sx={{ p: 0 }}>
                <AccessTimeIcon fontSize="small" />
              </IconButton>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontSize={"0.8rem"}
              >
                22/03.25
              </Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={1}
            >
              <IconButton sx={{ p: 0 }}>
                <CalendarMonthIcon fontSize="small" />
              </IconButton>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontSize={"0.8rem"}
              >
                10:00pm
              </Typography>
            </Box>
          </Box>

          <hr style={{ marginTop: 19 }} />
        </Box>
      </Box>
    </>
  );
};

export default DisplayBlog;

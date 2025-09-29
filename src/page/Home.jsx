import { Box, Button, IconButton, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../components/Navbar";

import spy from "../assets/spy.png";

const Home = () => {
  return (
    <Box height={"100vh"}>
      <Navbar />
      <Box
        height={"90%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#f3f4f6" }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ xs: "100%", md: "60%", lg: "100%" }}
          height={{ xs: "100%", md: "70%" }}
          p={1}
          flexDirection={{ xs: "column", md: "column", lg: "row" }}
        >
          <Box
            height={"100%"}
            width={{ xs: "100%", md: "100%", lg: "40%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
            flexDirection={"column"}
          >
            <Typography
              fontSize={{ xs: "2.5rem", md: "4rem" }}
              fontWeight={900}
              m={0}
              p={0}
            >
              Welcome To My
            </Typography>
            <Typography
              fontSize={{ xs: "2.5rem", md: "4rem" }}
              fontWeight={900}
              color="#059669"
              lineHeight={1}
              margin={0}
              padding={0}
            >
              Creative Space
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              color="grey"
              textAlign={{ xs: "center", md: "center" }}
            >
              Sharing thoughts, ideas, and experiences through meaningful
              stories and insights.
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={1}
              mt={2}
            >
              <LocationOnIcon sx={{ color: "grey" }} />
              <Typography variant="body2">Bengaluru Karnataka</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#059669", mt: 4, fontWeight: 900 }}
            >
              Get In Touch
            </Button>
          </Box>
          <Box
            height={"100%"}
            width={{ xs: "100%", md: "100%", lg: "30%" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              height={"90%"}
              borderRadius={2}
              sx={{ backgroundColor: "#d1fae5" }}
              width={{ xs: "90%" }}
              boxShadow={5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"flex-end"}
            >
              <img
                src={spy}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
                alt="Spy"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

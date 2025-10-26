import { Box, Button, Typography } from "@mui/material";
import Hyperspeed from "../Animations/Hyperspeed";
import Lightning from "../Animations/Lightning";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        ml: { xs: 0, lg: 37 },
      }}
    >
      {/* {animation} */}
      {/* <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},
          onSlowDown: () => {},
          distortion: "turbulentDistortion",
          length: 400,
          roadWidth: 10,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 90,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0xffffff,
            brokenLines: 0xffffff,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          },
        }}
      /> */}
      <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />

      {/* {Text} */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "white",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 12,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: '"Roboto", sans-serif',
              fontSize: { xs: "2.5rem", lg: "5rem" },
            }}
          >
            Welcome to SpyroTechTales
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              marginTop: 1,
              fontFamily: '"Roboto", sans-serif',
              background: "linear-gradient(to right, #06b6d4, #3b82f6)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Everything about React and Javascript
          </Typography>
        </Box>
        {/* {buttons} */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
          mt={4}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 6,
              px: 5,
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => navigate("/about")}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontWeight: "small",
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              About
            </Typography>
          </Button>
          <Button
            sx={{
              borderRadius: 6,
              px: 5,
              border: "1px solid #FFFFFF33",
              backgroundColor: "transparent",
            }}
            onClick={() => navigate("/contact")}
          >
            <Typography
              sx={{
                textTransform: "none",
                fontWeight: "small",
                fontFamily: '"Roboto", sans-serif',
                color: "white",
              }}
            >
              Contact
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

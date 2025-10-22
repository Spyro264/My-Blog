import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

import { data } from "../data/HomeCardData";

const Home = () => {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        background:
          "linear-gradient(to bottom right, #0f172a, #7c2d12, #0f172a)",
      }}
    >
      <Box
        width={{ xs: "100%", lg: "50%" }}
        py={{ xs: 2, lg: 4 }}
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={"column"}
        gap={3}
      >
        {/* {Badge} */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={"1rem"}
            sx={{
              backgroundColor: "rgba(243, 85, 34, 0.1)",
              border: "1px solid rgba(243, 85, 34, 0.3)",
              borderRadius: 6,
              backdropFilter: "blur(4px)",
              paddingY: { xs: 0.5, lg: 1 },
              paddingX: { xs: 2, lg: 3 },
              color: "#FB923C",
            }}
          >
            Welcome to the tech journey
          </Typography>
        </Box>

        {/* {main heading} */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          padding={2}
        >
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={{ xs: "2rem", lg: "3rem" }}
            fontWeight={"bold"}
            color="white"
          >
            Ignite Your
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={{ xs: "2rem", lg: "3rem" }}
            fontWeight={"bold"}
            sx={{
              background:
                "linear-gradient(to right, #FB923C, #F87171, #F97316)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Tech Knowledge
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={"1rem"}
            fontWeight={"medoum"}
            color="#D1D5DB"
            textAlign={"center"}
            // border={"2px solid red"}
            maxWidth={"500px"}
          >
            Discover stories, tutorials, and insights that spark curiosity. Dive
            into the world of technology, development, and innovation.
          </Typography>
        </Box>

        {/* {Ction Buttons} */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(to right, #FB923C, #F87171)",
              py: 1.5,
              px: 4,
              borderRadius: 2,
              fontFamily: '"Roboto", sans-serif',
              fontSize: "1rem",
              transition: "all 0.3s",
              color: "white",
              "&:hover": {
                boxShadow: "0px 4px 15px rgba(243, 85, 34, 0.5)",
                transform: "translateX(4px)",
                color: "white",
              },
            }}
            endIcon={
              <ArrowRight
                sx={{ fontSize: "1.25rem", transition: "transform 0.3s" }}
              />
            }
          >
            Explore Topics
          </Button>
        </Box>

        {/* {card data} */}

        <Grid
          container
          padding={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"stretch"}
          spacing={2}
        >
          {data?.map((item, index) => (
            <Grid
              key={index}
              size={{ xs: 12, md: 4, lg: 4 }}
              borderRadius={2}
              padding={2}
              display={"flex"}
              justifyContent={"centfler"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              gap={1}
              border={"2px solid rgba(255, 255, 255, 0.1)"}
              sx={{
                backgroundColor: "rgba(249, 115, 22, 0.2)",
              }}
            >
              <IconButton sx={{ p: 0 }}>{item.icon}</IconButton>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontSize={"1rem"}
                fontWeight={"bold"}
                color="white"
              >
                {item.heading}
              </Typography>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontWeight={"small"}
                fontSize={"0.85rem"}
                color="#cbd5e1"
              >
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

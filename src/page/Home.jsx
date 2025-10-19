import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"}>
      <Box
        border={"2px solid red"}
        maxWidth={"800px"}
        width={{ xs: "100%", lg: "50%" }}
        ml={{ lg: 30 }}
      >
        <Typography>Hello</Typography>
      </Box>
    </Box>
  );
};

export default Home;

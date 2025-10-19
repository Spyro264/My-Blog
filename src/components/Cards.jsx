import { Box, IconButton, Typography } from "@mui/material";

const Cards = ({ icon, heading, desc }) => {
  return (
    <Box
      borderRadius={3}
      display={"flex"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      padding={3}
      gap={3}
      minWidth={"100%"}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Box>
        <IconButton>{icon}</IconButton>
      </Box>
      <Box>
        <Typography
          fontFamily={'"Roboto", sans-serif'}
          fontSize={"1.3rem"}
          fontWeight={"bold"}
          color="white"
        >
          {heading}
        </Typography>
        <Typography fontFamily={'"Roboto", sans-serif'} color="#d1fae5">
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cards;

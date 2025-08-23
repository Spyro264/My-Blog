import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export const Test = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        border={"2px solid red"}
        height={{ xs: "50vh", md: "50vh" }}
        width={{ xs: "50%", md: "30%" }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={2}
        gap={2}
      >
        <Box
          //   border={"2px solid red"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Typography fontSize={{ xs: "1rem", md: "3rem" }}>
            Hello There
          </Typography>
        </Box>
        <Box
          //   border={"2px solid red"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          flexDirection={"column"}
          gap={2}
        >
          <TextField fullWidth />
          <TextField fullWidth />
        </Box>
        <Box
          //   border={"2px solid red"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Button variant="contained" fullWidth sx={{ paddingY: 1 }}>
            <Typography fontSize={{ xs: "1rem", md: "2rem" }}>
              Submit
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

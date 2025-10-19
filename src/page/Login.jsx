import { Box, IconButton, TextField, Typography, Button } from "@mui/material";
import DeblurIcon from "@mui/icons-material/Deblur";
import CodeIcon from "@mui/icons-material/Code";

const Login = () => {
  return (
    <Box minHeight={"100vh"} display={"flex"}>
      {/* {rightyy}   */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={{ xs: "100%", lg: "50%" }}
        sx={{
          background:
            "linear-gradient(to bottom right, #eff6ff, #e0e7ff, #ede9fe)",
        }}
        padding={{ xs: 2, lg: 0 }}
      >
        <Box width={{ xs: "100%", sm: "50%" }} minHeight={"auto"}>
          {/* {logo and wleocme Text}    */}
          <Box
            // border={"2px solid red"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            {/* {icon} */}
            <IconButton>
              <DeblurIcon
                fontSize="large"
                sx={{
                  backgroundColor: "#2563eb",
                  padding: 1,
                  borderRadius: 2,
                  color: "white",
                }}
              />
            </IconButton>
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontWeight={"bold"}
              fontSize={{ xs: "1.5rem", lg: "3rem" }}
              sx={{
                background: "linear-gradient(to right, #2563eb, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome Back !
            </Typography>
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontWeight={"medum"}
              color="grey"
            >
              Continue your learning journey
            </Typography>
          </Box>

          {/* {form box} */}
          <Box
            boxShadow={3}
            mt={3}
            borderRadius={4}
            padding={4}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            sx={{ backgroundColor: "white" }}
          >
            <form action="">
              <Box>
                <Typography
                  fontFamily={'"Roboto", sans-serif'}
                  fontSize={"1rem"}
                  fontWeight={"medium"}
                >
                  Email Address
                </Typography>
                <TextField
                  placeholder="enter your email"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px", // your desired border radius
                    },
                  }}
                />
              </Box>
              <Box mt={2}>
                <Typography
                  fontFamily={'"Roboto", sans-serif'}
                  fontSize={"1rem"}
                  fontWeight={"medium"}
                >
                  Password
                </Typography>
                <TextField
                  placeholder="password"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>

              {/* {Action BUtoon} */}
              <Box mt={4}>
                <Button
                  fullWidth
                  sx={{
                    py: 1,
                    borderRadius: 2,
                    fontSize: { xs: "1rem,", lg: "1.2rem" },
                    fontWeight: "medium",
                    fontFamily: '"Roboto", sans-serif',
                    color: "white",
                    background: "linear-gradient(to right, #2563eb, #9333ea)",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    transition: "all 0.3s",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(to right, #1d4ed8, #7e22ce)",
                    },
                  }}
                >
                  Sign In
                </Button>
              </Box>
            </form>
            {/* {action BUtton} */}
            <Box mt={1}>
              <Typography color="grey" textAlign={"center"} mt={2}>
                New to SpyroTechTales
              </Typography>
              <Button
                fullWidth
                sx={{
                  mt: 1,
                  py: 1,
                  borderRadius: 2,
                  fontSize: { xs: "1rem,", lg: "1.2rem" },
                  fontWeight: "medium",
                  fontFamily: '"Roboto", sans-serif',
                  color: "black",
                  background: "white",
                  border: "1px solid grey",

                  textTransform: "none",
                  "&:hover": {
                    border: "1px solid blue",
                    color: "blue",
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* {lftyy box} */}
      <Box
        width={{ lg: "50%" }}
        display={{ xs: "none", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background:
            "linear-gradient(to bottom right, #2563eb, #9333ea, #ec4899)",
        }}
      >
        <Box
          width={"80%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          padding={10}
          mt={10}
        >
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontWeight={"bold"}
            fontSize={{ xs: "1.2rem", lg: "3rem" }}
            textAlign={"center"}
            color="white"
          >
            Master JavaScript & React
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontWeight={"medium"}
            textAlign={"center"}
            // paddingX={24}
            color="#ebf8ff"
          >
            Join thousands of developers learning
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontWeight={"medium"}
            textAlign={"center"}
            // paddingX={24}
            color="#ebf8ff"
          >
            modern web development with our comprehensive tutorials
          </Typography>

          {/* {content box} */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
            mt={4}
          >
            <Box
              borderRadius={3}
              padding={2}
              maxWidth={"200px"}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(16px)", // backdrop-blur-lg
                border: "1px solid rgba(255, 255, 255, 0.2)",

                gap: 1.5,
              }}
            >
              <IconButton>
                <CodeIcon fontSize="large" sx={{ color: "#fed250" }} />
              </IconButton>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontWeight={"bold"}
                fontSize={"1.5rem"}
                color="white"
              >
                100+ Topics
              </Typography>
              <Typography color="grey" sx={{ color: "#ebf8ff" }}>
                Comprehensive coverage of JavaScript and React
              </Typography>
            </Box>
            <Box
              borderRadius={3}
              padding={2}
              maxWidth={"200px"}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)", // bg-opacity-10
                backdropFilter: "blur(16px)", // backdrop-blur-lg
                border: "1px solid rgba(255, 255, 255, 0.2)", // border with opacity
                color: "#ebf8ff",
                gap: 1.5,
              }}
            >
              <IconButton>
                <CodeIcon fontSize="large" sx={{ color: "#fed250" }} />
              </IconButton>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontWeight={"bold"}
                fontSize={"1.5rem"}
                color="white"
              >
                Expert Content
              </Typography>
              <Typography color="grey" sx={{ color: "#ebf8ff" }}>
                Written by experienced developers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

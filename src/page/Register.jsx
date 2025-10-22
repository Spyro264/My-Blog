import {
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Cards from "../components/Cards";
import { card_data } from "../data/CardData";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Box display={"flex"} minHeight={"100vh"}>
      {/* {RIghtyyyyy}  */}
      <Box
        width={{ lg: "50%" }}
        display={{ xs: "none", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={4}
        sx={{
          background:
            "linear-gradient(to bottom right, #10b981, #0d9488, #0891b2)",
        }}
      >
        {/* {heasing}   */}

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <i
            className="fa-solid fa-rocket"
            style={{ fontSize: "2.5rem", color: "white" }}
          ></i>

          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontWeight={"bold"}
            fontSize={"3rem"}
            color="white"
          >
            Start Your Journey
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={"1rem"}
            color="#d1fae5"
          >
            Create your account and unlock access to
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={"1rem"}
            color="#d1fae5"
          >
            premium JavaScript and React content
          </Typography>
        </Box>

        {/* {card} */}
        <Box
          mt={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
        >
          {card_data?.map((item, index) => (
            <Cards
              key={index}
              heading={item.heading}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>

      {/* {leftyyyy} */}
      <Box
        width={{ xs: "100%", lg: "50%" }}
        sx={{
          background:
            "linear-gradient(to bottom right, #fff7ed, #fffbeb, #fefce8)",
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={{ xs: "100%", sm: "70%", md: "60%" }}
          padding={{ xs: 2, md: 0 }}
        >
          {/* {heading} */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <IconButton>
              <PersonAddAltOutlinedIcon
                fontSize="large"
                sx={{
                  color: "white",
                  padding: 1,
                  background:
                    "linear-gradient(to bottom right, #10b981, #06b6d4)",
                  borderRadius: 3,
                }}
              />
            </IconButton>
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontSize={"1.5rem"}
              textAlign={"center"}
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(to right, #059669, #06b6d4)", // emerald-600 → cyan-600
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Create an Account
            </Typography>
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontWeight={"bold"}
              fontSize={"0.87rem"}
              color="grey"
            >
              Join our community of learners
            </Typography>
          </Box>

          {/* {form} */}
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
                  Full Name
                </Typography>
                <TextField
                  placeholder="enter your name"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2OutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <Typography
                  fontFamily={'"Roboto", sans-serif'}
                  fontSize={"1rem"}
                  fontWeight={"medium"}
                >
                  Email Address
                </Typography>
                <TextField
                  placeholder="enter email"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
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
                  placeholder="enter password"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <Typography
                  fontFamily={'"Roboto", sans-serif'}
                  fontSize={"1rem"}
                  fontWeight={"medium"}
                >
                  Confrim Password
                </Typography>
                <TextField
                  placeholder="confrim password"
                  fullWidth
                  sx={{
                    mt: 1,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
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
                    textTransform: "none",
                    background: "linear-gradient(to right, #10b981, #06b6d4)", // from-emerald-500 to-cyan-500
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(to right, #059669, #0891b2)", // hover:emerald-600 to-cyan-600
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
                Already have an Account ?
              </Typography>
              <Button
                fullWidth
                onClick={() => navigate("/login")}
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
                    border: "1px solid green",
                    color: "green",
                  },
                }}
              >
                Sign In Insetad
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

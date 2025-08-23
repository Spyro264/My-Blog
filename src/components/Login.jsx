import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import CallIcon from "@mui/icons-material/Call";
import AppleIcon from "@mui/icons-material/Apple";
import { useState } from "react";
import ToastMessage from "./ToastMessage";
import { EmailLogin } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Snackbar, setSnackbar] = useState({
    boolen: false,
    message: "",
    error: "",
  });
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // show or hide password
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  //   email login function
  const handleEmailLogin = async () => {
    setLoader(true);
    // if email or passwoird is null it will exut this function
    if (!email && !password) {
      setLoader(false);
      setSnackbar({
        boolen: true,
        message: "Enter valid email and password",
        error: "warning",
      });
    }

    try {
      await EmailLogin(email, password).then((res) => {
        if (res.operationType === "signIn") {
          setLoader(false);
          setSnackbar({
            boolen: true,
            message: "Logged in successfully",
            error: "success",
          });
        }
        setLoader(false);

        // navigate to home after 2 seconds
        setTimeout(() => {
          //   navigate("/");
        }, 3000);
      });
    } catch (error) {
      setLoader(false);
      if (error.code === "auth/invalid-credential") {
        setSnackbar({
          boolen: true,
          message: "Invalid Credentials",
          error: "error",
        });
      } else {
        setSnackbar({
          boolen: true,
          message: error.message,
          error: "error",
        });
      }
    }
  };

  return (
    <>
      {loader && <Loader open={loader} />}
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          boxShadow={4}
          height={{ md: "70vh", xs: "70%", sm: "60%", lg: "70vh" }}
          width={{ md: "60%", xs: "100%", sm: "70%", lg: "30%" }}
          borderRadius={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={{ md: 0, xs: 1, sm: 1 }}
        >
          <Box width={"100%"} height={"100%"} borderRadius={10}>
            {/* {HEading box} */}
            <Box
              //   border={"2px solid red"}
              height={"30%"}
              borderRadius={2}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <IconButton>
                <LoginIcon
                  fontSize="large"
                  sx={{
                    color: "black",
                    backgroundColor: "white",
                    boxShadow: 3,
                    padding: 1,
                    borderRadius: 2,
                  }}
                />
              </IconButton>
              <Typography
                fontSize={{ xs: "1.5rem", sm: "1.5rem", md: "2rem" }}
                fontWeight={{ xs: 900, sm: 900, md: 900 }}
                fontFamily={"monospace"}
                textAlign={"center"}
              >
                Login with email
              </Typography>
            </Box>

            {/* {Field box} */}
            <Box
              height={"33%"}
              //   border={"2px solid red"}
              borderRadius={2}
              display={"flex"}
              justifyContent={{
                md: "center",
                xs: "flex-start",
                sm: "center",
              }}
              alignItems={"center"}
              flexDirection={"column"}
              paddingX={2}
              gap={2}
            >
              <TextField
                fullWidth
                type="email"
                placeholder="enter your mail"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon sx={{ color: "gray" }} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon sx={{ color: "gray" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      onClick={handleTogglePassword}
                      position="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Typography
                sx={{ width: "100%", cursor: "crosshair" }}
                textAlign={"end"}
                fontSize={{ xs: "0.9rem", sm: "1rem", md: "1rem" }}
                fontWeight={900}
                onClick={() => navigate("/register")}
              >
                Sign up ?
              </Typography>
            </Box>

            {/* {Action button box} */}
            <Box
              //   border={"2px solid red"}
              height={"33%"}
              borderRadius={2}
              paddingX={2.5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              gap={2}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 3,
                  py: { xs: 1.5, sm: 1.5, md: 1 },
                }}
                onClick={handleEmailLogin} // login onclick
              >
                <Typography
                  fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
                  fontWeight={700}
                >
                  Login In
                </Typography>
              </Button>
              <Typography textAlign={"center"} fontWeight={600}>
                Or Login With
              </Typography>

              {/* {other login} */}
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={2}
              >
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                    width: "50%",
                    color: "black",
                    py: { xs: 1, sm: 1, md: 1.5 },
                  }}
                ></Button>
                <Button
                  variant="contained"
                  startIcon={<CallIcon />}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                    width: "50%",
                    color: "black",
                    py: { xs: 1, sm: 1, md: 1.5 },
                  }}
                ></Button>
                <Button
                  variant="contained"
                  startIcon={<AppleIcon color="black" />}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    backgroundColor: "white",
                    width: "50%",
                    color: "black",
                    py: { xs: 1, sm: 1, md: 1.5 },
                  }}
                ></Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {Snackbar && (
          <ToastMessage
            open={Snackbar.boolen}
            message={Snackbar.message}
            setSnackbar={setSnackbar}
            color={Snackbar.error}
          />
        )}
      </Box>
    </>
  );
};

export default Login;

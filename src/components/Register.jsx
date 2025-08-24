import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { RegisterUser } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";
import ToastMessage from "./ToastMessage";
import Loader from "./Loader";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { auth } from "../firebaseConfig/firebase";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);
  const [showPassword, setPassword] = useState(false);
  const [Snackbar, setSnackbar] = useState({
    boolen: false,
    message: "",
    error: "",
  });

  const navigate = useNavigate();

  // fun to show and hide password
  const handleTogglePassword = () => {
    setPassword((prev) => !prev);
  };

  // fun to create use account
  const handleRegister = async () => {
    setLoader(true);

    // email and pass is null it will exit this function
    if (!userEmail || !userPassword || !userName) {
      setLoader(false);
      setSnackbar({
        boolen: true,
        message: "Fields Should Not Be Empty",
        error: "info",
      });
      return;
    }

    try {
      await RegisterUser(userEmail, userPassword).then(async (res) => {
        if (res.operationType === "signIn") {
          if (auth.currentUser) {
            await updateProfile(auth.currentUser, {
              displayName: userName,
            });
          }
          setSnackbar({
            boolen: true,
            message: "Account Created And Logged In Successfully",
            error: "success",
          });
          setLoader(false);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      });
    } catch (error) {
      setLoader(false);
      if (error.code === "auth/email-already-in-use") {
        setSnackbar({
          boolen: true,
          message: "Email Alreasy Exist",
          error: "error",
        });
      } else {
        setSnackbar({
          boolen: true,
          message: "something went Wrong",
          error: "error",
        });
      }
    }
  };

  return (
    <>
      {loader && <Loader open={open} />}
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={{ xs: 1 }}
      >
        <Box
          //   border={"2px solid red"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
          flexDirection={"column"}
          boxShadow={4}
          gap={3}
          height={{
            xs: "50vh",
            sm: "50vh",
            md: "50vh",
            lg: "60vh",
          }}
          width={{ xs: "100%", sm: "50%", md: "25%" }}
          borderRadius={3}
          paddingX={{ xs: 3, sm: 3, md: 5 }}
        >
          {/* {Heading box} */}
          <Box borderRadius={10} width={"100%"} mt={{ xs: 0, sm: 2, md: 0 }}>
            <Typography
              fontSize={{ xs: "1.5rem", sm: "1.5rem", md: "2rem" }}
              fontWeight={900}
              textAlign={"center"}
            >
              Create Account
            </Typography>
            <Typography
              fontSize={{ xs: "0.8rem", sm: "1rem", md: "1rem" }}
              textAlign={"center"}
              color="grey"
            >
              Enter Your Details To Create Your Account
            </Typography>
          </Box>

          {/* {Fields Box} */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
            width={"100%"}
            mt={3}
          >
            <TextField
              placeholder="Enter Your Name"
              fullWidth
              onChange={(e) => setUserName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Enter Your Email Address"
              fullWidth
              onChange={(e) => setUserEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Enter Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              onChange={(e) => setUserPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment onClick={handleTogglePassword} position="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* {Button BOx} */}
          <Box width={"100%"} mt={3}>
            <Button
              variant="contained"
              fullWidth
              sx={{ py: 1, backgroundColor: "black" }}
              onClick={handleRegister}
            >
              <Typography
                fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
                color="white"
                fontWeight={900}
              >
                Submit
              </Typography>
            </Button>
          </Box>
        </Box>
        {Snackbar && (
          <ToastMessage
            open={Snackbar.boolen}
            message={Snackbar.message}
            setSnackbar={setSnackbar}
            vertical={"top"}
            horizontal={"right"}
            color={Snackbar.error}
          />
        )}
      </Box>
    </>
  );
};

export default Register;

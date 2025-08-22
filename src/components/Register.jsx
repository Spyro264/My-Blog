import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { RegisterUser } from "../firebaseConfig/auth";
import { useNavigate } from "react-router-dom";
import ToastMessage from "./ToastMessage";
import Loader from "./Loader";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [Snackbar, setSnackbar] = useState({
    boolen: false,
    message: "",
    error: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoader(true);

    // email and pass is null it will exit this function
    if (!userEmail && !userPassword) {
      setLoader(false);
      return alert("enter valid id and pass");
    }

    try {
      await RegisterUser(userEmail, userPassword).then((res) => {
        if (res.operationType === "signIn") {
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
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          flexDirection={"column"}
          boxShadow={4}
          gap={3}
          height={"50vh"}
          width={{ xs: "100%", sm: "100%", md: "25%" }}
          borderRadius={3}
          paddingX={{ xs: 3, sm: 0, md: 5 }}
        >
          {/* {Heading box} */}
          <Box borderRadius={10} width={"100%"} mt={{ xs: 2.5, sm: 2, md: 8 }}>
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
              placeholder="Enter Your Email Address"
              fullWidth
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              placeholder="Enter Password"
              fullWidth
              onChange={(e) => setUserPassword(e.target.value)}
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

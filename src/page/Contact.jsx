import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { contact_data } from "../data/navbardata";

const Contact = () => {
  return (
    <Box
      minHeight={"100vh"}
      height={"auto"}
      sx={{ backgroundColor: "black" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
      padding={{ xs: 2, md: 3 }}
    >
      {/* {contact grid} */}
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        padding={1}
        ml={{ xs: 0, lg: 38 }}
        mt={10}
      >
        {/* {heading} */}
        <Grid
          size={12}
          display={"flex"}
          justifyContent={"fl"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={{ xs: "2rem", lg: "3rem" }}
            fontWeight={"bold"}
          >
            Get In Touch
          </Typography>
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize="1rem"
            fontWeight={"small"}
            color="grey"
            paddingX={5}
            textAlign={"center"}
          >
            Have a question or want to work together? We'd love to hear from
            you.
          </Typography>
        </Grid>

        <Grid
          container
          size={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={{ xs: 4, lg: 10 }}
        >
          <Grid
            size={{ xs: 12, sm: 10, lg: 6 }}
            display={"flex"}
            mt={{ xs: 4, lg: 0 }}
            mb={{ xs: 0, lg: 21 }}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            flexDirection={"column"}
            gap={1}
          >
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontSize="1.5rem"
              fontWeight={"bold"}
            >
              Contact Information
            </Typography>

            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontSize="1rem"
              fontWeight={"small"}
              color="grey"
            >
              Fill out the form and our team will get back to you within 24
              hours.
            </Typography>

            {/* {cards} */}
            {contact_data?.map((item, index) => (
              <Box
                key={index}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                padding={1}
              >
                <Box>
                  <IconButton sx={{ p: 0, m: 0 }}>{item.icon}</IconButton>
                </Box>
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"1rem"}>
                    {item.name}
                  </Typography>

                  <Typography fontWeight={"small"}>{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* {formGird} */}
          <Grid
            size={{ xs: 12, sm: 10, lg: 4 }}
            border={"2px solid #444444"}
            borderRadius={3}
            padding={3}
            mt={5}
          >
            <Box borderRadius={3} padding={1}>
              <form>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Typography>Name</Typography>
                  <TextField
                    fullWidth
                    placeholder="your name"
                    sx={{ border: "2px solid #444444", borderRadius: 3 }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  mt={3}
                  gap={1}
                >
                  <Typography>Email</Typography>
                  <TextField
                    fullWidth
                    placeholder="your email"
                    sx={{ border: "2px solid #444444", borderRadius: 3 }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  mt={3}
                  gap={1}
                >
                  <Typography>message</Typography>
                  <TextField
                    fullWidth
                    multiline
                    placeholder="your message"
                    rows={4}
                    sx={{ border: "2px solid #444444", borderRadius: 3 }}
                  />
                </Box>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      textTransform: "none",
                      py: 1,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

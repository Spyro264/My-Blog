import { Grid, Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { ContactItems } from "../data/Contact";

const Contact = () => {
  return (
    <Box height={"95vh"} border={"2px solid red"} px={{ lg: 30 }}>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* {main heading} */}
        <Grid
          size={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          textAlign={"center"}
        >
          <Typography
            color="#059669"
            fontSize={{ xs: "3rem", md: "4rem" }}
            fontWeight={900}
          >
            Contact Me
          </Typography>
          <Typography fontSize={"1rem"} color="grey" width={{ lg: "50%" }}>
            Let's start a conversation. I'm always excited to connect with
            fellow creatives, readers, and anyone who shares a passion for
            meaningful stories.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }} mt={2}>
          <Typography
            fontSize={{ xs: "1.5rem", md: "2rem", lg: "3rem" }}
            fontWeight={900}
            borderBottom={"4px solid #059669"}
            sx={{ width: "fit-content" }}
          >
            Get In Touch
          </Typography>
          <Typography variant="body1" color="grey" mt={2}>
            I'd love to hear from you! Whether you have a question, feedback, or
            just want to say hello, feel free to reach out using the form or
            contact information below.
          </Typography>
          {ContactItems?.map((item, index) => (
            <Box
              key={index}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"center"}
              gap={2}
              mt={5}
            >
              <Box sx={{ backgroundColor: "#d1fae5", borderRadius: 2 }} p={1}>
                {item.logo}
              </Box>
              <Box>
                <Typography
                  fontSize={{ xs: "1rem", md: "1.5rem", lg: "1.5rem" }}
                  fontWeight={600}
                >
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.text}</Typography>
              </Box>
            </Box>
          ))}
          <Box mt={3} boxShadow={3} borderRadius={2} p={1}>
            <Typography fontSize={"1rem"}>Quick Response Times</Typography>
            <Typography color="grey" mt={1}>
              I'm committed to responding to all inquiries promptly:
            </Typography>
          </Box>
        </Grid>
        <Grid border={"2px solid black"} size={{ xs: 12, lg: 6 }} mt={2}>
          right
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

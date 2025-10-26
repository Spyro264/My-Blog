import { Box, Button, Typography } from "@mui/material";
import { about_data } from "../data/navbardata";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      minHeight={"100vh"}
      sx={{ backgroundColor: "black" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"2px solid red"}
      color={"white"}
      padding={{ xs: 2, sm: 5 }}
    >
      <Box
        ml={{ xs: 0, lg: 38 }}
        width={{ xs: "100%", lg: "60%" }}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"column"}
        gap={6}
        padding={{ xs: 1, lg: 3 }}
        mt={{ xs: 10, lg: 0 }}
      >
        {/* {About us} */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: "bold",
              fontSize: { xs: "2rem", lg: "3rem" },
            }}
          >
            About us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: "small",
              color: "grey",
              paddingX: { xs: 1, lg: 10 },
              textAlign: "center",
            }}
          >
            We are a team of innovators, creators, and problem-solvers dedicated
            to building exceptional digital experiences.
          </Typography>
        </Box>

        {/* {experience} */}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {about_data?.map((item, index) => (
            <Box key={index} textAlign={"center"}>
              <Typography
                fontFamily={'"Roboto", sans-serif'}
                fontSize={"2rem"}
                fontWeight={"bold"}
              >
                {item.heading}
              </Typography>
              <Typography fontWeight={"200"} color="grey">
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* {our story} */}
        <Box
          border={"1px solid #3B3B3B"}
          padding={2}
          borderRadius={3}
          sx={{ backgroundColor: "#0D0D0D" }}
        >
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={"2rem"}
            fontWeight={"bold"}
            sx={{ backgroundColor: "#0D0D0D" }}
          >
            Our Story
          </Typography>
          <Typography variant="body2" mt={2} color="#C0C0C0">
            Founded with a vision to revolutionize the digital landscape, we've
            grown from a small startup to a trusted partner for businesses
            worldwide. Our journey began with a simple belief: that technology
            should empower, not complicate.
          </Typography>
          <Typography variant="body2" mt={2} color="#C0C0C0">
            Over the years, we've worked with hundreds of clients across diverse
            industries, helping them navigate the ever-evolving digital world.
            Our commitment to excellence and innovation has earned us
            recognition and, more importantly, the trust of our clients.
          </Typography>
          <Typography variant="body2" mt={2} color="#C0C0C0">
            Today, we continue to push boundaries, embrace new technologies, and
            deliver solutions that make a real difference. Our team's passion
            for what we do drives us to constantly improve and adapt to meet the
            changing needs of our clients.
          </Typography>
        </Box>

        {/* {ready to work} */}
        <Box
          border={"1px solid #3B3B3B"}
          borderRadius={3}
          padding={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={"column"}
          gap={2}
          sx={{ backgroundColor: "#0D0D0D" }}
        >
          <Typography
            fontFamily={'"Roboto", sans-serif'}
            fontSize={{ xs: "1.5rem", lg: "2rem" }}
            fontWeight={"bold"}
          >
            Ready to Work Together?
          </Typography>
          <Typography variant="body2" color="#C0C0C0">
            Let's create something amazing. Get in touch with us to discuss your
            project.
          </Typography>
          <Button onClick={() => navigate("/contact")}>
            <Typography
              fontFamily={'"Roboto", sans-serif'}
              fontSize={"1rem"}
              fontWeight={"small"}
              sx={{ backgroundColor: "white", py: 1, px: 3, borderRadius: 2 }}
              color="black"
              textTransform={"none"}
            >
              Contact us
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

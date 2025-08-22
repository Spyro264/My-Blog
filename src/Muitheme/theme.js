import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          // ✅ Custom "magic" variant
          props: { variant: "main" },
          style: {
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            border: "1px solid black",

            textTransform: "none",
            borderRadius: "8px",

            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          },
        },
        {
          // ✅ Custom "danger" variant
          props: { variant: "danger" },
          style: {
            backgroundColor: "red",
            color: "white",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "darkred",
            },
          },
        },
      ],
    },
  },
});

export default theme;

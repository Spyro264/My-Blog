import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Contact from "./page/Contact";
import About from "./page/About";
import Navbar from "./components/Navbar";
import DisplayData from "./page/DisplayData";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Box>
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:topic/:subtopic" element={<DisplayData />} />
      </Routes>
    </Box>
  );
};

export default App;

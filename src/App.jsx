import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DisplayBlog from "./components/DisplayBlog";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:topic" element={<DisplayBlog />} />
      </Routes>
    </Box>
  );
};

export default App;

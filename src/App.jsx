import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import DisplayBlog from "./components/DisplayBlog";
import Home from "./page/Home";
import Login from "./page/Login";

const App = () => {
  return (
    <Box>
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:topic" element={<DisplayBlog />} />
      </Routes>
    </Box>
  );
};

export default App;

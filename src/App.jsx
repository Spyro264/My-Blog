import { Routes, Route } from "react-router-dom";
import MyEditor from "./components/MyEditor";
import Home from "./page/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Test } from "./components/Test";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/editor" element={<MyEditor />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;

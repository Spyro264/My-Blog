import { Routes, Route } from "react-router-dom";
import MyEditor from "./components/MyEditor";
import Home from "./page/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./context/authContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/editor"
            element={
              <ProtectedRoutes>
                <MyEditor />
              </ProtectedRoutes>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

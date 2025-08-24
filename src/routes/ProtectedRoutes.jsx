import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { user, loader } = useAuth();

  if (loader) {
    <Loader open={loader} />;
  }
  console.log({ user });

  if (user === null) {
    navigate("/login");
  }

  return children;
};

export default ProtectedRoutes;

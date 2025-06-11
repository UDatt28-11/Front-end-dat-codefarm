import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || {});
  return <>{user.id === 1 ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default ProtectedRoute;

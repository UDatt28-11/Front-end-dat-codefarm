import React, { useEffect } from "react";
import { getCheckAdmin } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const data = await getCheckAdmin();
        if (data.status !== 200) {
          navigate("/");
        }
      } catch (error) {
        navigate("/");
      }
    })();
  }, []);
  return children;
};

export default ProtectedRoute;

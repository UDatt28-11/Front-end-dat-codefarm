import React from "react";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <AppRouter />
      <ToastContainer />
    </div>
  );
};

export default App;

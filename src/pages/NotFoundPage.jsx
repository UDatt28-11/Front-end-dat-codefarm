import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Oosi ! Trang nay khong ton tai</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFoundPage;

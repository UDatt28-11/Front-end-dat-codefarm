import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <h1>Quan ly Products</h1>
      <Link to="add" className="btn btn-primary">
        Add Products
      </Link>
      <Link to="hooks">
        <button className="btn btn-success">Edit Products</button>
      </Link>
    </div>
  );
};

export default ProductPage;

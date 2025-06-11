import React, { useState } from "react";
import styled from "@emotion/styled";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";

const initFormData = {
  title: "",
  description: "",
};
const ProductForm = () => {
  const [formData, setFormData] = useState(initFormData);
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    // * Validation ở đây
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const data = await createProduct(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <h1>Products Add</h1> */}
      <FormCommon action="" handleSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label" name="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Products name"
            // value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label" name="title">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Products description"
            // value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100">Add Product</button>
          <button className="btn btn-dark w-100">Cancel</button>
        </div>
      </FormCommon>
    </>
  );
};

export default ProductForm;

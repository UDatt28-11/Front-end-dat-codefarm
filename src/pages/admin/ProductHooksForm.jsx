import React, { useState } from "react";
import styled from "@emotion/styled";
import { createProduct } from "../../api/productApi";
import FormCommon from "../../components/FormCommon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import productSchema from "../../validations/productSchema";
const ProductHooksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const res = await createProduct(data);
      reset;
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <h1>Products Add</h1> */}
      <FormCommon action="" handleSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            placeholder="Products name"
            {...register("title", { required: true })}
          />
          {errors?.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            className="form-control"
            placeholder="Products name"
            {...register("price", { valueAsNumber: true })}
          />
          {errors?.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            className="form-control"
            placeholder="Products description"
            {...register("description")}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100" disabled={errors.title}>
            Add Product
          </button>
          <button className="btn btn-dark w-100" onClick={reset}>
            Cancel
          </button>
        </div>
      </FormCommon>
    </>
  );
};

export default ProductHooksForm;

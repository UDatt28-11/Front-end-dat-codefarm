import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../api/authApi";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await loginApi(data);

      // Lưu token vào localStorage
      localStorage.setItem("access_token", res.data.token);

      // Điều hướng sau khi đăng nhập thành công
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Đăng nhập thất bại!");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h1 className="mb-4">Login Page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors?.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors?.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          You haven't an account?{" "}
          <Link to="/api/auth/register">Register now!</Link>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;

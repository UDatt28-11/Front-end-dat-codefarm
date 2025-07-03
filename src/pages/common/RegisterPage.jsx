import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { registerApi } from "../../api/authApi";
import { message } from "antd";

const RegisterPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await registerApi({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });

      messageApi.success("Đăng ký thành công! Vui lòng xác nhận email.");
      setTimeout(() => {
        navigate("/api/auth/login");
      }, 1000);
    } catch (error) {
      console.log(error.response?.data);

      messageApi.error(error.response?.data?.message || "Đăng ký thất bại!");
    }
  };

  return (
    <>
      {contextHolder}
      <div className="container mt-5" style={{ maxWidth: "500px" }}>
        <h1 className="mb-4">Register Now!</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input
              type="text"
              className="form-control"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors?.fullName && (
              <span className="text-danger">{errors.fullName.message}</span>
            )}
          </div>

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
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors?.confirmPassword && (
              <span className="text-danger">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            Already have an account?{" "}
            <Link to="/api/auth/login">Login now!</Link>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;

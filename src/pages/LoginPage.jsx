import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { data, Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/authSchema";
import { loginApi } from "../api/authApi";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const nav = useNavigate();
  const onSubmit = async (dataForm) => {
    try {
      // const { data } = await loginApi(dataForm);
      const { data } = await loginApi(dataForm);
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("user", JSON.stringify(data.user));
        nav("/");
      }
      // reset();
      // toast.success("Login successfully!");
      // Thanh cong thi luu token vaf localStorage luu thong tin user vafo localStorage
      // Chuyen huong sang trang home
    } catch (error) {
      console.log(error);
      toast.error(error.response.data || "Login failed!");
      reset();
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors?.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors?.password && (
            <span className="text-danger">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-3">
          You haven't an account?{" "}
          <Link to={`/auth/register`}>Register now!</Link>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;

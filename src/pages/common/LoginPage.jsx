import React from "react";

const LoginPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LoginPage;

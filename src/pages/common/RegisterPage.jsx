import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register now!!!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors?.username && (
            <span className="text-danger">{errors.username.message}</span>
          )}
        </div>

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
          <label htmlFor="" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            {...register("confirmPassword", { required: true })}
          />
          {errors?.confirmPassword && (
            <span className="text-danger">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="mb-3">
          You have an account? <Link to={`/auth/login`}>Login now!</Link>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

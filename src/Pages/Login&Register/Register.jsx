import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // const handleRegister = (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const confirmPassword = form.confirmPassword.value;

  //   if (password !== confirmPassword) {
  //     console.log("passwords don't match");
  //     return;
  //   }

  //   console.log(name, email, password, confirmPassword);
  // };

  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="card flex-shrink-0 w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center mt-3">Register now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                })}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600 mb-2">This field is required</span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-600">
                  Password must contain at least <br></br>1. one uppercase letter, <br></br>2. one
                  special character, <br></br>3. and be at least 6 characters long.
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                })}
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600 mb-2">This field is required</span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span className="text-red-600">
                  Password must contain at least <br></br>1. one uppercase letter, <br></br>2. one
                  special character, <br></br>3. and be at least 6 characters long.
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <p className="text-sm mb-2">
                Already Have an Account?{" "}
                <span className="text-blue-500">
                  <Link to={"/login"}>Login</Link>
                </span>
              </p>
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

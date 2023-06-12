import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const addedClass = {
      ...data,
      availableSeats: parseFloat(data.availableSeats),
      price: parseFloat(data.price),
      InstructorEmail: user.email,
      instructorName: user.displayName,
      status: "Pending",
    };


    axiosSecure.post("/classes", addedClass).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content w-full flex-col">
        <div className="card flex-shrink-0 w-10/12 shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center mt-3">Add A Class</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add an Image URL</span>
              </label>
              <input
                {...register("image", { required: true })}
                name="image"
                type="text"
                placeholder="Add a photo URL"
                className="input input-bordered"
              />
              {errors.image && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("className", { required: true })}
                name="className"
                type="text"
                placeholder="Add A Class Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seats</span>
              </label>
              <input
                {...register("availableSeats", { required: true })}
                name="availableSeats"
                type="text"
                placeholder="Number of Seats"
                className="input input-bordered"
              />
              {errors.seats && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                name="price"
                type="text"
                placeholder="Add Price"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">session</span>
              </label>
              <input
                {...register("session", { required: true })}
                name="session"
                type="text"
                placeholder="Add session"
                className="input input-bordered"
              />
              {errors.session && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Class</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAClass;

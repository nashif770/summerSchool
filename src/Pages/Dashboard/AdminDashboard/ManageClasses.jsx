import useClasses from "../../../Hooks/useClasses";
import Headings from "../../../Componants/Headings";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allClass] = useClasses();
  const [btnDisable, setBtnDisable] = useState([]);
  let index = 1;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   console.log(allClass);

  const handleDeny = (id) => {
    console.log(id);
    const data = {
      status: "Denied",
    };
    console.log(data);
    axiosSecure
      .patch(`/classes/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    setBtnDisable((prevState) => [...prevState, id]);
  };

  const handleApprove = (id) => {
    console.log(id);
    const data = {
      status: "Approved",
    };
    console.log(data);
    axiosSecure
      .patch(`/classes/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    setBtnDisable((prevState) => [...prevState, id]);
  };

  //   Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)**.

  const onSubmitFeedback = (data, id) => {
    console.log(id)
    const feedback = {
      feedBack: data.adminfeedback,
    };
    console.log(feedback);
    axiosSecure
      .patch(`/classes/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
    setBtnDisable((prevState) => [...prevState, id]);
  };

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <table className="table p-12">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allClass?.map((group) => (
              <tr key={group._id}>
                <th>{index++}</th>
                {/* TODO:  */}
                <td>{group.image}</td>
                <td>{group.className}</td>
                <td>{group.instructorName}</td>
                <td>${group.price}</td>
                <td>{group.status}</td>
                <td className="flex m-auto p-4">
                  {group.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApprove(group._id)}
                        className="btn btn-primary m-auto mx-3 btn-sm"
                        disabled={btnDisable.includes(group._id)}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(group._id)}
                        className="btn bg-red-600 text-white m-auto  mx-3 btn-sm"
                        disabled={btnDisable.includes(group._id)}
                      >
                        Deny
                      </button>
                    </>
                  )}
                  {group.status === "Approved" && (
                    <>
                      <button
                        onClick={() => handleApprove(group._id)}
                        className="btn btn-primary m-auto mx-3 btn-sm"
                        disabled={true}
                      >
                        Approved
                      </button>
                      <button
                        onClick={() => handleDeny(group._id)}
                        className="btn bg-red-600 text-white m-auto  mx-3 btn-sm"
                        // disabled={btnDisable.includes(group._id)}
                        disabled={true}
                      >
                        Deny
                      </button>
                    </>
                  )}

                  {group.status === "Denied" && (
                    <>
                      <button
                        onClick={() => handleApprove(group._id)}
                        className="btn btn-primary m-auto mx-3 btn-sm"
                        disabled={true}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(group._id)}
                        className="btn bg-red-600 text-white m-auto  mx-3 btn-sm"
                        // disabled={btnDisable.includes(group._id)}
                        disabled={true}
                      >
                        Denied
                      </button>
                      <button
                        className="btn btn-warning m-auto  mx-3 btn-sm"
                        onClick={() => window[group._id].showModal()}
                        disabled={group.adminfeedback && true}
                      >
                        FeedBack
                      </button>
                      <dialog id={group._id} className="modal">
                        <form
                          onSubmit={handleSubmit((data)=>onSubmitFeedback(data, group._id))}
                          method="dialog"
                          className="modal-box"
                        >
                          <p className="text-center">
                            Press
                            <span className="text-red-600 font-bold">
                              ESC
                            </span>
                            key to Close the Modal
                          </p>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Write Feedback</span>
                            </label>
                            <textarea
                              {...register("adminfeedback", { required: true })}
                              name="adminfeedback"
                              type="text"
                              placeholder="Write your feedback here"
                              className="textarea textarea-bordered"
                              rows={2}
                              cols={40}
                            ></textarea>
                          </div>
                          <button className="btn btn-warning btn-sm mt-3" >
                            Send Feedback
                          </button>
                        </form>
                      </dialog>

                      {/* --------------------- Modal ------------------- */}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;

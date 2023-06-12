import React, { useEffect, useState, useContext } from "react";
import Headings from "../../../Componants/Headings";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import useStudentClass from "../../../Hooks/useStudentClass";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, refetch] = useStudentClass();

  let index = 1;

  const totalPrice = myClasses?.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  const handleDelete = (group) => {
    fetch(
      `https://b7a12-summer-camp-server-side-nashif770.vercel.app/myselectedclasses/${group._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="flex align-middle justify-between m-3 mt-0 px-60 py-3 bg-slate-300">
          <p className="text-2xl my-auto">Total price: ${totalPrice} </p>
          <button className="btn btn-primary btn-sm">Pay Now</button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myClasses?.map((group) => (
              <tr key={group._id}>
                <th>{index++}</th>
                <td>{group.className}</td>
                <td>{group.instructorName}</td>
                <td>${group.price}</td>
                <td className="flex m-auto">
                  <Link to={`/dashboard/payment/${group._id}`}>
                    <button className="btn btn-primary m-auto">Enroll</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(group)}
                    className="btn bg-red-600 text-white m-auto"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClass;

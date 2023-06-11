import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";

const TopEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [topEnrolled, setTopEnrolled] = useState();
  const [axiosSecure] = useAxiosSecure();

  const email = user?.email;

  useEffect(() => {
    axiosSecure.get(`/instructorClasses/${email}`).then((res) => {
      setTopEnrolled(res.data);
    });
  }, [email]);

  const handleDelete = (group) => {
    console.log("delete");

    axiosSecure
      .delete(`http://localhost:5000/instructorClasses/${group._id}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.deletedCount > 0) {
          console.log("class deleted")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(topEnrolled);

  let index = 1;

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="align-middle m-3 mt-0 px-60 py-3 bg-slate-300">
          <p className="text-center text-2xl my-auto">
            All My Classes: {topEnrolled?.length}{" "}
          </p>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Class Name</th>
              <th className="text-center">availableSeats</th>
              <th className="text-center">Price</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {topEnrolled?.map((group) => (
              <tr key={group._id}>
                <th className="text-center">{index++}</th>
                <td className="text-center">{group.className}</td>
                <td className="text-center">
                  {group.availableSeats || "0"} seats
                </td>
                <td className="text-center">${group.price}</td>
                <td className="text-center">{group.status}</td>
                <td className="flex m-auto">
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

export default TopEnrolledClasses;

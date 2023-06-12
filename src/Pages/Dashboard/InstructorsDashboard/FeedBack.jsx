import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";

const FeedBack = () => {
  const { user } = useContext(AuthContext);
  const [checkFeedBack, setCheckFeedBack] = useState();
  const [axiosSecure] = useAxiosSecure();

  const email = user?.email;

  useEffect(() => {
    axiosSecure.get(`/instructorClasses/${email}`).then((res) => {
      setCheckFeedBack(res.data);
    });
  }, [email]);

  let index = 1;

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="align-middle m-3 mt-0 px-60 py-3 bg-slate-300">
          <p className="text-center text-2xl my-auto">
            All My Classes: {checkFeedBack?.length}{" "}
          </p>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Class Name</th>
              <th className="text-center">Seats</th>
              <th className="text-center">Price</th>
              <th className="text-center">Admin Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {checkFeedBack?.map((group) => (
              <tr key={group._id}>
                <th className="text-center">{index++}</th>
                <td className="text-center">{group.className}</td>
                <td className="text-center">{group.availableSeats}</td>
                <td className="text-center">${group.price}</td>
                <td className="text-start">{group.adminFeedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FeedBack;

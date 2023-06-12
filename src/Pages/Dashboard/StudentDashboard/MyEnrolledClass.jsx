import React, { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";

const MyEnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [enrolledClasses, setEnrolledClasses] = useState([]);
// TODO: send email to backend 
  useEffect(() => {
    axiosSecure
      .get("/payHistory")
      .then((response) => {
        setEnrolledClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [enrolledClasses]);

  console.log(enrolledClasses)

  // enrolledClasses.filter(myclasses => myclasses.email === )

  let index = 1;

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="flex align-middle justify-between m-3 mt-0 px-60 py-3 bg-slate-300"></div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              {/* TODO: date  */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses?.map((enrolled) => (
              <tr key={enrolled._id}>
                <th>{index++}</th>
                <td>{enrolled.className}</td>
                <td>{enrolled.instructorName}</td>
                <td>${enrolled.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyEnrolledClass;

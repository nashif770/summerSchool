import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";
import { AuthContext } from "../../../Providers/AuthProvider";

const TotalEnrolledStudents = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [studentEmail, setstudentEmail] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    axiosSecure(`/payHistory`).then((res) =>
      setstudentEmail(res.data)
    );
  }, []);

  const myStudent = studentEmail?.filter(
    (myStudentEmail) => myStudentEmail?.instructorName === user?.displayName
  );

  console.log(myStudent);

  let index = 1

  return (
    <>
      <Headings heading={"Your Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Student Email</th>
              <th className="text-center">Class Name</th>
              <th className="text-center">Available Seats</th>
              <th className="text-center">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myStudent?.map((student) => (
              <tr key={student._id}>
                <th className="text-center">{index++}</th>
                <td className="text-center">{student.email}</td>
                <td className="text-center">{student.className}</td>
                <td className="text-center">
                  {student.availableSeats || "0"} seats
                </td>
                <td className="text-center">${student.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TotalEnrolledStudents;

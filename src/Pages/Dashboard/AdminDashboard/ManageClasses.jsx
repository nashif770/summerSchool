import React from "react";
import useClasses from "../../../Hooks/useClasses";
import Headings from "../../../Componants/Headings";

const ManageClasses = () => {
  const [allClass] = useClasses();
  let index = 1;

  console.log(allClass)
  
//   Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)**.

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <table className="table">
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
                  <button className="btn btn-primary m-auto btn-sm">Approve</button>
                  <button
                    onClick={() => handleDelete(group)}
                    className="btn bg-red-600 text-white m-auto btn-sm"
                  >
                    Deny
                  </button>
                  <button className="btn btn-warning m-auto btn-sm">Send Feedback</button>
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

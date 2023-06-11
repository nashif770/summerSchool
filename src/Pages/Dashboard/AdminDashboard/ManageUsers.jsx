import { useState, useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Headings from "../../../Componants/Headings";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [users, setUsers] = useState({});
  useEffect(() => {
    axiosSecure.get("http://localhost:5000/users").then((res) => setUsers(res));
  }, [users]);

  const handleMakeAdmin = (id) => {
    console.log(id);
    const data = {
      role: "admin",
    };
    
    axiosSecure
      .patch(`/users/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMakeInstructor = (id) => {
    console.log(id);
    const data = {
      role: "instructor",
    };
    console.log(data);
    axiosSecure
      .patch(`/users/${id}`, data)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  let index = 1;

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.data?.map((group) => (
              <tr key={group._id}>
                <th>{index++}</th>
                <td>{group.name}</td>
                <td>{group.email}</td>
                <td>{group.role}</td>
                <td className="flex m-auto">
                  <button
                    className="btn btn-primary m-auto btn-sm"
                    disabled={group.role === "admin" && true}
                    onClick={() => {
                      handleMakeAdmin(group._id);
                    }}
                  >
                    Make Admin
                  </button>
                  <button
                    className="btn btn-primary m-auto btn-sm"
                    disabled={group.role === "instructor" && true}
                    onClick={() => {
                      handleMakeInstructor(group._id);
                    }}
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleDelete(group)}
                    className="btn bg-red-600 text-white m-auto btn-sm"
                  >
                    Delete User
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

export default ManageUsers;

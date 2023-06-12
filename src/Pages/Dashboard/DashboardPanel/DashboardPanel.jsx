import { useContext, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";

const DashboardPanel = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [allUsers, setAllUsers] = useState();
  const [role, setRole] = useState("");

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-nashif770.vercel.app/users")
      .then((res) => {
        setAllUsers(res.data);
      });
  }, []);

  useEffect(() => {
    const filteredUsers = allUsers?.find(
      (userData) => userData.email === user.email
    );
    setRole(filteredUsers?.role);
  }, [allUsers]);

  return (
    <div className="drawer lg:drawer-open my-3">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
          <h1 className="text-center text-3xl">User Panel</h1>
          <div className="divider"></div>
          <li>
            <NavLink to={"/dashboard/userprofile"}>User Profile</NavLink>
          </li>
        </ul>
        {/* Student Section*/}
        {role === "student" ||
          (role === "masterAdmin" && (
            <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
              <h1 className="text-center text-3xl">Student Panel</h1>
              <div className="divider"></div>
              <li>
                <NavLink to={"/dashboard/selectedclass"}>
                  Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/pay"}>Payment Section</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymenthistory"}>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/enroll"}>Enrolled Class</NavLink>
              </li>
            </ul>
          ))}
        {/* Student Section*/}
        {/* Instructor Section*/}
        {role === "instructor" ||
          (role === "masterAdmin" && (
            <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
              <h1 className="text-center text-3xl">Instructor Panel</h1>
              <div className="divider"></div>
              <li>
                <NavLink to={"/dashboard/addclass"}>Add Class</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/topenrolled"}>
                  Top Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/feedback"}>FeedBack</NavLink>
              </li>
            </ul>
          ))}
        {/* Instructor Section*/}
        {/* Admin Section*/}
        {role === "admin" ||
          (role === "masterAdmin" && (
            <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
              <h1 className="text-center text-3xl">Admin Panel</h1>
              <div className="divider"></div>
              <li>
                <NavLink to={"/dashboard/manageclass"}>Manage Class</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageuser"}>Manage Users</NavLink>
              </li>
            </ul>
          ))}
        {/* Admin Section*/}
      </div>
    </div>
  );
};

export default DashboardPanel;

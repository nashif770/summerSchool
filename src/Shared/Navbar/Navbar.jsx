import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useStudentClass from "../../Hooks/useStudentClass";
import { FaBeer } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const navlist = (
  <>
    <li>
      <Link to={"/"}>Home</Link>
    </li>
    <li>
      <Link to={"/instructors"}>Instructors</Link>
    </li>
    <li>
      <Link to={"/classes"}>Classes</Link>
    </li>
    <li>
      <Link to={"/dashboard/userprofile"}>Dashboard</Link>
    </li>
  </>
);

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/users").then((res) => setAllUsers(res.data));
  }, [allUsers]);

  const currentUser = allUsers.find(
    (thisUser) => thisUser.email === user?.email
  );

  const [myClasses] = useStudentClass();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-gradient-to-b from-[#3498db] to-[#2c3e50] rounded p-4">
      <div className="navbar-start flex items-center">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <div className="flex items-center">
          <Link to={"/"} className="btn btn-ghost text-white text-xl mr-4">
            Summer Slammers
          </Link>
          <img
            className="h-9 rounded-full"
            src="https://i.ibb.co/Y20XD2H/icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{navlist}</ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            {(currentUser?.role === "student" ||
              currentUser?.role === "masterAdmin") && (
              <Link to={"/dashboard/selectedclass"} className="btn mx-4">
                Carts {myClasses?.length}
              </Link>
            )}
            <img
              src={user?.photoURL}
              alt=""
              className="w-10 rounded-full mx-4"
            />
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn mx-4">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import AddClass from "../AddClass";
import { NavLink, Outlet } from "react-router-dom";

const DashboardPanel = () => {

  const isStudent = true;
  const isInstructor = true;
  const isAdmin = true;



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
          {/* Student Section*/}
        {isStudent && <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
          <h1 className="text-center text-3xl">Student Panel</h1>
          <div className="divider"></div>
          <li>
            <NavLink to={"/dashboard/selectedclass"}>Selected Classes</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/pay"}>Payment Section</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymenthistory"}>Payment History</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/enroll"}>Enrolled Class</NavLink>
          </li>
        </ul>}
          {/* Student Section*/}
          {/* Student Section*/}
        {isInstructor && <ul className="menu p-4 w-80 bg-base-200 text-base-content mt-3">
          <h1 className="text-center text-3xl">Instructor Panel</h1>
          <div className="divider"></div>
          <li>
            <NavLink to={"/dashboard/addclass"}>Add Class</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/topenrolled"}>Top Enrolled Class</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/feedback"}>FeedBack</NavLink>
          </li>
        </ul>}
          {/* Student Section*/}
      </div>
    </div>
  );
};

export default DashboardPanel;

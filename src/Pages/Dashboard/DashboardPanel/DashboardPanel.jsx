import React from "react";
import AddClass from "../AddClass";
import { NavLink, Outlet } from "react-router-dom";

const DashboardPanel = () => {
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
          {/* Student Section*/}
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
          {/* Student Section*/}
        </ul>
      </div>
    </div>
  );
};

export default DashboardPanel;

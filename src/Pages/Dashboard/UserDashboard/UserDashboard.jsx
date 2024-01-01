import React, { useContext } from "react";
import Headings from "../../../Componants/Headings";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="m-3 flex flex-row gap-10">
      <img className="w-1/3" src={user.photoURL} alt="" />
      <div className="flex flex-row gap-3">
                <div>
                  <p>
                    <span className="font-bold">Name</span>
                  </p>
                  <p>
                    <span className="font-bold">Email</span>
                  </p>
                </div>
                <div>
                  <p>: {user.displayName}</p>
                  <p>: {user.email}</p>
                </div>
              </div>
    </div>
  );
};

export default UserDashboard;

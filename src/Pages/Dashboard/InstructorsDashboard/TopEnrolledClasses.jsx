import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const TopEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [topEnrolled, setTopEnrolled] = useState();
  const [axiosSecure] = useAxiosSecure();

  const email = user?.email;


  useEffect(() => {
    axiosSecure.get("/instructorClasses", email).then((res) => {
      setTopEnrolled(res.data);
    });
  }, []);

    console.log(topEnrolled);

  return <div></div>;
};

export default TopEnrolledClasses;

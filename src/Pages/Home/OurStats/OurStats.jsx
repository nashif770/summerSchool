import React, { useEffect, useState } from "react";
import Headings from "../../../Componants/Headings";
import useClasses from "../../../Hooks/useClasses";
import useInstructors from "../../../Hooks/useInstructors";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const OurStats = () => {
  const [allClass] = useClasses();
  const [instructors] = useInstructors();
  const [axiosSecure] = useAxiosSecure();

  const [students, setStudents] = useState({});

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-nashif770.vercel.app/users")
      .then((res) => setStudents(res.data));
  }, [students]);

  const allStudents = students.filter((student) => student.role === "student");

  return (
    <div className="flex flex-col justify-center">
      <Headings heading={"Our Status"}></Headings>
      <div className="stats shadow m-3">
        <div className="stat">
          <div className="stat-figure text-primary">{/* TODO: icon */}</div>
          <div className="stat-title">Total Classes</div>
          <div className="stat-value text-primary">{allClass.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">{/* TODO: icon */}</div>
          <div className="stat-title">All Instructor</div>
          <div className="stat-value text-secondary">{instructors.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="w-16 rounded-full">{/* TODO: icon */}</div>
          </div>
          <div className="stat-title">Our Students </div>
          <div className="stat-value">{allStudents.length}</div>
        </div>
      </div>
    </div>
  );
};

export default OurStats;

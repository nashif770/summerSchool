import React, { useEffect, useState } from "react";
import Headings from "../../../Componants/Headings";
import useClasses from "../../../Hooks/useClasses";
import useInstructors from "../../../Hooks/useInstructors";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const OurStats = () => {
  const [allClass] = useClasses();
  const [instructors] = useInstructors();
  const [axiosSecure] = useAxiosSecure();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    axiosSecure
      .get("https://b7a12-summer-camp-server-side-nashif770.vercel.app/users")
      .then((res) => setStudents(res.data));
  }, [students]);

  const allStudents = students?.filter((student) => student.role === "student");

  return (
    <>
      <Headings heading={"Status"}></Headings>
      <div className="flex flex-col justify-center">
        <div className="stats shadow m-3">
          <div className="stat">
            <div className="stat-figure text-primary">{/* TODO: icon */}</div>
            <div className="stat-title text-center">Total Classes</div>
            <div className="stat-value text-center text-primary">
              {allClass.length}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">{/* TODO: icon */}</div>
            <div className="stat-title text-center">All Instructor</div>
            <div className="stat-value text-center text-secondary">
              {instructors.length}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="w-16 rounded-full">{/* TODO: icon */}</div>
            </div>
            <div className="stat-title text-center">Our Students </div>
            <div className="stat-value text-center">{allStudents.length}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStats;

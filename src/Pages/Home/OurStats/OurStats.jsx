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
      <Headings heading={"Status"} />

      <div className="flex flex-wrap justify-center m-3">
        <div className="stat-card bg-white shadow-lg m-3 p-6 rounded-md">
          <div className="stat-icon text-primary">
            {/* TODO: Add an icon or SVG for Total Classes */}
            <span className="text-4xl">📚</span>
          </div>
          <div className="stat-title text-center text-lg">Total Classes</div>
          <div className="stat-value text-center text-primary text-2xl font-bold">
            {allClass.length}
          </div>
        </div>

        <div className="stat-card bg-white shadow-lg m-3 p-6 rounded-md">
          <div className="stat-icon text-secondary">
            {/* TODO: Add an icon or SVG for All Instructors */}
            <span className="text-4xl">👩‍🏫</span>
          </div>
          <div className="stat-title text-center text-lg">All Instructors</div>
          <div className="stat-value text-center text-secondary text-2xl font-bold">
            {instructors.length}
          </div>
        </div>

        <div className="stat-card bg-white shadow-lg m-3 p-6 rounded-md">
          <div className="stat-icon text-secondary">
            {/* TODO: Add an icon or SVG for Our Students */}
            <span className="text-4xl">👨‍🎓</span>
          </div>
          <div className="stat-title text-center text-lg">Our Students</div>
          <div className="stat-value text-center text-2xl font-bold text-green-600">
            {allStudents.length}
          </div>
        </div>

        {/* Add more stat-cards with relevant information */}
        {/* <div className="stat-card ..."> ... </div> */}
      </div>
    </>
  );
};

export default OurStats;

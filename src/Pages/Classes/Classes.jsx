import { useContext, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import useStudentClass from "../../Hooks/useStudentClass";
import ClassesCard from "./ClassesCard";
import Headings from "../../Componants/Headings";

const Classes = () => {
  const [allClass] = useClasses();

  return (
    <div>
      <Headings heading={"See Our Classes"}></Headings>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 m-auto p-6">
        {allClass.map((allClass) => (
          <ClassesCard key={allClass._id} allClass={allClass}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;

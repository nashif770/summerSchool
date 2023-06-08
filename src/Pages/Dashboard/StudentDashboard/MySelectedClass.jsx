import React, { useEffect, useState, useContext } from "react";
import Headings from "../../../Componants/Headings";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [classGroup, setClassGroup] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myselectedclasses/${user?.email}`)
      .then((res) => {
        setClassGroup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(classGroup);

  return (
    <>
      <Headings heading={"My Classes"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {/* {classGroup.map((group) => { */}
              <tr>
                <td>s</td>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>s</td>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>s</td>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            {/* })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySelectedClass;

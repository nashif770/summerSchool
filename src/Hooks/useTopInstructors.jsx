import React, { useEffect, useState } from "react";

const useTopInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-nashif770.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);

  return [instructors, loading];
};

export default useTopInstructors;

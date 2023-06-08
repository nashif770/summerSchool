import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useData = () => {
  const { user } = useContext(AuthContext);
  const { isloading, isError, data, error } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/classes?email=${user.email}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  })
  return [data, isloading]
};

export default useData;

import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

    const useStudentClass = () => {
    const { user } = useContext(AuthContext);
    const { data: myClasses =[], refetch } = useQuery({
        queryKey: ["myselectedclasses",user?.email],
        queryFn: async () => {
        const response = await fetch(
            `https://b7a12-summer-camp-server-side-nashif770.vercel.app/myselectedclasses?email=${user?.email}`
        );
        return response.json();
        },
    });
    
    return [myClasses, refetch]
    };

export default useStudentClass;

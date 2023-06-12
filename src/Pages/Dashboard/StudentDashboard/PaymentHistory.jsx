import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import Headings from "../../../Componants/Headings";
import useAuth from "../../../Hooks/useAuth";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  console.log(user.email);
  // TODO: Send email to backend
  useEffect(() => {
    axiosSecure
      .get(
        `https://b7a12-summer-camp-server-side-nashif770.vercel.app/payments`,
        user.email
      )
      .then((response) => {
        setHistory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const myHistory = history?.filter(
    (userData) => userData.email === user.email
  );

  console.log(myHistory)

  let index = 1;
  return (
    <>
      <Headings heading={"My Payment History"} subHeading={""}></Headings>
      <div className="overflow-x-auto">
        <div className="flex align-middle justify-between m-3 mt-0 px-60 py-3 bg-slate-300"></div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myHistory?.map((payments) => (
              <tr key={payments._id}>
                <th>{index++}</th>
                <td>{payments.transactionId}</td>
                <td>{payments.quantity}</td>
                <td>${payments.price}</td>
                <td>{payments.orderStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentHistory;

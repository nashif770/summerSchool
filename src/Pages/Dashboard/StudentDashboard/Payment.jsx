import React from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useStudentClass from "../../../Hooks/useStudentClass";
import Headings from "../../../Componants/Headings";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_paymentGateway);

const Payment = () => {
  const [myClasses] = useStudentClass();
  const {id} = useParams();

  const paidClass = myClasses.find(m => m._id === id)

 
  return (
    <>
      <Headings heading={"Pay and Enroll"} subHeading={""}></Headings>
      <div className="w-1/2 m-auto border p-10 bg-slate-300 rounded-lg">
        <h1 className="text-center text-black">Pay Now and Join Class</h1>
        <Elements stripe={stripePromise}>
          <CheckOutForm myClasses={paidClass} price={paidClass?.price}></CheckOutForm>
        </Elements>
      </div>
    </>
  );
};

export default Payment;

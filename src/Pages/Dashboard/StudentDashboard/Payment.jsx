import React from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useStudentClass from "../../../Hooks/useStudentClass";

const stripePromise = loadStripe(import.meta.env.VITE_paymentGateway);

const Payment = () => {
  const [myClasses] = useStudentClass();


  const totalPrice = myClasses?.reduce((accumulator, currentValue) => {
    const total =accumulator + currentValue.price;
    const totalPrice = parseFloat(total.toFixed(2))
    return totalPrice;
  }, 0);

  console.log(totalPrice)

  return (
    <div className="w-1/2 m-auto border p-10 bg-slate-300 rounded-lg">
      <h1 className="text-center text-black">Pay Now and Join Class</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm myClasses={myClasses} price={totalPrice}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;

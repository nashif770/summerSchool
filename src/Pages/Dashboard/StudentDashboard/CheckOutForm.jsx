import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = ({ myClasses, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth(AuthContext);

  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  console.log(myClasses)

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymus",
          email: user?.email || "unknown",
        },
      },
    });
    console.log("calling",paymentIntent)
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment-intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(paymentIntent.id);
      // TODO:

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: myClasses?.length,
        classId: myClasses.map(Id => Id._id),
        classes: myClasses.map(classes => classes.name),
      }
      axiosSecure.post('payments', payment)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          console.log("data entered")
        }
      })
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="m-8 mb-2">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning mt-4 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p className="text-red-600 text-center">{cardError}</p>}
      {transactionId && (
        <p className="text-black text-center"> Transaction Complete with <span className="text-center font-bold text-green-500">{transactionId}</span></p>
      )}
    </>
  );
};

export default CheckOutForm;

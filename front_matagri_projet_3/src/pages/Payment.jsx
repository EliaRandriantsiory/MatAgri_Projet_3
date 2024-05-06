import React, { useEffect, useState } from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
import Paiement from "../components/Payement/Paiement";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({ sommeMontantTotal }) {
  const [payeAmount, setPayeAmount] = useState();

  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8082/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: payeAmount,
        },
      })
      .then(() => {
        toast.success("Paiement effectué avec succés");
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    setPayeAmount(sommeMontantTotal());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "1vh",
        alignItems: "center",
        justifyContent: "right",
      }}
      className="App"
    >
      <Stripe
        style={{
          padding: "10px",
          borderRadius: "0px",
        }}
        stripeKey="pk_test_51PCejO2NXmTUFLRD9GeY18SJv9bSKibt9BXlvfRtdZy4bYycg9qsgKFFMAN7jC1BDsVd8vKw0Kg0vE41ALzI3HpK003r6ioUsB"
        token={handleToken}
        label="Payer"
      />
    </div>
  );
}

export default Payment;

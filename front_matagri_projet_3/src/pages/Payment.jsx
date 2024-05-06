import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8082/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 200000,
        },
      })
      .then(() => {
        alert("Paiement réussi");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="App"
    >
      <Stripe
        style={{ padding: "10vh" }}
        stripeKey="pk_test_51PCejO2NXmTUFLRD9GeY18SJv9bSKibt9BXlvfRtdZy4bYycg9qsgKFFMAN7jC1BDsVd8vKw0Kg0vE41ALzI3HpK003r6ioUsB"
        token={handleToken}
      />
    </div>
  );
}

export default Payment;

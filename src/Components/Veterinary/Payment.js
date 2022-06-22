import {
  Bookings,
  HeadingTag,
  PaymentContainer,
  Text2,
  Containers,
  Payment,
} from "./Styling";

import StripeCheckout from "react-stripe-checkout";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function ConfirmBooking() {
  function handleToken(token, addresses) {
    console.log({ token, addresses });
  }

  const location = useLocation();
  const data = location.state;
  return (
    <Bookings>
      <Payment>
        <HeadingTag>
          <img
            src={require("./images/complete-small.jpg")}
            alt="logo"
            className="Mainname"
            style={{ height: "5rem", padding: "2px" }}
          />
          <h1>Payment</h1>
        </HeadingTag>
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "10px",
          }}
        >
          Your Bookings:
        </h1>
        <Product>
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "300px", display: "flex", margin: "20px" }}>
                <img
                  src={data.image}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
                <h2 style={{ marginLeft: "-150px", marginTop: "-20px" }}>
                  {data.service}
                </h2>
              </div>
              <h2>Service charge: ₹{data.price}</h2>
            </div>
          </>
        </Product>
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "10px",
          }}
        >
          Total: ₹{data.price}
        </h1>
        <Containers>
          <PaymentContainer>
            <Text2>Card Payment</Text2>
            <StripeCheckout
              stripeKey="pk_test_51KuyaPSCQaVx7HBe8OxRf2sNJR6frOJUsRuVFJzPvui7Ni4icPjxO5u1YjNTWAwFtK9xxxQS03dMb6aetPKBxzSP004S3AwqfR"
              token={handleToken}
              billingAddress
              shippingAddress
              currency="inr"
              amount={data.price * 100}
              name="Service Charge"
            />
          </PaymentContainer>
        </Containers>
      </Payment>
    </Bookings>
  );
}

const Product = styled.div`
  display: flex;
  justify-content: center;
`;

export default ConfirmBooking;

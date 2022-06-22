import {
    Bookings,
    HeadingTag,
    PaymentContainer,
    Text2,
    Containers,
    Payment,
  } from "./Styling";
  
  import StripeCheckout from "react-stripe-checkout";
  
  import { useSelector } from "react-redux";
  import { useLocation } from "react-router-dom";
  import styled from "styled-components";
  
  function Checkout() {
    function handleToken(token, addresses) {
      console.log({ token, addresses });
    }
    const location = useLocation();
    const store = location.state;
    const { cartTotalAmount } = useSelector((state) => state.cart);
  
    const { cartItems } = useSelector((state) => state.cart);

    const Price = (cartTotalAmount !== 0)?(cartTotalAmount):(store.price)

    return (
      <Bookings>
        <Payment>
        <HeadingTag>
        <img
            src={require("./complete-small.jpg")}
            alt="logo"
            className="Mainname"
            style={{ height: "5rem", padding: "2px" }}
          />
          <h1>
         Payment</h1></HeadingTag>
        <h1 style={{display:"flex", justifyContent: 'flex-start' , margin: '10px'}}>
          Your Orders:
          </h1>
        <Product>
        {
        (cartTotalAmount !== 0)? 
        <Cart>
        {
          cartItems.map ((data, index) =>(
            <>
             <div style={{display: 'flex',alignItems:'center'}} key={index}>
        <div style={{width:'300px',display: 'flex',margin:'20px'}}>
      <img src={data.imageurl} alt= ''style={{width: '70px',height : '70px' , marginRight: '20px',}} />
      <h3>{data.name}</h3>
      </div>
      <h2>Price: ₹{data.price}</h2>
      </div> 
            </>
          ))
        }
      </Cart>
        :<div style={{display: 'flex',alignItems:'center'}}>
        <div style={{width:'300px',display: 'flex',margin:'20px'}}>
      <img src={store.imageurl} alt= ''style={{width: '70px',height : '70px' }} />
      <h3>{store.name}</h3>
      </div>
      <h2>Price: ₹{store.price}</h2>
      </div>
       }
        </Product>
        <h1 style={{display:"flex", justifyContent:"flex-end" , margin: '10px'}}>
          Total: ₹{Price}
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
              amount={Price*100} //*100 for converting from dollar to blaah
              name="Service Charge"
            />
          </PaymentContainer>
        </Containers>
        </Payment>
      </Bookings>
      
    );
  }
  
  
  const Product = styled.div`
  display:flex;
  justify-content: center;
  `
  const Cart = styled.div`
  
  `
  
  export default Checkout;
  
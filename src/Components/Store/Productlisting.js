import styled from "styled-components";
import React, { useState } from "react";
import { section } from "./data";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/counter/cartSlice";
import "./styles.css"
import { useUserAuth } from "../../context/UserAuthContext";

const Productlisting = () => {
  const params = useParams();
  const product = section.find((item) => item.id == params.id);
  const { user } = useUserAuth();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };
  console.log(product);
  return (
    <div>
      <h1 style={{ textalign: 'center', padding: "10px" }}>{product.name}</h1>
      <Dropdown>
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          <h2> Sorted by ⏷ </h2>
        </div>
        {isActive && (
          <Dropdowncontent>
            <h2>Price</h2>
            <hr />
            <div className="dropdown-item">
              <h2>High to Low </h2>
            </div>
            <div className="dropdown-item">
              <h2>Low to High </h2>
            </div>
          </Dropdowncontent>
        )}
      </Dropdown>
      <div className="home-container">
        <div className="products">
          {
            product.products.map((data, index) => (
              <>

                <div key={data.id} className="product">
                  <Link to={`/store/${product.id}/${data.id}`} state={data} key={index}>
                  <img src={data.imageurl} alt={data.name} />
                    <h3>{data.name}</h3>
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">Price: ₹{data.price}</span>
                    </div>
                  </Link>
                  {
                  (user)?
                  <button onClick={() => handleAddToCart(data)}>
                    Add To Cart
                  </button>: <h4 style={{color: 'red'}}>Signin first for adding to cart</h4>}
                </div>
              </>
            ))}
        </div>
      </div>
      <Bottomtap/>
    </div>
  );
};

const Bottomtap = styled.div`
height: 50px
`

const Dropdown = styled.div`
  width: 110px;
  background-color: #ffd301;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
`;
const Dropdowncontent = styled.div`
  position: absolute;
  background-color: #ffd301;
  padding: 10px;
`;

export default Productlisting;

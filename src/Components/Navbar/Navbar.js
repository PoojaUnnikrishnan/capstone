import { Input, Badge, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import "./Nav.css";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useUserAuth } from "../../context/UserAuthContext";

const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: 12
  },
  book: {
    fontSize: 12
  }
}));

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const {cartItems } = useSelector((state) => state.cart);
  const { bookingItems } = useSelector((state) => state.bookings)
  const { logOut, user } = useUserAuth();
  const classes = useStyles();  
  const handleLogout = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <div className="navbar">
      <nav className="main-nav">
        {/* this div for logo */}
        <a href="/">
        <img
          src={require("./Navlogo.jpg")}
          alt="logo"
          className="Mainname"
          style={{ height: "7rem", padding: "2px" }}
        />
        </a>
        <div className="menu-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
             {(!user)? 
             <a href="/signup">Signup</a>
             :<h2 className="signout" variant="primary" onClick={handleLogout} style={{ fontWeight: "500", fontSize:"2rem",
              color: "#333",cursor: "pointer"}} >
          Signout
        </h2>}
            </li>
            <li className="dropdown">
              <div
                className="dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
              >
                Services ⏷
              </div>
              {isActive && (
                <div className="dropdown-content">
                  <div>
                    <a href="/rescue" className="dropdown-item">
                      Rescue{" "}
                    </a>
                  </div>
                  <div>
                    <a href="/adoption" className="dropdown-item">
                      {" "}
                      Adoption
                    </a>
                  </div>
                  <div>
                    <a href="/store" className="dropdown-item">
                      {" "}
                      Store
                    </a>
                  </div>
                  <div>
                    <a href="/vet" className="dropdown-item">
                      {" "}
                      Veterinary
                    </a>
                  </div>
                </div>
              )}
            </li>
           { 
           (user)?
           <li>
            <Badge badgeContent={(bookingItems.length !== 0)?bookingItems.length:'0'} color="primary" classes={{ badge: classes.book }}>
              <a href="/bookings">Bookings</a>
              </Badge>
            </li>: null}
            <li>
              {
                (user)?
              <a href="/Cart">
                <Badge badgeContent={(cartItems.length !== 0)?cartItems.length:'0'} color="secondary" classes={{ badge: classes.badge }}>
                  <ShoppingCart
                    style={{ width: "30px", height: "30px", cursor: "pointer" }}
                  />
                </Badge>
              </a>: null}
            </li>
          </ul>
        </div>
        <Input
          placeholder="🔍  Search"
          style={{
            alignContent: "center",
            alignItems: "center",
            width: "200px",
            height: "50px",
            fontSize: "20px",
            border: "px",
            marginLeft: "200px",
          }}
        />
      </nav>
    </div>
  );
};

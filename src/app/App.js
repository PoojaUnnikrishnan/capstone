import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adoption from "../Components/Adoption/Adoption";
import Home from "../Components/Home/Home";
import Rescue from "../Components/Rescue/Rescue";
import Productlisting from "../Components/Store/Productlisting";
import Store from "../Components/Store/Store";
import Veterinary from "../Components/Veterinary/Veterinary";
import VetDescription from "../Components/Veterinary/VetDescription";
import { Navbar } from "../Components/Navbar/Navbar";
import DogDescription from "../Components/Adoption/DogDescription";
import Payment from "../Components/Veterinary/Payment";
import Productdiscription from "../Components/Store/Productdiscription";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Signup/Login";
import { ToastContainer } from "react-toastify";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Cart from "../Components/Store/Cart";
import Footer from "../Components/Footer/Footer";
import ProtectedRoute from "../Components/Signup/ProtectedRoute";
import Forms from "../Components/Adoption/Forms";
import ConfirmBooking from "../Components/Veterinary/ConfirmBooking";
import Checkout from "../Components/Store/Checkout";
import Bookings from "../Components/Veterinary/Bookings";


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Navbar />
        <div style={{ marginTop: "100px" }}></div>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/Cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rescue" element={<Rescue />} />
            <Route exact path="/adoption" element={<Adoption />} />
            <Route exact path="/adoption/:id" element={<DogDescription />} />
            <Route
              exact
              path="/forms"
              element={
                <ProtectedRoute>
                  <Forms />
                </ProtectedRoute>
              }
            />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/store/:id" element={<Productlisting />} />
            <Route
              exact
              path="/store/:id/:tag"
              element={<Productdiscription />}
            />
            <Route exact path="/vet" element={<Veterinary />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route exact path="/store/:id" element={<Productlisting />} />
            <Route exact path="/vet/:id" element={<VetDescription />} />
            <Route
              exact
              path="/booking"
              element={
                <ProtectedRoute>
                  <ConfirmBooking />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route exact path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
      <div style={{ marginBottom: "100px" }}></div>
      <Footer />
    </div>
  );
}

export default App;

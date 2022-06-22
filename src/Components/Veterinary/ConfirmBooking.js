import React from "react";
import "./Styling.css";
import { Text1 } from "./Styling";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTOBookings } from "../../features/bookingslice";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";
function ConfirmBooking() {
  const { bookingItems } = useSelector((state) => state.bookings);
  const location = useLocation();
  const Bookingdata = location.state;
  const dispatch = useDispatch();
  const [isBooked, setIsBooked] = useState(false);
  const handleAddtoBookings = async (formValues) => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      dispatch(addTOBookings(formValues));
      setIsBooked(true);
      await addDoc(collection(db, "bookings"), {
        FirstName: formValues.FirstName,
        LastName: formValues.LastName,
        email: formValues.email,
        ContactNo: formValues.ContactNo,
        Address: formValues.Address,
        PinCode: formValues.PinCode,
        slots: formValues.slots,
        Service: formValues.Service,
      })
        .then(function (res) {
          console.log("Data is successfully added");
        })
        .catch(function (err) {
          console.log("Data cannot be added");
        });
    }
  };

  const initialValues = {
    id: `${bookingItems.length}`,
    FirstName: "",
    LastName: "",
    email: "",
    ContactNo: "",
    Address: "",
    PinCode: "",
    slots: "",
    Service: `${Bookingdata.service}`,
    Image: `${Bookingdata.image1}`,
    price: `${Bookingdata.price}`,
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName) {
      errors.FirstName = "First name is required!";
    } else if (values.FirstName.length < 2 || values.FirstName.length > 20) {
      errors.FirstName = "The First name must be between 6 and 20 characters";
    }
    if (!values.LastName) {
      errors.LastName = "Last name is required!";
    } else if (values.LastName.length < 1 || values.LastName.length > 20) {
      errors.LastName = "The last name must be between 2 and 20 characters";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "Contact number is required!";
    } else if (values.ContactNo.length < 10 || values.ContactNo.length > 10) {
      errors.ContactNo = "Contact no should have 10 digits";
    }
    if (!values.Address) {
      errors.Address = "Address is required!";
    } else if (values.Address.length < 20 || values.Address.length > 100) {
      errors.Address = "The Address must be between 15 to 100 characters.";
    }
    if (!values.PinCode) {
      errors.PinCode = "Pincode is required!";
    } else if (values.PinCode.length < 6 || values.PinCode.length > 6) {
      errors.PinCode = "The pincode should have 6 digits";
    }
    if (values.slots.length === 0) {
      errors.slots = "Select a time slot!";
    }
    return errors;
  };
  return (
    <div className="BackgroundImage">
      <div style={{ margin: "30px " }}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="ui form">
              <div
                style={{
                  backgroundColor: "#ffd301",
                  width: "100%",
                  borderRadius: "10px 10px 0 0",
                }}
              >
                {/* <img
                  src={require("./complete-small.jpg")}
                  alt="logo"
                  className="Mainname"
                  style={{ height: "5rem", padding: "2px" }}
                /> */}
                <Text1>
                  <h3>{Bookingdata.service}</h3>
                </Text1>
              </div>
              <div
                style={{
                  padding: "20px",
                }}
              >
                <div className="bookingRow">
                  <div className="fields">
                    <input
                      type="text"
                      name="FirstName"
                      placeholder=" Enter your Firstname"
                      value={formValues.FirstName}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.FirstName}</p>
                  </div>

                  <div className="fields">
                    <input
                      type="text"
                      name="LastName"
                      placeholder="Enter Your Lastname"
                      value={formValues.LastName}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.LastName}</p>
                  </div>
                </div>
                <div className="bookingRow">
                  <div className="fields">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.email}</p>
                  </div>
                  <div className="fields">
                    <input
                      type="string"
                      name="ContactNo"
                      placeholder="Enter Your Contact Number"
                      value={formValues.ContactNo}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.ContactNo}</p>
                  </div>
                </div>
                <div className="bookingRow">
                  <div className="fields">
                    <input
                      type="text"
                      name="Address"
                      placeholder="Enter Your Address"
                      value={formValues.Address}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.Address}</p>
                  </div>
                  <div className="fields">
                    <input
                      type="text"
                      name="PinCode"
                      placeholder="Enter Your Pin Code"
                      value={formValues.PinCode}
                      onChange={handleChange}
                    />
                    <p className="para">{formErrors.PinCode}</p>
                  </div>
                </div>
                <div className="bookingRow">
                  <div className="fields">
                    <select
                      style={{ padding: "10px", width: "100%" }}
                      name="slots"
                      onChange={handleChange}
                      value={formValues.slots}
                    >
                      <option value="">Slots-Available</option>
                      <option value="12am-2am">12am-2am</option>
                      <option value="2am-4am">2am-4am</option>
                      <option value="4am-6am">4am-6am</option>
                      <option value="6am-8am">6am-8am</option>
                      <option value="8am-10am">8am-10am</option>
                      <option value="10am-12pm">10am-12pm</option>
                      <option value="12pm-2pm">12pm-2pm</option>
                      <option value="2pm-4pm">2pm-4pm</option>
                      <option value="4pm-6pm">4pm-6pm</option>
                      <option value="6pm-8pm">6pm-8pm</option>
                      <option value="8pm-10pm">8pm-10pm</option>
                      <option value="10pm-12am">10pm-12am</option>
                    </select>
                    <p className="para">{formErrors.slots}</p>
                  </div>
                </div>

                <p style={{ fontSize: "15px" }}>
                  T & C* <br></br>A service charge of X will be charged from the
                  user. This amount will not be refunded under any
                  circumstances.
                </p>
              </div>
            </div>
            <div className="bookYourSlots">
              {isBooked !== true ? (
                <button
                  className="Submit"
                  onClick={() => handleAddtoBookings(formValues)}
                >
                  Book Your Slots
                </button>
              ) : (
                <Link to={"/payment"} state={Bookingdata}>
                  <button
                    className="Paymentbtn"
                    style={{ backgroundColor: "red" }}
                  >
                    Continue To Payment
                  </button>
                </Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;

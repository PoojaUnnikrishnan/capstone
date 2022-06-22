import React from "react";
import "./Form.css";
import { useState, useEffect } from "react";//component needs to do something after render
import styled from "styled-components";
import { addToRescue } from "../../features/rescueslice";
import { useDispatch } from "react-redux";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";
function Form({ imageRef }) {
  const dispatch = useDispatch();
  const handleAddtoRescue = async (formValues) => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      await addDoc(collection(db, "rescue"), {
        FirstName: formValues.FirstName,
        LastName: formValues.LastName,
        email: formValues.email,
        ContactNo: formValues.ContactNo,
        Address: formValues.Address,
        PinCode: formValues.PinCode,
        imgUrl: formValues.imgUrl,
      })
        .then(function (res) {
          dispatch(addToRescue(formValues));
          console.log("Data is successfully added");
        })
        .catch(function (err) {
          console.log("Data cannot be added");
        });
    }
  };

  const initialValues = {
    FirstName: "",
    LastName: "",
    email: "",
    imgUrl: `${imageRef}`,
    ContactNo: "",
    Address: "",
    PinCode: "",
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

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FirstName) {
      errors.FirstName = "Firstname is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.ContactNo) {
      errors.ContactNo = "Contact number is required!";
    }
    if (!values.Address) {
      errors.Address = "Address is required!";
    }
    if (!values.LastName) {
      errors.LastName = "Lastname is required!";
    }
    if (!values.PinCode) {
      errors.PinCode = "Pincode is required!";
    } else if (values.PinCode.length < 6 || values.PinCode.length > 6) {
      errors.PinCode = "The pincode should have 6 digits";
    }
    return errors;
  };
  return (
    <div className="contain">
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FirstName</label>
            <input
              type="text"
              name="FirstName"
              placeholder=" Enter your Firstname"
              value={formValues.FirstName}
              onChange={handleChange}
              style={{ marginLeft: "30px" }}
            />
            <p className="content">{formErrors.FirstName}</p>
          </div>

          <div className="field">
            <label>LastName</label>
            <input
              type="text"
              name="LastName"
              placeholder="Enter Your Lastname"
              value={formValues.LastName}
              onChange={handleChange}
              style={{ marginLeft: "34px" }}
            />
            <p className="content">{formErrors.LastName}</p>
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={formValues.email}
              onChange={handleChange}
              style={{ marginLeft: "70px" }}
            />
            <p className="content">{formErrors.email}</p>
          </div>
          <div className="field">
            <label>ContactNo</label>
            <input
              type="number"
              name="ContactNo"
              placeholder="Enter Your Contact Number"
              value={formValues.ContactNo}
              onChange={handleChange}
              style={{ marginLeft: "29px" }}
            />
            <p className="content">{formErrors.ContactNo}</p>
          </div>

          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="Address"
              placeholder="Enter Your Address"
              value={formValues.Address}
              onChange={handleChange}
              style={{ marginLeft: "48px" }}
            />
            <p className="content">{formErrors.Address}</p>
          </div>
          <div className="field">
            <label>Pincode</label>
            <input
              type="text"
              name="PinCode"
              placeholder="Enter Your Pin Code"
              value={formValues.PinCode}
              onChange={handleChange}
              style={{ marginLeft: "48px" }}
            />
            <p className="content">{formErrors.PinCode}</p>
          </div>

          <button
            className="bttn"
            onClick={() => handleAddtoRescue(formValues)}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
const Text = styled.h2`
  justify-content: center;
  /* text-align: center; */
  /* justify-items: center; */
  /* align-items: center; */
`;
export default Form;

import React from "react";
import {useState} from "react";
import "./Forms.css";
import  { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";


export default function Forms() {
  const [values,setValues] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phonenumber:"",
    income:"",
    aadharNo:"",
    pincode:"",
    address:""
  });

  const [submitted,setSubmitted] = useState(false)

  const [valid,setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values,firstName:event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values,lastName:event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values,email:event.target.value})
  }
 
  const handlePhoneNumberInputChange = (event) => {
    setValues({...values,phonenumber:event.target.value})
  }
  const handleIncomeInputChange = (event) => {
    setValues({...values,income:event.target.value})
  }
  const handleAadharNumberInputChange = (event) => {
    setValues({...values,aadharNo:event.target.value})
  }
  const handlePinCodeInputChange = (event) => {
    setValues({...values,pincode:event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setValues({...values,address:event.target.value})
  }

  const handleAdopt = async(values) => {
    await addDoc(collection(db,"Adopt"),{
      firstName:values.firstName,
      lastName:values.lastName,
      email:values.email,
      phonenumber:values.phonenumber,
      income:values.income,
      aadharNo:values.aadharNo,
      pincode:values.pincode,
      address:values.address,
    })
    .then((res) => {
      console.log("Adoption Details is added Succesfully ");
    })
    .catch((err) => {
      console.log("Adoption Details cannot be Added");
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email  && values.phonenumber && values.aadharNo && values.pincode && values.address){
      setValid(true)
      toast.info("You have registered for adoption", {
        position: "top-right",
      });

    }
    
    setSubmitted(true);
  }
  return (
    <div class="form-container">
      <form class="register-form" onSubmit = {handleSubmit}>
      {/* <img
            src={require("./complete-small.jpg")}
            alt="logo"
            className="Mainname"
            style={{ height: "5rem", padding: "2px" }}
          /> */}

       <div style={{display: "flex",alignItems:"center", margin:"20px"}}>
       <img
            src={require("./complete-small.jpg")}
            alt="logo"
            className="Mainname"
            style={{ height: "5rem", padding: "2px" }}
          />
        <h1> ADOPTION FORM</h1>
       

         </div>
        {/* {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}   */}
        <input
          value = {values.firstName}
          onChange = {handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        
        {submitted && !values.firstName ?  <span id="first-name-error">Please enter a first name</span> : null}  
        <input
          id="last-name"
          value = {values.lastName}
          onChange = {handleLastNameInputChange}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        
        {submitted && !values.lastName ?  <span id="first-name-error">Please enter a last name</span> : null}  
        <input
          id="email"
          value = {values.email}
          onChange = {handleEmailInputChange}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
      {submitted && !values.email ?  <span id="first-name-error">Please enter a Email address </span> : null}   
         
        <input
          id="phonenumber"
          value = {values.phonenumber}
          onChange = {handlePhoneNumberInputChange}
          class="form-field"
          type="text"
          placeholder="PhoneNo"
          name="phonenumber"
        />
       {submitted && !values.phonenumber ? <span id="first-name-error">Please enter a valid Phonenumber</span> : null}  
         
       <input
          id="income"
          value = {values.income}
          onChange = {handleIncomeInputChange}
          class="form-field"
          type="text"
          placeholder="Income"
          name="income"
        />
       {submitted && !values.income ? <span id="first-name-error">Please enter your income </span> : null}  
       <input
          id="aadharNo"
          value = {values.aadharNo}
          onChange = {handleAadharNumberInputChange}
          class="form-field"
          type="text"
          placeholder="AadharNo"
          name="aadharNo"
        />
      {submitted && !values.aadharNo ? <span id="first-name-error">Please enter a valid AadharNo</span> : null}

      <input
          id="pincode"
          value = {values.pincode}
          onChange = {handlePinCodeInputChange}
          class="form-field"
          type="text"
          placeholder="Pincode"
          name="pincode"
        />
      {submitted && !values.pincode ? <span id="first-name-error">Please enter a valid Pincode</span> : null}
      
      <input
          id="address"
          value = {values.address}
          onChange = {handleAddressInputChange}
          class="form-field"
          type="text"
          placeholder="Address"
          name="address"
        />
      {submitted && !values.address ? <span id="first-name-error">Please enter a valid Addess</span> : null}

         <button class="adopt-btn" type="submit" onClick = {() => handleAdopt(values)} >
          ADOPT
        </button> 
      </form>
      {/* <button class="form-field" type="submit" >
          ADOPT
        </button> */}
    </div>
  );
}
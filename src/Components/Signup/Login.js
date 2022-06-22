import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../context/UserAuthContext";
import "./styles.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "90px",
      }}
    >
      <div className="signupcontainer">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              src={require("./logo.jpg")}
              alt=""
              style={{
                width: "60px",
                height: "60px",
              }}
            ></img>
            <h2 className="head">Sign in</h2>
            <img
              src={require("./logo.jpg")}
              alt=""
              style={{
                width: "60px",
                height: "60px",
              }}
            ></img>
          </div>
          <div className="formContainer">
            <div className="p-4 box">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="inputContainer"
                  controlId="formBasicEmail"
                >
                  Email
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    className="input"
                    style={{ marginLeft: "50px" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="inputContainer"
                  controlId="formBasicPassword"
                >
                  Password
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="input"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="buttonContainer" style={{ marginTop: "10px" }}>
                  <Button className="btnContainer" type="Submit">
                    Sign in
                  </Button>
                </div>
              </Form>

              <div
                style={{
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div>
            </div>
            <div className="LoginPart">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

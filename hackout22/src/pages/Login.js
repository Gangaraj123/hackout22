import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      mobile: contact,
      password: password,
    };
  };

  return (
    <MDBContainer
      fluid
      className="vh-100 p-0"
      style={{ overflow: "hidden", backgroundColor: "whitesmoke" }}
    >
      <Navbar />
      <MDBRow className="d-flex align-items-center px-5 h-100">
        <MDBCol col="8" className="d-flex justify-content-center">
          <img
            src="/assets/images/school-bus.gif"
            className="img-fluid rounded-circle border border-5 border-warning"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol
          col="4"
          md="6"
          className="border border-warning p-5 border-3 rounded-5 shadow-lg"
          style={{ backgroundColor: "white" }}
        >
          <MDBInput
            wrapperClass="mb-4"
            label="Contant No"
            id="formControlLg"
            type="tel"
            placeholder="Enter Your Contact Number"
            size="lg"
            required
            onChange={(e) => setContact(e.target.value)}
            className="rounded-5"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            placeholder="Enter Your Password"
            size="lg"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-5"
          />
          {/* implement only if time permits */}
          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className="text-center text-md-start mt-4 pt-2">
            <Link to="/">
              <MDBBtn
                className="mb-0 px-5 btn-warning"
                size="lg"
                onClick={handleSubmit}
              >
                Login
              </MDBBtn>
            </Link>
            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/signup" className="link-danger">
                SignUp
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

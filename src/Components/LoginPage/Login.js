import React, { useState, useContext, useRef } from "react";
import { Button, Container} from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";

import {
  googleSIgnInHandler,
  initiateLoginFramework,
  facebookSignInHandler
 
} from "./LogManager";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";

const Login = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: ""
  });

 
  const [loogedInUser, setLoggedInUser] = useContext(userContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  initiateLoginFramework();
  handleSubmit();
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  const google = () => {
    googleSIgnInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  const facebook = () => {
    facebookSignInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
    <Container>
      <div className="form-container rounded m-auto">
        
      <div className="app-authentication ">
        <div className="google mb-3">
          <Button className="app-btn d-flex align-items-center justify-content-between" onClick={google} variant="info w-50">
          Continue with google
          </Button>
        </div>
        <div className="facebook">
          <Button className="app-btn d-flex align-items-center justify-content-between" onClick={facebook} variant="primary w-50">
         Continue with facebook
          </Button>
        </div>
       </div>
      </div>
    </Container>
  );
};

export default Login;

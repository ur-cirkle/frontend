//** Package Imports
import React, { Dispatch, SetStateAction, useReducer, useState } from "react";
//** InterFaces
import { FormLoginProps } from "../../../Interfaces/Login.interfaces";
import { isEmail, isUsername } from "verifierjs";
import LoginBox from "./FormLogin.styles";

const FormLogin: React.FC<FormLoginProps> = ({ onLogin }) => {
  //- Context Reducer Function
  const contextReducer = (
    state: { value: string; type: string; error: boolean },
    value: string
  ) => {
    if (isEmail(value)) {
      return { value: value, type: "email", error: false };
    } else if (isUsername(value)) {
      return { value: value, type: "username", error: false };
    } else {
      return { value: value, type: "", error: true };
    }
  };
  //- Context
  const [context, contextDispatcher] = useReducer(contextReducer, {
    value: "",
    type: "",
    error: false,
  });
  const [password, setPassword] = useState("");
  //-  Show Password
  const [showPassword, setShowPassword]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);
  const [validCredentials, setValidCredentials] = useState(true);
  return (
    <LoginBox>
      <h2>Welcome! <br /> Log in to continue</h2>

      <label>
        <input
          type="text"
          placeholder={"Enter your Username"}
          value={context.value}
          onChange={(event) => contextDispatcher(event.target.value)}
        />
      </label>
      <label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={"Enter your Password"}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      {/* Put the Link for Forget Password here.  */}
      <a href="#" id="forgetpassword">Forget Password</a>

      <label>
        <i className="fas fa-eye-slash"></i>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </label>

      {context.error && <p>Enter Valid Email/Username</p>}
      {!validCredentials && <p>Invalid credentials</p>}
      <button onClick={() => onLogin(password, context, setValidCredentials)}>
        Login
      </button>
      <h3>Don't have an account? <a href="#">Sign Up</a></h3>
    </LoginBox>
  );
};

export default FormLogin;

//** Package Imports
import React, { Dispatch, SetStateAction, useReducer, useState } from "react";
//** InterFaces
import { FormLoginProps } from "../../../Interfaces/Login.interfaces";
import { isEmail, isUsername } from "verifierjs";
import {LoginBox} from "./FormLogin.styles";
import {H2,Input,Eye,CheckBox,ForgetPswd,Button,H3,A } from "./FormLogin.styles";

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
      <H2>Welcome! <br /> Log in to continue</H2>

      <label>
        <Input
          type="text"
          placeholder={"Enter your Username"}
          value={context.value}
          onChange={(event) => contextDispatcher(event.target.value)}
        />
      </label>
      <label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={"Enter your Password"}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      {/* Put the Link for Forget Password here.  */}
      <ForgetPswd href="#" id="forgetpassword">Forget Password</ForgetPswd>

      <label>
        <Eye className="fas fa-eye-slash"></Eye>
        <CheckBox
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </label>

      {context.error && <p>Enter Valid Email/Username</p>}
      {!validCredentials && <p>Invalid credentials</p>}
      <Button onClick={() => onLogin(password, context, setValidCredentials)}>
        Login
      </Button>
      <H3>Don't have an account? <A href="#">Sign Up</A></H3>
    </LoginBox>
  );
};

export default FormLogin;

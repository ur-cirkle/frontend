//** Package Imports
import React, { Dispatch, SetStateAction, useReducer, useState } from "react";
//** InterFaces
import { FormLoginProps } from "../Interfaces/Login.interfaces";
import { isEmail, isUsername } from "../Utils/Verification.utils";

const FormLogin: React.FC<FormLoginProps> = ({ handleSubmit }) => {
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

  //-  Show Password
  const [showPassword, setShowPassword]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(false);

  return (
    <div className="">
      <form>
        <label>
          <input
            type="text"
            placeholder={"Username/Email"}
            value={context.value}
            onChange={(event) => contextDispatcher(event.target.value)}
          />
        </label>
        <label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder={"Password"}
          />
        </label>

        <label>
          Show Password
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </label>

        {context.error && <p>Enter Valid Email/Username</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default FormLogin;

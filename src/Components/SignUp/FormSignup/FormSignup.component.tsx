import React, { SetStateAction, useReducer, useState, Dispatch, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { credentials } from "../../../Interfaces/Verification.interfaces";
import { errorsReducerProps } from "../../../Interfaces/Signup.interfaces";
import  {Input} from "./FormSignup.styles"
export interface FormSignUpProps {
  onCredentialsFilled: (credentials: credentials, setErrors: Dispatch<SetStateAction<{ username: string; password: string;}>>) => void;
  isUsernameAvailable: (
    username: string,
    setFunc: Dispatch<SetStateAction<boolean>>
  ) => any;
}

const FormSignUp: React.FC<FormSignUpProps> = ({
  onCredentialsFilled,
  isUsernameAvailable,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUNAvailable, setIsUNAvailable] = useState(false);
  const [errors, setErrors] = useState<{username: string, password: string}>({
    username: "",
    password: ""
  });
  //- Credentials Reducer Function
  const credentialsReducer = (
    state: credentials,
    action: {
      type: string;
      payLoadValue: string;
    }
  ) => {
    return { ...state, [action.type]: action.payLoadValue };
  };
  //- Credentials useReducer
  const [credentials, credentialsDispatcher] = useReducer(credentialsReducer, {
    username: "",
    password: "",
    type: "personal",
    timezone: moment.tz.guess(),
  });
  //* Checks If Username is available 1 sec after user stop typing. 
  useEffect(() => {
    //- If username is Empty
    if (!credentials.username) return;
    //- SetTimeout Function
    const delayDebounceFn = setTimeout(() => {
       isUsernameAvailable(credentials.username, setIsUNAvailable)
    }, 1000)
    //- Return clearTimeOut
    return () => clearTimeout(delayDebounceFn);
    //- Runs when value of username or isUsernameAvailable changes 
  },[credentials.username,isUsernameAvailable])
  return (
    <div className="">
      <label>
        <Input
          type="text"
          placeholder="username"
          value={credentials.username}
          onChange={({ target }) => {
            credentialsDispatcher({
              type: "username",
              payLoadValue: target.value,
            });
          }}
        />
      </label>
      {credentials.username &&
        (isUNAvailable ? (
          <p>Username Available</p>
        ) : (
          <p>Username Not Available</p>
        ))}
      <p>{errors.username}</p>
      <label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={credentials.password}
          onChange={({ target }) =>
            credentialsDispatcher({
              type: "password",
              payLoadValue: target.value,
            })
          }
        />
      </label>
      <p>{errors.password}</p>
      <label>
        Show Password:
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </label>
      <h5>Choose your account</h5>
      <label>
        <input
          type="radio"
          name="acc_type"
          id=""
          checked={credentials.type === "personal"}
          onChange={() =>
            credentialsDispatcher({ type: "type", payLoadValue: "personal" })
          }
        />{" "}
        Personal
      </label>
      <p>
        This is an account where you can pose as an individual. You can connect
        to people and vice versa
      </p>
      <label>
        <input
          type="radio"
          name="acc_type"
          id=""
          checked={credentials.type === "community"}
          onChange={() =>
            credentialsDispatcher({ type: "type", payLoadValue: "community" })
          }
        />{" "}
        Comunity
      </label>
      <p>
        This is an account where you can pose as a community holder. Here users
        would be “subscribing” to your page. No voluntary conversations can be
        initiated with any other users, unless a personal account holder
        initiates conversation.
      </p>
      <button onClick={() => onCredentialsFilled(credentials, setErrors)}>
        Signup
      </button>
      <p>
        By clicking Sign Up , you agree to The Cirkle’s
        <Link to="/policy"> Terms and Conditions of Use.</Link>
      </p>
      <h4>
        Already have an account? <Link to="/signin">Sign In</Link>
      </h4>
    </div>
  );
};

export default FormSignUp;

import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { errorsReducerProps } from "../Interfaces/Signup.interfaces";
import {
  isAgeValid,
  isEmail,
  isPasswordRT,
  isUsernameRT,
} from "../Utils/Verification.utils";
export interface FormSignUpProps {}

const FormSignUp: React.FC<FormSignUpProps> = () => {
  //-UserAge Reducer Function
  const userAgeReducer = (
    state: {
      dob: string;
      isValid: boolean;
    },
    dob: string
  ) => {
    return { dob: dob, isValid: isAgeValid(dob, 18) };
  };
  //- UserAge useReducer
  const [userAge, userAgeDispatcher] = useReducer(userAgeReducer, {
    dob: "",
    isValid: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  //- Errors Reducer Function
  const errorReducer = (
    state: errorsReducerProps,
    action: { type: string; payLoadValue: string; secondaryValue?: string }
  ) => {
    switch (action.type) {
      case "USERNAME":
        return { ...state, username: isUsernameRT(action.payLoadValue) };
      case "PASSWORD":
        return { ...state, password: isPasswordRT(action.payLoadValue) };
      case "EMAIL":
        return { ...state, email: { syntax: !isEmail(action.payLoadValue) } };
      case "CONFIRM PASSWORD":
        console.log(action.payLoadValue, action.secondaryValue);
        if (action.payLoadValue === action.secondaryValue) {
          return { ...state, confirmPassword: { equal: false } };
        }

        return { ...state, confirmPassword: { equal: true } };
      default:
        return { ...state };
    }
  };
  //- Errors useReducer
  const [errors, errorDispatcher] = useReducer(errorReducer, {
    username: {
      length: true,
      syntax: true,
    },
    password: {
      lowercase: true,
      uppercase: true,
      length: true,
      symbol: true,
    },
    email: {
      syntax: true,
    },
    confirmPassword: {
      equal: true,
    },
  });
  //- Credentials Reducer Function
  const credentialsReducer = (
    state: {
      username: string;
      password: string;
      confirmPassword: string;
      email: string;
      TAC: boolean;
      type: string;
    },
    action: {
      type: string;
      payLoadValue: string;
    }
  ) => {
    switch (action.type) {
      case "USERNAME":
        errorDispatcher({
          type: "USERNAME",
          payLoadValue: action.payLoadValue,
        });
        return { ...state, username: action.payLoadValue };
      case "PASSWORD":
        errorDispatcher({
          type: "PASSWORD",
          payLoadValue: action.payLoadValue,
        });
        return { ...state, password: action.payLoadValue };
      case "CONFIRM PASSWORD":
        errorDispatcher({
          type: "CONFIRM PASSWORD",
          payLoadValue: action.payLoadValue,
          secondaryValue: state.password,
        });
        return { ...state, confirmPassword: action.payLoadValue };
      case "EMAIL":
        errorDispatcher({ type: "EMAIL", payLoadValue: action.payLoadValue });
        return { ...state, email: action.payLoadValue };
      case "TAC":
        return { ...state, TAC: Boolean(Number(action.payLoadValue)) };
      case "TYPE":
        return { ...state, type: action.payLoadValue };
      default:
        return state;
    }
  };
  //- Credentials useReducer
  const [credentials, credentialsDispatcher] = useReducer(credentialsReducer, {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    TAC: false,
    type: "personal",
  });

  return (
    <form className="">
      <label>
        <input
          type="text"
          placeholder="username"
          value={credentials.username}
          onChange={({ target }) =>
            credentialsDispatcher({
              type: "USERNAME",
              payLoadValue: target.value,
            })
          }
        />
      </label>
      {errors.username.syntax && (
        <p>
          Username should only contain letters, numbers, underscores and dashes
        </p>
      )}
      {errors.username.length && (
        <p>Username should contain at least 5 characters</p>
      )}
      <label>
        <input
          type="text"
          placeholder="example@example.com"
          value={credentials.email}
          onChange={({ target }) =>
            credentialsDispatcher({ type: "EMAIL", payLoadValue: target.value })
          }
        />
      </label>
      {errors.email.syntax && <p>Enter Valid Email</p>}
      <label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={credentials.password}
          onChange={({ target }) =>
            credentialsDispatcher({
              type: "PASSWORD",
              payLoadValue: target.value,
            })
          }
        />
      </label>
      {errors.password.length && (
        <p>Password should be at least 8 characters long</p>
      )}
      {errors.password.lowercase && (
        <p>Password must contain at least one lowercase letter</p>
      )}
      {errors.password.uppercase && (
        <p>Password must contain at least one uppercase letter</p>
      )}
      {errors.password.symbol && (
        <p>Password must contain at least one symbol or number</p>
      )}
      <label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={credentials.confirmPassword}
          onChange={({ target }) =>
            credentialsDispatcher({
              type: "CONFIRM PASSWORD",
              payLoadValue: target.value,
            })
          }
        />
      </label>
      {errors.confirmPassword.equal && (
        <p>Password should be equal to confirm password</p>
      )}
      <label>
        Show Password:
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
      </label>
      <label>
        Terms and Conditions
        <input
          type="checkbox"
          checked={credentials.TAC}
          onChange={() =>
            credentialsDispatcher({
              type: "TAC",
              payLoadValue: Number(!credentials.TAC).toString(),
            })
          }
        />
      </label>
      {!credentials.TAC && <p>Please agree to Term and Conditions</p>}
      <label>
        DOB:
        <input
          type="date"
          name=""
          id=""
          value={userAge.dob}
          onChange={({ target }) => userAgeDispatcher(target.value)}
        />
      </label>
      <label>
        Personal
        <input
          type="radio"
          name="acc_type"
          id=""
          checked={credentials.type === "personal"}
          onChange={() =>
            credentialsDispatcher({ type: "TYPE", payLoadValue: "personal" })
          }
        />
      </label>
      <label>
        Comunity
        <input
          type="radio"
          name="acc_type"
          id=""
          checked={credentials.type === "community"}
          onChange={() =>
            credentialsDispatcher({ type: "TYPE", payLoadValue: "community" })
          }
        />
      </label>
      <button>Signup</button>
      <Link to="/signin">Sign In</Link>
    </form>
  );
};

export default FormSignUp;

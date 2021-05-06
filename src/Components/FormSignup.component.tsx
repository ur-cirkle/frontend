import React, { SetStateAction, useReducer, useState, Dispatch } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { credentials } from "../Interfaces/Verification.interfaces";
import { errorsReducerProps } from "../Interfaces/Signup.interfaces";
import {
  isEmail,
  isPasswordRT,
  isUsernameRT,
} from "../Utils/Verification.utils";
export interface FormSignUpProps {
  onCredentialsFilled: Function;
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
  //- Errors Reducer Function
  const errorReducer = (
    state: errorsReducerProps,
    action: { type: string; payLoadValue: string; secondaryValue?: string }
  ) => {
    switch (action.type) {
      case "username":
        return {
          ...state,
          username: isUsernameRT(action.payLoadValue),
        };
      case "password":
        return { ...state, password: isPasswordRT(action.payLoadValue) };
      case "email":
        return { ...state, email: { syntax: !isEmail(action.payLoadValue) } };
      case "confirmPassword":
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
      start: true,
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
  const [isUNAvailable, setIsUNAvailable] = useState(false);
  const [isVBTNClick, setISVBTNClick] = useState(false);
  //- Credentials Reducer Function
  const credentialsReducer = (
    state: credentials,
    action: {
      type: string;
      payLoadValue: string;
    }
  ) => {
    if (action.type === "TAC") {
      return { ...state, TAC: Boolean(Number(action.payLoadValue)) };
    }
    errorDispatcher({
      type: action.type,
      payLoadValue: action.payLoadValue,
      secondaryValue: state.password,
    });
    return { ...state, [action.type]: action.payLoadValue };
  };

  //- Credentials useReducer
  const [credentials, credentialsDispatcher] = useReducer(credentialsReducer, {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    TAC: false,
    type: "personal",
    timezone: moment.tz.guess(),
    dob: "",
  });
  return (
    <div className="">
      <label>
        <input
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
      <button
        onClick={() => {
          isUsernameAvailable(credentials.username, setIsUNAvailable);
          setISVBTNClick(true);
        }}
      >
        Check Availability
      </button>
      {errors.username.syntax && (
        <p>
          Username should only contain letters, numbers,dots, underscores and
          dashes
        </p>
      )}
      {isVBTNClick &&
        (isUNAvailable ? (
          <p>Username Available</p>
        ) : (
          <p>Username Not Available</p>
        ))}
      {errors.username.start && <p>Username should with letters only</p>}
      <label>
        <input
          type="text"
          placeholder="example@example.com"
          value={credentials.email}
          onChange={({ target }) =>
            credentialsDispatcher({ type: "email", payLoadValue: target.value })
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
              type: "password",
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
              type: "confirmPassword",
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
          value={credentials.dob}
          onChange={({ target }) =>
            credentialsDispatcher({ type: "dob", payLoadValue: target.value })
          }
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
            credentialsDispatcher({ type: "type", payLoadValue: "personal" })
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
            credentialsDispatcher({ type: "type", payLoadValue: "community" })
          }
        />
      </label>
      <button onClick={() => onCredentialsFilled(credentials)}>Signup</button>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default FormSignUp;

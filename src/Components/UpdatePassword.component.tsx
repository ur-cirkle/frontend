import React, { useReducer } from "react";
import { passwordErrors } from "../Interfaces/Verification.interfaces";
import { isPasswordRT } from "../Utils/Verification.utils";
export interface UpdatePasswordProps {}

const UpdatePassword: React.FC<UpdatePasswordProps> = () => {
  //- Errors Reducer Function
  const errorReducer = (
    state: { password: passwordErrors; confirmPassword: { equal: boolean } },
    action: { type: string; payLoadValue: string; secondaryValue?: string }
  ) => {
    switch (action.type) {
      case "PASSWORD":
        return { ...state, password: isPasswordRT(action.payLoadValue) };
      case "CONFIRM PASSWORD":
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
    password: {
      lowercase: true,
      uppercase: true,
      length: true,
      symbol: true,
    },

    confirmPassword: {
      equal: true,
    },
  });
  //- Credentials Reducer Function
  const passwordsReducer = (
    state: {
      password: string;
      confirmPassword: string;
    },
    action: {
      type: string;
      payLoadValue: string;
    }
  ) => {
    switch (action.type) {
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

      default:
        return state;
    }
  };
  //- Credentials useReducer
  const [passwords, passwordsDispatcher] = useReducer(passwordsReducer, {
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="">
      <label>
        <input
          type="text"
          placeholder="password"
          value={passwords.password}
          onChange={({ target }) =>
            passwordsDispatcher({
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
          type="text"
          placeholder="confirm password"
          value={passwords.confirmPassword}
          onChange={({ target }) =>
            passwordsDispatcher({
              type: "CONFIRM PASSWORD",
              payLoadValue: target.value,
            })
          }
        />
      </label>
      {errors.confirmPassword.equal && (
        <p>Password should be equal to confirm password</p>
      )}
      <button>Update Password</button>
    </div>
  );
};

export default UpdatePassword;

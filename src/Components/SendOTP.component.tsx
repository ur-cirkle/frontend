import React, { useReducer, SetStateAction, Dispatch } from "react";
import { isEmail, isUsername } from "../Utils/Verification.utils";
export interface FormFPProps {
  setCurrentStatus: Dispatch<SetStateAction<string>>;
}

const FormFP: React.FC<FormFPProps> = ({ setCurrentStatus }) => {
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
  return (
    <div className="">
      <label>
        <input
          type="text"
          placeholder="email/username"
          value={context.value}
          onChange={({ target }) => contextDispatcher(target.value)}
        />
        <button onClick={() => setCurrentStatus("verify-otp")}>
          Send OTP(to Email associated with this account)
        </button>
      </label>
    </div>
  );
};

export default FormFP;

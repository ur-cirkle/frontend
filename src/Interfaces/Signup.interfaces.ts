import {
  credentials,
  passwordErrors,
  usernameErrors,
} from "./Verification.interfaces";
export interface FormSignUpProps {
  handleSubmit: (credentials: credentials) => void;
}
export interface errorsReducerProps {
  username: usernameErrors;
  password: passwordErrors;
}

export interface credentialsObj {}

import {
  credentials,
  usernameErrors,
  passwordErrors,
} from "../Interfaces/Verification.interfaces";
import {isUsername,isPassword,isPasswordRT,isUsernameRT} from "verifierjs";
//* Checks if There is/are a error(s) in user credentials(Signup);
export const isCredentialsValid = (credentials: credentials): boolean => {
  console.log(
    credentials,
    isUsername(credentials.username),
    isPassword(credentials.password)
  );
  if (isUsername(credentials.username) && isPassword(credentials.password))
    return true;
  return false;
};

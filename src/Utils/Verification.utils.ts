import { credentials } from "../Interfaces/Verification.interfaces";
import { isUsername, isPassword } from "verifierjs";
//* Checks if There is/are a error(s) in user credentials(Signup);
export const isCredentialsValid = (credentials: credentials): boolean => {
  if (isUsername(credentials.username) && isPassword(credentials.password))
    return true;
  return false;
};

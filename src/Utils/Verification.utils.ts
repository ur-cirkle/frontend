import {
  credentials,
  usernameErrors,
  passwordErrors,
} from "../Interfaces/Verification.interfaces";

export const isEmail = (email: string): boolean => {
  if (/\w{1,}@\w{1,}\.(\w{1,})+/.test(email)) return true;
  return false;
};
export const isLengthen = (value: string, lengthRequired: number): boolean => {
  const regex = new RegExp(`.{${lengthRequired},}`);
  if (regex.test(value)) return true;
  return false;
};
export const isUsernameRT = (value: string): usernameErrors => {
  const errors = {
    length: true,
    syntax: true,
  };
  if (isLengthen(value, 5)) errors.length = false;
  if (!/[ `!@#$%^&*()+\-=[\]{};':"\\|,.<>/?~]/.test(value))
    errors.syntax = false;
  return errors;
};
export const isUsername = (value: string): boolean => {
  if (Object.values(isUsernameRT(value)).every((key) => !key)) return true;
  return false;
};
export const isPasswordRT = (value: string): passwordErrors => {
  const errors = {
    length: true,
    lowercase: true,
    uppercase: true,
    symbol: true,
  };
  //- Checks if password contains a lowercase character, if it contains then setting lowercase in errors false
  if (/[a-z]/.test(value)) errors.lowercase = false;

  //- Checks if password contains a uppercase character, if it contains then setting uppercase in errors false
  if (/[A-Z]/.test(value)) errors.uppercase = false;

  //- Checks if password contains a symbol or a number, if it contains then setting symbol in errors false
  if (/[@#$%^&*!_+\-|\\/0-9]/.test(value)) errors.symbol = false;

  //- Checks if length of password is 8 or greater, if it is then setting length in errors false
  if (isLengthen(value, 8)) errors.length = false;
  return errors;
};
export const isPassword = (value: string): boolean => {
  if (Object.values(isPasswordRT(value)).every((v) => v)) return true;
  return false;
};
export const isCredentialsValid = (credentials: credentials): boolean => {
  if (
    isUsername(credentials.username) &&
    isPassword(credentials.password) &&
    isEmail(credentials.email) &&
    credentials.TAC
  )
    return true;
  return false;
};
//**  Date Format : YY-MM -DD
export const ageCalc = (date: string): number => {
  const dob = new Date(date);
  //* Get Month diff from current time
  const monthDiff = Date.now() - dob.getTime();
  //* Converting it into Date format
  const ageDiff = new Date(monthDiff);
  //* Calculating age
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);
  return age;
};
export const isAgeValid = (dob: string, requiredAge: number): boolean => {
  const age = ageCalc(dob);
  if (age >= requiredAge) return true;
  return false;
};

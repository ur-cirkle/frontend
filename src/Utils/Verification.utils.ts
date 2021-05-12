import {
  credentials,
  usernameErrors,
  passwordErrors,
} from "../Interfaces/Verification.interfaces";
/**
 *
 * @param  {object} customRegexObj : custom regex object {[errName] :regex,...}
 * @returns {object} {[errName]:regex test result};
 */
//* Checks Email syntax
/**
 *
 * @param {string} email : email to check
 * @returns {boolean} Boolean: If email is valid
 */
export const isEmail = (email: string): boolean => {
  if (/\w{1,}@\w{1,}\.(\w{1,})+/.test(email)) return true;
  return false;
};
/**
 *
 * @param {string} value : string to verify
 * @param {number} lengthRequired : maximum length of string should be
 * @returns Boolean
 */
//* Checks Length of value is greater or equal to given required length
export const isLengthen = (value: string, lengthRequired: number): boolean => {
  const regex = new RegExp(`.{${lengthRequired},}`);
  if (regex.test(value)) return true;
  return false;
};
/**
 *
 * @param {string} value  string to verify
 * @returns {object} {
 * start :Boolean | if value start with alphanumberic value( if not then true)
 * syntax:Boolean | if value does not contain prohibited symbol ( if not then false)
 *}
 *
 */
//* Checks if value is a valid username and if not returns object with errors
export const isUsernameRT = (value: string): usernameErrors => {
  const errors = {
    start: true,
    syntax: true,
  };
  if (/^[a-z,A-Z]{1,}/) errors.start = false;
  if (!/[`!@#$%^&*()+\-=[\]{};':"\\|,<>/?~]/.test(value)) errors.syntax = false;
  return errors;
};
/**
 *
 * @param value string to verify
 * @returns Boolean | if value is a valid username
 */
//* Checks if value is a valid username and return boolean
export const isUsername = (value: string): boolean => {
  if (Object.values(isUsernameRT(value)).every((key) => !key)) return true;
  return false;
};
/**
 *
 * @param value string to verify
 * @returns {object}
 *
 * {
 *  lenght :Boolean | if length of password is 8 or greater, if it is then false ||
 *  lowercase:Boolean | if password contains a lowercase character, if it contains then false ||
 *  uppercase :Boolean | if password contains a uppercase character, if it contains then false ||
 *  symbol: Boolean |  if password contains a symbol or a number, if it contains then false
 * }
 *
 */
//* Checks if value is a valid password and returns errors object
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
/**
 * Checks password syntax
 * @param value password to validate
 * @returns {Boolean} Boolean | if password is in valid syntax
 * @example
 * ('secret') => false
 * ('secreT@123') => true
 * ('verysecret',/\w{8,}/) => true
 */
//* Checks if value is a valid password and returns a boolean
export const isPassword = (value: string, customRegex?: RegExp): boolean => {
  if (customRegex) return customRegex.test(value);
  else if (Object.values(isPasswordRT(value)).every((v) => !v)) return true;
  return false;
};

//* Checks if There is/are a error(s) in user credentials(Signup);
export const isCredentialsValid = (credentials: credentials): boolean => {
  if (
    isUsername(credentials.username) &&
    isPassword(credentials.password) &&
    isEmail(credentials.email) &&
    credentials.TAC &&
    credentials.dob.length &&
    credentials.confirmPassword === credentials.password
  )
    return true;
  return false;
};
/**
 *  Calculates Age
 * @param date DOB(format : YY-MM-DD)
 * @returns {number} age
 * @example
 * ('2005-02-22') => 16
 * ('2000-02-22') => 21
 */
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
/**
 * Calculates age and returns if age is valid for required age
 * @param dob user dob(format YY-MM-DD)
 * @param  requiredAge  mininum age (default 18)(optional)

 * @returns Boolean | if age is valid
 * @example
 *  ('2005-02-22') => false
 *  ('2005-02-22',14) =>  true
 *
 */
//* Checks Age Is Valid with given age
export const isAgeValid = (dob: string, requiredAge: number = 18): boolean => {
  const age = ageCalc(dob);
  if (age >= requiredAge) return true;
  return false;
};

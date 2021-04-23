import { APIcall } from "../../Utils/types";

interface SignUpDetails {
  username: string;
  password: string;
  email: string;
  userLocation?: { latitude: number; longitude: number };
}

interface VerificationDetails {
  otp: string;
  email: string;
}

interface LoginDetails {
  context: string; // email | username
  password: string;
  isEmail: boolean;
}

export const signup: APIcall<SignUpDetails> = () => {};

export const verification: APIcall<VerificationDetails> = () => {};

export const login: APIcall<LoginDetails> = () => {};

import { APIcall } from "../../Utils/types";

interface OtpVerificationDetails {
  otp: string;
  email: string;
}

interface ChangePasswordDetails {
  tempToken: string;
  password: string;
  email: string;
}

interface RenewPasswordDetails {
  authToken: string;
  password: string;
  email: string;
}

export const forgotPassword: APIcall<{ email: string }> = () => {};

export const verification: APIcall<OtpVerificationDetails> = () => {};

export const changePassword: APIcall<ChangePasswordDetails> = () => {};

export const renewPassword: APIcall<RenewPasswordDetails> = () => {};

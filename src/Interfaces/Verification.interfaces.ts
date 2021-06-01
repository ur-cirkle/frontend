export interface credentials {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  TAC: boolean;
  type: string;
  timezone: string;
}
export interface usernameErrors {
  syntax: boolean;
  start: boolean;
}
export interface passwordErrors {
  length: boolean;
  lowercase: boolean;
  uppercase: boolean;
  symbol: boolean;
}

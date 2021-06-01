export interface credentials {
  username: string;
  password: string;
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

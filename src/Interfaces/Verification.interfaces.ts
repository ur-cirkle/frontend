export interface credentials {
  username: string;
  password: string;
  email: string;
  TAC: boolean;
}
export interface usernameErrors {
  length: boolean;
  syntax: boolean;
}
export interface passwordErrors {
  length: boolean;
  lowercase: boolean;
  uppercase: boolean;
  symbol: boolean;
}

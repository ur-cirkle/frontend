import React, { createContext } from "react";
// import moment from "moment";
import { BasicFild } from "../../Utils/types";

interface Context {
  clear: () => void;
  stage: { value: number; changeTo: (e: number) => void };
  email: BasicFild;
  username: BasicFild;
  password: BasicFild & { strength: number };
  confirm: BasicFild;
  terms: { value: boolean; changeTo: (e: boolean) => void };
  loading: { value: boolean; changeTo: (e: boolean) => void };
  communtiy: { value: boolean; changeTo: (e: boolean) => void };
  birthday: BasicFild;
  otp: BasicFild;
}

export const store = createContext<Context | null>(null);

const Signup: React.FC = ({ children }) => {
  // const Value: Context = {};
  const Value: any = {};

  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default Signup;

import { AnyAaaaRecord } from "node:dns";
import React, { createContext } from "react";
import { BasicFild } from "../../Utils/types";
interface Context {
  clear: () => void;
  email: BasicFild;
  password: BasicFild & { strength: number };
  confirm: BasicFild;
  otp: BasicFild;
  loading: { value: boolean; changeTo: (e: boolean) => void };
}

export const store = createContext<Context | null>(null);

const ChangePassword: React.FC = ({ children }) => {
  const Value: any = {};
  // const Value: Context = {};
  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default ChangePassword;

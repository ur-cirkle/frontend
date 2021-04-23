import React, { createContext, useReducer, useState } from "react";
import { isEmail, isUserName } from "../../Utils/validitor";
interface Context {
  clear: () => void;
  idintifier: {
    value: string;
    isEmail: -1 | 0 | 1;
    changeTo: (e: string) => void;
  };
  password: {
    value: string;
    show: boolean;
    changeTo: (e: string) => void;
    changeShowTo: (e: boolean) => void;
  };
  loading: { value: boolean; changeTo: (e: boolean) => void };
  rememberMe: { value: boolean; changeTo: (e: boolean) => void };
}

export const store = createContext<Context | null>(null);

const Login: React.FC = ({ children }) => {
  const [identifier, setIdentifier] = useReducer(
    (
      _: { value: string; isEmail: 0 | 1 | -1 },
      id: string
    ): { value: string; isEmail: 0 | 1 | -1 } => {
      if (isEmail(id)) return { value: id, isEmail: 1 };
      if (isUserName(id)) return { value: id, isEmail: 0 };
      return { value: id, isEmail: -1 };
    },
    {
      value: "",
      isEmail: 0,
    }
  );
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const Value: Context = {
    idintifier: {
      changeTo: setIdentifier,
      isEmail: identifier.isEmail,
      value: identifier.value,
    },
    password: {
      value: password,
      show: show,
      changeTo: setPassword,
      changeShowTo: setShow,
    },
    loading: { value: loading, changeTo: setLoading },
    rememberMe: { value: remember, changeTo: setRemember },
    clear: () => {
      setIdentifier("");
      setPassword("");
      setRemember(false);
    },
  };
  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default Login;

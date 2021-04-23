import React, { createContext } from "react";

interface Context {
  allIntrests: {
    value: { intrests: Array<string>; loading: boolean };
    updateTo: (intrests: Array<string>) => void;
    setLoading: (e: boolean) => void;
  };
  my: { selectedIntrestesAre: Array<string>; intrestsAre: Array<string> };
  addToSelection: (intrest: string, remove: boolean) => void;
  resetSelection: () => void;
  updateIntrests: (intrests: Array<string>) => void;
}

export const store = createContext<Context | null>(null);

const MyIntrests: React.FC = ({ children }) => {
  // const Value: Context = {};
  const Value: any = {};
  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default MyIntrests;

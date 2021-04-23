import React, { createContext } from "react";
import { Profile } from "../../Utils/types";

interface Context {
  user: { [username: string]: Profile };
  updateUser: (username: string, data: Profile) => void;
  addListTo: (
    username: string,
    data: Array<{ username: string; avatar: string }>,
    type: "connection" | "community"
  ) => void;
  addPostsListTo: (username: string, data: Array<string>) => void;
}

export const store = createContext<Context | null>(null);

const Explore: React.FC = ({ children }) => {
  // const Value: Context = {};
  const Value: any = {};
  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default Explore;

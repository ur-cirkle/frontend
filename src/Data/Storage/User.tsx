import React, { createContext } from "react";
import { Profile } from "../../Utils/types";

interface Context {
  authToken: string;
  updateToken: (authToken: string) => void;
  profile: Profile;
  addListTo: (
    username: string,
    data: Array<{ username: string; avatar: string }>,
    type: "connection" | "community"
  ) => void;
  addPostsListTo: (username: string, data: Array<string>) => void;
  updateProfile: (data: Profile) => void;
}

export const store = createContext<Context | null>(null);

const User: React.FC = ({ children }) => {
  // const Value: Context = {};
  const Value: any = {};

  return <store.Provider value={Value}>{children}</store.Provider>;
};

export default User;

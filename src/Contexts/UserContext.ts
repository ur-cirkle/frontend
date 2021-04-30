import { createContext, Dispatch, SetStateAction } from "react";
interface userObj {
  user: { username: string; userid: string };
  setUser: Dispatch<SetStateAction<{ username: string; userid: string }>>;
}
// export const UserContextFunc = ({ user, setUser }: userObj) => {

//   return {user, setUser};
// };
export const UserContext = createContext<any>({});

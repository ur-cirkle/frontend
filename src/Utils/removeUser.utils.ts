import { getCurrentUser } from "./getCurrentUser.utils";
const removeUser = (
  username: string,
  jwtTokens: any,
  history: any,
  setCurrentJwt: Function,
  setUser: Function,
  setJwtTokens: Function
) => {
  const temptoken = jwtTokens;
  delete temptoken[username];
  setJwtTokens(temptoken);
  getCurrentUser(null, temptoken, history, setCurrentJwt, setUser);
};
export default removeUser;

import { APIcall } from "../../Utils/types";

interface SetIntrestsDetails {
  authToken: string;
  intrests: Array<string>;
}

export const signup: APIcall<{ authToken: string }> = () => {};

export const verification: APIcall<SetIntrestsDetails> = () => {};

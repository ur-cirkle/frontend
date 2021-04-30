import { FormEventHandler } from "react";
import { Dispatch, SetStateAction } from "react";
export interface FormLoginProps {
  onLogin: (
    password: string,
    context: { value: string; type: string; error: boolean },
    setValidCredentials: Dispatch<SetStateAction<boolean>>
  ) => void;
}

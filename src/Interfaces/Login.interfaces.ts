import { FormEventHandler } from "react";

export interface FormLoginProps {
  handleSubmit: (event: Event, password: object, context: object) => void;
}

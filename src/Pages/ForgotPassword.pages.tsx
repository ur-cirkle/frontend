import React, { useState } from "react";
import SendOTP from "../Components/SendOTP.component";
import VerifyOTP from "../Components/VerifyOTP.component";
import UpdatePassword from "../Components/UpdatePassword.component";
export interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [currentStatus, setCurrentStatus] = useState("send-otp");
  switch (currentStatus) {
    case "send-otp":
      return <SendOTP setCurrentStatus={setCurrentStatus} />;
    case "verify-otp":
      return <VerifyOTP setCurrentStatus={setCurrentStatus} />;
    case "update-password":
      return <UpdatePassword />;
    default:
      return <div className="">Errrrrrrrrgg...</div>;
  }
};

export default ForgotPassword;

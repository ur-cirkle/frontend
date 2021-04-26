import React, { useState, Dispatch, SetStateAction } from "react";
export interface VerifyOTPProps {
  setCurrentStatus: Dispatch<SetStateAction<string>>;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({ setCurrentStatus }) => {
  const [otp, setOTP] = useState("");
  return (
    <div className="">
      <label>
        <input
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={({ target }) => setOTP(target.value)}
        />
      </label>
      <button onClick={() => setCurrentStatus("update-password")}>
        Verify
      </button>
      <button>Resend</button>
    </div>
  );
};

export default VerifyOTP;

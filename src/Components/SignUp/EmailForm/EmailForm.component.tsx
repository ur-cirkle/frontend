import React, { useState } from "react";
import {Link} from "react-router-dom";
export interface EmailFormProps {
  onEmailSignup: (email: string) => void;
checkEmail: (email: string) => boolean;
}

const EmailForm: React.SFC<EmailFormProps> = ({checkEmail,onEmailSignup }) => {
  const [email, setEmail] = useState("");
  return (
    <div className="">
      <h2>Welcome! Sign Up to continue</h2>
      <label htmlFor="email_signup">What’s your Email?</label>
      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Enter your Email."
        id="email_signup"
      />
      <button onClick={() => onEmailSignup(email)}>
        Next <span> &gt; </span>
      </button>
      <Link to="/signin">Already have an account? <span>Sign In</span></Link>
    </div>
  );
};

export default EmailForm;

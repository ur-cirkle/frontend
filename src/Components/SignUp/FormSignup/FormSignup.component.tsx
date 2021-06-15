import React, { SetStateAction, useReducer, useState, Dispatch, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { SignUpButton, Terms,SelectedOne, SelectedOneSubpart,SelectedTwo,SelectedTwoSubpart,Wrapper} from "./FormSignup.styles";
import { credentials } from "../../../Interfaces/Verification.interfaces";
import { errorsReducerProps } from "../../../Interfaces/Signup.interfaces";
import {Input,TermsTextStyling} from "./FormSignup.styles";
import {TextStyle,CheckBox,Eye1, ButtonText,Item,RadioButtonLabeling,RadioButton,PasswordBelowText,ChooseAccountHeading,AlreadyAcc,CreatePassword, TheText,CreateUserText, UserInput, UserBox, IncorrectText,PersonalAccount,PersonalAccountText} from "./FormSignup.styles";

export interface FormSignUpProps {
  onCredentialsFilled: (credentials: credentials, setErrors: Dispatch<SetStateAction<{ username: string; password: string;}>>) => void;
  isUsernameAvailable: (
    username: string,
    setFunc: Dispatch<SetStateAction<boolean>>
  ) => any;
}

export const EyeIcon=() =>{
  return(
  <Eye1>
    <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66651 11.4411L9.68731 7.42447L9.72211 7.45231C11.1117 6.41431 12.9762 5.77783 15.0276 5.77783C17.3313 5.77783 19.4001 6.57967 20.8242 7.85287L25.497 11.5914L25.4934 11.5942C25.6229 11.7106 25.6947 11.8608 25.6953 12.0166C25.695 12.1127 25.6676 12.2074 25.6152 12.2938C25.5628 12.3802 25.4867 12.456 25.3926 12.5156L20.3238 16.5704L20.3133 16.562C18.8773 17.6304 16.9883 18.2235 15.0273 18.2216C12.7263 18.2216 10.6596 17.4217 9.23581 16.1511L9.21721 16.166L4.57351 12.451C4.55412 12.437 4.5356 12.4221 4.51801 12.4066L4.51771 12.4064C4.38841 12.2922 4.30771 12.1424 4.30771 11.9763C4.30763 11.8703 4.34036 11.766 4.40297 11.6726C4.46558 11.5792 4.55612 11.4997 4.66651 11.4411ZM15.0273 16.2159C17.9379 16.2159 20.2974 14.3283 20.2974 11.9998C20.2974 9.67159 17.9379 7.78399 15.0273 7.78399C12.1167 7.78399 9.75691 9.67159 9.75691 11.9998C9.75691 14.3283 12.1167 16.2159 15.0273 16.2159Z" fill="white" fill-opacity="0.5"/>
<path d="M15.003 14.0613C13.5927 14.0613 12.4494 13.1467 12.4494 12.0185C12.4494 10.8902 13.5927 9.97559 15.003 9.97559C16.4134 9.97559 17.5566 10.8902 17.5566 12.0185C17.5566 13.1467 16.4134 14.0613 15.003 14.0613Z" fill="white" fill-opacity="0.5"/>
<line y1="-1" x2="25.6125" y2="-1" transform="matrix(-0.780869 0.624695 -0.780869 -0.624695 23.75 2)" stroke="#808080" stroke-width="2"/>
<line y1="-1" x2="25.6125" y2="-1" transform="matrix(-0.780869 0.624695 -0.780869 -0.624695 25 3)" stroke="black" stroke-width="2"/>
</svg>
</Eye1>
  )
}

const FormSignUp: React.FC<FormSignUpProps> = ({
  onCredentialsFilled,
  isUsernameAvailable,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isUNAvailable, setIsUNAvailable] = useState(false);
  const [errors, setErrors] = useState<{username: string, password: string}>({
    username: "",
    password: ""
  });
  //- Credentials Reducer Function
  const credentialsReducer = (
    state: credentials,
    action: {
      type: string;
      payLoadValue: string;
    }
  ) => {
    return { ...state, [action.type]: action.payLoadValue };
  };
  

  //- Credentials useReducer
  const [credentials, credentialsDispatcher] = useReducer(credentialsReducer, {
    username: "",
    password: "",
    type : "personal",
    timezone: moment.tz.guess(),
  });

  const ChooseAccountButton = () => {
    const [select, setSelect] = useState("personal");
    const [choose,setChoose] = useState("");
    const [choose1,setChoose1]= useState("");
  
    return (
          <Wrapper>
            <Item>
              <RadioButton
                type="radio"
                name="acc_type"
                id=""
                value="personal"
                // checked={select === "personal"}
                checked={credentials.type === "personal"}
                onClick = {()=>{setChoose("#6F1BCF");  setChoose1("#3A3A3A") } }
                
                onChange={() =>
                  credentialsDispatcher({ type: "type", payLoadValue: "personal" })
                }
                
              />
              <RadioButtonLabeling />
              
              <SelectedOne type={credentials.type}>Personal Account </SelectedOne>
              <br />
              <SelectedOneSubpart type={credentials.type}> {"\n"}{"\n"}This is an account where you can pose as an individual. You {"\n"}can connect to people and vice versa {"\n"}{"\n"}</SelectedOneSubpart>
              
              </Item>
              
            <Item>
              <RadioButton
                type="radio"
                name="acc_type"
                value="community"
                id=""
                // checked={select === "community"}
                checked={credentials.type === "community"}
              
                onChange={() =>
                  credentialsDispatcher({ type: "type", payLoadValue: "community" })
                }               
              />             
              <RadioButtonLabeling />              
              <SelectedTwo type={credentials.type}>Community Account </SelectedTwo>             
              <SelectedTwoSubpart type={credentials.type}>{"\n"}{"\n"}This is an account where you can pose as a community {"\n"}holder. Here users would be “subscribing” to your page. No {"\n"}voluntary conversations can be initiated with any other {"\n"}users, unless a personal account holder initiates {"\n"}conversation.</SelectedTwoSubpart>            
              </Item>
          </Wrapper>
          
        );
      };
  

  //* Checks If Username is available 1 sec after user stop typing. 
  useEffect(() => {
    //- If username is Empty
    if (!credentials.username) return;
    //- SetTimeout Function
    const delayDebounceFn = setTimeout(() => {
       isUsernameAvailable(credentials.username, setIsUNAvailable)
    }, 1000)
    //- Return clearTimeOut
    return () => clearTimeout(delayDebounceFn);
    //- Runs when value of username or isUsernameAvailable changes 
  },[credentials.username,isUsernameAvailable])

  return (
    <>
    
    
    <div className="" style={{marginLeft: "80rem"}}>
      <label>
        <TheText>Welcome! <br />Sign Up to continue </TheText>
        <br />
        <CreateUserText>Create a Username</CreateUserText>
        <UserBox
          type="text"
          placeholder="This is how others would recognise you!"
          value={credentials.username}
          onChange={({ target }) => {
            credentialsDispatcher({
              type: "username",
              payLoadValue: target.value,
            });
          }}
        />
        
      </label>
      {credentials.username &&
        (isUNAvailable ? (
          <p>Username Available</p>
        ) : (
          <IncorrectText>This username is not available, please input a new one!</IncorrectText>
        ))}
      <IncorrectText>{errors.username}</IncorrectText>
      <label htmlFor="signup_password">
      <CreatePassword style={{marginTop: "0.2rem"}}>Create a Password</CreatePassword>
      </label>

        <UserBox
          type={showPassword ? "text" : "password"}
          placeholder="Atleast 8 characters"
          value={credentials.password}
          onChange={({ target }) =>
            credentialsDispatcher({
              type: "password",
              payLoadValue: target.value
            })
          }
          id="signup_password"
        />
      <p>{errors.password}</p>
      <label>
      
      <EyeIcon></EyeIcon>
      
        <CheckBox
          type='checkbox'
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
       
      </label>
      <PasswordBelowText style={{marginTop: "-1.5rem"}}>Dont forget to include characters like #,@,& or % to create a stronger password!</PasswordBelowText>
      <br />
       <ChooseAccountHeading>Choose your account</ChooseAccountHeading>
      
      <ChooseAccountButton></ChooseAccountButton>
      <br/><br/><br/><br/>
      <SignUpButton onClick={() => onCredentialsFilled(credentials, setErrors)}>
        Signup
      </SignUpButton>
      <p> 
      
      <Terms style={{display:"inline",marginLeft: '9.1rem' }}>By clicking Sign Up , you agree to The Cirkle’s </Terms>
      <TermsTextStyling style={{display:"inline"}}><Link to="/policy">Terms and Conditions of Use.</Link></TermsTextStyling>   
      </p>
      <br/>
      <br/><br/>
      <AlreadyAcc style={{color: 'white',display:"inline",marginLeft: '9.9rem',marginBottom: '8.3rem'}}>Already have an account?</AlreadyAcc><AlreadyAcc style={{display:"inline"}}><Link style={{color: 'yellow',textDecoration: 'none'}} to="/signin"> Sign In</Link></AlreadyAcc>
    </div>
    </>
  );
};

export default FormSignUp;

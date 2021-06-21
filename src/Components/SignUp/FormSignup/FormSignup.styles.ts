import styled from "styled-components";

export {};

export const CheckBox = styled.input`
    display:none;
`;

export const Conatiner = styled.div`
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  display: inline-block;
  margin: 3rem 3rem;
`;

export const SelectedOne = styled.div<{
  type:string;
}>`
  width: 220px;
  height: 16px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${(props) => props.type === "personal"?"#6F1BCF":"#3A3A3A"};
  margin-left: -5rem;
`;

export const SelectedOneSubpart = styled.p<{
  type:string;
}>`
width: 362px;
height: 31px;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #3A3A3A;
line-height: 15px;
margin: 3rem 3rem;
margin-bottom: -2.3rem;
margin-left: -17.2rem;
color: ${(props) => props.type === "personal"?"#7A7A7A":"#3A3A3A"};
`

export const SelectedTwo = styled.p<{
  type:string;
}>`
  width: 220px;
height: 16px;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #3A3A3A;
margin-left: -4rem;
color: ${(props) => props.type === "community"?"#6F1BCF":"#3A3A3A"};
`

export const SelectedTwoSubpart = styled.p<{
  type:string;
}>`
width: 362px;
height: 23px;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #3A3A3A;
margin: 3rem 3rem;
margin-bottom: -2.3rem;
margin-left: -18.2rem;
color: ${(props) => props.type === "community"?"#7A7A7A":"#3A3A3A"};
`
export const Eye1 = styled.div`
    display: flex;
    margin-left: 38.8rem;
    /* margin-top: -3.7rem;
    margin-bottom: 3rem; */
    cursor: pointer;
   z-index: 2;
    border-radius: 0px; 
`

export const Input = styled.input`
   width: 397px;
   height: 40px;
  
   border: 0.5px solid rgba(255, 255, 255, 0.5);
   box-sizing: border-box;
   border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TermsTextStyling = styled.h1`
  text-decoration: underline;
  color: #6F1BCF;
  width: 320px;
height: 12px;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
text-align: center;
`;

export const ButtonText = styled.text`
width: 58px;
height: 18px;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px;
`

export const SignUpButton = styled.button`
  width: 297px;
  height: 40px;
  border: 0.05rem solid rgba(255, 255, 255, 0.5);
  border-color: #6F1BCF;
  background: #6F1BCF;
  border-radius: 20px ;
  color: white;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
    text-align: center;
    margin: 3rem 3rem;
  margin-top: -4.5rem;
  margin-bottom: 0.1rem;
    margin-left: 9rem;
    outline: none;
`;

export const TheText = styled.text`
  color: #FFFFFF;
  height: 89px;
  width: 397px;
  border-radius: nullpx;
  font-family: Poppins, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: center; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
    margin-left: 4rem;
`;

export const CreateUserText = styled.label`
  color: #FFFFFF;
  height: 15px;
  width: 145px;
  border-radius: nullpx;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
    margin-left: 5.8rem;
    
`

export const UserInput = styled.input`
  color: rgba(255, 255, 255, 0.5);
  width: 295px;
  height: 15px;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserBox = styled.input`
    padding: 1rem 3.7rem;
    margin: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
  width: 397px;
  height: 40px;
  background: black;
  border: 0.05rem solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  margin-left: 3.8rem;
  outline: none;
  ::placeholder {
       width: 320px;
       height: 15px;
   }
;
`

export const PasswordBelowText = styled.text`
width: 342px;
height: 10px;

font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 10px;
color: rgba(255, 255, 255, 0.5);
text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  margin-bottom: 2.3rem;
  margin-top:-1.9rem;
  margin-left: 6.6rem;
`
export const IncorrectText = styled.text`
height: 10px;
width: 272px;
border-radius: nullpx;
font-family: Montserrat, sans-serif;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: 10px;
letter-spacing: 0em;
color: #980000;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
margin: 3rem 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
    margin-left: 4rem;
`
export const CreatePassword = styled.label`
width: 140px;
height: 15px;

font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #FFFFFF;
text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  margin-top: -1.1rem;
  margin-bottom: 1rem;
    margin-left: 5.8rem;
`
export const ChooseAccountHeading = styled.text`
width: 160px;
height: 15px;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: #FFFFFF;
text-align: left;
display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 3rem;
  margin-top:-1rem;
  margin-bottom: -2.3rem;
    margin-left: 5.8rem;
`

export const PersonalAccount = styled.text`
color: #6F1BCF;
height: 16px;
width: 168px;
border-radius: nullpx;
font-family: Montserrat, sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TextStyle = styled.h1`
  text-decoration: underline;
  color: #6F1BCF;
  width: 320px;
height: 12px;

font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
text-align: center;
`;
export const PersonalAccountText = styled.text`

  width: 522px;
  height: 23px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7A7A7A;
`

export const Terms = styled.text`
width: 320px;
height: 12px;
color: white;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
text-align: center;
color: rgba(255, 255, 255, 0.49);

`
export const AlreadyAcc = styled.text`
width: 351px;
height: 32px;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
color: #FFFFFF;


  

`
export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  position: relative;
  margin-bottom: 1.5rem;

`;

export const RadioButtonLabeling = styled.label`
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 16px;
  border: 1.6px solid grey;
  box-sizing: border-box;
  
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 16px;
  margin-right: 10px;
  border: 1.6px solid #6F1BCF;
  box-sizing: border-box;
  &:hover ~ ${RadioButtonLabeling} {
    border: 1.6px solid #6F1BCF;
    box-sizing: border-box;
    &::after {
        border: 1.6px solid #6F1BCF;
        box-sizing: border-box;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabeling} {
        background: black;
        border: 1.6px solid #6F1BCF;
      &::after {
        width: 13px;
        height: 10px;
        content: "";
        display: block;
        border-radius: 50%;
        margin: 1px;
        background: #6F1BCF;
      }
    }
    &:checked + ${Item} {
        
        background: #6F1BCF;
        &::after {
            
            background: #6F1BCF;
        }
    }
  `}
`;

export default styled;

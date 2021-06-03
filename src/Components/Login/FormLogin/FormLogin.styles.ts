import styled from 'styled-components';
import { colors } from '../../../Variables';

export const LoginBox = styled.div`
    color:${colors.colorWhite};
    width:40rem;
    margin:1rem;
    padding:3rem 0rem;   
    text-align:center;
    position:relative;    
`;
export const H2 = styled.h2`
    font-size:3rem;
    line-height:3.5rem;
    margin-bottom:5rem;
    font-family:Montserrat;
    font-weight:normal;
`;
export const Input = styled.input`
    font-size:1.2rem;
    color:${colors.colorWhite};
    background-color:${colors.colorTransparent};
    marign:3rem;
    padding:1rem 3rem;
    margin:0.5rem;
    border-radius:30px;
    width:39rem;
    outline:none;
    border:1px solid ${colors.colorGrey};
`;
export const Eye = styled.div`
    position:absolute;
    opacity:0.7;
    right:2rem;
    top:21.2rem;
    cursor:pointer;
`;
export const CheckBox = styled.input`
    display:none;
`;
export const ForgetPswd = styled.a`
    font-size:0.8rem;
    position:absolute;
    right:2rem;
    color:${colors.colorPurple};  
`;
export const Button = styled.button`
    border:none;
    outline:none;
    border-radius:30px;
    background-color: ${colors.colorPurple};
    padding:1rem 0rem;
    width:29rem;
    font-size:1.2rem;
    color:${colors.colorWhite};
    margin:6rem 0rem;
`;
export const H3 = styled.h3`
    margin-top:13rem;
    font-family:Montserrat;
    font-weight:lighter;
    font-size:2rem;
`;
export const A = styled.a`
    margin-top:13rem;
    font-family:Montserrat;
    font-weight:lighter;
    font-size:2rem;
    color:${colors.colorCyan};
`;
export default LoginBox;

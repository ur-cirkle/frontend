import styled from 'styled-components';
import { colors } from '../../../Variables';

const LoginBox = styled.div`
    background-color:${colors.colorBlack};
    color:${colors.colorWhite};
    width:36rem;
    margin:1rem;
    padding:3rem 0rem;   
    text-align:center;
    position:relative;
    h2{
        font-size:3rem;
        line-height:3rem;
        margin-bottom:5rem;
        font-family:Montserrat;
        font-weight:lighter;
    }
    input{
        font-size:1.2rem;
        color:${colors.colorWhite};
        background-color:${colors.colorTransparent};
        marign:3rem;
        padding:1rem;
        margin:0.5rem;
        border-radius:30px;
        width:30rem;
        outline:none;
        border:1px solid ${colors.colorGrey};
    }
    .fa-eye-slash{
        position:absolute;
        opacity:0.7;
        right:5rem;
        top:20rem;
        cursor:pointer;
    }
    #forgetpassword{
      font-size:1.2rem;
      position:absolute;
      right:50px;
      color:${colors.colorPurple};  
    }
    button{
        border:none;
        outline:none;
        border-radius:30px;
        background-color: ${colors.colorPurple};
        padding:10px 0px;
        width:250px;
        font-size:0.8em;
        color:${colors.colorWhite};
        margin:50px 0px;
    }
    h3{
        margin-top:130px;
        font-family:Montserrat;
        font-weight:lighter;
        font-size:2rem;
    }
    h3 a{
        text-decoration:none;
        color:${colors.colorCyan};
    }
    input[type="checkbox"]{
        display:none;
    }
`;
export default LoginBox;

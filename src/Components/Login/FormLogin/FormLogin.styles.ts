import styled from 'styled-components';

const LoginBox = styled.div`
    background-color:black;
    color:white;
    max-width:360px;
    margin:10;
    padding:30px 0px;   
    text-align:center;
    position:relative;
    h2{
        font-size:1.5rem;
        margin-bottom:40px;
        font-family:Montserrat;
        font-weight:lighter;
    }
    input{
        font-size:0.7em;
        color:white;
        background-color:transparent;
        marign:30px;
        padding:10px;
        margin:5px;
        border-radius:30px;
        width:300px;
        outline:none;
        border:1px solid grey;
    }
    .fa-eye-slash{
        opacity:0.7;
        position:absolute;
        right:40px;
        top:187px;
    }
    #forgetpassword{
      font-size:.8rem;
      position:absolute;
      right:50px;
      color:#6F1BCF;  
    }
    button{
        border:none;
        outline:none;
        border-radius:30px;
        background-color: #6F1BCF;
        padding:10px 0px;
        width:250px;
        font-size:0.8em;
        color:white;
        margin:50px 0px;
    }
    h3{
        margin-top:130px;
        font-family:Montserrat;
        font-weight:lighter;
        font-size:1.1rem;
    }
    h3 a{
        text-decoration:none;
        color:#00ffff;
    }
    input[type="checkbox"]{
        display:none;
    }
`;
export default LoginBox;

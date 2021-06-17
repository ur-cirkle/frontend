import styled from "styled-components";
import "./NextSym.svg";

export const Dot = styled.circle`
width: 0.25rem;
height: 0.25rem;
background: #6F1BCF;
border-radius: 1.5625rem;
margin-bottom: -0.1rem;
`

export const Hobby = styled.div`
/* padding: 0.375rem, 0.4375rem, 0.375rem, 0.4375rem; */
width: 24.9375rem;
height: 1.875rem;
background: #1F132E;
border-radius: 1.5625rem;
outline: none;
display: flex;
flex-direction: row;
align-items: center;
border: solid rgba(255, 255, 255, 0.5);
border-color: #1F132E;
`

export const Hobby1 = styled.button`
width: 3.125rem;
height: 1.875rem;
background: #1F132E;
border-radius: 0.9375rem;
border: solid rgba(255, 255, 255, 0.5);
border-color: #1F132E;
`

export const HobbyText = styled.text`
width: 5.1875rem;
height: 0.9375rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 0.75rem;
line-height: 0.9375rem;
color: #6F1BCF;
`
export const HobbyText1 = styled.text`
width: 1.8125rem;
height: 0.75rem;
font-family: Montserrat,sans-serif;
font-style: normal;
font-weight: bold;
font-size: 0.75rem;
line-height: 0.9375rem;
color: #6F1BCF;`

export const NextSymbol = styled.div`
right: 4.06%;
bottom: -8.35%;
background-color: red;
transform: rotate(-90deg);
`

export const TheHeading = styled.h1`
width: 23.8125rem;
height: 2.625rem;
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.875rem;
line-height: 2.8125rem;
text-align: center;
color: #FFFFFF;
`

export const YourProfile = styled.h1`
width: 10.6875rem;
height: 0.8125rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 0.75rem;
line-height: 0.9375rem;
color: #FFFFFF;
`

export const Text1 = styled.p`
width: 18.25rem;
height: 1.4375rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.625rem;
line-height: 0.75rem;
color: #7A7A7A;
`

export const BioInput = styled.input`
width: 24.8125rem;
height: 1.875rem;
outline: none;
background: #2C2C2C;
border-radius: 1.5625rem;
border: 0.05rem solid rgba(255, 255, 255, 0.5);
border-color: #2C2C2C;
`

export const SearchBar = styled.div`
width: 24.625rem;
height: 1.875rem;
input{
  padding: 0 1.875rem;
display: flex;
flex-direction: row;
align-items: center;
width: 21.1875rem;
height: 1.875rem;
background: #2C2C2C;
border-radius: 1.5625rem;
outline: none;
border: solid rgba(255, 255, 255, 0.5);
border-color: #2C2C2C;
  &::placeholder {
  width: 24.625;
height: 1rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.75rem;
line-height: 0.9375rem;
color: #969696;
flex: none;
margin-bottom: 1rem;
order: 1;
flex-grow: 0;
margin: 0rem 0.375rem;
}
}
`


export const SearchText = styled.text`
width: 2.625rem;
height: 1rem;
font-family: Montserrat,sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.75rem;
line-height: 0.9375rem;
color: #969696;
flex: none;
margin-bottom: 3rem;
order: 1;
flex-grow: 0;
margin: 0rem 0.375rem;`


export const SkipForNow = styled.text`
width: 70.375rem;
height: 0.9375rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.75rem;
line-height: 0.9375rem;
text-decoration-line: underline;
color: #6F1BCF;
margin-top: 3rem;
margin-bottom: 3rem;
`

export const NextButton = styled.button`
width: 4.6875rem;
height: 2.5rem;
border-radius: 1.25rem;
border: 0.05rem solid rgba(255, 255, 255, 0.5);
border-color: #6F1BCF;
background: #6F1BCF;
margin-bottom: 1rem;
`

export const ButtonText = styled.text`
width: 1.8125rem;
height: 0.9375rem;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.75rem;
line-height: 0.9375rem;
color:#FFFFFF;
margin-left: 0.2rem;

`
export default styled;
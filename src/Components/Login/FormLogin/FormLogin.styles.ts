import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../Variables";

export const LoginBox = styled.div`
  color: ${colors.colorWhite};

  max-width: 42rem;
  width: 100%;
  min-width: 30rem;

  flex-shrink: 4;
  padding: 3rem 0rem;
  text-align: center;
  position: relative;

  max-height: 60rem;
  height: 60%;
  min-height: 40rem;

  display: inline-block;
  margin: 3rem;
  margin-right: 5rem;
`;
export const H2 = styled.h2`
  line-height: 3.5rem;
  margin-bottom: 5rem;
  font: normal 3rem Montserrat;
`;
export const Input = styled.input`
  font-size: 1.2rem;
  color: ${colors.colorWhite};
  background-color: ${colors.colorTransparent};

  padding: 1rem 3rem;
  margin: 0.5rem;

  max-width: 39rem;
  width: 100%;

  outline: none;
  border: 0.1rem solid ${colors.colorGrey};
  border-radius: 30px;
`;
export const Eye = styled.div`
  position: absolute;
  opacity: 0.7;
  right: clamp(1rem, 2vw, 3rem);
  top: 21.5rem;
  cursor: pointer;
`;
export const CheckBox = styled.input`
  display: none;
`;
export const ForgetPswd = styled.a`
  font-size: 0.8rem;
  position: absolute;
  right: 2rem;
  color: ${colors.colorPurple};
`;
export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3rem;

  max-width: 15rem;
  width: 29rem;

  background-color: ${colors.colorPurple};
  color: ${colors.colorWhite};

  font-size: 1.2rem;
  padding: 1rem 0rem;
  margin: 6rem 0rem;
`;
export const H3 = styled.h3`
  margin-top: 5vw;
  font: lighter 2rem Montserrat;
`;
export const A = styled(Link)`
  margin-top: 13rem;
  font: lighter 2rem Montserrat;
  color: ${colors.colorCyan};
`;
export const Error = styled.p`
  position: absolute;
  right: 10rem;
  margin-top: 2.5rem;
  font-size: 1.4rem;
`;
export default styled;

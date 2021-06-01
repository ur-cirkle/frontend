import styled from "styled-components";
import { colors } from "../../Variables";
export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  text-align: center;
  background: #000000;
  color: ${colors.white};
  height: 600px;
`;
export const ImageContainer = styled.div`
  background: url("https://picsum.photos/200/300");
  width: 129px;
  height: 129px;
  border-radius: 60px;
`;
export const NameContainer = styled.h2`
  width: 202px;
  height: 44px;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 2.1rem;
  line-height: 2.6rem;
`;
export const DivLikes = styled.div`
  width: 20.76rem;
  height: 1.88rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const SpanLikes = styled.span`
  padding: 0 0.4rem;
  height: 1.8rem;
  border-right: 2px solid #d3d3d3;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 1.05rem;
  line-height: 1.41rem;
`;
export const DivConnections = styled.div`
  display: flex;
  justify-content: center;
  width: 20.76rem;
  height: 2.88rem;
`;
export const ParaConnections = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 1.05rem;
  line-height: 2.2rem;
  text-align: center;
  padding: 0 0.5rem;

  & span {
    padding: 0 0.3rem;
    font-weight: bold;
  }
`;
export const DivDesc = styled.div`
  width: 71.1rem;
  height: 13.2rem;
`;

export const ParaDesc = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 1.05rem;
  text-align: center;
  padding-bottom: 2rem;
`;
export const LinkDesc = styled.a`
  color: blue;
  &:hover {
    color: purple;
  }
`;
export const Button = styled.button`
  width: 12.1rem;
  height: 4.3rem;
  color: #ffffff;
  border: none;
  background: #6f1bcf;
  border-radius: 10px;
`;
export default styled;

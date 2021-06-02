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
  flex-wrap: wrap;
`;
export const ImageContainer = styled.div`
  background: url('https://picsum.photos/200/300');
  width: 12.9rem;
  height: 12.9rem;
  border-radius: 60px;
`;
export const NameContainer = styled.h2`
  width: 20.2rem;
  height: 4.4rem;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.4rem;
`;
export const DivLikes = styled.div`
  width: 20.76rem;
  height: 1.88rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const SpanLikes = styled.span`
  padding: 0 0.7rem;
  height: 1.8rem;
  border-right:2px solid 	#D3D3D3;
  font-family: Montserrat;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.4rem;
`;
export const DivConnections = styled.div`
  display: flex;
  justify-content: center;
  width: 20.76rem;
  height: 2.88rem;
  margin:0.8rem 0;
`;
export const ParaConnections = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;
  padding: 0 0.5rem;

  & span {
    padding: 0 0.3rem;
    font-weight: bold;
    font-size:1.8rem;
  }
`;
export const DivDesc = styled.div`
  width: 71.1rem;
  height: 12.2rem;
  margin-top:1rem;
`;

export const ParaDesc = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  text-align: center;
  padding-bottom: 2rem;
`;
export const LinkDesc = styled.a`
  color: blue;
  font-size:1.8rem;
  &:hover {
    color: purple;
  }
`;
export const Button = styled.button`
  width: 10rem;
  height: 4rem;
  color: #ffffff;
  border: none;
  background: #6f1bcf;
  border-radius: 1rem;
  font-size:1.6rem;
  line-height:2.4rem;
`;
export default styled;

import styled from "styled-components";
import { colors } from "./../Variables";

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-left: 9rem;
  width: 17.3rem;
  margin-top: rem;

  @media (min-width: 1708px) and (max-width: 1920px) {
    margin-left: 20rem;
  }

  @media (min-width: 1000px) and (max-width: 1322px) {
  }
`;

export const Img = styled.img<{ isSelected: boolean }>`
  &#img-0 {
    padding: 0;
    border: 4px solid ${colors.colorPurple};
    filter: invert(15%) sepia(100%) saturate(4122%) hue-rotate(267deg)
      brightness(81%) contrast(102%);
  }

  &#img-1 {
    filter: ${(props) =>
      props.isSelected
        ? "invert(15%) sepia(100%) saturate(4122%) hue-rotate(267deg) brightness(81%) contrast(102%)"
        : "none"};
  }

  &#img-2 {
    filter: ${(props) =>
      props.isSelected
        ? "invert(15%) sepia(100%) saturate(4122%) hue-rotate(267deg) brightness(81%) contrast(102%)"
        : ""};
  }

  border-radius: 3.1rem;
  height: 12rem;
  padding: 1rem;
`;

export default styled;

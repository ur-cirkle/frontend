import styled from 'styled-components';
import { colors } from '../../../Variables';

// Styles for reusable card

export const Card = styled.div`
    /* width: 72.4rem; */
    width: ${(props) => (props.className === 'small' ? '36.2rem' : '72.4rem')};
    height: auto;
    padding: 1.5rem;
    border-radius: 2rem;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2rem;
    position: relative;
    box-shadow: 0px 4px 4px 0px #00000033;
    background: ${colors.colorTransparent};
`;

export const CardUserImage = styled.img``;

export const CardName = styled.h3`
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 3px;
`;

export const CardDateBox = styled.div`
    font-size: 1.4rem;
    line-height: 1.7rem;
`;

export const CardDate = styled.span``;

export const CardTitle = styled.h4`
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin-bottom: 1rem;
`;

export const CardLikedBy = styled.span`
    font-weight: bold;
`;

export const CardOthers = styled.span`
    font-weight: bold;
`;

export const CardHead = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
`;

export const CardUserImageBox = styled.div`
    margin-right: 2rem;
`;

export const CardTitleBox = styled.div``;

export const CardRead = styled.span`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${colors.colorBlue} !important;

    &:hover {
        cursor: pointer;
    }
`;

export const CardBody = styled.div`
    padding-bottom: 2rem;
`;

export const CardBorder = styled.div`
    width: 80%;
    height: 0.6px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) -0.62%,
        rgba(255, 255, 255, 0.4) 22.43%,
        rgba(255, 255, 255, 0.4) 80.08%,
        rgba(255, 255, 255, 0) 100%
    ); ;
`;

export const CardDotLike = styled.div`
    width: 5px;
    height: 5px;
    background-color: ${(props) =>
        props.color === 'white' ? colors.colorWhite : colors.colorPurple};
    border-radius: 50%;
    margin-left: 1.1rem;
    margin-right: 1rem;
`;

export const CardDotComment = styled.div`
    width: 5px;
    height: 5px;
    background-color: ${(props) =>
        props.color === 'white' ? colors.colorWhite : colors.colorPurple};

    border-radius: 50%;
    margin-left: 4px;
    margin-right: 1rem;
`;

export const CardLikeBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`;

export const CardCommentBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`;

export const CardForwardBox = styled.div`
    position: absolute;
    right: 3rem;
    bottom: 2.3rem;
`;

// Styles for portrait card

export const CardPortraitImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const CardPortraitImageBox = styled.div`
    margin-bottom: 1.5rem;
`;

export const CardReusableBody = styled.div`
    padding-bottom: 2rem;
    margin-left: 8.5rem;
`;

export const CardReusableFooter = styled.div`
    margin-left: 8.5rem;
`;

export const CardReusableInterest = styled.ul`
    list-style: none;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
`;

export const CardReusableInterestItem = styled.li`
    display: inline-block;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${colors.colorPurple};
    margin-right: 1rem;
`;

export const CardReusableHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -1rem;
`;

export const CardReusableBorder = styled.div`
    width: 80%;
    height: 0.6px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) -0.62%,
        rgba(255, 255, 255, 0.4) 22.43%,
        rgba(255, 255, 255, 0.4) 80.08%,
        rgba(255, 255, 255, 0) 100%
    );
    margin-left: 8.5rem;
`;

// styles for landscapes cards

export const CardLandscapeImage = styled.img`
    height: 100%;
    width: 100%;
`;

export const CardLandscapeImageBox = styled.div`
    margin-bottom: 1.5rem;
`;

// Styles for Square cards

export const CardSquareImageBox = styled.div`
    width: 100%;
    height: 68.4rem;
    margin-bottom: 1.5rem;
`;

export const CardSquareImage = styled.img`
    width: 100%;
    height: 100%;
`;

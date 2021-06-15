import React from "react";
import { CardProps } from "../../../Interfaces/Card.interfaces.js";
import {CardWrapper} from './Card.styles';
import {FirstName} from './Card.styles';
import {SubmitButton} from './Card.styles';
import {Description} from './Card.styles';
import {SpanStyle2} from './Card.styles';
import {Tags} from './Card.styles';
import {ImgStyle} from './Card.styles';
import {SpanStyle1} from './Card.styles';
import {Para} from './Card.styles';

const Card: React.FC<CardProps> = ({ cardRef, cardUser, index }) => {
    
    return (
        <CardWrapper className="Card" ref={cardRef}>
          <ImgStyle
            src={cardUser.picture.large}
            alt=""
            className="Image"
            style={{ borderRadius: "50%" }}
          />
          <FirstName>
            {cardUser.name.first}
          </FirstName>
          <Tags className="">PhotoGraphy   |   Travel   |   Dogs</Tags>
          <Para className=""><SpanStyle1>{Math.floor(Math.random() * 500 + 1)}</SpanStyle1><SpanStyle2>Connections</SpanStyle2><SpanStyle1>{Math.floor(Math.random() * 10000 + 1)}</SpanStyle1><SpanStyle2>Supporting</SpanStyle2></Para>

          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
            doloribus voluptatum. Saepe architecto unde dolorum est, ratione
          </Description>
          <SubmitButton>Connect</SubmitButton>
        </CardWrapper>
    );
};

export default Card;

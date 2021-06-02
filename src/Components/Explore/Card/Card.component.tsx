import React from "react";
import { CardProps } from "../../../Interfaces/Card.interfaces.js";
import {CardWrapper} from './Card.styles';
import {FirstName} from './Card.styles';
import {SubmitButton} from './Card.styles';
import {Description} from './Card.styles';
import {Connections} from './Card.styles';

const Card: React.FC<CardProps> = ({ cardRef, cardUser, index }) => {
    
    return (
        <CardWrapper className="Card" ref={cardRef}>
          <img
            src={cardUser.picture.large}
            alt=""
            className="Image"
            style={{ borderRadius: "50%" }}
          />
          <FirstName>
            {cardUser.name.first}
          </FirstName>
          <Connections className="">PhotoGraphy | Travel | Dogs</Connections>
          <Connections className="">{Math.floor(Math.random() * 500 + 1)} Connections  {Math.floor(Math.random() * 10000 + 1)} Supporting</Connections>
          <SubmitButton>Connect</SubmitButton>

          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
            doloribus voluptatum. Saepe architecto unde dolorum est, ratione
          </Description>

        </CardWrapper>
    );
};

export default Card;

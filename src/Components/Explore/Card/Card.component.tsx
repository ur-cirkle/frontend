import React from "react";
import { CardProps } from "../../../Interfaces/Card.interfaces.js";
import {CardWrapper} from './Card.styles';
import {FirstName} from './Card.styles';
import {SubmitButton} from './Card.styles';
import {Description} from './Card.styles';
import {Connections} from './Card.styles';

const Card: React.FC<CardProps> = ({ cardRef, cardUser, index }) => {
    let imgUrl = "http://placeimg.com/100/100/animals";
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
          <Connections className="">{Math.floor(Math.random() * 5000 + 1)} </Connections>
          <SubmitButton>Connect</SubmitButton>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
            doloribus voluptatum. Saepe architecto unde dolorum est, ratione
          </Description>
          <div className="card_imgs">
            <img src={imgUrl} alt="" />
            <img src={imgUrl} alt="" />
            <img src={imgUrl} alt="" />
          </div>
        </CardWrapper>
    );
};

export default Card;

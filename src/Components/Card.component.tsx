import React from "react";
import { CardProps } from "../Interfaces/Card.interfaces.js";

const Card: React.FC<CardProps> = ({ cardRef, cardUser, index }) => {
  let imgUrl = "http://placeimg.com/100/100/animals";
  return (
    <div className="Card" ref={cardRef}>
      <p>{index + 1}</p>
      <img
        src={cardUser.picture.large}
        alt=""
        className="Image"
        style={{ borderRadius: "50%" }}
      />
      <h1>
        {cardUser.name.first} {cardUser.name.last}
      </h1>
      <p className="">{Math.floor(Math.random() * 5000 + 1)} Connections</p>
      <p>Age:{Math.floor(Math.random() * 5 + 21)}</p>
      <button>Connect</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis,
        doloribus voluptatum. Saepe architecto unde dolorum est, ratione
      </p>
      <div className="card_imgs">
        <img src={imgUrl} alt="" />
        <img src={imgUrl} alt="" />
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;

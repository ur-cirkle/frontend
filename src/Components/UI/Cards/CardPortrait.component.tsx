import React from 'react';

import img from './../../../images/portrait.png';

import CardReusable from './CardReusable.component';

import * as components from './Cards.style';

const CardPortraitImageBox = components.CardPortraitImageBox;
const CardPortraitImage = components.CardPortraitImage;
const Card = components.Card;


function CardPortrait() {
    return (
        <div className="container">
            <Card>
                <CardPortraitImageBox>
                    <CardPortraitImage src={img} alt="" />
                </CardPortraitImageBox>
                <CardReusable></CardReusable>
            </Card>
        </div>
    );
}

export default CardPortrait;

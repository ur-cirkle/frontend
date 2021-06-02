import React from 'react';

import img from './../../../images/landscape.png';

import CardReusable from './CardReusable.component';

import * as components from './Cards.style';

const CardLandscapeImageBox = components.CardLandscapeImageBox;
const CardLandscapeImage = components.CardLandscapeImage;
const Card = components.Card;

const CardLandscape = () => {
    return (
        <div>
            <Card>
                <CardLandscapeImageBox>
                    <CardLandscapeImage src={img} alt="" />
                </CardLandscapeImageBox>
                <CardReusable></CardReusable>
            </Card>
        </div>
    );
};

export default CardLandscape;

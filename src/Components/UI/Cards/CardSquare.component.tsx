import React from 'react';

import img from './../../../images/square.png';

import CardReusable from './CardReusable.component';

import * as components from './Cards.style';

const CardSquareImageBox = components.CardSquareImageBox;
const CardSquareImage = components.CardSquareImage;
const Card = components.Card;

function CardSquare() {
    return (
        <div>
            <Card>
                <CardSquareImageBox>
                    <CardSquareImage src={img} alt="" />
                </CardSquareImageBox>
                <CardReusable></CardReusable>
            </Card>
        </div>
    );
}

export default CardSquare;

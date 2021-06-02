import React from 'react';

import img from './../../../images/blogImgCircle.png';

import * as Components from './Cards.style';

const Card = Components.Card;
const CardUserImage = Components.CardUserImage;
const CardName = Components.CardName;
const CardDateBox = Components.CardDateBox;
const CardDate = Components.CardDate;
const CardTitle = Components.CardTitle;
const CardLikedBy = Components.CardLikedBy;
const CardOthers = Components.CardOthers;
const CardTitleBox = Components.CardTitleBox;
const CardUserImageBox = Components.CardUserImageBox;
const CardHead = Components.CardHead;
const CardRead = Components.CardRead;
const CardBody = Components.CardBody;
const CardBorder = Components.CardBorder;
const CardDotLike = Components.CardDotLike;
const CardDotComment = Components.CardDotComment;
const CardLikeBox = Components.CardLikeBox;
const CardCommentBox = Components.CardCommentBox;
const CardForwardBox = Components.CardForwardBox;

// import variable from './../../Varibles';

function CardBlog() {
    return (
        <Card>
            <CardHead>
                <CardUserImageBox>
                    <CardUserImage src={img} alt="" />
                </CardUserImageBox>
                <CardTitleBox>
                    <CardName>Sana_612</CardName>
                    <CardDateBox>
                        Published on
                        <CardDate> 12 March 2021 </CardDate>
                    </CardDateBox>
                </CardTitleBox>
            </CardHead>
            <CardBody>
                <CardTitle>Midnight musings: 10 emotions</CardTitle>
                <p>
                    The form depicts dynamism and the colours show the variety
                    the app plans to offer The app will be used by people with
                    different the variety the form the variety the form the
                    variety the form okay formal semantics seeks to identify
                    domain-specific mental operations which . . .
                    <CardRead> Read More</CardRead>
                </p>
            </CardBody>
            <CardBorder></CardBorder>
            <div>
                <CardLikeBox>
                    <svg
                        width="29"
                        height="26"
                        viewBox="0 0 29 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.72872 1C4.01312 1 1 3.98217 1 7.66144C1 10.6315 2.17753 17.6805 13.7684 24.8062C13.9761 24.9326 14.2144 24.9994 14.4574 24.9994C14.7005 24.9994 14.9388 24.9326 15.1465 24.8062C26.7374 17.6805 27.9149 10.6315 27.9149 7.66144C27.9149 3.98217 24.9018 1 21.1862 1C17.4706 1 14.4574 5.03723 14.4574 5.03723C14.4574 5.03723 11.4443 1 7.72872 1Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <CardDotLike></CardDotLike>
                    <p>
                        Liked by
                        <CardLikedBy> Bashir99 </CardLikedBy>
                        and
                        <CardOthers> 50 others </CardOthers>
                    </p>
                </CardLikeBox>
                <CardCommentBox>
                    <svg
                        width="37"
                        height="36"
                        viewBox="0 0 37 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d)">
                            <path
                                d="M19.1489 24.7018C24.2237 24.7018 26.7618 24.7018 28.3377 23.1246C29.9149 21.5488 29.9149 19.0107 29.9149 13.9359C29.9149 8.86108 29.9149 6.323 28.3377 4.74713C26.7618 3.16992 24.2237 3.16992 19.1489 3.16992H13.766C8.69115 3.16992 6.15308 3.16992 4.57721 4.74713C3 6.323 3 8.86108 3 13.9359C3 19.0107 3 21.5488 4.57721 23.1246C5.45598 24.0047 6.63351 24.3937 8.38298 24.5646"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M19.1492 24.7022C17.4858 24.7022 15.6529 25.3751 13.9802 26.2431C11.2914 27.6386 9.94698 28.3371 9.28487 27.8916C8.62277 27.4475 8.74792 26.0681 8.99958 23.3107L9.0561 22.6836"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0.169922"
                                width="36.9149"
                                height="34.8553"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="2" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>

                    <CardDotComment></CardDotComment>
                    <p>223 Comments</p>
                </CardCommentBox>
                <CardForwardBox>
                    <svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.8067 0.822036L13.8067 0.822061L21.4773 7.09018C21.5423 7.14332 21.5641 7.20494 21.5641 7.25857C21.5641 7.3123 21.5422 7.37398 21.4774 7.42697C21.4774 7.42698 21.4773 7.42699 21.4773 7.42699L13.8067 13.6958L13.8067 13.6958C13.7112 13.7738 13.5809 13.7898 13.4599 13.738C13.3434 13.6882 13.3017 13.6089 13.3017 13.5274V9.90158V9.1413L12.5415 9.15165C10.8295 9.17496 9.32462 9.29291 8.06291 9.56291C6.80559 9.83197 5.73156 10.2639 4.93513 10.9582C3.26386 12.415 3.13257 14.6956 4.11946 17.7244C4.11309 17.7257 4.10664 17.7264 4.10036 17.7264C4.08585 17.7265 4.07289 17.7234 4.05708 17.7125L4.05707 17.7125C2.29514 16.4998 0.75 14.1974 0.75 11.9736C0.75 10.5173 1.07071 9.40092 1.61289 8.53271C2.15527 7.66419 2.95136 6.9927 3.98479 6.47839C6.08418 5.43357 9.07291 5.0797 12.5598 5.04192L13.3017 5.03389V4.29197V0.990422C13.3017 0.909456 13.3433 0.829852 13.4601 0.779824C13.5809 0.728042 13.7109 0.743768 13.8067 0.822036ZM4.16276 17.7047C4.16276 17.7048 4.16255 17.705 4.16208 17.7054C4.16252 17.7049 4.16276 17.7047 4.16276 17.7047Z"
                            stroke="white"
                            stroke-width="1.5"
                        />
                    </svg>
                </CardForwardBox>
            </div>
        </Card>
    );
}

export default CardBlog;

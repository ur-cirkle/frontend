import styled from "styled-components";


export const Body = styled.div`
background: #020202;
height: 180vh;
font-family: Montserrat;
`;

export const Heading = styled.div`
font-size: 20px;
position: absolute;
left: 50px;
top:65px;
color: white;
`;

export const Image = styled.img`
position: absolute;
left: 50px;
border-radius: 33px;
top: 170px;
width: 50px;
height: 50px;
`;

export const LeftSection = styled.div`
position: absolute;
width: 57px;
height: 19px;
left: 80px;
top: 270px;
color: rgba(255, 255, 255, 0.61);
`;

export const HomeIcon = styled.svg`
position: absolute;
left: 50px;
top: 270px;
height: 20px;
width: 20px;
`;

export const LeftSection2 = styled.div`
position: absolute;
top: 45px;
`;

export const LeftSection3 = styled.div`
position: absolute;
top: 90px;
`;

export const LeftSection4 = styled.div`
position: absolute;
top: 140px;
`;

export const SearchBox = styled.input`
position: absolute;
border-radius: 15px;
border: none;
left: 280px;
top: 60px;
width: 700px;
height: 38px;
color:#969696;
background-color: #2C2C2C;
:placeholder {
    margin-left: 20px;
}
`;

export const SettingsHeading = styled.div`
position: absolute;
width: 127px;
height: 37px;
left: 280px;
top: 170px;
font-size: 30px;
color: white;
`;

export const PrivacySection = styled.div`
position: absolute;
left: 310px;
top: 270px;
font-size: 16px;
color: white;
`;

export const PrivacyIcon = styled.svg`
position: absolute;
width: 20px;
height: 20px;
left: 280px;
top: 270px;
`;

export const HelpSection = styled.div`
position: absolute;
width: 202px;
height: 24px;
left: 310px;
top: 310px;
font-size: 16px;
color: white;
`;

export const HelpIcon = styled.svg`
position: absolute;
width: 20px;
height: 20px;
left: 280px;
top: 310px;
`;

export const AboutSection = styled.div`
position: absolute;
left: 310px;
top: 350px;
font-size: 16px;
color: white;
`;

export const AboutIcon = styled.svg`
position: absolute;
width: 20px;
height: 20px;
left: 280px;
top: 350px;
`;

export const AccountSection = styled.div`
position: absolute;
left: 800px;
top: 270px;
width: 100%;
font-size: 16px;
color: white;
`;

export const RadioBtn1 = styled.input`
position: absolute;
left: 800px;
top: 314px;
width: 15px;
height: 15px;
input[type=radio]:checked:after {
    background-color: red;
}
`;

export const RadioBtn2 = styled.input`
position: absolute;
left: 800px;
top: 400px;
background: #6F1BCF;
width: 15px;
height: 15px;
`;

export const RadioBtn1Txt = styled.div`
position: absolute;
left: 830px;
color:#6F1BCF;
top: 310px;
`;

export const RadioBtn2Txt = styled.div`
position: absolute;
left: 830px;
color: #3A3A3A;
top: 400px;
color: white;
`;

export const SmallTxt1 = styled.small`
position: absolute;
left: 835px;
color: #7A7A7A;
top: 340px;
`;

export const SmallTxt2 = styled.small`
position: absolute;
left: 835px;
color: #7A7A7A;
top: 430px;
`;

export const MapVisiSection = styled.div`
position: absolute;
left: 800px;
top: 530px;
font-size: 16px;
color: white;
`;

export const MapsTxt = styled.div`
position: absolute;
left: 800px;
top: 560px;
color: white;
`;

export const WorldWideBtn = styled.input`
position: absolute;
left: 800px;
top: 635px;
`;

export const WorldWide = styled.div`
position: absolute;
left: 820px;
top: 630px;
color:#6F1BCF;
`;

export const WorldWideSmall = styled.small`
position: absolute;
left: 820px;
top: 660px;
color: #7A7A7A;
`;

export const ConnOnly = styled.div`
position: absolute;
left: 820px;
top: 720px;
`;

export const CannOnlyBtn = styled.input`
position: absolute;
left: 800px;
top: 725px;
`;

export const CannOnlySmall = styled.small`
position: absolute;
left: 820px;
top: 750px;
color: #7A7A7A;
`;

export const Nobody = styled.div`
position: absolute;
left: 820px;
top: 800px;
`;

export const NobodyBtn = styled.input`
position: absolute;
left: 800px;
top: 800px;
`;

export const NobodySmall = styled.small`
position: absolute;
left: 820px;
top: 830px;
color: #3A3A3A;
`;

export const ChangePwd = styled.div`
position: absolute;
left: 800px;
top: 920px;
color: white;
`;

export const PwdSection = styled.div`
position: absolute;
left: 800px;
top: 970px;
color: grey;
font-weight: bold;
`;

export const PwdInput = styled.input`
position: absolute;
left: 800px;
top: 990px;
background: #2C2C2CB8;
border-radius: 15px;
`;

export const PwdForgot = styled.div`
position: absolute;
left: 808px;
top: 1120px;
color: white;
`;

export const RestAcc = styled.div`
position: absolute;
left: 808px;
top: 1200px;
color: white;
`;

export const ListOf = styled.div`
position: absolute;
left: 808px;
top: 1230px;
color: white;
`;

export const BlocAcc = styled.div`
display: inline;
color: colorRed;
line-height: 20px;
`;

export const MuteAcc = styled.div`
display: inline;
color: orange;
line-height: 20px;
`;

export default styled;
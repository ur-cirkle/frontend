import * as React from 'react';
import {SearchBox, 
    SettingsHeading, 
    PrivacySection, 
    HelpSection, 
    AboutSection, 
    AccountSection,
    RadioBtn1,
    RadioBtn2, 
    RadioBtn1Txt,
    RadioBtn2Txt,
    SmallTxt1,
    SmallTxt2,
    MapVisiSection,
    Heading,
    Image,
    LeftSection,
    LeftSection2,
    LeftSection3,
    LeftSection4,
    MapsTxt,
    WorldWide,
    WorldWideBtn,
    WorldWideSmall,
    ConnOnly,
    CannOnlyBtn,
    CannOnlySmall,
    Nobody,
    NobodyBtn,
    NobodySmall,
    ChangePwd,
    Body,
    PwdSection,
    PwdInput,
    PwdForgot,
    RestAcc,
    ListOf,
    BlocAcc,
    MuteAcc,
    HomeIcon,
    PrivacyIcon,
    HelpIcon,
    AboutIcon,
    Line,
    Content,
    RightSec,
    RightSec2,
    RightSec3,
    HomeBtn,
    ExploreBtn,
    MsgBtn,
    SettingsBtn,
    PrivacyBtn,
    HelpBtn,
    AboutBtn,
    MapOptDiv,
    } from "./Setting.styles";
export interface SettingProps {
    
}
 
const Setting: React.SFC<SettingProps> = () => {
    return (
        <Body>

            <SearchBox type="text" placeholder="Search" />

            <RightSec>
                    Maps Visibility
                    <RightSec2>Login Activity</RightSec2>
                    <RightSec3>Password</RightSec3> 
            </RightSec>



            <SettingsHeading>Settings</SettingsHeading>

            <div>
                <p><PrivacyIcon width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0L0 4.54545V11.3636C0 17.6705 4.69333 23.5682 11 25C17.3067 23.5682 22 17.6705 22 11.3636V4.54545L11 0ZM11 12.4886H19.5556C18.9078 17.1705 15.5467 21.3409 11 22.6477V12.5H2.44444V6.02273L11 2.48864V12.4886Z" fill="white"/>
                </PrivacyIcon> 
                <PrivacyBtn><PrivacySection>Privacy and Security</PrivacySection></PrivacyBtn>
                </p>
                

                <p><HelpIcon width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.375 19.0833C15.375 20.0417 14.58 20.8333 13.5 20.8333C12.45 20.8333 11.61 20.0556 11.61 19.0833C11.61 18.0972 12.45 17.3472 13.5 17.3472C14.565 17.3472 15.375 18.1111 15.375 19.0833ZM13.485 4.16667C10.83 4.16667 9.015 5.76389 8.34 7.625L10.8 8.58333C11.13 7.65278 11.91 6.52778 13.5 6.52778C15.93 6.52778 16.41 8.63889 15.555 9.76389C14.745 10.8333 13.35 11.5556 12.615 12.7639C12.03 13.7222 12.15 14.8333 12.15 15.5139H14.88C14.88 14.2222 14.985 13.9583 15.21 13.5556C15.795 12.5556 16.875 12.0833 18.015 10.5417C19.035 9.15278 18.645 7.26389 17.985 6.26389C17.22 5.09722 15.705 4.16667 13.485 4.16667ZM24 2.77778H3V22.2222H24V2.77778ZM24 0C25.65 0 27 1.25 27 2.77778V22.2222C27 23.75 25.65 25 24 25H3C1.35 25 0 23.75 0 22.2222V2.77778C0 1.25 1.35 0 3 0H24Z" fill="white"/>
                </HelpIcon>
                <HelpBtn><HelpSection>Help</HelpSection></HelpBtn>
                </p>

                <p><AboutIcon width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 12.0091C14.0476 12.0091 13.6137 12.1662 13.2938 12.4458C12.9739 12.7255 12.7942 13.1047 12.7942 13.5002V16.4823C12.7942 16.8778 12.9739 17.257 13.2938 17.5366C13.6137 17.8163 14.0476 17.9734 14.5 17.9734C14.9524 17.9734 15.3863 17.8163 15.7062 17.5366C16.0261 17.257 16.2058 16.8778 16.2058 16.4823V13.5002C16.2058 13.1047 16.0261 12.7255 15.7062 12.4458C15.3863 12.1662 14.9524 12.0091 14.5 12.0091ZM28.9311 11.532C28.705 9.34696 27.8338 7.25071 26.4028 5.44827C24.9719 3.64584 23.0302 2.19896 20.7677 1.24919C18.5052 0.299421 15.9993 -0.120709 13.4954 0.0299037C10.9914 0.180516 8.57505 0.896711 6.4827 2.10842C4.69023 3.15611 3.18547 4.53781 2.0765 6.15427C0.96754 7.77072 0.281909 9.5818 0.0688623 11.4574C-0.140129 13.3207 0.128009 15.2013 0.853824 16.9628C1.57964 18.7243 2.74493 20.3225 4.26515 21.6414L13.3059 29.5589C13.4645 29.6987 13.6532 29.8096 13.861 29.8853C14.0689 29.961 14.2919 30 14.5171 30C14.7422 30 14.9652 29.961 15.1731 29.8853C15.3809 29.8096 15.5696 29.6987 15.7282 29.5589L24.7348 21.6414C26.2551 20.3225 27.4204 18.7243 28.1462 16.9628C28.872 15.2013 29.1401 13.3207 28.9311 11.4574V11.532ZM22.3467 19.539L14.5 26.3979L6.65328 19.539C5.4969 18.5281 4.61109 17.3059 4.05955 15.9601C3.508 14.6143 3.30441 13.1784 3.46342 11.7556C3.62346 10.3109 4.14875 8.91538 5.00133 7.66986C5.8539 6.42435 7.01245 5.36 8.39321 4.55377C10.203 3.50292 12.3273 2.94237 14.5 2.94237C16.6727 2.94237 18.797 3.50292 20.6068 4.55377C21.9834 5.35688 23.1394 6.41653 23.9917 7.65659C24.8441 8.89664 25.3717 10.2863 25.5366 11.7258C25.7008 13.1534 25.4997 14.595 24.948 15.9463C24.3964 17.2976 23.5078 18.5248 22.3467 19.539ZM16.0693 8.38581C16.0353 8.29421 15.9833 8.20845 15.9158 8.13233L15.7111 7.90867C15.5075 7.73965 15.2592 7.61719 14.9885 7.55216C14.7177 7.48713 14.4327 7.48155 14.1588 7.5359H13.8518L13.5447 7.6701L13.2889 7.86394L13.0842 8.0876C13.0167 8.16372 12.9647 8.24948 12.9307 8.34108C12.8787 8.42987 12.8441 8.52562 12.8283 8.62438C12.8 8.75707 12.7886 8.89208 12.7942 9.02697C12.7883 9.22737 12.8349 9.4263 12.9307 9.60849C13.0176 9.78446 13.1388 9.94591 13.2889 10.0856C13.4512 10.225 13.6422 10.3362 13.8518 10.4137C14.2694 10.5523 14.7306 10.5523 15.1482 10.4137C15.3555 10.3326 15.5458 10.2217 15.7111 10.0856C15.8612 9.94591 15.9824 9.78446 16.0693 9.60849C16.159 9.4246 16.2054 9.22684 16.2058 9.02697C16.2142 8.93268 16.2142 8.83796 16.2058 8.74367C16.1899 8.61726 16.1434 8.49526 16.0693 8.38581Z" fill="white"/>
                </AboutIcon>
                <AboutBtn><AboutSection>About</AboutSection></AboutBtn>
                </p>

            </div>

            
            
                <AccountSection>Account Type</AccountSection>
                <RadioBtn1 type="radio" name="accopt" value="open" />
                <RadioBtn1Txt>Open</RadioBtn1Txt>
                <SmallTxt1>Every user on the platform will be able to view your blogs and posts</SmallTxt1>

                <RadioBtn2 type="radio" name="accopt" value="close" />
                <RadioBtn2Txt>Closed</RadioBtn2Txt>
                <SmallTxt2>Only people in your connection list will be able to see your blogs and posts</SmallTxt2>

                <MapVisiSection>Maps Visibility</MapVisiSection>
                <MapsTxt>The application will require your permission to the location of this device in order to let the Maps function properly.</MapsTxt>

                <MapOptDiv>

                    <WorldWideBtn type="radio" name="mapsopp" value="worldwide" />
                    <WorldWide>Worldwide</WorldWide>
                    <WorldWideSmall>Every user on the platform will be able to view your location on the Map</WorldWideSmall>

                    <CannOnlyBtn type="radio" name="mapsopp" value="connectoin only" />
                    <ConnOnly>Connections only</ConnOnly>
                    <CannOnlySmall>Only people in your connection list will be able to see your location on the Map</CannOnlySmall>

                    <NobodyBtn type="radio" name="mapsopp" value="nobody" />
                    <Nobody>Nobody</Nobody>
                    <NobodySmall>No account will be able to view your profile location on the Maps, however if you have an open account they will be able to view your Profile(blogs and posts) on the platform</NobodySmall>

                </MapOptDiv>

            <ChangePwd>Change Password</ChangePwd>

            <PwdSection style={{fontSize: "16px"}}>Current Password</PwdSection>
            <PwdInput type="text" />

            <PwdSection style={{marginTop: "15px", fontSize: "16px"}}>New Password</PwdSection>
            <PwdInput type="text" style={{marginTop: "6px",}} />

            <PwdSection style={{marginTop: "15px", fontSize: "16px",}}>Confirm New Password</PwdSection>
            <PwdInput type="text" style={{marginTop: "6px"}} />

            <PwdForgot>Forgot Password?</PwdForgot>

            <RestAcc>Restricted Accounts</RestAcc>
            <ListOf>List of <BlocAcc>Blocked Accounts</BlocAcc></ListOf>
            <ListOf style={{marginTop: "6px"}}>List of <MuteAcc>Muted Accounts</MuteAcc></ListOf>

            <Heading>Cirkle</Heading>
            <Image src="https://media.istockphoto.com/photos/silhouette-of-business-people-work-together-in-office-concept-of-and-picture-id1132079855?s=612x612" alt="" />

            <HomeIcon width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.73608 10.2679L1.73625 10.2678L11.9314 1.42623C11.9315 1.42618 11.9315 1.42614 11.9316 1.42609C12.4005 1.01969 12.9893 0.8 13.5938 0.8C14.1983 0.8 14.7871 1.01975 15.2561 1.42623L25.4512 10.2689L25.4514 10.2691C25.7423 10.5213 25.978 10.8376 26.1404 11.1969C26.3027 11.5563 26.3874 11.949 26.3875 12.3473C26.3875 12.3474 26.3875 12.3475 26.3875 12.3475V27.0348C26.3875 27.4503 26.2273 27.8439 25.9495 28.1304C25.6726 28.416 25.3024 28.5717 24.9219 28.5717H18.6914C18.3108 28.5717 17.9407 28.416 17.6637 28.1304C17.386 27.8439 17.2258 27.4503 17.2258 27.0348V19.8556C17.2258 18.8615 16.4199 18.0556 15.4258 18.0556H11.7617C10.7676 18.0556 9.96172 18.8615 9.96172 19.8556V27.0348C9.96172 27.4503 9.80147 27.8439 9.52375 28.1304C9.24685 28.416 8.87666 28.5717 8.49609 28.5717H2.26562C1.88506 28.5717 1.51487 28.416 1.23796 28.1304C0.960244 27.8439 0.8 27.4503 0.8 27.0348V12.3464C0.8 12.3463 0.8 12.3462 0.8 12.3462C0.800125 11.9478 0.884759 11.5551 1.04712 11.1958C1.20948 10.8364 1.44517 10.5201 1.73608 10.2679Z" fill="#6F1BCF"/>
                <path d="M1.73608 10.2679L1.73625 10.2678L11.9314 1.42623C11.9315 1.42618 11.9315 1.42614 11.9316 1.42609C12.4005 1.01969 12.9893 0.8 13.5938 0.8C14.1983 0.8 14.7871 1.01975 15.2561 1.42623L25.4512 10.2689L25.4514 10.2691C25.7423 10.5213 25.978 10.8376 26.1404 11.1969C26.3027 11.5563 26.3874 11.949 26.3875 12.3473C26.3875 12.3474 26.3875 12.3475 26.3875 12.3475V27.0348C26.3875 27.4503 26.2273 27.8439 25.9495 28.1304C25.6726 28.416 25.3024 28.5717 24.9219 28.5717H18.6914C18.3108 28.5717 17.9407 28.416 17.6637 28.1304C17.386 27.8439 17.2258 27.4503 17.2258 27.0348V19.8556C17.2258 18.8615 16.4199 18.0556 15.4258 18.0556H11.7617C10.7676 18.0556 9.96172 18.8615 9.96172 19.8556V27.0348C9.96172 27.4503 9.80147 27.8439 9.52375 28.1304C9.24685 28.416 8.87666 28.5717 8.49609 28.5717H2.26562C1.88506 28.5717 1.51487 28.416 1.23796 28.1304C0.960244 27.8439 0.8 27.4503 0.8 27.0348V12.3464C0.8 12.3463 0.8 12.3462 0.8 12.3462C0.800125 11.9478 0.884759 11.5551 1.04712 11.1958C1.20948 10.8364 1.44517 10.5201 1.73608 10.2679Z" stroke="white" stroke-width="1.6"/>
                <path d="M1.73608 10.2679L1.73625 10.2678L11.9314 1.42623C11.9315 1.42618 11.9315 1.42614 11.9316 1.42609C12.4005 1.01969 12.9893 0.8 13.5938 0.8C14.1983 0.8 14.7871 1.01975 15.2561 1.42623L25.4512 10.2689L25.4514 10.2691C25.7423 10.5213 25.978 10.8376 26.1404 11.1969C26.3027 11.5563 26.3874 11.949 26.3875 12.3473C26.3875 12.3474 26.3875 12.3475 26.3875 12.3475V27.0348C26.3875 27.4503 26.2273 27.8439 25.9495 28.1304C25.6726 28.416 25.3024 28.5717 24.9219 28.5717H18.6914C18.3108 28.5717 17.9407 28.416 17.6637 28.1304C17.386 27.8439 17.2258 27.4503 17.2258 27.0348V19.8556C17.2258 18.8615 16.4199 18.0556 15.4258 18.0556H11.7617C10.7676 18.0556 9.96172 18.8615 9.96172 19.8556V27.0348C9.96172 27.4503 9.80147 27.8439 9.52375 28.1304C9.24685 28.416 8.87666 28.5717 8.49609 28.5717H2.26562C1.88506 28.5717 1.51487 28.416 1.23796 28.1304C0.960244 27.8439 0.8 27.4503 0.8 27.0348V12.3464C0.8 12.3463 0.8 12.3462 0.8 12.3462C0.800125 11.9478 0.884759 11.5551 1.04712 11.1958C1.20948 10.8364 1.44517 10.5201 1.73608 10.2679Z" stroke="#6F1BCF" stroke-width="1.6"/>
            </HomeIcon>
            <LeftSection>
                <HomeBtn>Home</HomeBtn>
                <ExploreBtn><LeftSection2>Explore</LeftSection2></ExploreBtn>
                <MsgBtn><LeftSection3>Messages</LeftSection3></MsgBtn>
                <SettingsBtn><LeftSection4>Settings</LeftSection4></SettingsBtn>
            </LeftSection>

            <Line />
            <Content>
                About   -  Help  -  Privacy  -  Terms  -  Location
                <p>Top accounts  -  Interest tags</p>
                <p>2021  URCIRKLE</p>
                English
            </Content>

        </Body>
    );
}
 
export default Setting;
import React from 'react';
import { MainDiv, ImageContainer, NameContainer,
     DivLikes, SpanLikes, DivConnections,
      ParaConnections,DivDesc,ParaDesc,LinkDesc,Button } from './ProfileHead.styles'
export interface ProfileHeadProps {
    profile: {
        username: string;
        interests: Array<string>;
        
    }
}
 
const ProfileHead: React.FC<ProfileHeadProps> = () => {
    return (
      <React.Fragment>
        <MainDiv className="main-div">
          <ImageContainer className="main-div__image-container" />

          <div className="main-div__username">
            <NameContainer>Adminoaf</NameContainer>
          </div>
          <DivLikes>
            <SpanLikes>Photography |</SpanLikes>
            <SpanLikes>Travel</SpanLikes>
            <SpanLikes style={{ border: "none" }}>Dogs</SpanLikes>
          </DivLikes>
          <DivConnections>
            <ParaConnections>
              <span>143</span>Connections
            </ParaConnections>
            <ParaConnections>
              <span>10.4k</span>Supporting
            </ParaConnections>
          </DivConnections>
          <DivDesc>
            <ParaDesc>
              A wandered who is constantly looking for adventures,
              good agles and dogs ofcourse!
            </ParaDesc>
            <ParaDesc style={{ padding: "0" }}>
              my middle eastern vlog series is out now
            </ParaDesc>
            <LinkDesc href="">appopener.in/youtube/e522a</LinkDesc>
          </DivDesc>
          <div>
            <Button>Connect</Button>
          </div>
        </MainDiv>
      </React.Fragment>
    );
}
 
export default ProfileHead;
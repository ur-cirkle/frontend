import styled from 'styled-components';
import {colors} from '../../Variables'
export const DivFilter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const DivSliderContainer=styled.div`
        
        margin:1.4rem 0;
`
export const Label=styled.label`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const InputNumber=styled.input`
        margin-right:1.5rem;
        border-radius:7px;
        font-size:1.2rem;
        text-align:center;
`
export const InputScroll=styled.input`

`
export const DivFiltersGallery=styled.div`
    display:flex;
    margin:5rem 0rem;
    // overflow:hidden;
    width: 80.7rem;
    height:14rem;
   overflow-x:scroll;
    overflow-y:hidden;

    &::-webkit-scrollbar {
        width: 12px;
        height:10px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius:20px;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: ${colors.colorGrey};
        border-radius: 20px;
      }
    `
export const DivFilterLeftItems=styled.div`
    width: 57rem;
    height: 36rem;
    
`
export const Canvas=styled.canvas`
    width:100%;
    height:100%;
    border-radius:10px;
`
export const DivImage=styled.div`
   &#img_selected{
    width: 133px;
    height: 103px;
    border:none;
    margin:0 1.2rem;
    
   }
   &#none{
    width: 133px;
    height: 103px;
    outline:none;
    border:none;
    margin:0 1.2rem;
   }

   
`
export const ImageFilter=styled.img`
width: 100%;
height: 100%;
border-radius:7px;

&.img_sepia{
    filter: sepia(1);
}
    &.img_blur {
    filter: blur(2px);
  }
  &.img_invert {
    filter: invert();
  }
  &.img_contrast {
    filter: contrast(200%);
  }
  &.img_saturation {
    filter: saturate(100);
  }
  &.img_hueRotate {
    filter: hue-rotate(180deg);
  }
  &.img_grayscale {
    filter: grayscale(1);
  }
`
export const ParaText=styled.p`
width: 10.9rem;
height: 2rem;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 1.8rem;
color:${colors.colorWhite};
margin:0.2rem auto;
text-align:center;
`
export default styled;
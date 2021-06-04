import styled from 'styled-components';
import {colors} from '../../Variables'
export const DivFilter=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const DivFiltersGallery=styled.div`
    display:flex;
    margin:3rem 0rem;
    // overflow:hidden;
    width: 78.7rem;
    height:25rem;
    `
export const DivFilterLeftItems=styled.div`
    width: 78.7rem;
    height: 44rem;
    
`
export const Canvas=styled.canvas`
    width:100%;
    height:100%;
    border-radius:10px;
`
export const DivImage=styled.div`
   &#img_selected{
    width: 13.3rem;
    height: 10.3rem;
    border:none;
   }
   &#none{
    width: 13.3rem;
    height: 10.3rem;
    outline:none;
    border:none;
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
`
export default styled;
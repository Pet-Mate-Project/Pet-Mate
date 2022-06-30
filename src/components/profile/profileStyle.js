import styled from 'styled-components'
import iconProfile from "../../assets/upload-file.svg"

export const Wraper = styled.div`
width: 120px;
height: 120px;
background: url("../../assets/basic-profile.svg");
border-radius: 50%;
position: absolute;

::after{
  content: '';
  background: url(${(iconProfile)});
  background-repeat: no-repeat;
  background-size: 36px;
position: absolute;
display: block;
width: 50px;
height: 50px;
right: -50%;
transform: translate(-100%,-75%);
}
`

export const SetProfile = styled.img`
width: 100%;

`
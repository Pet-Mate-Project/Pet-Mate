import styled from 'styled-components'
import imgUpload from "../../assets/upload-file.svg"

export const Wraper = styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
position: relative;
margin: 0 auto;

::after{
  content: '';
  background: url(${(imgUpload)});
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
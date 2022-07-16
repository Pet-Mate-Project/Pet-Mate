import styled from 'styled-components';
import blueImg from '../../assets/upload-file.svg'

export const TextLable = styled.label`
    display:none;
`

export const TextInput = styled.textarea`
width: 100%;
height: 40vh;
margin-top:18px;
padding: 32px 0;
box-sizing:border-box;
border:none;
outline:0px none transparent;
resize: none;
`

export const FileUploader = styled.label`
background: url(${(blueImg)});
background-repeat: no-repeat;
background-size: 36px;
position: absolute;
width: 36px;
height: 36px;
bottom: 12px;
right : 12px;
`

export const FileInput = styled.input`
display: none;
`

export const ImgBox = styled.div`
  box-sizing:border-box;
  width:100%;
  height:300px;
  /* border:1px solid black; */
  bottom: 130px;
  left : 0;
  right:0;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  margin-top: 25px; 
  `

export const Img = styled.img`
  margin:5px;
  width:200px;
  height:130px;
  border-radius:10px;
  background-color:lightblue;

  @media screen and (max-width:380px){
    width:150px;
    height:90px;
  }
`
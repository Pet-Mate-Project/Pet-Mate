import styled from 'styled-components'
import imgUpload from "../../assets/upload-file.svg"

export const Wrapper = styled.div`
width: 120px;
height: 120px;
border-radius: 50%;
position: relative;
margin: 0 auto;
`
export const FileUploader = styled.label`
background: url(${(imgUpload)});
background-repeat: no-repeat;
background-size: 36px;
position: absolute;
width: 36px;
height: 36px;
bottom: 0;
right : 0;
`

export const ProfileImg = styled.img`
width: 120px;
height: 120px;
border-radius: 50%;
`

export const FileInput = styled.input`
display: none;
`
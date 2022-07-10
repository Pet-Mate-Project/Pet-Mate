import styled from 'styled-components';
import imgUpload from '../../assets/icon-img-gray.svg'

export const ImgUploadWrapper = styled.div`
  position: relative;
  width: 322px;
  height: 236px;
  margin:48px auto 30px;
`

export const TitleTxt = styled.p`
  color: #767676;
  font-size: 12px;
  margin-bottom:18px;
` 

export const ImgRegist = styled.img`
  border: 0.5px solid #DBDBDB;
  background-color: #F2F2F2;
  border-radius: 10px;
  width:322px;
  height:204px;
`

export const FileUploader = styled.label`
background: url(${(imgUpload)});
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
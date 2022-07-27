import styled from 'styled-components';
import imgUpload from '../../assets/icon-img-gray.svg'
import { palette } from '../../style/globalColor';

export const ImgUploadWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 600px;
  margin:48px auto 60px;
  //모바일 환경에서 마진조정
  @media screen  and (max-width:420px ){
    margin-bottom: 36px;
  }
`

export const TitleTxt = styled.p`
  color: ${palette.darkGray};
  font-size: 12px;
  margin-bottom:18px;
`

export const ImgRegist = styled.img`
  box-sizing:border-box;
  display: block;
  border: 0.5px solid ${palette.lightGray};
  background-color: ${palette.veryLigntGray};
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height:300px; 
   //모바일 환경에서는 사진 크기 고정
  @media screen  and (max-width:420px ){
    width:100%;
    height: 236px; 
  }
`

export const BeforeRegist = styled.div`
  box-sizing:border-box;
  display: block;
  border: 0.5px solid ${palette.lightGray};
  background-color: ${palette.veryLigntGray};
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height:300px; 
   //모바일 환경에서는 사진 크기 고정
  @media screen  and (max-width:420px ){
    width:100%;
    height: 236px; 
  }
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
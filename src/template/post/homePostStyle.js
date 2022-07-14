import styled from 'styled-components';


export const PostStyle = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 10px 34px;
  border-bottom: 6px solid #E7EFFF;
  box-sizing: border-box;

  :last-child {
    border-bottom: none;
  }
`

export const PetImg = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 10px;
  border: 1px solid #DBDBDB;
  margin-top: 8px;
  object-fit: cover;  
`

export const TxtBox = styled.div`
  display: flex;
  margin: 14px 0;
`

export const TitleTxt = styled.p`
  font-size: 20px;
  line-height: 21px;
  color: #002D7D;
`

export const ContentTxt = styled.p`
  font-size: 14px;
  line-height: 17px;
  word-break: keep-all;
`

export const DateTxt = styled.p`
  font-size: 10px;
  color: #767676;
  margin: 10px 0;
`

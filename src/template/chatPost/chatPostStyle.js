import styled from 'styled-components';


export const PostStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap : 10px;
  // 임의로 넣어둔 너비값, 나중에 지울부분입니다. 
  // 이부분을 지우면 나중에 MainStyle의 크기에 맞춰 알아서 적용됩니다.
  width: 322px;
  margin: 0 auto;
`

export const PetImg = styled.img`
  border-radius:10px;
`

export const TitleTxt = styled.p`
  color: #002D7D;
`

export const PetInfoTxt = styled.p`
  font-size: 13px;
  color: #404040;
`

export const DateTxt = styled.p`
  font-size: 12px;
`

export const ContentTxt = styled.p`
  font-size: 16px;
  word-break: keep-all;
`


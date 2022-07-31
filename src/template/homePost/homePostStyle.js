import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const PostStyle = styled.li`
  width: 100%;
  height: 205px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 4px solid ${palette.lineColor};
  box-sizing: border-box;

  :last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 500px) {
    height: 235px;
}
`

export const PetImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid ${palette.lightGray};
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (min-width: 500px) {
    width: 150px;
    height: 150px;
}
`

export const TitleTxt = styled.p`
  font-size: 17px;
  line-height: 20px;
  margin-top: 5px ;
  color: ${palette.textPoint};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media screen and (min-width: 500px) {
    font-size: 20px;
    line-height: 23px;
    margin-top: 10px ;
}
`

export const ContentTxt = styled.p`
  font-size: 14px;
  line-height: 17px;
  word-wrap: break-word;
  word-break: keep-all;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media screen and (min-width: 500px) {
    font-size: 16px;
    line-height: 20px;
}
`

export const DateTxt = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: ${palette.darkGray};
  margin-bottom: 5px;

  @media screen and (min-width: 470px) {
    font-size: 13px;
    line-height: 16px;
}
`

export const WrapPost = styled.div`
  display: flex;
  flex-direction: row;
  margin-top:5px;
`

export const TextWrap = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  gap: 10px;
`
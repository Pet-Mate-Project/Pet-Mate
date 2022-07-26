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
`

export const PetImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid ${palette.lightGray};
  object-fit: cover;  
`

export const TitleTxt = styled.p`
  font-size: 17px;
  line-height: 20px;
  color: ${palette.textPoint};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContentTxt = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 17px;
  word-break: keep-all;
`

export const DateTxt = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${palette.darkGray};
  margin-bottom: 5px;
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
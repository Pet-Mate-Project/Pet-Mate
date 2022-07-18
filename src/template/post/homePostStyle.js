import styled from 'styled-components';
import { palette } from '../../style/globalColor';


export const PostStyle = styled.li`
  width: 100%;
  margin: 0 auto;
  padding: 10px 34px;
  border-bottom: 6px solid ${palette.lineColor};
  box-sizing: border-box;

  :last-child {
    border-bottom: none;
  }
`

export const PetImg = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 10px;
  border: 1px solid ${palette.lightGray};
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
  color: ${palette.textPoint};
`

export const ContentTxt = styled.p`
  font-size: 14px;
  line-height: 17px;
  word-break: keep-all;
`

export const DateTxt = styled.p`
  font-size: 10px;
  color: ${palette.darkGray};
  margin: 10px 0;
`

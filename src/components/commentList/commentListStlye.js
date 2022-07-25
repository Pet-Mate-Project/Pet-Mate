import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const CommentWrpper = styled.div`
  display:flex;
`
export const Name = styled.strong`
  position:relative;
  vertical-align: top;
  margin: 6px 6px 0 12px;
  font-size: 14px;
  font-weight: 400;
`
export const WritingTime = styled.strong`
  font-size: 10px;
  font-weight: 400;
  color : ${palette.darkGray};
  position:relative;
  margin-top:8.5px;  
`

export const Content = styled.p`
  font-size: 14px;
  margin-left: 52px;
`

export const UserMore = styled.img`
  cursor: pointer;
  float: right;
  width:24px;
  height: 24px;
`
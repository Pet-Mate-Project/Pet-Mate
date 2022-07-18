import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const AlertWrapper = styled.div`
  box-sizing:border-box;
  border-radius:10px;
  border: 1px solid ${palette.lightGray};
  width:252px;
  height:110px;
`

export const DeleteTxt = styled.strong`
  display:block;
  margin : 23px 54px ;
`

export const BtnTxt = styled.strong`
  display: block;
  text-align:center;
`
export const RedTxt = styled(BtnTxt)`
  color: ${palette.textRedPoint};
`

export const DeleteAlertBtn = styled.button`
  box-sizing:border-box;
  cursor: pointer;
  width: 125px;
  height: 46px;
  border-top: 1px solid ${palette.lightGray};
  &:last-child{
    border-left: 1px solid ${palette.lightGray};
  }
`
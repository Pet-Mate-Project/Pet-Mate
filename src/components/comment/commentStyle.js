import styled from 'styled-components'
import { palette } from '../../style/globalColor'

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;
  padding: 12px 16px;
  position: fixed;
  bottom: 0;
  color: ${palette.lightGray};
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  border-top: 1px solid ${palette.lightGray};
  background-color: white;
`

export const CommentTextStyle = styled.input`
  font-size: 14px;
  line-height: 17px;
  border: none;
  
  ::placeholder{
    color: ${palette.lightGray};
    font-size: 14px;
  }
  :focus{
    outline: none;
  }
`

export const CommentBtnStyled = styled.button`
  font-size: 14px;
  line-height: 17px;
  color: ${palette.lightGray};
  margin-left: auto;

  :hover {
    color: ${palette.textPoint};
  }
`
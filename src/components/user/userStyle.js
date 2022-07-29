import styled, { css } from 'styled-components';
import { palette } from '../../style/globalColor';
import {memo} from 'react'

export const Wrapper = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  
  ${(props) => {
    if (props.between) {
      return css`
      justify-content: space-between;
    `
    }
  }}
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 6px;
  cursor: pointer;
`

export const UserName = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${palette.textDark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UserId = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${palette.textDark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  float: right;
  cursor: pointer;
`
// 채팅 목록 리스트 스타일 컴포넌트

export const ChatListWrapper = styled(Wrapper)`
  padding: 0 16px;
  margin: 20px 0;
  cursor: pointer;
`

export const ChatDate = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: ${palette.textDark};
  padding: 6px 0;
  margin: auto 0 0 auto;
`

//UserId와 동일하나 페이지 구현시 태그명을 헷갈리지 않기위해 다른 이름으로 재사용함.
export const ChatPreview = styled(UserId)`
`

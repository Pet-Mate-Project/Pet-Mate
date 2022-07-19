import styled, { css } from 'styled-components';
import { palette } from '../../style/globalColor';

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 44px;
  text-align: center;
  color : white;
  cursor:pointer;
  background-color: ${palette.subColor};
  border-radius: 44px;
  box-sizing: border-box;
  margin-left: auto;

  ${(props) => {
    return css`
      width: ${props.width}px;
      height: ${props.height}px;
      background-color: ${props.backColor};
      font-size: ${props.width <= 56 ? 12 : 14}px;
  `}};

  ${(props) => {
    if (props.color) {
      return css`
      color: ${props.color};
      border: 1px solid ${props.color};
    `}
  }}

  ${(props) => {
    if (props.hover) {
      return css`
        :hover{
          background-color: ${palette.mainColor};
          color : white;
        }
    `}
  }}

  ${(props) => {
    if (props.children === '팔로우' || props.children === '언팔로우') {
      return css`
        margin-left: 0;
    `}
  }}
`;

//icon이 존재할경우 스타일
export const IconButton = styled(Button)`
  ${(props) =>
    props.icon &&
    css`
      line-height:22px;
      ::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: url(${props.icon}) no-repeat center;
      }
    `}
`

export const PostSaveBtnWrapper = styled.div`
  margin-left: auto;
`
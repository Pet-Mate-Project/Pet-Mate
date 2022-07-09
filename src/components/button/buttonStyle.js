import styled, { css } from 'styled-components';

export const Button = styled.button`
    position: relative;
    width: 100%;
    height: 44px;
    text-align: center;
    color : white;
    cursor:pointer;
    background-color: #7EACFF;
    border-radius: 44px;
    box-sizing: border-box;

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
      `
    }
  }}

  ${(props) => {
    if (props.hover) {
      return css`
        :hover{
          background-color: #1D57C1;
          color : white;
        }
      `}
  }}

  ${(props) => {
    if (props.right){
      return css`
        float:right;
    `}
  } 
}
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
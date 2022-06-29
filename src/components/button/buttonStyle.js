import styled, { css } from 'styled-components';

export const LoginBtn = styled.button`
  /* background-color: #7eacff; */

  border-radius: 44px;
  text-align: center;
  line-height: 22px;
  padding: 0 15px;
  margin: 10px;
  box-sizing: border-box;
  /* 기본 색상 */
  color: white;
  background-color: #7eacff /* props가 존재하면 바꿔준다. */
    ${(props) =>
      props.backcolor &&
      css`
        ${(props) => props.backcolor};
      `};

  ${(props) =>
    props.color &&
    css`
      color: ${(props) => props.color};
      border: 1px solid ${(props) => props.color};
    `};

  /* width, height 설정 */
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  /* width값에 따른 폰트사이즈*/
  font-size: 14px;
  ${(props) =>
    props.width <= 56 &&
    css`
      font-size: 11px;
      line-height: 14px;
      padding: 7px 11px;
    `}

  ${(props) =>
    //props로 받은 icon값이 존재하면 css적용
    props.icon &&
    css`
      ::before {
        content: '';
        float: left;
        width: 24px;
        height: 24px;
        background: url(${(props) => props.icon}) no-repeat center;
      }
    `}

  :hover {
    background-color: #013ba3;
    color: white;
  }
`;

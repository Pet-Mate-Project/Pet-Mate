import styled, { css } from 'styled-components';

export const ShowWrap = styled.div`
float: right;
`


export const ShowBtnStyle = styled.button`
${(props) => {
    return css`
  background-image:url(${props.showIcon});
  `
  }}


`
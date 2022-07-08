import styled, { css } from 'styled-components';

export const TabMenuStyle = styled.div`
width: 100%;
background-color: white;
position: fixed;
display : flex;
justify-content: space-between;
border: 1px solid black;
`

export const IconNameStyle = styled.p`
width: 80px;
font-size: 10px;
line-height: 12px;
color: #767676;
text-align: center;
::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  margin: 0px auto;
  margin-bottom: 4px;
  ${(props) => {
    return css`
    background-image: url(${props.icon});
    `
  }}
  }
  :hover::before {
    ${(props) => {
    return css`
    background-image: url(${props.hoverIcon});
    `
  }}
}
:hover{
    color: #1D57C1;
  }
`
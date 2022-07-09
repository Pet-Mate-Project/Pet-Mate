import styled, { css } from 'styled-components';

export const TabMenuStyle = styled.nav`
width: 390px;
background-color: white;
position: fixed;
bottom: 0;
left: 50%;
transform: translate(-50%, 0);
display : flex;
justify-content: space-between;
box-sizing: border-box;
border-top: 1px solid #DBDBDB;
padding: 12px 0 8px
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
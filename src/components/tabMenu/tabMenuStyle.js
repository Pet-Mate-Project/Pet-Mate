import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { palette } from '../../style/globalColor';

export const TabMenuStyle = styled.nav`
width: 100%;
background-color: white;
position: fixed;
bottom: 0;
left: 50%;
transform: translate(-50%, 0);
display : flex;
justify-content: space-between;
box-sizing: border-box;
border-top: 1px solid ${palette.lightGray};
padding: 12px 0 8px;
`

export const NavLinkStyle = styled(NavLink)`
width: 80px;
font-size: 10px;
line-height: 12px;
color: ${palette.darkGray};
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
    background-image: url(${props.hovericon});
    `
  }}
}
:hover{
    color: ${palette.mainColor};
  }
&.active{
  color: ${palette.mainColor};
::before{
  ${(props) => {
    return css`
    background-image: url(${props.hovericon});
    `
  }}}
}
`
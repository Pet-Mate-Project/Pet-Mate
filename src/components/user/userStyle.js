import styled, { css } from 'styled-components';

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
`

export const UserName = styled.p`
font-size: 14px;
line-height: 17px;
color: #404040;
margin: 0;
`

export const UserId = styled.p`
font-size: 12px;
line-height: 14px;
color: #767676;
margin: 0;
`



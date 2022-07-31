import styled, { css } from 'styled-components'

export const IconBtn = styled.button`
  position:fixed;
  right:10px;
  cursor: pointer;
  ${(props) => {
    if (props.bottom) {
      return css`
        bottom: 70px;
      `}
  }}
`

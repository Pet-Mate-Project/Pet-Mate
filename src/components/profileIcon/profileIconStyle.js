import styled, { css } from 'styled-components'

export const IconStyle = styled.img`
${(props) => {
    return css`
    width: ${props.width}px;
    height: ${props.height}px;`
  }}
`
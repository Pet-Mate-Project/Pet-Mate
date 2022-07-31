import styled, { css } from 'styled-components'
import profileIcon from '../../assets/basic-profile.svg'
import { palette } from '../../style/globalColor'

export const IconStyle = styled.img`
object-fit: cover;
border-radius: 50%;

${(props) => {
    return css`
    width: ${props.width}px;
    height: ${props.height}px;`
  }}
`

export const ChatIconStyle = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background: url(${profileIcon}) no-repeat;
  background-size: 40px 40px;
  margin-right: 6px;

  ${({ visible }) => {
    if (visible === 'on') {
      return css`
      ::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 100%;
      background: ${palette.subColor};
      }`
    }
  }}
`
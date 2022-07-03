import styled from 'styled-components';
import petLogo from '../../assets/pet-logo.svg'

export const MainStyle = styled.main`
  margin: 0 auto;
  width: 390px;
  padding : 0 34px;
  text-align : center;
  margin-bottom : 194px;
  `

export const LogoStyle = styled.div`
  height: 240px;
  width: 240px;
  background: url(${petLogo}) no-repeat;
  border: none;
  margin: 191px auto 113px;
`
export const Gap = styled.div`
margin-bottom : 24px;
`

import styled from 'styled-components'

export const NonepaddiingMain = styled.main`
  margin: 0 auto;
  width: 390px;
  height: 820px;
  box-sizing: border-box;
  border: 1px solid transparent;
`

export const MainStyle = styled(NonepaddiingMain)`
  padding : 0 34px;
  `

export const Title = styled.h1`
font-size: 24px;
text-align: center;
margin-top: 32px;
`

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`
import styled from 'styled-components'

export const NonPaddingMain = styled.main`
  margin: 0 auto;
  width: 390px;
  height: 820px;
<<<<<<< HEAD:src/style/commonStyle.js
=======
  padding : 30px 34px;
>>>>>>> 10eb87d03e2ccc0a042d43a9d43afbfd9d2d2403:src/style/commonLoginStyle.js
  box-sizing: border-box;
  border: 1px solid transparent;
`

export const PaddingMain = styled(NonPaddingMain)`
  padding : 30px 34px;
  `

export const Title = styled.h1`
font-size: 24px;
text-align: center;
`

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
  gap: 16px;
  margin: 30px 0;
`
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
margin-top:70px;
margin-bottom: 28px;
display: flex;
justify-content: space-evenly;
`

export const ColumnWapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
export const FollowerCount = styled.p`
font-weight: 600;
font-style: italic;
font-size: 18px;
line-height: 21px;
margin-bottom: 7px;
`
export const FollowerText = styled.p`
font-size: 8px;
color: #767676;
`
export const NameText = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 19px;
margin-bottom: 6px;
`
export const IdText = styled.p`
font-size: 12px;
line-height: 14px;
color: #767676;
`
export const IntroText = styled.p`
font-size: 14px;
line-height: 17px;
color: #767676;
margin-top: 12px;
color: #767676;
`
export const ButtonWrap = styled.div`
display: flex;
gap: 10px;
justify-content: center;
margin: 24px 0;
`

export const OnlyIconButton = styled.button`
position: relative;
width: 34px;
height: 34px;
cursor : pointer;
background-color: white;
border: 1px solid #767676;
border-radius: 50%;
box-sizing: border-box;
${(props) =>
    css`
      ::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%,-50%);
        width: 24px;
        height: 24px;
        background: url(${props.icon}) no-repeat center;
      }
    `}
`
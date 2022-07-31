import styled, { css } from 'styled-components'
import { palette } from '../../style/globalColor'

export const WrapSection = styled.div`
padding-left: 45px;
`

export const PostText = styled.p`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin: 14px 0;  
  word-wrap: break-word;
  word-break: keep-all;
  white-space: pre-wrap;

  ${({ linkName }) => {
    if (linkName !== 'snspostdetail') {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    `}
  }}
`
export const PostImgWrap = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
overflow: auto;
padding-bottom: 10px;

::-webkit-scrollbar {
  height: 7px;
}
::-webkit-scrollbar-track {
  background-color: none;
}
::-webkit-scrollbar-thumb {
  background-color: #EdEded;
    border-radius: 10px;
}
`

export const PostImg = styled.img`
width: 100%;
height: 230px;
border: 1px solid ${palette.lightGray};
border-radius: 10px;
box-sizing: border-box;
object-fit: cover;
flex-shrink: 0;

@media screen and (min-width: 600px) {
  height: 370px;
}

@media screen and (min-width: 450px) and (max-width: 600px) {
  height: 300px;
}
`

export const IconWrap = styled.div`
text-align: left;
display: block;
padding: 14px 0;
`

export const IconImg = styled.img`
background-color: none;
width: 20px;
height: 20px;
border: transparent;
vertical-align: -5px;
margin: 0 6px 0px 15px;
:first-child{
  margin-left: 0;
}
`

export const DateText = styled.p`
color: ${palette.darkGray};
font-size: 10px;
line-height: 12px;
text-align: left;
`
import styled from 'styled-components';

export const WrapperArticle = styled.article`
width: 100%;
`

export const WrapSection = styled.section`
padding-left: 45px;
`

export const PostText = styled.p`
font-size: 14px;
line-height: 17px;
text-align: left;
word-break: keep-all;
white-space: pre-wrap;
margin:14px 0;  
`

export const PostImg = styled.img`
width: 100%;
height: 230px;
border: 1p x solid #DBDBDB;
border-radius: 10px;
box-sizing: border-box;
object-fit: cover;
`

export const IconWrap = styled.div`
text-align: left;
display: inline-block;
margin: 14px 0;
`

export const IconImg = styled.img`
background-color: none;
width: 20px;
height: 20px;
border: tr a nsparent;
vertical-align: -5px;
margin: 0 6px 0px 15px;
:first-child{
  margin-left: 0;
}
`

export const DateText = styled.p`
color: #767676;
font-size: 10px;
line-height: 12px;
text-align: left;
`
import styled, { css } from 'styled-components';

export const AnimalWrapper = styled.article`
  cursor: pointer;
  border-radius:10px;
  box-sizing:border-box;
  width: 140px;
  height: 132px;
  @media screen and (min-width:450px) {
    width: 180px;
  height: 150px;
  }
`

export const Img = styled.img`
  border-radius:10px;
  width: 140px;
  height: 90px;
  @media screen and (min-width:450px) {
    width: 180px;
  height: 110px;
  }
`

export const Txt = styled.p`
  display:block;
`

export const TitleTxt = styled(Txt)`
  margin: 7px 2px 4px;
  font-size:13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const TimeTxt = styled(Txt)`
  font-size: 11px;
  color: #1D57C1;
  margin-left: 3px
`




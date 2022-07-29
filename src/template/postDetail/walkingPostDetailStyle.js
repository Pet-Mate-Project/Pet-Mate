import styled from "styled-components";
import { palette } from "../../style/globalColor";

export const PostDetailWrapper = styled.main`
  padding: 20px 11px;
`

export const ContentWrapper = styled.div`
  padding-left: 46px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width:500px) {
    gap: 25px;
  }
`

export const PetImg = styled.img`
  width: 100%;
  height: 230px;
  margin-top: 14px;
  border: 1px solid ${palette.lightGray};
  border-radius: 10px;
  box-sizing: border-box;
  object-fit: cover;

  @media screen and (min-width:470px) {
    margin-top: 20px;
    height: 350px;
  }
`

export const TitleTxt = styled.h2`
  font-size: 20px;
  color: ${palette.textPoint};

  @media screen and (min-width:500px) {
    font-size: 22px;
  }
`

export const ContentTxt = styled.p`
  font-size: 15px;
  line-height: 19px;
  word-break: keep-all;

  @media screen and (min-width:500px) {
    font-size: 18px;
    line-height: 22px;
  }
`

export const DateTxt = styled.small`
  font-size: 10px;
  color: ${palette.darkGray};
  margin-bottom: 20px;

  @media screen and (min-width:370px) {
    font-size: 13px;
  }
  @media screen and (min-width:500px) {
    font-size: 15px;
    margin-bottom: 30px;
  }
`
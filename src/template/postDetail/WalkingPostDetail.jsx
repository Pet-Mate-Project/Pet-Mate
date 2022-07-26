import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { selectWalkingPostDetail, AxiosWalkingPostDetail } from '../../reducers/getPostDetailSlice'
import { useSelector, useDispatch } from 'react-redux'
import { palette } from '../../style/globalColor'
import { AllWrap, ScrollMain } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import { PostDetailWrapper, ContentWrapper, PetImg, TitleTxt, ContentTxt, DateTxt } from '../postDetail/walkingPostDetailStyle'
import { Button } from '../../components/button/buttonStyle'

export default function WalkingPostDetail() {
  const dispatch = useDispatch();
  const URL = "https://mandarin.api.weniv.co.kr";
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png"
  const marketImg = "http://146.56.183.55:5050/Ellipse.png"
  const postDetail = useSelector(selectWalkingPostDetail)?.product;
  const UserIdPath = useLocation();
  const UserId = UserIdPath.pathname.slice(19,);

  useEffect(() => {
    dispatch(AxiosWalkingPostDetail(URL + `/product/detail/${UserId}`))
  }, [])

  function imgCheck(postDetail) {
    if (postDetail.author.image === marketImg) {
      return defaultImg;
    }
    else {
      return URL + "/" + postDetail.author.image;
    }
  }

  return (
    <AllWrap>
      <header>
        <NavBack />
      </header>
      {
        postDetail?.id === UserId &&
        <ScrollMain>
          <PostDetailWrapper>
            <UserFollow userName={postDetail.author.username} userId={postDetail.author.accountname} img={imgCheck(postDetail)} />
            <ContentWrapper>
              <PetImg src={URL + "/" + postDetail.itemImage}></PetImg>
              <TitleTxt>{postDetail.itemName}</TitleTxt>
              <ContentTxt>{postDetail.link}</ContentTxt>
              <DateTxt>{postDetail.updatedAt.substring(0, 10)}</DateTxt>
              <Button color={palette.mainColor} backColor={palette.white} hover>연락하기</Button>
            </ContentWrapper>
          </PostDetailWrapper>
        </ScrollMain>
      }
    </AllWrap>
  )
}

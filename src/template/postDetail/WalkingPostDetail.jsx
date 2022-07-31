import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { selectWalkingPostDetail, AxiosWalkingPostDetail } from '../../reducers/getPostDetailSlice'
import { palette } from '../../style/globalColor'
import { AllWrap, ScrollMain, Heading } from '../../style/commonStyle'
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import { Button } from '../../components/button/buttonStyle'
import { PostDetailWrapper, ContentWrapper, PetImg, TitleTxt, ContentTxt, DateTxt } from '../postDetail/walkingPostDetailStyle'

export default function WalkingPostDetail() {
  const dispatch = useDispatch();
  const URL = "https://mandarin.api.weniv.co.kr";

  const postDetail = useSelector(selectWalkingPostDetail)?.product;
  const UserIdPath = useLocation();
  const UserId = UserIdPath.pathname.slice(19,);

  useEffect(() => {
    dispatch(AxiosWalkingPostDetail(URL + `/product/detail/${UserId}`))
  }, [])

  return (
    <AllWrap>
      <Helmet>
        <title> 펫 게시글 상세 - 산책가까? </title>
      </Helmet>
      <header>
        <Heading> 펫 게시글 디테일 페이지</Heading>
        <NavBack />
      </header>
      {
        postDetail?.id === UserId &&
        <ScrollMain>
          <PostDetailWrapper>
            <UserFollow userName={postDetail.author.username} userId={postDetail.author.accountname} img={postDetail.author.image} />
            <ContentWrapper>
              {
                postDetail.itemImage &&
                  (postDetail.itemImage?.search(URL) !== -1 || postDetail.itemImage?.search('base64') !== -1 || postDetail.itemImage?.search('.svg') !== -1)
                  ?
                  <PetImg src={postDetail.itemImage} />
                  :
                  <PetImg src={`${URL}/${postDetail.itemImage}`} />
              }
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

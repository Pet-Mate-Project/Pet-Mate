import React, { useState } from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { selectAllPosts, AxiosPetInfo, getPostStatus } from '../reducers/getPetInfoSlice'
import DefaultFeed from '../template/walkingFeed/DefaultFeed'
import WalkingFeed from '../template/walkingFeed/WalkingFeed'
import { AddBtn } from '../components/iconButton/IconButton'
import { Link } from 'react-router-dom'
import { AxiosFollow, selectAllFollowers } from '../reducers/getFollowSlice'

export default function HomePage() {

  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const myAccountname = JSON.parse(localStorage.getItem("accountname"))
  const posts = useSelector(selectAllPosts).product;
  const follower = useSelector(selectAllFollowers);

  console.log(posts)

  const loginReqPath = `/product/?limit=2000`;
  // 제한을 없애고싶은데 일단 2000으로 해놨습니다.

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(AxiosFollow(`${URL}/profile/${myAccountname}/following`))
      dispatch(AxiosPetInfo(URL + loginReqPath))
    }
  }, [dispatch])


  const followerId = [myAccountname]

  for (let i = 0; i < follower?.length; i++) {
    followerId.push(follower[i].accountname)
  }

  // console.log('followerid', followerId)
  let followpost = posts?.filter(e => followerId.includes(e.author.accountname));
  // console.log('followpost', followpost)

  return (
    <AllWrap>
      <header>
        <NavSearch text={"산책 피드"} url={"/search"} />
      </header>
      {(postsStatus === 'idle' && followpost?.length === 0) ? <DefaultFeed /> : <WalkingFeed followpost={followpost} />}
      <Link to={'/post'}>
        <AddBtn />
      </Link>
      <TabMenu />
    </AllWrap>

  )
}

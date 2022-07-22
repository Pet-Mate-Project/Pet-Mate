import React, { useState } from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPetPost, AxiosAllPetInfo ,getAllPostStatus } from '../reducers/getAllpetInfoSlice'
import DefaultFeed from '../template/walkingFeed/DefaultFeed'
import WalkingFeed from '../template/walkingFeed/WalkingFeed'
import { AddBtn } from '../components/iconButton/IconButton'
import { Link } from 'react-router-dom'
import { AxiosFollow, selectAllFollowers } from '../reducers/getFollowSlice'

export default function HomePage() {

  const dispatch = useDispatch();
  const postsStatus = useSelector(getAllPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const myAccountname = JSON.parse(localStorage.getItem("accountname"))
  const posts = useSelector(getAllPetPost).product;
  const follower = useSelector(selectAllFollowers);

  console.log("status💄",postsStatus);
  console.log("posts💍",posts)

  const ReqPath = `/product/?limit=2000`;
  // 제한을 없애고싶은데 일단 2000으로 해놨습니다.

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(AxiosAllPetInfo(URL + ReqPath))
      dispatch(AxiosFollow(`${URL}/profile/${myAccountname}/following`))
    }
  }, [dispatch,posts])


  const followerId = [myAccountname]

  for (let i = 0; i < follower?.length; i++) {
    followerId.push(follower[i].accountname)
  }

  let followpost = posts?.filter(e => followerId.includes(e.author?.accountname));

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

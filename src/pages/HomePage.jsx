import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PacmanLoader from 'react-spinners/PacmanLoader';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPetPost, AxiosAllPetInfo, getAllPostStatus } from '../reducers/getAllpetInfoSlice'
import { AxiosFollow, selectAllFollowers } from '../reducers/getFollowSlice'
import { getPostStatus } from '../reducers/getPetInfoSlice'

import { AllWrap } from '../style/commonStyle'
import { palette } from '../style/globalColor'

import TabMenu from '../components/tabMenu/TabMenu'
import { AddBtn } from '../components/iconButton/IconButton'
import { NavSearch } from '../components/navBack/NavBack'
import DefaultFeed from '../template/walkingFeed/DefaultFeed'
import WalkingFeed from '../template/walkingFeed/WalkingFeed'

export default function HomePage() {

  const dispatch = useDispatch();
  const postsStatus = useSelector(getAllPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const myAccountname = JSON.parse(localStorage.getItem("accountname"))
  const posts = useSelector(getAllPetPost).product;
  const follower = useSelector(selectAllFollowers);
  const MypetStatus = useSelector(getPostStatus);

  console.log("MypetStatus", MypetStatus);
  console.log("status💄", postsStatus);
  console.log("posts💍", posts)

  const ReqPath = `/product/?limit=2000`;
  // 제한을 없애고싶은데 일단 2000으로 해놨습니다.

  //다른탭에서 이동했을경우
  useEffect(() => {
    dispatch(AxiosAllPetInfo(URL + ReqPath))
    dispatch(AxiosFollow(`${URL}/profile/${myAccountname}/following`))
  }, [])

  //초기화면 렌더링
  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(AxiosAllPetInfo(URL + ReqPath))
  //     dispatch(AxiosFollow(`${URL}/profile/${myAccountname}/following`))
  //   }
  // }, [postsStatus,posts,MypetStatus])


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
      {
        postsStatus === 'loading' ?
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <PacmanLoader color={palette.mainColor} width={100} height={100} /></div> :
          followpost?.length === 0 ? <DefaultFeed /> :
            <WalkingFeed followpost={followpost} />
      }
      <Link to={'/post'}>
        <AddBtn />
      </Link>
      <TabMenu />
    </AllWrap>
  )
}


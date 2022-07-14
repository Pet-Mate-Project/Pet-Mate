import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { selectAllPosts,AxiosPetInfo,getPostStatus } from '../reducers/getPetInfoSlice'
import DefaultFeed from '../template/walkingFeed/DefaultFeed'
import WalkingFeed from '../template/walkingFeed/WalkingFeed'

export default function HomePage() {

  const dispatch = useDispatch();
  const postsStatus = useSelector(getPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const userInfo = JSON.parse(localStorage.getItem("userinfo")).user
  const accountname = userInfo.accountname;
  const loginReqPath = `/product/${accountname}/?limit=30`; //내게시글
  // const loginReqPath = `/product/?limit=100`;  // 전체게시글 100개
  const posts = useSelector(selectAllPosts).product;
  useEffect(()=>{
    if(postsStatus ==='idle'){
      dispatch(AxiosPetInfo(URL+loginReqPath))
    }
  },[dispatch])

  return (          
    <AllWrap>
      <header>
        <NavSearch text={"산책 피드"} />
      </header>
      {(postsStatus==='idle'&&posts?.length===0) ?<DefaultFeed/>:<WalkingFeed/> }
      <TabMenu />
    </AllWrap>
              
  )
}

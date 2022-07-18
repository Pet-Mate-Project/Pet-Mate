import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {AxiosPost,selectAllSnsPosts,getSnsPostStatus} from '../reducers/getPostSlice';
import { useEffect } from 'react'
import DefaultSnsFeed from '../template/snsFeed/DefaultSnsFeed'
import SnsFeed from '../template/snsFeed/SnsFeed'
export default function FeedPage() {

  const url = "/search"
  const dispatch = useDispatch();
  const postsStatus = useSelector(getSnsPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"))
  const loginReqPath = `/post/${accountname}/userpost`; //내sns게시글
  const posts = useSelector(selectAllSnsPosts).post;

  useEffect(()=>{
    if(postsStatus === 'idle'){
      dispatch(AxiosPost(URL+loginReqPath))
    }
  },[dispatch])

  return (
    <AllWrap>
      <header>
        <NavSearch text={"Pet Story"} url={url}/>
      </header>
      {(posts?.length===0) ? <DefaultSnsFeed/>: <SnsFeed/>}
      <Link to ='/snspost'>
        <AddBtn />
      </Link>
      <TabMenu />
    </AllWrap>
  )
}

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'
import { AxiosFeedPost, selectFeedPosts, getFeedStatus } from '../reducers/getFeedPostSlice'
import { AllWrap,Heading } from '../style/commonStyle'

import { NavSearch } from '../components/navBack/NavBack'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'
import DefaultSnsFeed from '../template/snsFeed/DefaultSnsFeed'
import SnsFeed from '../template/snsFeed/SnsFeed'
export default function FeedPage() {

  const url = "/search"
  const dispatch = useDispatch();
  const URL = "https://mandarin.api.weniv.co.kr";
  const status = useSelector(getFeedStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(AxiosFeedPost(URL + "/post/feed/?limit=30"))
    }
  }, [status])

  const posts = useSelector(selectFeedPosts)?.posts;
  const postsLength = posts?.length

  return (
    <AllWrap>
      <Helmet>
        <title> SNS 피드 - 산책가까? </title>
      </Helmet>
      <header>
        <Heading>SNS게시글페이지</Heading>
        <NavSearch text={"Pet Story"} url={url} />
      </header>
      {(postsLength === 0) ? <DefaultSnsFeed /> : <SnsFeed />}
      <SnsFeed />
      <Link to='/snspost'>
        <AddBtn />
      </Link>
      <TabMenu />
    </AllWrap>
  )
}

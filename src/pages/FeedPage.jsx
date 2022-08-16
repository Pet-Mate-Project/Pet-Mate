import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AxiosFeedPost, selectFeedPosts, getFeedStatus } from '../reducers/getFeedPostSlice'
import { AllWrap,Heading } from '../style/commonStyle'
import { NavSearch } from '../components/navBack/NavBack'
import { AddBtn } from '../components/iconButton/IconButton'
import SnsFeed from '../template/snsFeed/SnsFeed'
import TabMenu from '../components/tabMenu/TabMenu'
import DefaultSnsFeed from '../template/snsFeed/DefaultSnsFeed'

export default function FeedPage() {
  const SEARCH_URL = '/search';
  const URL = 'https://mandarin.api.weniv.co.kr';
  const dispatch = useDispatch();
  const status = useSelector(getFeedStatus);
  const posts = useSelector(selectFeedPosts)?.posts;
  const postsLength = posts?.length;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(AxiosFeedPost(URL + '/post/feed/?limit=30'));
    }
  }, [status])

  return (
    <AllWrap>
      <Helmet>
        <title>SNS 피드 - 산책가까?</title>
        <meta name='description' content='산책가까 피드페이지입니다. 글을 작성하고 댓글을 달며 자유롭게 소통해보세요.'/>
      </Helmet>
      <header>
        <Heading>SNS게시글페이지</Heading>
        <NavSearch text={'Pet Story'} url={SEARCH_URL} />
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

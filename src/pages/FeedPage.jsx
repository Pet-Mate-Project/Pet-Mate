import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AxiosFeedPost, selectFeedPosts, getFeedStatus } from '../reducers/getFeedPostSlice'
import { useEffect } from 'react'
import DefaultSnsFeed from '../template/snsFeed/DefaultSnsFeed'
import SnsFeed from '../template/snsFeed/SnsFeed'
export default function FeedPage() {

  const url = "/search"
  const dispatch = useDispatch();
  const URL = "https://mandarin.api.weniv.co.kr";
  const status = useSelector(getFeedStatus);

  useEffect(() => {
    if(status ==='idle'){
      dispatch(AxiosFeedPost(URL + "/post/feed"))
    }
  }, [status])

  const posts = useSelector(selectFeedPosts)?.posts;
  const postsLength = posts?.length

  return (
    <AllWrap>
      <header>
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

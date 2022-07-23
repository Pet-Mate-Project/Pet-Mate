import React from 'react'
import { NavSearch } from '../components/navBack/NavBack'
import { AllWrap } from '../style/commonStyle'
import { AddBtn } from '../components/iconButton/IconButton'
import TabMenu from '../components/tabMenu/TabMenu'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AxiosPost, selectAllSnsPosts, getSnsPostStatus } from '../reducers/getPostSlice';
import { useEffect } from 'react'
import DefaultSnsFeed from '../template/snsFeed/DefaultSnsFeed'
import SnsFeed from '../template/snsFeed/SnsFeed'
export default function FeedPage() {

  const url = "/search"
  const dispatch = useDispatch();
  const postsStatus = useSelector(getSnsPostStatus);
  const URL = "https://mandarin.api.weniv.co.kr";
  const posts = useSelector(selectAllSnsPosts).posts;
  const postsLength = posts?.length
  useEffect(() => {
    dispatch(AxiosPost(URL + "/post/feed"))
  }, [dispatch])

  return (
    <AllWrap>
      <header>
        <NavSearch text={"Pet Story"} url={url} />
      </header>
      {console.log('희진', postsLength)}
      {(postsLength === 0) ? <DefaultSnsFeed /> : <SnsFeed />}
      <SnsFeed />
      <Link to='/snspost'>
        <AddBtn />
      </Link>
      <TabMenu />
    </AllWrap>
  )
}

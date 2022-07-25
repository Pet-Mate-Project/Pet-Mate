import React from 'react'
import { useSelector } from 'react-redux';
import { selectFeedPosts } from '../../reducers/getFeedPostSlice'
import { selectAllSnsPosts } from '../../reducers/getPostSlice'
import FeedPost from '../../components/post/FeedPost'
import { useLocation } from 'react-router-dom'

export function SnsPost() {
  const location = useLocation();
  const name = location.pathname;
  console.log(name);
  const followSnsPosts = useSelector(selectFeedPosts).posts;
  const mySnsPosts = useSelector(selectAllSnsPosts).post;

  return (
    <ul>
      {/* 내가 팔로우한 사람들 SNS 게시글 */}
      {name === "/feedpage" && followSnsPosts && followSnsPosts.map((post) => {
        return (
          <li key={post.id} style={{ padding: "16px" }}>
            <FeedPost post={post} />
          </li>
        )
      })}

      {/* 내 SNS 게시글 */}
      {name === "/profilepage" || name === "/userprofile" && mySnsPosts && mySnsPosts.map((post) => {
        return (
          <li key={post.id} style={{ padding: "16px" }}>
            <FeedPost post={post} />
          </li>
        )
      })}



    </ul>
  )
}


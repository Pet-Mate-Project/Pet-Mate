import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import FeedPost from '../../components/post/FeedPost'

export function SnsPost() { 
  const followSnsPosts = useSelector(selectAllSnsPosts).posts;
  const mySnsPosts = useSelector(selectAllSnsPosts).post;
  console.log('followSnsPosts', followSnsPosts);
  console.log('mySnsPosts', mySnsPosts);

  return (
    <ul>
      {/* 내가 팔로우한 사람들 SNS 게시글 */}
      {followSnsPosts && followSnsPosts.map((post) => {
        return (
          <li key={post.id} style={{ padding: "16px" }}>
            <FeedPost post={post} />
          </li>
        )
      })}
      {/* 내 SNS 게시글 */}
      {mySnsPosts && mySnsPosts.map((post) => {
        return (
          <li key={post.id} style={{ padding: "16px" }}>
            <FeedPost post={post} />
          </li>
        )
      })}
    </ul>
  )
}


import React from 'react'
import { AlbumImage, AlbumWrap } from './SnsAlbumStyle'
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import { useSelector } from 'react-redux';
import test from '../../assets/rang.jpg'

export function SnsAlbum() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
  console.log('sns', snsPosts)
  return (
    <AlbumWrap>
      {snsPosts && snsPosts.map((post) => {
        return (
          <AlbumImage key={post.id}
            src={"https://mandarin.api.weniv.co.kr/" + post.image}
          />
        )
      })}
    </AlbumWrap>
  )
}

export default SnsAlbum
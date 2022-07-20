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
        let postimg = post.image.split(",")
        console.log(postimg)
        return (
          <AlbumImage key={post.id}
            src={"https://mandarin.api.weniv.co.kr/" + postimg[0]}
          />
        )
      })}
    </AlbumWrap>
  )
}

export default SnsAlbum
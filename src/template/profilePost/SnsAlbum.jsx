import React from 'react'
import { AlbumImage, AlbumWrap } from './SnsAlbumStyle'
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function SnsAlbum() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
  console.log('sns', snsPosts)

  return (
    <AlbumWrap>
      {snsPosts && snsPosts.map((post) => {
        let postimg = post.image.split(",")
        console.log(postimg)
        return (
          <Link to={'/snspostdetail/' + post.id} key={post.id} >
            <AlbumImage
              src={"https://mandarin.api.weniv.co.kr/" + postimg[0]} />
          </Link>
        )
      })}
    </AlbumWrap >
  )
}

export default SnsAlbum
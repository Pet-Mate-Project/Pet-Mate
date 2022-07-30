import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import { AlbumImage, AlbumWrap } from './SnsAlbumStyle'
import { imgCheck } from '../../components/user/User.jsx';

export function SnsAlbum() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
  const URL = "https://mandarin.api.weniv.co.kr";

  console.log('sns', snsPosts)

  return (
    <AlbumWrap>
      {snsPosts && snsPosts.map((post) => {
        let postimg = post.image.split(",")
        console.log('앨범🔥', postimg)
        console.log('앨범🔥[0]', postimg[0])
        return (
          <Link to={'/snspostdetail/' + post.id} key={post.id} >
            <AlbumImage
              src={imgCheck(postimg[0])} />
          </Link>
        )
      })}
    </AlbumWrap >
  )
}

export default SnsAlbum
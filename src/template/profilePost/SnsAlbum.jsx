import React from 'react'
import { AlbumImage, AlbumWrap } from './SnsAlbumStyle'
import { selectAllSnsPosts } from '../../reducers/getPostSlice.js'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function SnsAlbum() {
  const snsPosts = useSelector(selectAllSnsPosts).post;
  const URL = "https://mandarin.api.weniv.co.kr";

  console.log('sns', snsPosts)

  function imgCheck(img) {
    if (img?.search(URL) !== -1) {
      return img;
    }
    else {
      return URL + "/" + img
    }
  }

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
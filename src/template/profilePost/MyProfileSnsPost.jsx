import React, { useState } from 'react'
import { ShowBtnStyle, ShowWrap } from './myProfileSnsPostStyle'
import listOff from '../../assets/icon-post-list-off.svg'
import listOn from '../../assets/icon-post-list-on.svg'
import albumOff from '../../assets/icon-post-album-off.svg'
import albumOn from '../../assets/icon-post-album-on.svg'
import { SnsPost } from '../snsPost/SnsPost'
import SnsAlbum from './SnsAlbum'

function MyProfileSnsPost() {
  const [isList, setIsList] = useState(true)

  function listClick() {
    isList === false &&
      setIsList(true)
  }

  function albumClick() {
    isList === true &&
      setIsList(false)
  }

  return (
    <>
      {isList === true ?
        <section>
          <ShowWrap>
            <ShowBtnStyle showIcon={listOn} onClick={listClick} />
            <ShowBtnStyle showIcon={albumOff}
              onClick={albumClick} />
          </ShowWrap>
          <SnsPost />
        </section>
        :
        <section>
          <ShowWrap>
            <ShowBtnStyle showIcon={listOff} onClick={listClick} />
            <ShowBtnStyle showIcon={albumOn}
              onClick={albumClick} />
          </ShowWrap>
          <SnsAlbum />
        </section>
      }
    </>

  )
}

export default MyProfileSnsPost
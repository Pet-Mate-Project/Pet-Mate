import React, { useState } from 'react'
import { ShowBtnStyle, ShowWrap } from './myProfileSnsPostStyle'
import listOff from '../../assets/icon-post-list-off.svg'
import listOn from '../../assets/icon-post-list-on.svg'
import albumOff from '../../assets/icon-post-album-off.svg'
import albumOn from '../../assets/icon-post-album-on.svg'
import { MySnsPost } from '../snsPost/SnsPost'

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
          <MySnsPost />
        </section>
        :
        <section>
          <ShowWrap>
            <ShowBtnStyle showIcon={listOff} onClick={listClick} />
            <ShowBtnStyle showIcon={albumOn}
              onClick={albumClick} />
          </ShowWrap>
          <MySnsPost />
        </section>
      }
    </>

  )
}

export default MyProfileSnsPost
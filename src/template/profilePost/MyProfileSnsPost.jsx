import React, { useState } from 'react'
import { ShowBtnStyle, ShowWrap } from './myProfileSnsPostStyle'
import listOff from '../../assets/icon-post-list-off.svg'
import listOn from '../../assets/icon-post-list-on.svg'
import albumOff from '../../assets/icon-post-album-off.svg'
import albumOn from '../../assets/icon-post-album-on.svg'
import { SnsPost } from '../snsPost/SnsPost'
import SnsAlbum from './SnsAlbum'

function MyProfileSnsPost() {
  const [isList, setIsList] = useState(true);

  function listClick() {
    isList === false &&
      setIsList(true);
  }

  function albumClick() {
    isList === true &&
      setIsList(false);
  }

  return (
    <>
      {isList === true ?
        <section>
          <ShowWrap>
            <button>
              <ShowBtnStyle
                src={listOn}
                onClick={listClick}
                alt="리스트형 게시글 버튼" />
            </button>
            <button>
              <ShowBtnStyle
                src={albumOff}
                onClick={albumClick}
                alt="앨범형 게시글 버튼" />
            </button>
          </ShowWrap>
          <SnsPost />
        </section>
        :
        <section>
          <ShowWrap>
            <button>
              <ShowBtnStyle
                src={listOff}
                onClick={listClick}
                alt="리스트형 게시글 버튼" />
            </button>
            <button>
              <ShowBtnStyle
                src={albumOn}
                onClick={albumClick}
                alt="앨범형 게시글 버튼" />
            </button>
          </ShowWrap>
          <SnsAlbum />
        </section>
      }
    </>
  )
}

export default MyProfileSnsPost
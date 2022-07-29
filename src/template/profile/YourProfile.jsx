import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap, OnlyIconButton } from './ProfileStyle'
import { ProfileImg } from '../../components/profile/profileStyle'
import { ProfileFollowToggleBtn } from '../../components/button/Button'
import chatIcon from '../../assets/icon-message.svg'
import shareIcon from '../../assets/icon-share.svg'

function YourProfile({ userId }) {
  const URL = "https://mandarin.api.weniv.co.kr";
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = userId;
  const [yourInfoList, setYourInfoList] = useState([]);
  const [isFollow, setIsFollow] = useState();

  function onClick() {
    if (!isFollow) {
      setIsFollow(true);
      postUserFollow();
    } else {
      setIsFollow(false);
      deleteUserFollow();
    }
  }

  useEffect(() => {
    getYourInfo();
  }, [])

  // your정보 받아오는 함수
  async function getYourInfo() {
    await axios.get(URL + `/profile/${accountname}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }).then((res) => {
      setYourInfoList(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    })
  }

  const data = {};
  // 팔로우 정보 받아오는 함수
  async function postUserFollow() {
    await axios.post(URL + `/profile/${accountname}/follow`, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setYourInfoList(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    })
  }

  // 언팔로우 정보 받아오는 함수
  async function deleteUserFollow() {
    await axios.delete(URL + `/profile/${accountname}/unfollow`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setYourInfoList(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    })
  }

  //기본이미지체크
  function imgCheck(img) {
    if (img === marketImg) {
      return defaultImg;
    } else if (img?.search(URL) !== -1 || img?.search('base64') !== -1 || img?.search('.svg') !== -1) {
      return img;
    } else if (img?.search(URL) === -1) {
      return `${URL}/${img}`
    }
  }

  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <Link to="/yourfollow" state={{ text: 'followers', userId: accountname }}>
            <FollowerCount>{yourInfoList.followerCount}</FollowerCount>
            <FollowerText>followers</FollowerText>
          </Link>
        </ColumnWapper>
        <ProfileImg src={imgCheck(yourInfoList.image)} />
        <ColumnWapper>
          <Link to="/yourfollow" state={{ text: 'followings', userId: accountname }}>
            <FollowerCount>{yourInfoList.followingCount}</FollowerCount>
            <FollowerText>followings</FollowerText>
          </Link>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{yourInfoList.username}</NameText>
        <IdText>&#64; {yourInfoList.accountname}</IdText>
        <IntroText>{yourInfoList.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <OnlyIconButton icon={chatIcon} color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}>
        </OnlyIconButton>
        {
          isFollow !== undefined && <ProfileFollowToggleBtn onClick={onClick} isFollow={isFollow} />
        }
        <OnlyIconButton icon={shareIcon} color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}>
        </OnlyIconButton>
      </ButtonWrap>
    </>
  )
}

export default YourProfile
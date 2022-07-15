import React from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './ProfileStyle'
import { Button } from '../../components/button/buttonStyle'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function MyProfile() {
  const url = "https://mandarin.api.weniv.co.kr";
  const [userInfoList, setUserInfoList] = useState([])
  const user = JSON.parse(localStorage.getItem("userinfo")).user;

  useEffect(() => {
    getUserInfo()
  }, [])

  console.log('UserInfoList', userInfoList)

  //사용자 정보 받아오는 함수
  function getUserInfo() {
    axios.get(url + `/profile/${user.accountname}`, {
      headers: {
        "Authorization": `Bearer ${user.token}`,
        "Content-type": "application/json"
      }
    }).then((res) => setUserInfoList(res.data.profile))
  }

  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <FollowerCount>{userInfoList.followerCount}</FollowerCount>
          <FollowerText>followers</FollowerText>
        </ColumnWapper>
        <ProfileImg
          src={url + `/${userInfoList.image}`} alt='user-img'
        />
        <ColumnWapper>
          <FollowerCount>{userInfoList.followingCount}</FollowerCount>
          <FollowerText>followings</FollowerText>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{userInfoList.username}</NameText>
        <IdText>@ {userInfoList.accountname}</IdText>
        <IntroText>{userInfoList.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <Link to="/profilemodify">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover
          >프로필 수정
          </Button>
        </Link>
        <Link to="/post">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover
          >펫 등록
          </Button>
        </Link>
      </ButtonWrap>
    </>
  )
}

export default MyProfile
import React, { useState, useEffect } from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './ProfileStyle'
import { Button } from '../../components/button/buttonStyle'
import { Link } from 'react-router-dom'
import axios from 'axios'

function MyProfile() {
  const url = "https://mandarin.api.weniv.co.kr";
  const [userInfoList, setUserInfoList] = useState([])
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = JSON.parse(localStorage.getItem("accountname"));


  useEffect(() => {
    getUserInfo()
  }, [])

  console.log('UserInfoList', userInfoList)

  //사용자 정보 받아오는 함수
  function getUserInfo() {
    try {
      axios.get(url + `/profile/${accountname}`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-type": "application/json"
        }
      }).then((res) => setUserInfoList(res.data.profile))
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <Link to="/myfollow" state={{ text: 'followers' }}>
            <FollowerCount>{userInfoList.followerCount}</FollowerCount>
          </Link>
          <FollowerText>followers</FollowerText>
        </ColumnWapper>
        <ProfileImg
          src={url + `/${userInfoList.image}`} alt='user-img'
        />
        <ColumnWapper>
          <Link to="/myfollow" state={{ text: 'followings' }}>
            <FollowerCount>{userInfoList.followingCount}</FollowerCount>
          </Link>
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
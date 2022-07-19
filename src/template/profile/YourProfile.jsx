import React, { useState, useEffect } from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap, OnlyIconButton } from './ProfileStyle'
import { ProfileFollowToggleBtn } from '../../components/button/Button'
import chatIcon from '../../assets/icon-message.svg'
import shareIcon from '../../assets/icon-share.svg'
import axios from 'axios'

function YourProfile({ userId }) {

  const url = "https://mandarin.api.weniv.co.kr";
  const [userInfoList, setUserInfoList] = useState([])
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = userId;


  useEffect(() => {
    getUserInfo()
  }, [])

  console.log('UserInfoList', userInfoList)



  //사용자 정보 받아오는 함수
  function getUserInfo() {
    axios.get(url + `/profile/${accountname}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
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
        <OnlyIconButton icon={chatIcon} color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}>
        </OnlyIconButton>
        <ProfileFollowToggleBtn />
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
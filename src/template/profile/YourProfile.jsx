import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap, OnlyIconButton } from './ProfileStyle'
import { ProfileFollowToggleBtn } from '../../components/button/Button'
import chatIcon from '../../assets/icon-message.svg'
import shareIcon from '../../assets/icon-share.svg'
import axios from 'axios'

function YourProfile({ userId }) {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const accountname = userId;
  const [yourInfoList, setYourInfoList] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

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
    await axios.get(url + `/profile/${accountname}`, {
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
    await axios.post(url + `/profile/${accountname}/follow`, data, {
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
    await axios.delete(url + `/profile/${accountname}/unfollow`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setYourInfoList(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    })
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
        <ProfileImg
          src={url + `/${yourInfoList.image}`} alt='user-img'
        />
        <ColumnWapper>
          <Link to="/yourfollow" state={{ text: 'followings', userId: accountname }}>
            <FollowerCount>{yourInfoList.followingCount}</FollowerCount>
            <FollowerText>followings</FollowerText>
          </Link>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{yourInfoList.username}</NameText>
        <IdText>@ {yourInfoList.accountname}</IdText>
        <IntroText>{yourInfoList.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <OnlyIconButton icon={chatIcon} color={'#767676'}
          backColor={'white'}
          width={34}
          height={34}>
        </OnlyIconButton>
        <ProfileFollowToggleBtn onClick={onClick} isFollow={isFollow} />
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
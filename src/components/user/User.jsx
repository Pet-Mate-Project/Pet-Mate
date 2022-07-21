import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChatBtn, FollowToggleBtn } from '../button/Button.jsx'
import { ChatListProfileIcon, ProfileIconS } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper, MoreIcon, ChatPreview, ChatDate, ChatListWrapper } from './userStyle.js'
import moreIcon from '../../assets/icon-more-vertical-small.svg'
import { Link } from 'react-router-dom'


export function User({ userName, userId, img }) {
  // console.log(img);
  return (
    <Wrapper>
      {
        img.search('https://mandarin.api.weniv.co.kr/') === -1
          ?
          <ProfileIconS img={`https://mandarin.api.weniv.co.kr/${img}`} />
          :
          <ProfileIconS img={img} />
      }
      <TextWrapper>
        <UserName>{userName}</UserName>
        <UserId>@ {userId}</UserId>
      </TextWrapper>
    </Wrapper>
  )
}

export function UserFollow({ userName, userId, img }) {
  const url = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const [isFollow, setIsFollow] = useState(false);
  const MyId = JSON.parse(localStorage.getItem("accountname"));

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

  async function getYourInfo() {
    await axios.get(url + `/profile/${userId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
      console.log('1');
    })
  }

  const data = {};
  // 팔로우 정보 받아오는 함수
  async function postUserFollow() {
    await axios.post(url + `/profile/${userId}/follow`, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
    })
  }

  // 언팔로우 정보 받아오는 함수
  async function deleteUserFollow() {
    await axios.delete(url + `/profile/${userId}/unfollow`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
    })
  }

  return (
    <>
      <Wrapper between>
        {
          userId === MyId &&
          <Link to='/profilepage'>
            <User userName={userName} userId={userId} img={img} />
          </Link>
        }
        {
          userId !== MyId &&
          <Link to='/userprofile' state={{ userId: userId }}>
            <User userName={userName} userId={userId} img={img} />
          </Link>
        }
        {
          userId !== MyId && <FollowToggleBtn onClick={onClick} isFollow={isFollow} />
        }
      </Wrapper>
    </>
  )
}

export function UserMore({ userName, userId, img, onClick }) {
  const MyId = JSON.parse(localStorage.getItem("accountname"));

  return (
    <>
      <Wrapper between>
        {
          userId === MyId &&
          <Link to='/profilepage'>
            <User userName={userName} userId={userId} img={img} />
          </Link>
        }
        {
          userId !== MyId &&
          <Link to='/userprofile' state={{ userId: userId }}>
            <User userName={userName} userId={userId} img={img} />
          </Link>
        }
        <MoreIcon src={moreIcon} onClick={onClick} />
      </Wrapper>
    </>
  )
}

export function UserChat({ userName, userId, img }) {
  return (
    <>
      <Wrapper between>
        <User userName={userName} userId={userId} img={img} />
        <ChatBtn />
      </Wrapper>
    </>
  )
}

export function UserChatList(props) {
  return (
    <ChatListWrapper>
      <ChatListProfileIcon visible={props.visible}></ChatListProfileIcon>
      <TextWrapper>
        <UserName>{props.userName}</UserName>
        <ChatPreview>{props.chatPreview}</ChatPreview>
      </TextWrapper>
      <ChatDate>{props.chatDate}</ChatDate>
    </ChatListWrapper>
  )
}
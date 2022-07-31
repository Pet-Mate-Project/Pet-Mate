import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChatBtn, FollowToggleBtn } from '../button/Button.jsx'
import { ChatListProfileIcon, ProfileIconS } from '../profileIcon/ProfileIcon.jsx'
import { TextWrapper, UserId, UserName, Wrapper, MoreIcon, ChatPreview, ChatDate, ChatListWrapper } from './userStyle.js'
import moreIcon from '../../assets/icon-more-vertical-small.svg'
import { Link } from 'react-router-dom'

//이미지 체크 함수
export function imgCheck(img) {
  const DEFAULT_IMG = 'https://mandarin.api.weniv.co.kr/1657812669741.png';
  const URL = 'https://mandarin.api.weniv.co.kr';
  if (img?.search('Ellipse') !== -1 || img?.search('undefined') !== -1) {
    return DEFAULT_IMG;
  } 
  else if (img?.search(URL) !== -1 || img?.search('base64') !== -1 || img?.search('.svg') !== -1 || img?.search('blob') !== -1) {
    return img;
  }
  else if (img?.search('/') !== -1) {
    return DEFAULT_IMG;
  }
  else if (img?.search(URL) === -1) {
    return `${URL}/${img}`;
  }
  else {
    return DEFAULT_IMG;
  }
}

export function User({ userName, userId, img, keyword }) {
  return (
    <Wrapper>
      <ProfileIconS img={img} />
      <TextWrapper>
        {
          userName.includes(keyword)
            ?
            <UserName style={{ color: '#1D57C1' }}>{keyword}</UserName>
            :
            <UserName>{userName}</UserName>
        }
        <UserId>@{userId}</UserId>
      </TextWrapper>
    </Wrapper>
  )
}

export function UserFollow({ userName, userId, img }) {
  const URL = 'https://mandarin.api.weniv.co.kr';
  const token = JSON.parse(localStorage.getItem('token'));
  const [isFollow, setIsFollow] = useState();
  const MyId = JSON.parse(localStorage.getItem('accountname'));

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
    await axios.get(URL + `/profile/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
    })
  }

  const data = {};
  async function postUserFollow() {
    await axios.post(URL + `/profile/${userId}/follow`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
    })
  }

  // 언팔로우 정보 받아오는 함수
  async function deleteUserFollow() {
    await axios.delete(URL + `/profile/${userId}/unfollow`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      },
    }).then((res) => {
      setIsFollow(res.data.profile.isfollow);
    })
  }

  return (
    <>
      <Wrapper between>
        {
          userId === MyId
            ?
            <Link to='/profilepage'>
              <User 
                userName={userName} 
                userId={userId} 
                img={img} />
            </Link>
            :
            <Link to='/userprofile' state={{ userId: userId }}>
              <User 
                userName={userName} 
                userId={userId} 
                img={img} />
            </Link>
        }
        {
          userId !== MyId && isFollow !== undefined && <FollowToggleBtn onClick={onClick} isFollow={isFollow} />
        }
      </Wrapper>
    </>
  )
}

export function UserMore({ userName, userId, img, onClick }) {
  
  const MyId = JSON.parse(localStorage.getItem('accountname'));

  return (
    <>
      <Wrapper between>
        {
          userId === MyId
            ?
            <Link to='/profilepage'>
              <User 
                userName={userName} 
                userId={userId} 
                img={img} 
                alt='내 프로필' />
            </Link>
            :
            <Link to='/userprofile' state={{ userId: userId }}>
              <User 
                userName={userName} 
                userId={userId} 
                img={img} 
                alt='유저 프로필' />
            </Link>
        }
        <MoreIcon 
          src={moreIcon} 
          onClick={onClick} 
          alt='게시글 설정' />
      </Wrapper>
    </>
  )
}

export function UserChat({ userName, userId, img }) {
  const MyId = JSON.parse(localStorage.getItem('accountname'));
  return (
    <>
      <Wrapper between>
        {
          userId === MyId
            ?
            <Link to='/profilepage'>
              <User userName={userName} userId={userId} img={img} />
            </Link>
            :
            <Link to='/userprofile' state={{ userId: userId }}>
              <User userName={userName} userId={userId} img={img} />
            </Link>
        }
        <ChatBtn />
      </Wrapper>
    </>
  )
}

export function UserChatList(props) {
  return (
    <ChatListWrapper>
      <ChatListProfileIcon visible={props.visible} />
      <TextWrapper>
        <UserName>{props.userName}</UserName>
        <ChatPreview>{props.chatPreview}</ChatPreview>
      </TextWrapper>
      <ChatDate>{props.chatDate}</ChatDate>
    </ChatListWrapper>
  )
}
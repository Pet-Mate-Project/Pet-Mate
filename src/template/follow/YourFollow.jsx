import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios'
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import TabMenu from '../../components/tabMenu/TabMenu'
import { AllWrap } from '../../style/commonStyle'
import { FollowMain } from './followStyle'

function YourFollower() {
  const NavBackTitle = useLocation().state?.text;
  const accountname = useLocation().state?.userId;
  const URL = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowerList();
    getFollowingList();
  }, []);

  async function getFollowerList() {
    await axios.get(URL + `/profile/${accountname}/follower?limit=1000`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setFollowerList(res.data);
    })
  }

  async function getFollowingList() {
    await axios.get(URL + `/profile/${accountname}/following?limit=1000`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setFollowingList(res.data);
    })
  }

  return (
    <AllWrap>
      <Helmet>
        <title>유저 팔로워/팔로잉 리스트 - 산책가까?</title>
      </Helmet>
      <NavBack
        text={NavBackTitle} />
      <FollowMain>
        {
          NavBackTitle === 'followers' &&
          followerList.map((userInfo, index) => (
            <UserFollow
              key={index}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image} />
          ))
        }
        {
          NavBackTitle === 'followings' &&
          followingList.map((userInfo, index) => (
            <UserFollow
              key={index}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image} />
          ))
        }
      </FollowMain>
      <TabMenu />
    </AllWrap>
  )
}

export default YourFollower
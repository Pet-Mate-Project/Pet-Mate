import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { NavBack } from '../../components/navBack/NavBack'
import { UserFollow } from '../../components/user/User'
import { FollowMain } from './followStyle'
import TabMenu from '../../components/tabMenu/TabMenu'
import { AllWrap } from '../../style/commonStyle'

function YourFollower() {
  const NavBackTitle = useLocation().state.text;
  const accountname = useLocation().state.userId;
  const url = "https://mandarin.api.weniv.co.kr";
  const token = JSON.parse(localStorage.getItem("token"));
  const [followerList, setFollowerList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    getFollowerList();
    getFollowingList();
  }, []);
  
  async function getFollowerList() {
    await axios.get(url + `/profile/${accountname}/follower`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      },
    }).then((res) => {
      setFollowerList(res.data);
    })
  }

  async function getFollowingList() {
    await axios.get(url + `/profile/${accountname}/following`, {
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
      <NavBack
        text={NavBackTitle} />
      <FollowMain>
        {
          NavBackTitle==='followers' &&
          followerList.map((userInfo, index) => (
            <UserFollow
              key={index}
              userName={userInfo.username}
              userId={userInfo.accountname}
              img={userInfo.image} />
          ))
        }
        {
          NavBackTitle==='followings' &&
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
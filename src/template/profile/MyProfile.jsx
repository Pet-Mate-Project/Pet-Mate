import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectUserData, AxiosUserData } from '../../reducers/getUserInfoSlice'
import { ProfileImg } from '../../components/profile/profileStyle'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './ProfileStyle'
import { Button } from '../../components/button/buttonStyle'
import { imgCheck } from '../../components/user/User'

function MyProfile() {
  const URL = "https://mandarin.api.weniv.co.kr";
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AxiosUserData(URL + `/profile/${accountname}`));
  }, [])

  const userInfoList = useSelector(selectUserData);

  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <Link to="/myfollow" state={{ text: 'followers' }}>
            <FollowerCount>{userInfoList.followerCount}</FollowerCount>
          </Link>
          <FollowerText>followers</FollowerText>
        </ColumnWapper>
        <ProfileImg src={imgCheck(userInfoList.image)} />
        <ColumnWapper>
          <Link to="/myfollow" state={{ text: 'followings' }}>
            <FollowerCount>{userInfoList.followingCount}</FollowerCount>
          </Link>
          <FollowerText>followings</FollowerText>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{userInfoList.username}</NameText>
        <IdText>&#64; {userInfoList.accountname}</IdText>
        <IntroText>{userInfoList.intro}</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <Link to="/profilemodify">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover>
            프로필 수정
          </Button>
        </Link>
        <Link to="/post">
          <Button
            width={120}
            height={34}
            color={'#767676'}
            backColor={'white'}
            hover>
            펫 등록
          </Button>
        </Link>
      </ButtonWrap>
    </>
  )
}

export default MyProfile
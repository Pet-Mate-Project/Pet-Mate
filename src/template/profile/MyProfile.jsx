import React, { useEffect } from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './ProfileStyle'
import { Button } from '../../components/button/buttonStyle'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { selectUserData } from '../../reducers/getUserInfoSlice'
import { AxiosUserData } from '../../reducers/getUserInfoSlice'

function MyProfile() {
  const URL = "https://mandarin.api.weniv.co.kr";
  const defaultImg = "https://mandarin.api.weniv.co.kr/1657812669741.png";
  const marketImg = "http://146.56.183.55:5050/Ellipse.png";
  const accountname = JSON.parse(localStorage.getItem("accountname"));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AxiosUserData(URL + `/profile/${accountname}`))
  }, [])

  const userInfoList = useSelector(selectUserData)

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
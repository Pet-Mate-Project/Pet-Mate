import React from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { NavBack } from '../../components/navBack/NavBack'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap } from './myProfileStyle'
import { Button } from '../../components/button/buttonStyle'

function MyProfile() {
  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <FollowerCount>2354</FollowerCount>
          <FollowerText>follower</FollowerText>
        </ColumnWapper>
        <ProfileImg
          src={basicImg} alt='user-img'
        />
        <ColumnWapper>
          <FollowerCount>2354</FollowerCount>
          <FollowerText>following</FollowerText>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>Pet-mate</NameText>
        <IdText>@ coding_arang</IdText>
        <IntroText>19개월 다람쥐 키우고있습니다</IntroText>
      </ColumnWapper>
      <ButtonWrap>
        <Button
          width={120}
          height={34}
          color={'#767676'}
          backColor={'white'}
        >프로필 수정
        </Button>
        <Button
          width={120}
          height={34}
          color={'#767676'}
          backColor={'white'}
        >연락하기
        </Button>
      </ButtonWrap>
    </>
  )
}

export default MyProfile
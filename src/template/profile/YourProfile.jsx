import React from 'react'
import { ProfileImg } from '../../components/profile/profileStyle'
import basicImg from '../../assets/basic-profile.svg'
import { IdText, IntroText, Wrapper, ColumnWapper, FollowerText, FollowerCount, NameText, ButtonWrap, OnlyIconButton } from './ProfileStyle'
import { ProfileFollowToggleBtn } from '../../components/button/Button'
import chatIcon from '../../assets/icon-message.svg'
import shareIcon from '../../assets/icon-share.svg'

function YourProfile(props) {
  return (
    <>
      <Wrapper>
        <ColumnWapper>
          <FollowerCount>{props.follower}</FollowerCount>
          <FollowerText>followers</FollowerText>
        </ColumnWapper>
        <ProfileImg
          src={basicImg} alt='user-img'
        />
        <ColumnWapper>
          <FollowerCount>{props.following}</FollowerCount>
          <FollowerText>followings</FollowerText>
        </ColumnWapper>
      </Wrapper>
      <ColumnWapper>
        <NameText>{props.name}</NameText>
        <IdText>@ {props.id}</IdText>
        <IntroText>{props.intro}</IntroText>
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
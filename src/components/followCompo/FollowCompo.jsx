import React from 'react'
import { FollowCompoWrapper, DefaultImg, DefaultTxt } from './followCompoStyle'
import grayLogo from '../../assets/gray-logo.svg'
import logo404 from '../../assets/404-logo.svg'
import { MiddleBtn } from '../../components/button/Button'
import { Link } from "react-router-dom";


export function FollowCompo(props) {
  return (
    <FollowCompoWrapper>
      <img src={grayLogo} />
      <DefaultTxt>
        {props.textDefault}
      </DefaultTxt>
      <Link to= {props.url}>
        <MiddleBtn textBtn={props.textBtn} />
      </Link>
    </FollowCompoWrapper>
  )
}

export function NotFoundCompo() {
  return (
    <FollowCompoWrapper>
      <img src={logo404} />
      <DefaultTxt>
        페이지를 찾을 수 없습니다. :(
      </DefaultTxt>
      <MiddleBtn textBtn={'이전 페이지'} />
    </FollowCompoWrapper>
  )
}


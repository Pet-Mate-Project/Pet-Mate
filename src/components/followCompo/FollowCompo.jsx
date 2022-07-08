import React from 'react'
import {FollowCompoWrapper,DefaultImg,DefaultTxt} from './followCompoStyle'
import grayLogo from '../../assets/gray-logo.svg'
import {BackBtn} from '../../components/button/Button'

export default function FollowCompo(props) {
  return (
    <FollowCompoWrapper>
      <img src={grayLogo}/>
      <DefaultTxt> 
        {props.text}
      </DefaultTxt>
      <BackBtn/>
    </FollowCompoWrapper>
  )
}

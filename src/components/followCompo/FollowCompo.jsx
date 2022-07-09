import React from 'react'
import {FollowCompoWrapper,DefaultImg,DefaultTxt} from './followCompoStyle'
import grayLogo from '../../assets/gray-logo.svg'
import { MiddleBtn } from '../../components/button/Button'

export default function FollowCompo(props) {
  return (
    <FollowCompoWrapper>
      <img src={grayLogo}/>
      <DefaultTxt> 
        {props.textDefault}
      </DefaultTxt>
      <MiddleBtn textBtn={props.textBtn}/>
    </FollowCompoWrapper>
  )
}

import React from 'react'
import { FullLogoStyle } from './mainStyle'
import { MainStyle } from '../../style/commonLoginStyle'

function Start({loading}) {
  return (
    <>
      {
        (loading ==='true') &&
       <MainStyle>
         <FullLogoStyle />
       </MainStyle>
      }
    </>
  )
}

export default Start


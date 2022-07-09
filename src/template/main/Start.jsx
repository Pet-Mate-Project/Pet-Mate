import React from 'react'
import { FullLogoStyle } from './mainStyle'
import { PaddingMain } from '../../style/commonStyle'

function Start({loading}) {
  return (
    <>
      {
        (loading ==='true') &&
       <PaddingMain>
         <FullLogoStyle />
       </PaddingMain>
      }
    </>
  )
}

export default Start


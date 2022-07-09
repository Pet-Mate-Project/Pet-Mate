import React from 'react'
import { FullLogoStyle } from './mainStyle'
import { AllWrap, PaddingMain } from '../../style/commonStyle'

function Start({ loading }) {
  return (
    <AllWrap>
      {
        (loading === 'true') &&
        <PaddingMain>
          <FullLogoStyle />
        </PaddingMain>
      }
    </AllWrap>
  )
}

export default Start


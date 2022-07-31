import React from 'react'
import { FullLogoStyle, Wrapper } from './mainStyle'
import { AllWrap } from '../../style/commonStyle'

function Start({ loading }) {
  return (
    <>
      {
        (loading === 'true') &&
        <AllWrap>
          <Wrapper>
            <FullLogoStyle />
          </Wrapper>
        </AllWrap>
      }
    </>
  )
}

export default Start


import React from 'react'
import GlobalStyles from '../../style/globalStyle'
import { SetProfile, Wraper } from './profileStyle'
import iconProfile from "../../assets/basic-profile.svg"

export function Profile() {
  return (
    <>
      <GlobalStyles />
      <Wraper>
        <SetProfile
          src={iconProfile} alt='basic-profile' />
      </Wraper>
    </>
  )
}

export default Profile
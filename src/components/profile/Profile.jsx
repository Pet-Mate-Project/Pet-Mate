import React from 'react'
import { SetProfile, Wraper } from './profileStyle'
import iconProfile from "../../assets/basic-profile.svg"

export function Profile() {
  return (
    <>
      <Wraper>
        <SetProfile
          src={iconProfile} alt='basic-profile' />
      </Wraper>
    </>
  )
}

export default Profile
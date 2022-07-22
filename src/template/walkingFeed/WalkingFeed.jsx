import React from 'react'
import { ScrollMain } from '../../style/commonStyle'
import HomePost from '../homePost/HomePost'

export default function WalkingFeed({ followpost }) {
  return (
    <ScrollMain>
      <HomePost followpost={followpost} />
    </ScrollMain>
  )
}

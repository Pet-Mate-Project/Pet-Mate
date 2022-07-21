import React from 'react'
import { ScrollMain } from '../../style/commonStyle'
import HomePost from '../post/HomePost'

export default function WalkingFeed({ followpost }) {
  return (
    <ScrollMain>
      <HomePost followpost={followpost} />
    </ScrollMain>
  )
}

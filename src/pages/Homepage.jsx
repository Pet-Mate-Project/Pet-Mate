import React from 'react'
import {NavSearch} from '../components/navBack/NavBack'
import {NonPaddingMain} from '../style/commonStyle'
import logo from '../assets/gray-logo.svg'
export default function Homepage() {
  return (
    <NonPaddingMain>
      <NavSearch text={"친구구해요"} />
      <img src={logo}  />
    </NonPaddingMain>
  )
}

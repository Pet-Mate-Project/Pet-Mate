import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavTxtSearch } from '../../components/navBack/NavBack'
import TabMenu from '../../components/tabMenu/TabMenu'
import { User } from '../../components/user/User'
import { AllWrap } from '../../style/commonStyle'
import { FollowMain } from '../follow/followStyle'
import { Link } from 'react-router-dom'


function AccountSearch() {
  const [searchResult, setSearchResult] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (keyword) {
      const search = async () => {
        const URL = 'https://mandarin.api.weniv.co.kr';
        const token = JSON.parse(localStorage.getItem('token'))
        const searchReqPath = '/user/searchuser/?keyword=' + keyword;
        // keyword에 검색어 입력과 accountname, username을 검색할 수 있음

        const response = await axios.get(URL + searchReqPath, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-type': "application/json"
          }
        });
        setSearchResult(response.data)
        // console.log(searchReqPath)
      }
      search()
    }
    console.log(keyword)
  }, [keyword]);

  // console.log(searchResult)

  return (
    <AllWrap>
      <header>
        <NavTxtSearch placeholder={"계정 검색"} onChange={(e) => setKeyword(e.target.value)} ></NavTxtSearch>
      </header>

      <FollowMain>
        {searchResult.map((user) => {
          return <Link key={user._id} to='/userprofile' state={{ userId: user.accountname }}>
            <User userName={user.username} userId={user.accountname} />
          </Link>
        })}

      </FollowMain>
      <TabMenu />
    </AllWrap>
  )
}

export default AccountSearch
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { CorrectMessageStyle } from '../../components/errorMessage/errorStyle'
import { NavTxtSearch } from '../../components/navBack/NavBack'
import TabMenu from '../../components/tabMenu/TabMenu'
import { User } from '../../components/user/User'
import { AllWrap } from '../../style/commonStyle'
import { FollowMain } from '../follow/followStyle'


function AccountSearch() {
  const [searchResult, setSearchResult] = useState([])
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if(keyword) {
      const search = async () => {
        const URL = 'https://mandarin.api.weniv.co.kr';
        const token = JSON.parse(localStorage.getItem('token'))
        const searchReqPath = '/user/searchuser/?keyword='+keyword;
        // keyword에 검색어 입력과 accountname, username을 검색할 수 있음
      
        const response = await axios.get(URL + searchReqPath, {
          headers: {
            'Authorization' : `Bearer ${token}`,
            'Content-type' : "application/json"
          }
        });
        setSearchResult(response.data)
      }
      search()
    }
  }, [keyword]);

  return (
    <AllWrap>
      <header>
        <NavTxtSearch placeholder={"계정 검색"} onChange={(e) => setKeyword(e.target.value)} ></NavTxtSearch>
      </header>
      
      <FollowMain>
        {searchResult.map((user) => {
          return <User key={user._id} userName={user.username} userId={user.accountname} />
        })}
        {searchResult.length === 0 && keyword.length >= 1 && <CorrectMessageStyle>검색된 결과가 없습니다.</CorrectMessageStyle>}
        {/* 검색된 계정이 0개, 입력된 keyword가 1개 이상이면 출력 */}
      </FollowMain>
      <TabMenu />
    </AllWrap>
  )
}

export default AccountSearch
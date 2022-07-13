import React from 'react'
import HomePost  from '../post/HomePost'
import axios from 'axios'
export default function WalkingFeed() {



  async function getPost(){
 
    const URL = "https://mandarin.api.weniv.co.kr";
    const userInfo = JSON.parse(localStorage.getItem("userinfo")).user
    const token =userInfo.token;
    const accountname = userInfo.accountname;
    const loginReqPath = `/product/${accountname}`;

    const products = await axios(URL+loginReqPath,{
      headers: {
        "Authorization" : `Bearer ${token}`,
        "Content-type" : "application/json"
      },
    });
    console.log("products : ",products);
    return products;
  }
  getPost();
  return (
    <main>
      <HomePost props={getPost()} />
    </main>
  )
}

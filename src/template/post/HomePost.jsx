import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { selectAllPosts ,getPostStatus,AxiosPetInfo} from '../../reducers/getPetInfoSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'


export default function HomePost() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts).product;
  const postsStatus = useSelector(getPostStatus);
  console.log(posts);
  
  const URL = "https://mandarin.api.weniv.co.kr";
  const userInfo = JSON.parse(localStorage.getItem("userinfo")).user
  const accountname = userInfo.accountname;
  const loginReqPath = `/product/${accountname}/?limit=30`; //내게시글
  // const loginReqPath = `/product/?limit=100`;  // 전체게시글 100개

  useEffect(()=>{
    if(postsStatus ==='idle'){
      dispatch(AxiosPetInfo(URL+loginReqPath))
    }
  },[dispatch])

  return ( 
    <>
      {posts && posts.map((post)=>{
        return(   
          <PostStyle key={post.id}>
            <UserChat/>
            <PetImg src={"https://mandarin.api.weniv.co.kr/"+post.itemImage}></PetImg>
            <TxtBox>
              <TitleTxt>{post.itemName}</TitleTxt>
            </TxtBox>
            <ContentTxt>{post.link}</ContentTxt>
            <DateTxt>{post.updatedAt}</DateTxt>
          </PostStyle>
        )
      })}
    </>
  )
}

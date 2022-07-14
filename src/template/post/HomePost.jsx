import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { selectAllPosts ,getPostStatus,AxiosPetInfo} from '../../reducers/getPetInfoSlice'
import { useDispatch, useSelector } from 'react-redux';


export default function HomePost() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts).product;
  const postsStatus = useSelector(getPostStatus);
  console.log("템플릿",posts);

  return ( 
    <ul >
      {posts && posts.map((post)=>{
        return(   
          <PostStyle key={post.id}>
            <UserChat/>
            <PetImg src={"https://mandarin.api.weniv.co.kr/"+post.itemImage}></PetImg>
            <TxtBox>
              <TitleTxt>{post.itemName}</TitleTxt>
            </TxtBox>
            <ContentTxt>{post.link}</ContentTxt>
            <DateTxt>{post.updatedAt.substring(0,10)}</DateTxt>
          </PostStyle>
        )
      })}
    </ul>
  )
}

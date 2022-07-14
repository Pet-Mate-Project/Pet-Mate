import React from 'react'
import { ContentTxt, DateTxt, PetImg, PetInfoTxt, PostStyle, TitleTxt, TxtBox } from './homePostStyle'
import { UserChat } from '../../components/user/User'
import { selectAllPosts ,getPostStatus,AxiosPetInfo} from '../../reducers/getPetInfoSlice'
import { useDispatch, useSelector } from 'react-redux';


export default function HomePost() {
  const posts = useSelector(selectAllPosts).product;
  console.log("템플릿",posts);
  const defaultImg= "https://mandarin.api.weniv.co.kr/1657812669741.png"
  const marketImg = "http://146.56.183.55:5050/Ellipse.png"

  function imgCheck(post){
    if  (post.author.image===marketImg){
      return defaultImg; 
    }
    else{
      return post.author.image;
    }
  }
  return ( 
    <ul >
      {posts && posts.map((post)=>{
        return(   
          <PostStyle key={post.id}>
            <UserChat userName={post.author.username} userId={post.author.accountname} img={imgCheck(post)}/>
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

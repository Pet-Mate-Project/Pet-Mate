import React,{useState} from 'react'
import { AnimalBox } from '../../components/animalBox/AnimalBox'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MiniPostTitle, MiniPostWrap, SectionAllWrap } from './petPostStyle'
import Modal from '../../components/postModal/PostModal';
import { deleteActions } from '../../reducers/deletePostSlice'
import {useLocation} from 'react-router-dom'

export function PetPost() {
  const location = useLocation();
  const name = location.state?.userId;
  const myname = JSON.parse(localStorage.getItem("accountname"));
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts).product;
  const list = {'삭제':'','수정':'/','산책피드로 가기':'/homepage'};
  const alertTxt=['삭제하시겠어요?','삭제'];
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }
  //id값을 store에 저장하는 오는 함수
  const handleId = (petId)=>{
    dispatch(deleteActions.checkType("product"));
    dispatch(deleteActions.deleteId(petId));
    setModal(modal => !modal)
  }
  // console.log(name);
  // console.log(myname);
 

  return (
    <SectionAllWrap>
      <MiniPostTitle>산책가까?</MiniPostTitle>
      {
        (modal=== true )&&(name ===undefined) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />}
      <MiniPostWrap>
        {posts && posts.map((post) => {
          return (<>
            <AnimalBox key={post.id}
              src={`https://mandarin.api.weniv.co.kr/${post.itemImage}`}
              title={post.itemName} time={post.updatedAt.substring(0, 10)} onClick={() => handleId(post.id)} />
          </>
          )
        }
        )}
      </MiniPostWrap>
    </SectionAllWrap>
  )
}
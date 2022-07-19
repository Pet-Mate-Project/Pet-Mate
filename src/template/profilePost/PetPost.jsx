import React,{useState} from 'react'
import { AnimalBox } from '../../components/animalBox/AnimalBox'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { useSelector } from 'react-redux';
import { MiniPostTitle, MiniPostWrap, SectionAllWrap } from './petPostStyle'
import Modal from '../../components/postModal/PostModal';

export function PetPost() {
  const posts = useSelector(selectAllPosts).product;
  const list = {'삭제':'','수정':'/','산책피드로 가기':'/homepage'};
  const alertTxt=['삭제하시겠어요?','삭제'];
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false)
  }

  const toggleModal = () => {
    setModal(modal => !modal)
    console.log(modal);
  }
  
  return (
    <SectionAllWrap>
      <MiniPostTitle>산책가까?</MiniPostTitle>
      {
        modal=== true && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} />}
      <MiniPostWrap>
        {posts && posts.map((post) => {
          return (
            <AnimalBox key={post.id}
              src={`https://mandarin.api.weniv.co.kr/${post.itemImage}`}
              title={post.itemName} time={post.updatedAt.substring(0, 10)} onClick={toggleModal} />
          )
        }
        )}
      </MiniPostWrap>
    </SectionAllWrap>
  )
}
import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { deleteActions } from '../../reducers/deletePostSlice'
import { SelectId } from '../../reducers/deletePostSlice'
import { MiniPostTitle, MiniPostWrap, SectionAllWrap } from './petPostStyle'
import { AnimalBox } from '../../components/animalBox/AnimalBox'
import Modal from '../../components/postModal/PostModal';

export function PetPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const name = location.state?.userId;
  const posts = useSelector(selectAllPosts).product;
  const alertTxt = ['삭제하시겠어요?', '삭제'];
  const [modal, setModal] = useState(false);
  const postId = useSelector(SelectId);
  const list = { '삭제': '', '수정': `/postmodify/${postId}`, '상세페이지로 가기': `/walkingpostdetail/${postId}` };
  const closeModal = () => {
    setModal(false);
  }

  //id값을 store에 저장하는 오는 함수
  const handleId = (petId) => {
    dispatch(deleteActions.checkType("product"));
    dispatch(deleteActions.selectId(petId));
    setModal(modal => !modal);
  }

  return (
    <SectionAllWrap>
      <MiniPostTitle>산책가까?</MiniPostTitle>
      {
        (modal === true) && (name === undefined) &&
        <Modal
          list={list}
          alertTxt={alertTxt}
          closeModal={closeModal}
          setModal={setModal} />
      }
      <MiniPostWrap>
        {
          posts && posts.map((post) => {
            return (
              name === undefined
                ?
                <AnimalBox
                  key={post.id}
                  src={post.itemImage}
                  title={post.itemName}
                  time={post.updatedAt.substring(0, 10)}
                  onClick={() => handleId(post.id)} />
                :
                <Link to={'/walkingpostdetail/' + post.id} key={post.id}>
                  <AnimalBox
                    src={post.itemImage}
                    title={post.itemName}
                    time={post.updatedAt.substring(0, 10)}
                    onClick={() => handleId(post.id)} />
                </Link>
            )
          })
        }
      </MiniPostWrap>
    </SectionAllWrap>
  )
}
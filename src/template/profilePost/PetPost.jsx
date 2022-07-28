import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { deleteActions } from '../../reducers/deletePostSlice'
import { Link } from 'react-router-dom'
import { SelectId } from '../../reducers/deletePostSlice'

import { MiniPostTitle, MiniPostWrap, SectionAllWrap } from './petPostStyle'
import { AnimalBox } from '../../components/animalBox/AnimalBox'
import Modal from '../../components/postModal/PostModal';

export function PetPost() {
  const URL = "https://mandarin.api.weniv.co.kr";
  const location = useLocation();
  const name = location.state?.userId;
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts).product;
  const list = { '삭제': '', '수정': '/postmodify', '상세페이지로 가기': '' };
  const alertTxt = ['삭제하시겠어요?', '삭제'];
  const [modal, setModal] = useState(false);
  const postId = useSelector(SelectId);

  const closeModal = () => {
    setModal(false)
  }

  //id값을 store에 저장하는 오는 함수
  const handleId = (petId) => {
    dispatch(deleteActions.checkType("product"));
    dispatch(deleteActions.selectId(petId));
    setModal(modal => !modal);
  }

  function imgCheck(img) {
    if (img?.search(URL) !== -1 || img?.search('base64') !== -1 || img?.search('.svg') !== -1) {
      return img;
    } else if (img?.search(URL) === -1) {
      return `${URL}/${img}`;
    }
  }

  return (
    <SectionAllWrap>
      <MiniPostTitle>산책가까?</MiniPostTitle>
      {
        (modal === true) && (name === undefined) && (list['상세페이지로 가기'] = `/walkingpostdetail/${postId}`) && <Modal list={list} alertTxt={alertTxt} closeModal={closeModal} setModal={setModal} />
      }
      <MiniPostWrap>
        {
          posts && posts.map((post) => {
            return (
              name === undefined
                ?
                <AnimalBox key={post.id}
                  src={imgCheck(post.itemImage)}
                  title={post.itemName} time={post.updatedAt.substring(0, 10)} onClick={() => handleId(post.id)} />
                :
                <Link to={'/walkingpostdetail/' + post.id} key={post.id}>
                  <AnimalBox
                    src={imgCheck(post.itemImage)}
                    title={post.itemName} time={post.updatedAt.substring(0, 10)} onClick={() => handleId(post.id)} />
                </Link>
            )
          })
        }
      </MiniPostWrap>
    </SectionAllWrap>
  )
}
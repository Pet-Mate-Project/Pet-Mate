import React from 'react'
import { AnimalBox } from '../../components/animalBox/AnimalBox'
import { selectAllPosts } from '../../reducers/getPetInfoSlice'
import { useSelector } from 'react-redux';
import { MiniPostTitle, MiniPostWrap, SectionAllWrap } from './petPostStyle'

export function PetPost() {
  const posts = useSelector(selectAllPosts).product;

  return (
    <>
      <SectionAllWrap>

        <MiniPostTitle>산책가까?</MiniPostTitle>
        <MiniPostWrap>
          {posts && posts.map((post) => {
            return (
              <AnimalBox key={post.id}
                src={`https://mandarin.api.weniv.co.kr/${post.itemImage}`}
                title={post.itemName} time={post.updatedAt.substring(0, 10)} />
            )
          }
          )}
        </MiniPostWrap>
      </SectionAllWrap>
    </>
  )
}
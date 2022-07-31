import styled from 'styled-components';

export const AlbumWrap = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

export const AlbumImage = styled.img`
  width: 100%;
  height: 111px;
  object-fit: cover;

  @media screen and (min-width: 450px){
    height: 130px;
  }

  @media screen and (min-width: 600px){
    height: 181px;
  }
`
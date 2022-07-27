import styled from 'styled-components';
import { ScrollMain } from '../../style/commonStyle';

export const FollowMain = styled(ScrollMain)`
  display: flex;
  flex-direction: column;
  padding: 60px 19px 73px;
  gap: 16px;
  box-sizing: border-box;

  @media screen and (min-width:450px) {
    gap: 20px;
  }
`
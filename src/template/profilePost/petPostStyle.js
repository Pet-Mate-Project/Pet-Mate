import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const SectionAllWrap = styled.section`
  padding: 20px 0px 10px 16px;
  box-sizing: border-box;
  border-top:4px solid ${palette.lineColor};
  border-bottom: 4px solid ${palette.lineColor};
`

export const MiniPostTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 15px;
`

export const MiniPostWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
  padding-bottom: 10px;

  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #EdEded;
    border-radius: 10px;
  }
`
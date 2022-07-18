import styled from 'styled-components';
import { palette } from '../../style/globalColor';


export const SectionAllWrap = styled.section`
padding: 20px 0px 20px 16px;
box-sizing: border-box;
border-top:4px solid ${palette.lineColor};
border-bottom: 4px solid #E7EFFF;
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
::-webkit-scrollbar {
    display: none;
}
`
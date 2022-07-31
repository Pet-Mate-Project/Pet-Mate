import { memo } from 'react'
import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const Message = styled.p`
font-size: 14px;
color: ${palette.darkGray};
text-align: center;
margin-top: 12px;
margin-bottom: 20px;
`

export const MemoMessage = memo(Message);
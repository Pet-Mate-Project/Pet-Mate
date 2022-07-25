import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const ErrorMessageStyle = styled.p`
color: ${palette.textRedPoint};
font-weight: 400;
font-size: 12px;
`

export const CorrectMessageStyle = styled.p`
color: ${palette.textPoint};
font-weight: 400;
font-size: 12px;
`
export const SearchMessageStyle = styled.p`
margin-top: 15px;
color: ${palette.textPoint};
font-weight: 400;
font-size: 14px;
`

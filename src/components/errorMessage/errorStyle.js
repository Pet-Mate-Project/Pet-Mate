import styled from 'styled-components';
import { palette } from '../../style/globalColor';

export const ErrorMessageStyle = styled.p`
  color: ${palette.textRedPoint};
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 15px;

  @media screen and (min-width:450px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`

export const CorrectMessageStyle = styled.p`
  color: ${palette.textPoint};
  font-weight: 400;
  font-size: 12px;
  
  @media screen and (min-width:450px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`

export const SearchMessageStyle = styled.p`
  margin-top: 15px;
  color: ${palette.textPoint};
  font-weight: 400;
  font-size: 14px;

  @media screen and (min-width:450px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`

import { memo } from "react";
import styled from "styled-components";
import { palette } from '../../style/globalColor';
import { FormStyle } from '../../style/commonStyle';

export const SignUpLink = styled.button`
  display: block;
  margin: 21px auto 0;
  font-size: 12px;
  color: ${palette.darkGray};
  cursor: pointer;

  @media screen and (min-width:450px) {
    font-size: 15px;
  }
`
export const MemoSignUpLink = memo(SignUpLink)

export const LoginFormStyle = styled(FormStyle)`
  gap: 15px;
  margin: 40px 0;
`
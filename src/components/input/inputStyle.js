import styled, { css } from 'styled-components';
import { palette } from '../../style/globalColor';

export const LabelStyle = styled.label`
  display: block;
  font-size: 12px;
  color : ${palette.darkGray};

  @media screen and (min-width:450px) {
    font-size: 17px;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  margin-top: 10px;
  padding: 7px 4px;
  display: block;
  background-color: white;
  border: none; 
  border-bottom: 1px solid ${palette.lightGray};
  box-sizing: border-box;

  :hover{
    border-color:  ${palette.mainColor};
  }  
  :focus{
    outline-color: ${palette.mainColor};
  }
  ::placeholder{
    color: ${palette.lightGray};
    font-size: 14px;
  }
  ${(props) => {
    if (props.nohover) {
      return css`
      :hover{
        border-color:none;
      }
      `
    }
  }}
  @media screen and (min-width:450px) {
    padding: 10px 7px;
    margin-top: 15px;
  }
`;

export const TextAreaStyle = styled.textarea`
  height: 50px;
  resize: none;
  width: 100%;
  margin-top: 10px;
  padding-left: 4px;
  display: block;
  background-color: white;
  border: none; 
  border-bottom: 1px solid ${palette.lightGray};
  padding-bottom: 5px;
  :hover{
    border-color:  ${palette.mainColor};
  }  
  :focus{
    outline-color: ${palette.mainColor};
  }
  ::placeholder{
    color: ${palette.lightGray};
    font-size: 14px;
  }
  ${(props) => {
    if (props.nohover) {
      return css`
      :hover{
        border-color:none;
      }
      `
    }
  }}
`;

export const SearchStyle = styled.input`
  padding: 8px 12px;
  width:100%;
  margin:0 20px;
  background-color: ${palette.veryLigntGray};
  border: none;
  border-radius: 32px;
  font-size: 14px;
  box-sizing: border-box;
  ::placeholder{
    color: ${palette.middleGray};
    font-size: 14px;
  }
  :focus{
    outline-color: ${palette.mainColor};
  }

  ${(props) => {
    if (props.right) {
      return css`
        float:right;
    `}
  }}
`;


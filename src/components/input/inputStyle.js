import styled,{ css } from 'styled-components';

export const InputStyle = styled.input`
width: 100%;
margin-top: 10px;
display: block;
background-color: white;
border: none; 
border-bottom: 1px solid #DBDBDB;
padding-bottom: 5px;
:hover{
  border-color:  #1D57C1;
}  
:focus{
  outline-color: #1D57C1;
}
::placeholder{
  color: #DBDBDB;
  font-size: 14px;

}
`;

export const LabelStyle = styled.label`
display: block;
font-size: 12px;
color : #767676;
`;

export const SearchStyle = styled.input`
padding: 8px 12px;
width:316px;
background-color: #F2F2F2;
border: none;
border-radius: 32px;
font-size: 14px;
box-sizing: border-box;
::placeholder{
  color: #C4C4C4;
  font-size: 14px;
}
:focus{
  outline-color: #1D57C1;
}

${(props) => {
    if (props.right){
      return css`
      float:right;
  `}
  } 
}
`


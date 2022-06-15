
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const colors = {
    primary: "#fff",
    dark1:  "#3F3F3F",
    red: 'palevioletred'
}
export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;
`;

export const StyledTextInput = styled.input`
padding: 15px;
padding-left: 40px;
margin: 5px auto 10px auto;
display: block;
outline: 0;
transition: ease-in-out 0.3s;
${props => props.invalid && `background-color : ${colors.red};` }
`;

export const StyledButton = styled.button`
border: 0;
background-color: transparent;

`;

export const ErrorMsg = styled.div`
font-size: 11px;
color: ${colors.red};
margin-top: -5;
margin-bottom: 10px;
text-align: left;
font-size: 15px;
`;

export const ExtraText = styled.p`
font-size: ${(props) => props.size}px;
text-align: center;
color: ${props => props.color ? props.color : colors.dark1}
padding: 2px;
margin-top: 20px;
`;

export const StyledIcon = styled.p`
color: ${colors.dark1};
position: absolute;
font-size: ${props => props.size}; 
top: 40px;
${props => props.right && `right: 15px;`}
${props => !props.right && `left: 15px;`}
`; 

export const StyledTextLink = styled(Link)`
text-decoration: none;
color: ${colors.red};
transition: ease-in-out 0.3s;

&:hover {
  text-decoration: underline;
  letter-spacing: 2px;
  font-weight: bold;
}
`;
//copyright component
export const Copyright = styled.p`
padding: 5px;
margin: 90px 20px 20px;
text-align: center;
color: ${colors.dark1}
`;
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1.2rem;
  background: transparent;
  color: var(--mainWhite);
  cursor: pointer;
  border: 0.05rem solid var(--mainWhite);
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: var(--mainWhite);
    color: var(--mainVanilla);
    border-color: var(--mainVanilla);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonDark = styled.button`
	font-size: 1rem;
	background: var(--mainJelly);
	color: var(--mainWhite);
	cursor: pointer;
	border: 0.05rem solid var(--mainWhite);
	border-radius: 0.5rem;
	transition: all 0.5s ease-in-out;
	&:hover {
		background-color: var(--lightJelly);
		color: var(--mainWhite);
		border-color: var(--mainWhite);
	}
	&:focus {
		outline: none;
	}
`;



// to dynamically change a css property of styled component,
// give used container a prop name to target & pass property value with props.propName
// example --
// border-color: ${props => props.propName ? "var(--mainJelly)" : "mainWhite"}
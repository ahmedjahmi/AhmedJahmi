import styled from 'styled-components';

export const IconContainer = styled.i`
    font-size: 14vw;
    color: var(--mainWhite);
    text-shadow: var(--lightJelly) 1px 0 5px;
    transition: all 1s ease;

    &:hover {
        transition: all 1s ease;
        transform: scale(1.14);
        color: var(--lightJelly);
        text-shadow: var(mainJelly) 1px 0 2px;
    }

    &:focus {
    outline: none;
    }
`;
import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: none;

    font-family: 'Poppins', sans-serif, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    
    color: ${({theme, isActive}) => isActive ? theme.COLORS.light_100 : theme.COLORS.dark_100};

    border: none;
    font-size: 1.6rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
`;
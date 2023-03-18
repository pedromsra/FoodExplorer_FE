import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: fit-content;
    padding: 1.2rem 3.2rem;
    white-space: nowrap;

    background-color: ${({theme}) => theme.COLORS.tomato_100};
    color: ${({theme}) => theme.COLORS.light_100};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    
    border: 0;
    border-radius: .5rem;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
            filter: brightness(1)
        }
    }

`;
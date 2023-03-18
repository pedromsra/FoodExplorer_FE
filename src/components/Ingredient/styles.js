import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    height: fit-content;
    padding: .4rem .8rem;

    background: ${({theme}) => theme.COLORS.dark_1000};
    border: none;
    border-radius: .5rem;

    p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
        white-space: nowrap;

        color: ${({theme}) => theme.COLORS.light_100};
    }
`;
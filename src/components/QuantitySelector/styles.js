import styled from "styled-components";

export const Container = styled.section`
    display: ${({isAdmin}) => isAdmin ? "none" : "flex"};
    flex-direction: row;
    align-items: center;
    gap: 1.6rem;

    width: fit-content;
    height: 4.8rem;


    button {
        padding: 1.2rem 2.4rem;
        width: fit-content;
        height: 4.8rem;
    }

    #reduce, #increase {
        color: ${({theme}) => theme.COLORS.light_100};
        background: none;
        border: none;
        padding: 0;
    }

    input {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 160%;
        background: none;
        border: none;

        width: 2.2rem;

        -webkit-appearance: none;
        margin: 0;
        padding: 0;

        color: ${({theme}) => theme.COLORS.light_300};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    .selector{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.4rem;
    }
`;
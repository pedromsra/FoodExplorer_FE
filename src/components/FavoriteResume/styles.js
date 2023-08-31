import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 1.6rem 0;

    display: flex;
    flex-direction: row;
    gap: 1.3rem;
    align-items: center;

    img {
        width: 7.2rem;
        height: 7.2rem;

        border-radius: 50%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .title {
        font-family: 'Poppins', sans-serif, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 160%;

        border: none;
        background: none;

        color: ${({theme}) => theme.COLORS.light_300};
    }

    button {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 160%;
        color: ${({theme}) => theme.COLORS.tomato_400}
    }

`;
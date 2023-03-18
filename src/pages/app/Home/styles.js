import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;

    main {
        grid-area: main;
        width: 100%;
        padding: 16.4rem 12.4rem 4.8rem 12.4rem;

        display: grid;
        grid-template-rows: 27.9rem auto;
        grid-template-areas:
        "image"
        "meals"
        ;
    }
`;

export const Image = styled.div`
    grid-area: image;
    width: 100%;
    min-width: fit-content;
    height: 26rem;
    background: ${({theme}) => theme.COLORS.gradients_200};
    padding: clamp(4rem,2rem + 4vw,9rem) clamp(4rem,2rem + 4vw,9rem) clamp(4rem,2rem + 4vw,9rem) 58.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;


    h2 {
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
        white-space: nowrap;
    }

    p {
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
        white-space: nowrap;
    }

    svg {
        width: 1.2rem;
        position: relative;
        left: -65.6rem;
        bottom: 6.2rem;
        object-fit: none;
        overflow: visible;
    }

`;

export const Meals = styled.div`
    width: 100%;
    overflow: auto;
    grid-area: meals;
`;
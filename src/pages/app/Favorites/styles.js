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

    main{
        grid-area: main;

        padding: 3.4rem 12.5rem;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        align-items: flex-start;
    }

    .favorites {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4.8rem;
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
    }
`;
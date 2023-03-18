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
        padding: 2.5rem 12.2rem 4.8rem 12.2rem;

        
        
    }

    .back {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        margin-bottom: 4.2rem;

        color: ${({theme}) => theme.COLORS.light_300};
    }

    .meal {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4.8rem;

    }

    img {
        width: 39rem;
        height: 39rem;
        border-radius: 50%;
    }

    .mealDescription {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2.4rem;

        > h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 4rem;
            line-height: 140%;

            ${({theme}) => theme.COLORS.light_300};
        }

        > p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 2.4rem;
            line-height: 140%;
        }

        .ingredients {
            display: flex;
            flex-direction: row;
            gap: 1.2rem;
            margin-bottom: 2.4rem;
        }
    }


`;

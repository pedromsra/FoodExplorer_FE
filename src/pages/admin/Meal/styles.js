import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
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
        width: 100vw;
        padding: 1.6rem 5.6rem 3.2rem 5.6rem;

        
        @media (max-width:800px) {
            .buttonEdit {
                width: 100%;
            }

            button {
                width: 100%;
            }
        }
    }

    .back {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        margin-bottom: 4.2rem;

        color: ${({theme}) => theme.COLORS.light_300};

        @media (max-width: 800px) {
            margin-bottom: 1.6rem;
        }
    }

    .meal {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4.8rem;

        @media (max-width: 800px){
            flex-direction: column;
            gap: 1.6rem;
        }
    }

    img {
        width: clamp(26.4rem, 20rem + 10vw, 39rem);
        height: clamp(26.4rem, 20rem + 10vw, 39rem);
        border-radius: 50%;

    }

    .mealDescription {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 2.4rem;

        @media (max-width: 800px) {
            justify-content: center;
            align-items: center;
        }

        > h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: clamp(2.7rem, 0rem + 5vw, 4rem);
            line-height: 140%;

            ${({theme}) => theme.COLORS.light_300};

            @media (max-width: 800px) {
                text-align: center;
            }@media (max-width: 800px) {
                text-align: center;
            }@media (max-width: 800px) {
                text-align: center;
            }
        }

        > p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: clamp(1.6rem, 0rem + 3.5vw, 2.4rem);
            line-height: 140%;

            @media (max-width: 800px) {
                text-align: center;
            }
        }

        .ingredients {
            display: flex;
            flex-direction: row;
            gap: 1.2rem;
            flex-wrap: wrap;
            margin-bottom: 2.4rem;

            @media(max-width: 800px) {
                gap: 2.4rem;
                justify-content: center;

            }
        }
    }


`;

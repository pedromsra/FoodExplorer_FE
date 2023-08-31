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

    @media (max-width: 800px) {
        main {
            padding: 4.8rem 1.6rem 1.6rem 3.2rem;
            grid-template-rows: 10rem auto;
        }
    }
`;

export const Image = styled.div`
    grid-area: image;
    width: 100%;
    min-width: fit-content;
    height: 26rem;
    background: ${({theme}) => theme.COLORS.gradients_200};
    padding: clamp(4rem,2rem + 4vw,9rem) clamp(4rem,2rem + 4vw,9rem) clamp(4rem,2rem + 4vw,9rem) 60rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    h2 {
        
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: clamp(2rem, 2rem + 1vw, 4rem);
        line-height: 140%;
        white-space: nowrap;
    }

    p {
        
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
    }

    .desktopImage {
        width: 1.2rem;
        position: relative;
        left: -65.6rem;
        bottom: 6.2rem;
        object-fit: none;
        overflow: visible;
    }
    .mobileImage{
        display: none;
    }


    @media (max-width: 800px) {
        padding: 3.6rem .8rem 2.2rem 15.3rem;
        height: 12rem;
        width: 100%;

        .desktopImage{
            display: none;
        }

        .mobileImage{
            display: block;
            position: absolute;
            left: -3rem;
            bottom: 0;
            img {
                width: 19.1rem;
                height: 14.9rem;
                object-fit: cover;
                object-position: top;
            }
        }

        h2 {
            font-size: 1.8rem;
            line-height: 140%;
        }

        p{
            font-size: 1.2rem;
            line-height: 140%;
            white-space: normal;
        }
    }

`;

export const Meals = styled.div`
    overflow: auto;
    grid-area: meals;
`;
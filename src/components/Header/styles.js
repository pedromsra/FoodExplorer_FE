import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 10.4rem;
    width: 100vw;

    padding: 2.8rem clamp(2.8rem, 1.5rem + 4vw, 12.5rem);
    display: flex;
    align-items: center;
    gap: 3.2rem;

    background-color: ${({theme}) => theme.COLORS.dark_600};


    .logo {
        color: ${({theme}) => theme.COLORS.cake_200};
    }

    .slider {
        color: ${({theme}) => theme.COLORS.light_100};
        @media (min-width: 800px) {
            display: none;
        }
    }

    > div:nth-child(2) {
        width: fit-content;
        white-space: nowrap;
        display: flex;
        
        gap: 1rem;

        h3 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 2.8rem;
        }

        .logoName {
            position: relative;
            
            
            > p {
                position: absolute;
                right: 0;
                top: 2.4rem;

                vertical-align: baseline;
                

                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 160%;

                color: ${({theme}) => theme.COLORS.cake_100}
            }

            @media (max-width: 800px) {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: .8rem;

                p {
                    position: unset;
                    vertical-align: baseline;
                }
            }
        }
    }

    > div:nth-child(3) {
        
        height: 4.8rem;

        svg {
            margin-left: clamp(1rem, 1rem + 1vw, 5rem);
        }
    }

    button {
        width: fit-content;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.light_100};
    }

    .menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        width: 100%;

        height: 100vh;

        display: flex;
        flex-direction: column;

        background-color: ${({theme}) => theme.COLORS.dark_400};

        .head {
            width: 100%;
            height: 11.4rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .2rem;
            padding: 6rem 2.4rem 2.4rem;
            background-color: ${({theme}) => theme.COLORS.dark_700};

            > svg{
                padding: 0;
                margin: 0;
                position: relative;
            }

            h3 {
                color: ${({theme}) => theme.COLORS.light_100};
                font-family: Roboto;
                font-size: 2rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }

        input {
            height: 4.8rem;
        }

        .options {
            padding: 3.6rem 2.8rem;

            display: flex;
            flex-direction: column;
            gap: 3.6rem;
        }

        .navigationOptions {
            
            button {
                font-family: Poppins;
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 140%;
                padding: 1rem;
                border-bottom: 1px solid ${({theme}) => theme.COLORS.dark_1000};
                width: 100%;

                font-family: Poppins;
                font-size: 2.4rem;
                font-style: normal;
                font-weight: 300;
                line-height: 140%;
            }
        }
        
    }

    .mobileNewOrder {
        @media (min-width: 800px) {
            display: none;
        }

        position: relative;

        display: flex;
        flex-direction: row;
        align-items: center;

        p {
            width: 2rem;
            height: 2rem;

            text-align: center;
            
            position: absolute;
            right: -2px;
            top: 2px;

            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.tomato_100};
        }
    }

    @media (max-width: 800px) {
        height: 11.4rem;
        gap: clamp(1rem, 0rem + 10vw, 4rem);
        .desktop {
            display: none;
        }
    }
`;
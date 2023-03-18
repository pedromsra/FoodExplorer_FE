import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 10.4rem;
    width: 100%;

    padding: 2.8rem clamp(2.8rem, 1.8rem + 4vw, 12.5rem);
    display: flex;
    align-items: center;
    gap: 3.2rem;

    background-color: ${({theme}) => theme.COLORS.dark_600};

    .logo {
        color: ${({theme}) => theme.COLORS.cake_200};
    }

    > div:first-child {
        width: fit-content;
        white-space: nowrap;
        display: flex;
        
        gap: 1rem;

        h3 {
            font-family: 'Roboto';
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

                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 1.2rem;
                line-height: 160%;

                color: ${({theme}) => theme.COLORS.cake_100}
            }
        }
    }

    > div:nth-child(2) {
        
        height: 4.8rem;

        svg {
            margin-left: .4rem;
        }
    }

    button {
        width: fit-content;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.light_100};
    }
`;
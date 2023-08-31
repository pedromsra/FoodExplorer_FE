import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: clamp(5rem, 2.5rem + 3vw, 10.8rem);
    
    display: flex;
    flex-direction: row;
    align-items: center;

    .logoIcon {
        color: ${({theme}) => theme.COLORS.cake_200};
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: clamp(2.6rem, 2rem + 1.8vw, 4.2rem);
        line-height: 4.9rem;
    }

    .logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    @media (max-width: 800px) {
        padding-top: clamp(10rem, 8rem + 10vw, 15.8rem);
        flex-direction: column;
        gap: 7.3rem;

        h1 {
            line-height: 4.4rem;
        }

        .logoIcon {
            width: 4.3rem;
            height: 4.3rem;
        }
    }
`;

export const Form = styled.div`
    width: clamp(48rem, 24rem + 24vw, 64rem);
    padding: clamp(3rem, 1.5rem + 2vw, 6.4rem);
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.dark_700};
    border-radius: 1.6rem;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
    }

    
    p {
        color: ${({theme}) => theme.COLORS.light_400};
        margin-bottom: 8px;
    }

    div {
        width: 100%;
    }

    @media (max-width: 800px) {
        width: 100%;
        background: none;
        padding: 0;

        .login {
            display: none;
        }
    }

`;
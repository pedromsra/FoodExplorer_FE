import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: clamp(5rem, 2.5rem + 3vw, 10.8rem);

    display: flex;
    flex-direction: row;
    align-items: center;

    .logo {
        color: ${({theme}) => theme.COLORS.cake_200};
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 4.2rem;
        line-height: 4.9rem;
    }

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;

export const Form = styled.div`
    max-width: clamp(36rem, 18rem + 14vw, 47.6rem);
    padding: clamp(3rem, 1.5rem + 2vw, 6.4rem);
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, .8rem + 1vw, 3.2rem);
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.dark_700};
    border-radius: 1.6rem;

    h1 {
        font-family: 'Poppins';
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

    .signin, .admin {
        width: fit-content;
    }

    .footerButtons {
        display: flex;
        justify-content: space-between;
    }

`;

export const AdminPassword = styled.div`
    display: ${({showInput}) => showInput ? "auto" : "none"};
`;
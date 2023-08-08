import styled from "styled-components";

export const Container = styled.div`
    width: 30.4rem;
    height: fit-content;
    background: ${({theme}) => theme.COLORS.dark_200};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({isAdmin}) => isAdmin ? "6.65rem 2.4rem" : "2.4rem"};
    gap: 1.5rem;
    isolation: isolate;

    border: 1px solid #000204;
    border-radius: 8px;

    position: relative;

    img {
        width: 17.6rem;
        height: 17.6rem;
        border-radius: 50%;
        
        @media (max-width: 800px){
            width: 8.8rem;
            height: 8.8rem;
        }
    }

    h3, .detailButton {
        max-width: 25.6rem;

        overflow: hidden;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 140%;

        text-align: center;

        border: none;
        background: none;

        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${({theme}) => theme.COLORS.light_300};

        @media (max-width: 800px){
                max-width: 16.5rem;
        }

        .title {
            max-width: 24rem;
            height: fit-content;
            white-space: nowrap;
            overflow: hidden;

            @media (max-width: 800px){
                max-width: 18rem;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 2.4rem;
            }
        }
    }

    p {
        width: 25.6rem;
        height: 4.4rem;
        overflow: hidden;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;

        text-align: center;

        color: ${({theme}) => theme.COLORS.light_400}
    }

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 3.2rem;
        line-height: 160%;

        text-align: center;

        color: ${({theme}) => theme.COLORS.cake_100};

        @media(max-width:800px) {
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; 
        }
    }

    button {
        padding: 1.2rem 2.4rem;
        width: fit-content;
        height: 4.8rem;
    }

    #reduce, #increase {
        color: ${({theme}) => theme.COLORS.light_100};
        background: none;
        border: none;
        padding: 0;

        height: fit-content;
    }

    input {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 160%;
        background: none;
        border: none;

        width: 2.2rem;

        -webkit-appearance: none;
        margin: 0;
        padding: 0;

        color: ${({theme}) => theme.COLORS.light_300};

        @media (max-width: 800px){
            font-family: Roboto;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    .selector{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.4rem;

        width: 100%;

        >div {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1.4rem;
        }
        @media (max-width: 800px) {
            flex-direction: column;

            .addButton {
                width: 100%;
                height: 3.2rem;
            }
        }
    }

    @media (max-width: 800px) {
        width: 21rem;
        max-width: 21rem;
        min-width: 21rem;
        height: 29.2rem;
        gap: 1.2rem;
        p {
            display: none;
        }
    }

`;

export const LikeButton = styled.button`

    position: absolute;
    right: 1.8rem;
    top: 1.6rem;
    object-fit: none;
    overflow: visible;
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.light_100};

    @media (max-width: 800px){
        right: -1rem;
        top: 0;

        >svg {
            width: 3rem;
            height: 3rem;
        }
    }

`;
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

        width: 100%;

        padding: 3.4rem 12.5rem;

        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        align-items: flex-start;
    }

    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;
    }

    .historic {
        width: 100%;
        border: 1px solid ${({theme}) => theme.COLORS.dark_1000};
        border-radius: .8rem .8rem 0 0;
    }

    th {
        padding: 2.1rem 2.4rem;

        text-align: start;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 160%;

        color: ${({theme}) => theme.COLORS.light_300};

        border: 1px solid ${({theme}) => theme.COLORS.dark_1000};

        &:nth-child(1) {
            width: 15.1rem;
            border-radius: .7rem 0 0 0;
        }
        &:nth-child(2) {
            width: 15.1rem;
        }
        &:nth-child(4) {
            width: 15.1rem;
            border-radius: 0 .7rem 0 0;
        }
    }


    td{
        padding: 2.1rem 2.4rem;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 160%;

        color: ${({theme}) => theme.COLORS.light_400};

        vertical-align: middle;

        border: 1px solid ${({theme}) => theme.COLORS.dark_1000};

        > .orderStatus {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .8rem;
            
        }
    
        &:nth-child(1), &:nth-child(2), &:nth-child(4) {
            width: 15.1rem;
        }
    }
`;

export const Tr = styled.tr`

    text-transform: capitalize;
    
    cursor: pointer;

    .update {
        text-transform: lowercase;
    }

    .indication {
        width: .8rem;
        height: .8rem;
        border-radius: 50%;

        background-color: ${({theme, orderStatus}) => {
            if(orderStatus === "created"){
                return theme.COLORS.tomato_300
            }

            if(orderStatus === "preparing") {
                return theme.COLORS.carrot_100
            }

            if(orderStatus === "delivered") {
                return theme.COLORS.mint_100
            }
        }};
    }
`;
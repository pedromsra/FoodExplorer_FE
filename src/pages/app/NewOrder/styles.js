import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header"
        "main"
        "footer"
    ;

    main {
        grid-area: main;
        overflow: hidden;
        width: 100%;

        padding: 3.4rem 12.5rem;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 7.5rem
    }

    .order {
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .total {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 2rem;
            line-height: 160%;
    
            color: ${({theme}) => theme.COLORS.light_300};
        }
    }

    .payment {

        display: flex;
        flex-direction: column;
        gap: 3.2rem;

        .paymentArea{
            width: 100%;
            display: grid;
            grid-template-rows: 1fr auto;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
            "pix credit"
            "canvas canvas"
            ;
        }

        .pix {
            grid-area: pix;
            border-radius: .8rem 0 0 0;
            >button {
                text-transform: uppercase;
            }
        }

        .credit {
            grid-area: credit;
            border-radius: 0 .8rem 0 0;
        }

        .pix, .credit {
            padding: 2.85rem;

            display: flex;
            justify-content: center;

            border: .1rem solid ${({theme}) => theme.COLORS.light_600};

            > button {
                display: flex;
                flex-direction: row;
                gap: 1.4rem;
                align-items: center;
                justify-content: center;
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 100%;

                background: none;
                border: none;
                color: ${({theme}) => theme.COLORS.light_100};
            }

            img {
                width: 2.4rem;
                height: 2.4rem;
            }
        }
    }
`;

export const OrderItems = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-right: 4rem;
    margin: 3.2rem 0 1.6rem 0;
`;

export const PaymentMethods = styled.div`

    grid-area: canvas;
    padding: 5.9rem;

    width: 100%;
    max-width: 53rem;

    border-radius: 0 0 .8rem .8rem;
    border: .1rem solid ${({theme}) => theme.COLORS.light_600};

    form {
        display: ${({paymentMethod}) => paymentMethod === "credit" ? "flex" : "none"};

        flex-direction: column;
        gap: 3.7rem;

        .cardInfos{
            display: flex;
            flex-direction: row;
            gap: 1.7rem;
        }

        .number {
            display: flex;
            flex-direction: column;
            gap: .8rem;
        }

        .cvc, .vality{
            max-width: 100%;

            display: flex;
            flex-direction: column;
            gap: .8rem;
        }

        img {
            width: 20rem;
            height: 20rem;
        }
    }

    .PIXMethod {
        display: ${({paymentMethod}) => paymentMethod === "pix" ? "flex" : "none"};
        padding: 0 20rem;
        justify-content: center;
    }
`;
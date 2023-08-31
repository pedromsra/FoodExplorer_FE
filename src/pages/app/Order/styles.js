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
            font-family: 'Poppins', sans-serif;
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
                font-family: 'Roboto', sans-serif;
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

export const OrderStatus = styled.div`
    display: ${({isPayed}) => isPayed ? "auto" : "none"};

    grid-area: canvas;
    padding: 6.9rem 9.1rem;

    width: 100%;
    max-width: 53rem;

    border-radius: 0 0 .8rem .8rem;
    border: .1rem solid ${({theme}) => theme.COLORS.light_600};

    .created {
        display: ${({isPayed}) => isPayed === "created" ? "flex" : "none"};
    }

    .preparing {
        display: ${({isPayed}) => isPayed === "preparing" ? "flex" : "none"};
    }

    .delivered {
        display: ${({isPayed}) => isPayed === "delivered" ? "flex" : "none"};
    }

    .created, .preparing, .delivered {
        

        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3.7rem;

        white-space: nowrap;

        color: ${({theme}) => theme.COLORS.light_600};

        .message {
            width: 348px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 2.8rem;
            text-align: center;
        }

    }

`;
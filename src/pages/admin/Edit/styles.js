import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header"
    "main"
    "footer"
    ;

    main {
        grid-area: main;
        
        width: 100%;

        padding: 4rem 12.5rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        color: ${({theme}) => theme.COLORS.light_300};
    }

    .back {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 140%;

        color: ${({theme}) => theme.COLORS.light_300}
    }
    
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;

        margin: 2.4rem 0 3.2rem;
    }


`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-end;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        color: ${({theme}) => theme.COLORS.light_400};
    }

    .infos {
        width: 100%;
        display: grid;
        gap: 3.2rem;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "image name type"
            "ingredients ingredients price"
            "description description description"
        ;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }

    .image {
        grid-area: image;
        
        > label {
            width: 100%;
            height: 4.8rem;

            display: flex;
            flex-direction: row;
            gap: .8rem;
            align-items: center;
            justify-content: center;

            padding: 1.2rem 3.2rem;

            border-radius: .8rem;
            background: ${({theme}) => theme.COLORS.dark_800};

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;

            color: ${({theme}) => theme.COLORS.light_100};

            cursor: pointer;

            transition: filter .3s ease-in-out;

            &:hover{
                filter: brightness(.9);
            }

            .uploadLabel {
                white-space: nowrap;
            }

            input {
                display: none;
            }
        }
    }

    .name {
        grid-area: name;
        input {
            height: 4.8rem;
        }
    }

    .type {
        grid-area: type;

        select {
            width: 100%;
            height: 4.8rem;
    
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 160%;

            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;

            background-image: url("data:image/svg+xml,%3Csvg width='15.75' height='9' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%239C98A6' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
            background-repeat: no-repeat;
            background-position: right 24px top 50%;
            background-color: ${({theme}) => theme.COLORS.dark_800};
            
            
            padding: 1.3rem 1.6rem;
            
            border-radius: .8rem;
            border: none;
            
            color: ${({theme}) => theme.COLORS.light_400};
        }
    }

    .ingredients {
        grid-area: ingredients;
        
        .ingredientsContainer {
            height: fit-content;

            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 1.6rem;

            padding: .8rem;

            border-radius: .8rem;
            background: ${({theme}) => theme.COLORS.dark_800};
        }
    }

    .price {
        grid-area: price;

        input {
            height: 4.8rem;
        }
    }

    .description {
        grid-area: description;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3.2rem;
    }

    .saveButton {
        width: fit-content;
        padding: 1.2rem 2.4rem;
        background-color: ${({theme}) => theme.COLORS.tomato_400};
    }

    .deleteButton {
        width: fit-content;
        padding: 1.2rem 2.4rem;
        background-color: ${({theme}) => theme.COLORS.dark_800};
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;

    background-color: ${({theme, isHeader}) => isHeader ? theme.COLORS.dark_900 : theme.COLORS.dark_800};
    color: ${({theme}) => theme.COLORS.light_500};

    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;
        padding: ${({isHeader}) => isHeader ? "1.6rem 1.4rem" : "2rem"};

        color: ${({theme}) => theme.COLORS.light_300};
        background: transparent;
        border: 0;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.light_500}
        }

    }

    svg {
        margin-left: 2rem;
    }

    .icon {
        display: flex;
        align-items: center;
    }
`;
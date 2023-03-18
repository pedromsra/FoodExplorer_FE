import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.light_600};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ?  `.1rem dashed ${theme.COLORS.light_600}` : "none"};
    border-radius: .8rem;

    padding: .8rem 1.6rem;
    width: 14rem;
    

    > button {
        border: none;
        background: none;
        height: 1.6rem;
    }

    > input {
        height: fit-content; 
        width: fit-content;
        overflow: hidden;

        padding-right: .8rem;

        color: ${({theme}) => theme.COLORS.light_100};
        background: transparent;

        border: none;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.light_500};
        }
    }

    svg {
        width: 1.372rem;
        height: 1.372rem;

        color: ${({theme, isNew}) => isNew ? theme.COLORS.light_500 : theme.COLORS.light_100};
    }
`;
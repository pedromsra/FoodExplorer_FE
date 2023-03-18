import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;

    background-color: ${({theme}) => theme.COLORS.dark_800};
    color: ${({theme}) => theme.COLORS.light_100};

    border: none;

    resize: none;

    margin-bottom: .8rem;
    border-radius: .8rem;
    padding: 2rem;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.light_500};
    }
`;
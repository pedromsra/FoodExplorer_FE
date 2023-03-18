import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2.45rem 12.3rem;

    height: fit-content;
    width: 100%;

    background-color: ${({theme}) => theme.COLORS.dark_600};
    color: ${({theme}) => theme.COLORS.light_200};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 160%;

    > div {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: ${({theme}) => theme.COLORS.light_700};

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        white-space: nowrap;

    }
`;
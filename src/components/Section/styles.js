import styled from "styled-components";

export const Container = styled.section`
    margin-top: 4.8rem;
    position: relative;

    .cover {
        padding: 0px 0px;
        position: relative;
        display: flex;
        flex-direction: row;
    }
    
    .childrensContainer {
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
        flex-direction: row;
        gap: 2.7rem;
        scroll-behavior: smooth;
    }

    .left {
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        border: none;
        background: none;

        > svg {
            color: ${({theme}) => theme.COLORS.light_100};
            margin-left: 3rem;
        }
    }

    .right {
        position: absolute;
        right: 0;
        top: 50%;
        z-index: 2;
        transform: translateY(-50%);
        border: none;
        background: none;

        > svg {
            color: ${({theme}) => theme.COLORS.light_100};
            margin-right: 3rem;
        }
    }
    
    .gradientLeft {
        position: absolute;
        left: 0;
        z-index: 1;
        width: 28.5rem;
        height: 100%;
        background: ${({theme}) => theme.COLORS.gradients_300};
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .gradientRight {
        position: absolute;
        right: 0;
        z-index: 1;
        width: 28.5rem;
        height: 100%;
        background: ${({theme}) => theme.COLORS.gradients_100};
    }


    > h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 140%;

        margin-top: .1rem;
        margin-bottom: 2.3rem;

        color: ${({ theme }) => theme.COLORS.light_300};
        font-size: 2rem;
        font-weight: 400;
    }
`;
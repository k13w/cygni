import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    height: 100vh;
    background-image: url("imgs/bg7.png");
    background-size: cover;
    background-position: center;
`;

export const Header = styled.div`
    display: flex;
    margin-top: 134px;
    align-items: center;
    flex-direction: column;
    img {
        min-width: 250px;
        max-width: 250px;
        margin-bottom: 22px;
    }
    h1 {
        font-size: 40px;
        color: #FFF;
    }
    h4 {
        font-size: 18px;
        color: #FFF;
    }
`;

export const Content = styled.div`
    display: flex;
    margin-top: 390px;
    flex-direction: column;
    h4 {
        text-align: center;
        margin: 60px;
        font-size: 18px;
        color: #FFF;
    }
`;


export const Footer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 100px;
    margin-right: 14px;
    flex-direction: column;
    margin-left: 6px;
    h4 {
        justify-content: flex-end;
        font-size: 13px;
        color: #FFF;
    }
`;

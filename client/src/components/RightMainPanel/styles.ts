import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
`;

export const Header = styled.div`
    h1 {
        font-size: 60px;
        color: #412E68;
        text-align: center;
        margin-top: 160px;
    }
    h4 {
        font-size: 20px;
        color: #412E68;
        text-align: center;
        margin-top: 10px;
    }
`;

export const Panel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    input {
        padding: 10px 280px 10px 10px;
        border-radius: 16px;
        border: 1px solid #412E68;
        margin: 10px;
    }
    h6 {
        font-size: 16px;
        margin-left: 320px;
    }
    button {
        margin-left: 120px;
        margin-top: 40px;
        text-align: center;
        width: 260px;
        height: 44px;
        background-color: #412E68;
        border-radius: 26px;
        border: none;
        color: white;
        font-size: 22px;
    }
`;


export const FormLogin = styled.form`
`;
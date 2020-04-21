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
        margin-left: 110px;
        margin-top: 10px;
    }
`;

export const Panel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    input {
        min-width: 200px;
        font-size: 12pt;
        padding: 12px 280px 12px 12px;
        border-radius: 10px;
        border: 1px solid #412E68;
        margin: 10px;
        color: #412E68;
    }
    input:focus {
        border: 2px solid #412E68;
    }
    h6 {
        font-size: 16px;
        margin-left: 362px;
        color: #412E68;
        font-family: 'Economica', sans-serif;
    }
    button {    
        width: 200px;
        height: 44px;
        text-decoration: none;
        margin-left: 12px;
        margin-top: 10px;
        text-align: center;
        background-color: #412E68;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: 1em;
        cursor: pointer;
    }
    button:hover {
        opacity: 0.8;
    }
`;

export const NewUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    h4 {
        text-align: center;
    }
    button {
        width: 260px;
        height: 44px;
        text-decoration: none;
        margin-left: 12px;
        margin-top: 16px;
        text-align: center;
        background-color: none;
        border-radius: 10px;
        border: 1px solid #412E68;
        color: black;
        font-size: 1em;
        cursor: pointer;
    }
    button:hover {
        background-color: #412E68;
        color: white;
        border: none;
        outline: none;
    }
`;
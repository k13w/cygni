import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 4vw;
    background-color: #0E1428;
    border-bottom: 3px solid #412E68;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 70px;
        height: 60px;
        margin-left: 20px;
    }
    h1 {
        font-family: 'Economica', sans-serif;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;

export const BoxUser = styled.div`
    display: flex;
    background-color: #0E1428;
    align-items: center;
    cursor: pointer;
    h4 {
        font-family: 'Economica', sans-serif;
        color: #FFFFFF;
        margin-right: 15px;
    }
    img {
        width: 40px;
        height: 40px;
        margin-right: 30px;
        border-radius: 50%;
    }
`;
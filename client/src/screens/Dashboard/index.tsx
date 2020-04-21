import React from 'react';
import Sidenav from '../../components/UI/Sidenav';
import Content from '../../components/UI/Content';
import { Container } from './styles';
import Header from '../../components/UI/Header';

const Dashboard = () => {
    return (
        <>
        <Header />
        <Container>
            <Sidenav />
            <Content />
        </Container>
        </>
    )
}

export default Dashboard;
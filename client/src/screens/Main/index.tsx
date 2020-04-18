import React from 'react';
import { Container } from './styles';
import LeftMainPanel from '../../components/LeftMainPanel';
import RightMainPanel from '../../components/RightMainPanel';

const Main: React.FC = () => {
    return (
        <Container>
            <LeftMainPanel />
            <RightMainPanel />
        </Container>
    )
}

export default Main;
import React from 'react';
import { Container, Panel } from './styles';

const Sidenav: React.FC = () => {
    return (
        <Container>
            <Panel>
                <h2 className="fonter">My drive</h2>
                <h2 className="fonter">Shared with me</h2>
                <h2 className="fonter">Settings</h2>
            </Panel>
        </Container>
    )
}

export default Sidenav;
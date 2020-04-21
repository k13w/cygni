import React from 'react';
import { Container, BoxUser, Logo } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
                <Logo>
                    <h1>Cygni</h1>
                </Logo>
                <BoxUser>
                    <h4 className="user-font">Gilmar Silva</h4>
                    <img src="https://avatars0.githubusercontent.com/u/13907472?s=460&v=4" alt="perfil" />
                </BoxUser>
        </Container>
    )
}

export default Header;
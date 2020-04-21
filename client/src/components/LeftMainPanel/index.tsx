import React from 'react';
import { Container, Header, Content, Footer } from './styles';

const LeftMainPanel: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Cygni cloud storage</h1>
        <h4>All file types in one place.</h4>
      </Header>
      <Content>
        <h4 className="footer">Safely store and share your files
        Get highly secure cloud storage at massive scale with an Cygni free account.
        </h4>
      </Content>
      <Footer>
        <h4>© cygni.com.br, Inc. ou suas afiliadas </h4>
      </Footer>
    </Container>
  );
};

export default LeftMainPanel;

import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '@rocketseat/unform';
import { Container, Header, Panel  } from './styles';

import { singInRequest } from '../../store/modules/auth/actions';

import { User } from '../../store/types';

const RightMainPanel: React.FC = () => {
  const dispatch = useDispatch();

  const handleSingIn: SubmitHandler<User> = (email) => {
    dispatch(singInRequest(email));
  };

  return (
    <Container>
      <Header>
        <h1>Cygni</h1>
        <h4>Safely store and share your files</h4>
      </Header>
      <Panel>
        <Form onSubmit={handleSingIn}>
          <Input name="email" type="email" placeholder="E-mail" />
          <br />
          <Input name="password" type="password" placeholder="Password" />
          <h6>Forgot Password?</h6>
          <button type="submit">Login</button>
        </Form>
      </Panel>
    </Container>
  );
};

export default RightMainPanel;

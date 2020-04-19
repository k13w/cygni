import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Header, Panel  } from './styles';
import { Input } from '../Form/Input';

import { singInRequest } from '../../store/modules/auth/actions';

import { User } from '../../store/types';

const RightMainPanel: React.FC = () => {
  const dispatch = useDispatch();

  const handleSingIn: SubmitHandler<User> = async (data) => {
    dispatch(singInRequest(data));
  };

  return (
    <Container>
      <Header>
        <h1>Cygni</h1>
        <h4>Safely store and share your files</h4>
      </Header>
      <Panel>
        <Form onSubmit={handleSingIn}>
          <Input name="email" type="text" placeholder="E-mail" />
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

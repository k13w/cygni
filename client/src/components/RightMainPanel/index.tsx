import React from 'react';
import { useDispatch } from 'react-redux';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { Container, Header, Panel, NewUser  } from './styles';
import { Input } from '../Form/Input';

import ButtonLoader from '../UI/Animated/AnimatedButton';

import { singInRequest } from '../../store/modules/auth/actions';

import { User } from '../../store/types';

const RightMainPanel: React.FC = () => {
  const dispatch = useDispatch();

  const handleSingIn: SubmitHandler<User> = (data) => {
    dispatch(singInRequest(data));
  };

  return (
    <Container>
      <Header>
        <h1>Cygni</h1>
        <h4>Sing in</h4>
      </Header>
      <Panel>
        <Form onSubmit={handleSingIn}>
          <Input maxlength="50" name="email" type="email" placeholder="E-mail" />
          <br />
          <Input name="password" type="password" placeholder="Password" />
          <h6>Forgot Password?</h6>
          <ButtonLoader />
        </Form>
      </Panel>
      <hr />
      <NewUser>
        <h4>Novo na Cygni?</h4>
        <button>Criar sua conta da Cygni</button>
      </NewUser>
    </Container>
  );
};

export default RightMainPanel;

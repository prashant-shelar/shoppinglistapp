import React from 'react';
import { Container } from 'react-bootstrap';
import { TodoFooter } from './TodoFooter';
import { TodoInput } from './TodoInput';
import { TodoNavbar } from './TodoNavbar';

export const TodoContainer = () =>{
  return(<>
        <TodoNavbar />
        <Container>
        <TodoInput />
        <TodoFooter />
        </Container>
  </>) 
} 
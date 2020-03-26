import React, { Component } from 'react';
import '../styles/registration.css';
import RegisterForm from '../components/RegisterForm';
import Container from '@material-ui/core/Container';

export default class Registration extends Component {
  render() {
    return (
      <Container maxWidth='sm'>
        <div className='Registration'>
          <h2 className='Registration-title'>Create Account</h2>
          <hr></hr>
          <RegisterForm />
        </div>
      </Container>
    );
  }
}

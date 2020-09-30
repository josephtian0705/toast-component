import React from 'react';
import Toasts from './components/Toasts';
import {Container} from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Toasts />
      </Container>
    </div>
  );
}

export default App;

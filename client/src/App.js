import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      working
    </BrowserRouter>
  );
};

export default App;

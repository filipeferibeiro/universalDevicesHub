import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  

  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  )
}

export default App

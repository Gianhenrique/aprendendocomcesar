import React from 'react';
import Admin from './layout/Admin';
import GlobalStyled from './global'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <>
    <GlobalStyled />
    <BrowserRouter>
    <Admin />
    </BrowserRouter>
    
    </>

   
  );
}

export default App;

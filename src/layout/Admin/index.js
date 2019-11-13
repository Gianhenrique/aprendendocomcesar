import React from 'react';
import { Link } from 'react-router-dom'


import Routes from '../../Routes'

import { Container, Header, Sidebar, Main } from './styles';

export default function Admin() {




  return (
    <Container>
      <Sidebar>
        <div>
          <Link to="/"><h1> Home </h1></Link>
          <Link to="/list"><h1> Lista </h1></Link>
          <Link to="/create"><h1> Create </h1></Link>

        </div>

      </Sidebar>
      <Header></Header>
      <Main>
        <Routes></Routes>
      </Main>

    </Container>

  );
}

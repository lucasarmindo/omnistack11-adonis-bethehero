import React from 'react';

import { Container, IncidentList } from './styles';
import Header from '../../components/Header';
import Incident from '../../components/Incident';

export default function Profile() {
  return (
    <>
      <Container>
        <Header />
        <h1>Casos Cadastrados</h1>
        <IncidentList>
          <Incident />
          <Incident />
          <Incident />
          <Incident />
        </IncidentList>
      </Container>
    </>
  );
}

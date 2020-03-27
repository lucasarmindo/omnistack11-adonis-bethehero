import React from 'react';

import { FiTrash2 } from 'react-icons/fi';
import { Container } from './styles';
import { Colors } from '../../styles/colors';

export default function Incident() {
  return (
    <Container>
      <li>
        <strong>CASO:</strong>
        <p>Caso Teste</p>
        <strong>DESCRIÇÃO:</strong>
        <p>Descrição teste</p>
        <strong>VALOR:</strong>
        <p>R$ 120,00</p>
        <button type="button">
          <FiTrash2 size={20} color={Colors.grey} />
        </button>
      </li>
    </Container>
  );
}

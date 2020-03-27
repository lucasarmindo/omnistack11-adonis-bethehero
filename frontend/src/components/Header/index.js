import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';
import { Colors } from '../../styles/colors';

export default function Header() {
  return (
    <Container>
      <img src={logoImg} alt="Be The Hero" />
      <span>Bem vinda, APAD</span>
      <Link to="/incidents/new" className="button">
        Cadastrar novo caso
      </Link>
      <button type="button">
        <FiPower size={18} color={Colors.primary} />
      </button>
    </Container>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Container, SectionForm } from './styles';
import { Colors } from '../../styles/colors';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua Id" />
          <input type="password" placeholder="Sua Senha" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color={Colors.primary} />
            Não tenho cadastro
          </Link>
        </form>
      </SectionForm>
      <img src={heroesImg} alt="Heros" />
    </Container>
  );
}

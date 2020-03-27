import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, ContentWrap, Section, Form } from './styles';
import logoImg from '../../assets/logo.svg';
import { Colors } from '../../styles/colors';

export default function NewIncident() {
  return (
    <Container>
      <ContentWrap>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color={Colors.primary} />
            Voltar para home
          </Link>
        </Section>
        <Form>
          <input type="text" placeholder="Título do Caso" />
          <textarea type="email" placeholder="Descrição" />
          <input type="text" placeholder="Valor em reais" />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </ContentWrap>
    </Container>
  );
}
